# CyberTeck OS Enterprise Security Standard (v2 Spec)

This document details the complete threat model, security controls, cryptographic standards, multi-tenant boundaries, and secure software development practices enforced across the **CyberTeck OS** platform.

---

## 1. THREAT MODELING & OWASP TOP 10 RISK MITIGATION

We analyze and mitigate vulnerabilities continuously based on the OWASP Top 10 framework and localized threat actors targeting Indian cloud infrastructures.

### A. Threat Model (STRIDE Framework)

| Category | Threat Definition | Platform Defensive Controls |
| :--- | :--- | :--- |
| **Spoofing** | Attacker impersonates an enterprise administrator or analyst. | - Forced Phishing-Resistant MFA (FIDO2 Keys).<br>- Strict JWT signature validation with RS256.<br>- Device posture checks. |
| **Tampering** | Unauthorized modification of compliance logs or threat feeds. | - Cryptographic audit ledgers.<br>- Column-level database checksums.<br>- S3 Write-Once-Read-Many (WORM) storage for logs. |
| **Repudiation**| User claims they did not perform a critical action (e.g., threat isolation). | - Monospace monologging capturing immutable system events.<br>- Direct user mapping with digital signatures. |
| **Information Disclosure** | Data leakage of citizen PII or internal network topologies. | - Mandatory server-side proxying of all API keys.<br>- AES-256 encryption at rest.<br>- Automated data masking of PII in telemetry logs. |
| **Denial of Service** | DDoS probes exhaust API gateways, blocking SOC response capabilities. | - Cloudflare Enterprise rate limiting and DDoS scrubbing tunnels.<br>- Redis sliding-window limiters. |
| **Elevation of Privilege** | A "Viewer" escalates their session to issue active mitigation commands. | - Strict role-based access control (RBAC) middleware.<br>- Direct tenant context checks inside database transactions. |

### B. OWASP Top 10 Mitigation Matrix

1.  **A01:2021-Broken Access Control**: Every database query enforces Row-Level Security (RLS) filtering on `organization_id`. We never query assets without asserting the tenant context from the validated user session.
2.  **A03:2021-Injection (SQLi & Log Injection)**: We use **Prisma ORM** for all transactional operations, compiling queries into parameterized statements. System audit log fields are sanitized to block carriage-return log injection.
3.  **A05:2021-Security Misconfiguration**: All production environments require secure HTTP headers (HSTS, CSP, X-Frame-Options) served directly by Nginx and Express middleware. Development configurations (such as HMR websockets) are strictly disabled in production builds.
4.  **A08:2021-Software and Data Integrity Failures**: Production builds use cryptographically pinned npm package dependencies (`package-lock.json`).

---

## 2. CRYPTOGRAPHIC STANDARDS & DATA TRANSIT

CyberTeck OS guarantees state-of-the-art cryptographic strength for data both in transit and at rest.

### A. Encryption in Transit
*   **Protocols**: Enforces **TLS 1.3** exclusively. Legacy TLS 1.0, 1.1, and 1.2 handshakes are rejected at the edge proxy level.
*   **Ciphers**: Restricted to AEAD-only suites (e.g., `TLS_AES_256_GCM_SHA384` and `TLS_CHACHA20_POLY1305_SHA256`).
*   **HTTP Strict Transport Security (HSTS)**: Active for all subdomains with `max-age=31536000; includeSubDomains; preload`.

### B. Encryption at Rest
*   **Storage Cryptography**: PostgreSQL storage blocks, cloud-object archives, and backup tapes are encrypted using **AES-256-GCM** managed keys.
*   **Column-Level Encryption**: Sensitive credentials, API keys, and corporate access tokens are salted and encrypted at the application layer using Node's `crypto` module before database insertion.

### C. JWT & Session Security
*   **Token Strategy**: Split JWT structure.
    *   *Access Token*: Short-lived (`15 minutes`), stored in-memory.
    *   *Refresh Token*: Long-lived (`7 days`), stored in an `HttpOnly`, `Secure`, `SameSite=Strict` cookie, mapped directly to active database sessions.
