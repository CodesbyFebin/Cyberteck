# CyberTeck OS Enterprise Architecture Blueprint (v2 Production Spec)

This document outlines the authoritative, production-grade systems architecture, topology boundaries, request lifecycles, and future deployment scaling targets for **CyberTeck OS**.

---

## 1. VISION

CyberTeck OS is designed as a sovereign, high-density, AI-Native enterprise cybersecurity and automated compliance SaaS platform. It enables financial institutions (BFSI), sovereign government nodes, fintech platforms, and critical conglomerates in India to monitor security telemetry, hunt threats in real-time, and enforce compliance with Indian cyber laws (e.g., DPDP Act 2023, CERT-In, RBI directions, SEBI regulations) alongside international standards (ISO 27001, NIST CSF).

The core technical philosophy prioritizes:
1.  **Data Sovereignty**: Complete alignment with localized hosting requirements using secure cloud nodes in the Mumbai region.
2.  **Autonomous Incident Mitigation**: Sub-minute container/IP isolation triggered by continuous behavioral analytics.
3.  **Audit-Evidence Automation**: Turning live platform logging into forensically verified audit packages.
4.  **AI-First Grounding**: Using localized LLMs (via secure Gemini API channels) to deliver contextual recommendations without data leakage.

---

## 2. HIGH-LEVEL ARCHITECTURE

CyberTeck OS transitions from a full-stack monolith to a highly resilient distributed services topology. Below is the multi-layered functional map of the platform:

```
+-------------------------------------------------------------------------+
|                         REACTION & VIEW PORTAL LAYER                    |
|  - Next-Gen React Dashboard Console (Vite Single Page Application)     |
|  - Real-Time SVG posturing, live canvas telemetry, and unified cockpit |
+-------------------------------------------------------------------------+
                                    |
                                    v (TLS 1.3 / JSON API / WebSockets)
+-------------------------------------------------------------------------+
|                         REVERSE PROXY & GATEWAY LAYER                  |
|  - Cloudflare Enterprise WAF / Rate Limiter & Nginx Ingress Controller |
|  - TLS Termination, JWT Decryption, and Organization Context Routing   |
+-------------------------------------------------------------------------+
                                    |
         +--------------------------+--------------------------+
         | (Private Network VPC)                               |
+--------v---------------------------------+ +-----------------v-------------------------+
|         CORE APPLICATION BACKEND         | |          THREAT INTELLIGENCE SERVICE        |
|  - Express / Node.js Service Engines     | |  - Automated indicator mapping engine      |
|  - Auth.js Session & RBAC Middleware     | |  - Feed providers: MITRE ATT&CK, NVD, KEV   |
|  - Prisma ORM Data Mapping Tier         | |  - IP Reputations & active telemetry scans  |
+------------------------------------------+ +-------------------------------------------+
         |                                                     |
         +--------------------------+--------------------------+
                                    |
+-----------------------------------v-------------------------------------+
|                      SOVEREIGN COMPLIANCE ENGINE                        |
|  - Control Library Mapper (DPDP Section 8(5), CERT-In 6h, RBI FinSec)   |
|  - Audit-Evidence Logging Pipeline & Automated Findings Generator       |
+-------------------------------------------------------------------------+
                                    |
         +--------------------------+--------------------------+
         |                                                     |
+--------v---------------------------------+ +-----------------v-------------------------+
|               AI COPILOT ENGINE          | |            NOTIFICATION ENGINE            |
|  - Server-Side Gemini API Proxy          | |  - Event-driven notifications (Webhooks) |
|  - Thinking Mode Grounded Context        | |  - Slack, MS Teams, Email, SMS Gateways   |
+------------------------------------------+ +-------------------------------------------+
                                    |
                                    v (Internal VPC Connections)
+-------------------------------------------------------------------------+
|                        PERSISTENT DATA PLATFORMS                        |
|  - Cloud SQL PostgreSQL: Relational DB (Prisma Schema, Multi-Tenancy)   |
|  - Redis Cache Cluster: Session states, rate limiters, active threat cache |
|  - Encrypted Cloud Storage: Immutable forensic log archives, CSV exports|
+-------------------------------------------------------------------------+
```

### Components Description

*   **Frontend**: Built using React 19, TypeScript, Vite, and styled with Tailwind CSS. Incorporates `motion/react` for smooth interactions. Accesses backend endpoints over TLS 1.3.
*   **Backend**: Node.js core running Express. Implements Auth.js for unified credential, OAuth (Google/GitHub/Azure AD), and session tracking. Uses Prisma ORM to interact with the transactional database.
*   **Database**: Cloud SQL PostgreSQL instance acting as the multi-tenant sovereign relational database. Implements Row-Level Security (RLS) policies at the database tier for strict organizational isolation.
*   **Authentication**: Core auth handled via JWTs and encrypted sessions managed securely using HttpOnly cookies with `SameSite=Strict` and `Secure` headers.
*   **Threat Intelligence Engine**: Gathers IOCs (Indicators of Compromise), vulnerability mappings, and MITRE tactics. Feeds into active threat analyzers.
*   **Compliance Engine**: Maps technical controls directly to statutory frameworks. Generates exceptions, risk registers, and automated CISO evidence bundles.
*   **AI Copilot**: Proxies requests securely to the Gemini API (using `models/gemini-3.5-flash` or `models/gemini-3.1-pro-preview` with High Thinking) using server-side environment variables (`GEMINI_API_KEY`).
*   **Notification Service**: Handles standard SMTP, SMS, and developer webhook channels. Underpinned by an asynchronous queuing library.
*   **Search**: Fully-indexed local search over compliance frameworks, security logs, and resource directories.
*   **Analytics**: Computes real-time threat counts, compliance ratios, and security posture ratings dynamically based on telemetry events.
*   **Logging**: Monospace system terminal audit logs capturing all user-level and machine-level interactions.
*   **Monitoring**: Integrates health metrics, Prometheus scraping targets, and alert trigger parameters.