*   **Signature Algorithm**: RS256 (RSA Signature with SHA-256). Private keys are stored in a secure secret manager and rotated automatically every 90 days.

---

## 3. TENANT ISOLATION & ACCESS CONTROL (RBAC)

We operate under a strict **SaaS Multi-Tenant Architecture** to protect organizational boundaries.

### A. Tenant Isolation Boundary
1.  **Row-Level Security (RLS)**: The underlying database tables map to an `Organization` model. Each operational query must specify:
    `WHERE organization_id = ? AND is_deleted = false`
2.  **API Authorization**: Custom middleware intercepts every request, validates the JWT payload, and binds the authorized `tenantId` to the request context object (`req.tenantId`).

### B. Role-Based Access Control (RBAC) Roles

We define six strict corporate roles:

| Role Name | Scope Description | Allowed Actions |
| :--- | :--- | :--- |
| **Admin** | Full instance ownership. | Complete user management, Billing access, Global controls. |
| **Org Admin** | Tenant-specific organizational manager. | Invite users, manage internal configurations, configure custom API keys. |
| **Security Engineer** | Threat hunter and network responder. | Trigger test alerts, execute incident mitigations, quarantine assets. |
| **Compliance Officer**| Regulatory lead and data privacy manager. | Modify compliance control statuses, compile audits, consult Copilot. |
| **Auditor** | Third-party external reviewer. | Read-only access to compliance matrices, audit logs, and reports. |
| **Viewer** | Standard team member. | Read-only access to high-level dashboards, no mitigation actions. |

---

## 4. LLM SECURITY & PROMPT INJECTION MITIGATION

Because CyberTeck OS incorporates an advanced **AI Copilot**, protecting the LLM boundary is critical.

1.  **System Prompt Pinned Boundary**: System prompts are never exposed or concatenated inside the client-side code. They are executed exclusively within a server-side route handler using environment variables (`GEMINI_API_KEY`).
2.  **Input Sanitation & Guardrails**: User queries directed to `/api/gemini/copilot` undergo server-side validation to block adversarial inputs (e.g., "ignore previous instructions", "reveal system prompts").
3.  **Retrieval-Augmented Grounding (RAG)**: The LLM does not have direct query access to the database. Grounding context (such as active threat feeds) is filtered first in Node.js based on the user's validated `organization_id` before being passed to the AI engine. This prevents cross-tenant data leakage via the LLM.

---

## 5. REVERSE PROXY, CSP, & SECURE HEADERS

All responses served by the platform include robust security headers.

### A. Content Security Policy (CSP)
```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://referrer.referer.com; connect-src 'self' https://api.google.com; frame-ancestors 'none'; object-src 'none';
```

### B. Additional Secure Headers
*   `X-Frame-Options: DENY` (Mitigates Clickjacking)
*   `X-Content-Type-Options: nosniff` (Mitigates MIME-sniffing)
*   `Referrer-Policy: strict-origin-when-cross-origin` (Protects query strings)
*   `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Blocks browser device access)

---

## 6. INCIDENT RESPONSE & COMPLIANCE ALIGNMENT

Our incident response protocols ensure immediate alignment with Indian statutory timelines.

### A. CERT-In 6-Hour Reporting Runbook
Under current CERT-In directions, critical security incidents (ransomware, database exfiltration, credential harvesting) must be reported within **6 hours** of first detection.
1.  **Automation**: Upon detecting a high-priority threat (e.g., APT IP scanning), CyberTeck OS flags the incident, archives the associated telemetry packets, and alerts the Security Engineer team via webhook.
2.  **Report Drafting**: The compliance portal packages the diagnostic logs and triggers the AI Copilot to automatically compile a standard draft ready for submission to `incident@cert-in.org.in`.

### B. DPDP Act (2023) Breach Notification
In the event of a personal data breach:
1.  **DPBI Notification**: The system compiles the affected user counts, consent registries, and mitigation activities.
2.  **Citizen Alerts**: Triggers notification queues to alert affected data principals of the breach, outlining security steps and active contact numbers for resolution.