---

## 3. SERVICE BOUNDARIES & DATA FLOW

The platform enforces strict encapsulation across service nodes. Each service communicates either via well-typed REST APIs or internal RPC layers inside a secure VPC.

### Request Lifecycle Example

To illustrate, we outline the exact lifecycle of an **Incident Mitigation Action**:

```
[SecOps Analyst] 
       | 
       | (POST /api/threats/mitigate { id: "TR-5021" })
       v
 [Cloudflare WAF]  ---> (Checks Rate-Limit, CSRF Token & TLS 1.3 Validation)
       | 
       v
 [Express Web Server]
       | ---> [Session Middleware]: Decodes JWT Session Cookie, verifies "admin@cyberteck.in"
       | ---> [RBAC Middleware]: Checks User role has 'Security Engineer' or 'Admin' permissions
       |
       v
 [Core Threat Engine]
       | ---> Begins database Transaction via Prisma
       | ---> Queries Threat with ID "TR-5021" (Asserts organization_id matches logged-in user)
       | ---> Updates threat status to "mitigated" and saves actionTaken context
       | ---> Inserts an Immutable AuditLog entry mapping user, timestamp, and action
       |
       +---> [Async Event Dispatch]: Sends 'threat.mitigated' event to Event Bus
       |
       +---> [Database Commits]
       v
 [Audit Event Logs Widget] <--- (Server responds with 200 OK & updated threat payload)
```

### Caching Strategy

1.  **Session Cache**: Active sessions are cached in Redis for `15 minutes` to avoid continuous round-trip hits on the main database.
2.  **Compliance Metadata**: Statutory documentation (DPDP rules, SEBI controls) is static and stored in Redis memory cache indefinitely, clearing only upon explicit admin reload.
3.  **Rate Limiter**: IP-based sliding window rate limiters are cached in Redis to instantly drop scraping or brute-force requests at the gateway level.

### Background Workers & Event Bus

The core application avoids executing expensive analytical computations (e.g., compiling audit-ready compliance evidence bundles or querying massive CVE databases) inside the main thread.
*   **Event Bus**: Powered by a robust redis-backed message broker.
*   **Worker Pool**: Dedicated Node.js processes subscribe to job queues (e.g., `evidence-compilation`, `threat-intel-refresh`, `incident-notification`). This ensures API response latency remains sub-50ms under peak loads.

---

## 4. SYSTEM DEPLOYMENT ARCHITECTURE

### Sovereign Kubernetes Architecture (Future Projection)

To scale CyberTeck OS to thousands of concurrent Indian enterprises, the application maps to a cloud-managed Kubernetes cluster (e.g., Google Kubernetes Engine (GKE) or AWS EKS) located entirely within the **Mumbai (`asia-south1`)** cloud region.

```
                  +----------------------------------------------+
                  |         MUMBAI REGION (asia-south1)          |
                  +----------------------+-----------------------+
                                         |
                       +-----------------v-----------------+
                       |     Ingress Controller (Nginx)    |
                       +-----------------+-----------------+
                                         |
         +-------------------------------+-------------------------------+
         |                               |                               |
+--------v--------+             +--------v--------+             +--------v--------+
|   POD GROUP A   |             |   POD GROUP B   |             |   POD GROUP C   |
|   cyberteck-web |             |  cyberteck-api  |             |  cyberteck-jobs |
| (React Frontend |             | (Express Server |             |  (BullMQ Workers|
|    Static SPA)  |             |  REST API Nodes)|             | Background Task)|
+-----------------+             +-----------------+             +-----------------+
```

### Multi-Region Storage & Data Replication Target

*   **Primary Database Tier**: Master Cloud SQL PostgreSQL instance residing in **Mumbai Zone A (`asia-south1-a`)**.
*   **High-Availability Read Replica**: Multi-zone replication to **Mumbai Zone B (`asia-south1-b`)** to ensure seamless failover in under 10 seconds.
*   **Sovereign Data Storage**: All customer compliance reports, database logs, and attachments are archived on encrypted, localized Cloud Storage Buckets with immutable policies (WORM - Write Once, Read Many) to comply with regulatory security forensic audits.

---

## 5. MICROSERVICE SPLIT PLAN

As the enterprise core scales, the monolith divides into five distinct microservices:

1.  **Identity & IAM Service (`cyberteck-auth`)**: Manages RBAC, federated corporate directory syncs (SAML/OIDC), API key generations, and user session lifecycles.
2.  **Threat Intelligence Service (`cyberteck-threat-intel`)**: Dedicated intelligence ingest process mapping IOC feeds, CVE matrices, and tracking APT actor profiles dynamically.
3.  **Sovereign Compliance & Auditor (`cyberteck-compliance`)**: Handles framework policy storage, parses posture events, compiles audits, and archives cryptographically signed audit packages.
4.  **AI Copilot Gateway (`cyberteck-copilot`)**: Secure proxy wrapper handling Gemini API interactions, managing context limits, enforcing safety thresholds, and logging chat dialogues for security analysis.
5.  **Telemetry Ingress (`cyberteck-ingress`)**: Highly scalable stream-processing entry point (built using Go or Fastify) capable of ingesting millions of syslog network packets per minute without throttling.
