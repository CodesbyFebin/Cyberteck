# PAGE_BLUEPRINTS.md — CyberTeck OS Platform Blueprints

This document details the layout, section architectures, content maps, and interface definitions for the primary views of the **CyberTeck OS** platform. It provides high-fidelity specifications for frontend engineers to implement pixel-perfect, highly responsive, and accessible interfaces.

---

## 1. THE HOME PAGE (Sovereign Landing)

The Home Page acts as the primary acquisition vector for CyberTeck.in, combining high-contrast visual display, trust-building social proof, and a highly structured deep-dive into platform capabilities. It uses a desktop-first modular layout transitioning into a fluid, touch-optimized mobile experience.

### A. Modular Section Architecture

| Order | Section | Visual Pattern | Core Functional/Interactive Goals |
| :--- | :--- | :--- | :--- |
| **01** | **Hero & Telemetry Stage** | Ambient dark backdrop with a centered display header, typography pairing, and an interactive simulated HUD showing active threats & automated compliance scores. | Instantly establish authoritative security tone. Offer direct, dual-call-to-action (CTA) paths: "Access OS Console" vs. "Book Assessment". |
| **02** | **Trust Bar & Marquee** | Infinite CSS linear translation marquee running at `25s` duration. High-contrast monochromatic logos of Indian banking, government, and technology nodes. | Establish enterprise credibility. Show logos of partners like Reserve Bank of India (RBI) sandbox nodes, CERT-In aligned SOCs, and leading digital enterprise systems. |
| **03** | **Platform Overview (The Sovereign Moat)** | High-contrast 3-column feature grid using card frames with subtle cybernetic line borders and active neon corner anchors. | Detail why CyberTeck exists: sovereign data localized to Mumbai cloud servers, native training on Indian infrastructure, and sub-minute response times. |
| **04** | **10 Security Pillars** | Interactive tabbed grid or a bento-style explorer. Clicking a pillar highlights its functional output, security impact, and automated containment protocol. | Show absolute exhaustiveness. Detail pillars 1 to 10 covering identity, cloud, IAM, compliance, threat intel, and operations. |
| **05** | **Compliance Coverage** | Dynamic compliance framework selector cards. Swapping between cards (DPDP, CERT-In, RBI, SEBI, ISO) displays statutory exposure, penalties, and audit readiness tasks. | Trigger administrative awareness. Emphasize the ₹250 Cr DPDP statutory penalty and the mandatory 6-hour CERT-In incident report timeframe. |
| **06** | **Industries We Secure** | Tabbed or card layout showing vertical-specific integrations (BFSI, Sovereign Government, Fintech Platforms, Healthcare Conglomerates). | Tailor the solution to distinct enterprise buyers (CISOs of banks vs. Directors of government centers). |
| **07** | **Platform Features** | High-fidelity interactive UI mockups representing real-time telemetry tracing, behavioral user anomaly scoring, and automated firewalls. | Highlight the technical capabilities with a deep focus on speed, visibility, and automation. |
| **08** | **Research & Intelligence** | Stream of active threat vulnerability tracking reports, zero-day threat bulletins, and threat-actor profile catalogs. | Demonstrate deep domain authority in security research (e.g., tracking APT groups targeting APAC). |
| **09** | **Sovereign Case Studies** | Comprehensive split-screen layouts featuring real-world challenge-solution-impact narratives (e.g., "Securing a major payment gateway against multi-vector DDoS"). | Prove operational execution with hard, quantifiable outcomes (e.g., "99.98% uptime, 0 successful breaches during peak festival trading"). |
| **10** | **Executive Testimonials** | Clean card layout featuring prominent quotes, corporate signatures, verified LinkedIn links, and credential badges. | Humanize the enterprise trust with direct CISO-to-CISO endorsements. |
| **11** | **Resource Hub (Quick Link Matrix)** | Grouped lists of deep-dive tutorials, system whitepapers, legal guides, and API integration manuals. | Enable self-directed learning paths for both engineering leads and legal compliance officers. |
| **12** | **Latest Blog Feed** | Grid of 3 recent publications containing metadata (author, reading time, date), tags, and animated reading indicators. | Maintain persistent search engine presence and continuous indexing via rich topic clusters. |
| **13** | **Sovereign Security Newsletter** | Centered minimalist card layout containing input field and subscription button. | Capture non-sales outbound contacts and warm compliance prospects. |
| **14** | **Final Sovereign CTA** | High-energy, immersive full-width dark visual card containing a localized gravity-well background and dual high-priority CTAs. | Drive terminal user conversion: "Configure Sandbox OS" and "Request Audit Proposal". |
| **15** | **Platform Footer** | 5-column comprehensive navigation links with explicit accessibility anchors, copyright, localized language selectors, and regulatory notices. | Ensure absolute navigation clarity, legal compliance, and total structural completeness. |

---

### B. Detailed Section Blueprint - Home Page

#### 01. Hero & Telemetry Stage
*   **Typography Pairing:** "Inter" (Display, Bold, tracking-tight, 700) for headers; "Inter" (Regular, 400) for body description; "JetBrains Mono" (Medium, 500) for system telemetry HUD values.
*   **Aesthetic Details:** Solid dark canvas background (`#020617`). A subtle cyan gradient glow (`#06B6D4` at 5% opacity) centers the view. A subtle grid pattern overlays the background.
*   **Interactive HUD Mockup:** A simulated workspace dashboard that updates values dynamically (e.g., simulating 1,240 inbound network packets, 0 breached records, active security score dial pulsing at 98/100).
*   **Primary Action (CTA 1):** Button with solid gradient fill (Cyan `#06B6D4` to Royal Blue `#2563EB`), text "Access OS Console" (view: `dashboard`).
*   **Secondary Action (CTA 2):** Outline button with cyan border and subtle glow, text "Book Free Posture Assessment" (view: `book-assessment`).

#### 02. Trust Bar & Marquee
*   **Aesthetic Details:** Height `80px`. Framed with thin horizontal borders (`border-slate-900`). Overlaid with semi-transparent background (`bg-slate-950/80` with `backdrop-blur-sm`).
*   **Marquee Motion:** Runs continuously without visual jumpiness. Content is duplicated to ensure seamless looping. Uses CSS keyframe `@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }`.
*   **Partnership Logos:** Monochromatic gray logos of major Indian entities (e.g., "Sovereign Banking Nodes", "Sovereign Defense Systems", "Mumbai Tech Hubs", "Indian Cloud Nodes") that shift to neon cyan on hover.

#### 03. Platform Overview (The Sovereign Moat)
*   **Aesthetic Details:** 3-column card grid. Cards are styled with `bg-slate-900/40`, `border-slate-800`, and feature a fine cyan indicator line at the top edge.
*   **Interactive Element:** Hovering on a card triggers a subtle translation upwards (`-translate-y-1`) and changes the border color to a high-contrast cyan (`border-cyan-500/40`).
*   **Content Modules:**
    1.  *Mumbai Data Residency:* Real-time localized database operations ensuring absolute alignment with DPDP localized hosting rules.
    2.  *Continuous Threat Isolation:* Autonomous response modules that isolate attacking IP subnets within 45 seconds of first threat detection.
    3.  *Boardroom Risk Mapping:* Translates complex firewall logs into simplified executive risk scores (0-100) for non-technical leadership.

#### 04. 10 Security Pillars
*   **Aesthetic Details:** Split layout. Left column features a vertical list of the 10 Pillars (with active indicators). Right column displays the detail card of the active pillar (with its description, metrics, and security impact).
*   **Pillars List:**
    1.  *Identity Security & Zero Trust:* Active user session verification.
    2.  *AI Cloud Security:* Continuous multi-cloud drift monitoring.
    3.  *AI-Native IAM:* Automated joiner-mover-leaver role administration.
    4.  *AI-Native Compliance:* Automated audit-evidence package compilation.
    5.  *Threat Intelligence:* Scans dark web threat catalogs dynamically.
    6.  *AI-SOC Console:* Consolidates firewall logs into an autonomous panel.
    7.  *Threat Hunting:* Proactive, continuous simulated attack campaigns.
    8.  *SecOps Orchestration:* Integrates vulnerability scanning into CI/CD pipelines.
    9.  *AI-Native Risk Advisory:* Computes financial impact mapping of active risks.
    10. *Governance & Policy (GPC):* Central mapping of disparate regulatory frameworks.

#### 05. Compliance Coverage
*   **Aesthetic Details:** Tabbed selector for DPDP, CERT-In, RBI, SEBI, and ISO.
*   **Content Highlight:** Swapping to *DPDP Act (2023)* displays a bold alert: "FAILURES RESULT IN STATUTORY FINES UP TO ₹250 CRORES". List of compliant checks is dynamically displayed in a progress bar.
*   **Call-to-Action:** Direct link to "Initiate Regulatory Alignment Audit" leading directly to the `book-assessment` workspace.

#### 06. Industries We Secure
*   **Aesthetic Details:** High-contrast layout with split columns. Displays detailed integration protocols for four industries:
    1.  *BFSI (Banking & Finance):* Strict RBI compliance, phishing-resistant MFA, active database quarantines.
    2.  *Sovereign Government Nodes:* Zero-trust access controls, local hosting, multi-tenant air-gapped nodes.
    3.  *Fintech & E-Commerce:* SEBI alignments, sub-second API request filtering, tokenized vault security.
    4.  *Healthcare Conglomerates:* Citizen medical record protection, localized secure file lockers.

#### 07. Platform Features
*   **Visual Pattern:** Side-by-side split screen. Left side lists interactive tabs ("Dynamic Telemetry Tracking", "Behavioral User Scoring", "Instant Network Remediations"). Right side shows a detailed high-fidelity mockup of the active platform UI.
*   **Interactive States:** Clicking an interactive tab updates the mock dashboard image on the right side with a brief fade-in transition (`motion` fade and slide).

#### 08. Research & Intelligence
*   **Visual Pattern:** 3-column feed showing CyberTeck's continuous vulnerability scanning outputs. Includes security bulletins (e.g., "Critical Zero-Day patch for local API Gateways").
*   **Metadata Tags:** "Severity: Critical", "Date: 2026-07-08", "Author: CyberTeck Labs". Includes a button to download the research paper.

#### 09. Sovereign Case Studies
*   **Visual Pattern:** Carousel or scrollable grid of case study cards.
*   **Highlighted Story:** "Securing a top payment node with CyberTeck OS." Showcases a clear layout highlighting *Challenge* (handling 2B+ daily queries under persistent DDoS probes), *Solution* (autonomous IP sub-net quarantine), and *Impact* (99.98% uptime, 100% RBI audit readiness verified).

#### 10. Executive Testimonials
*   **Aesthetic Details:** Card layouts with transparent borders and subtle grey shadow. Prominent quotes from verified CISOs and compliance officers.
*   **Trust Anchors:** Verified LinkedIn icons, corporate signature blocks, and corporate logo watermarks behind the text.

#### 11. Resource Hub
*   **Visual Pattern:** List-based navigation matrix grouped by user persona:
    - *For CISOs:* "DPDP Regulatory Cost Impact Map", "Continuous Posture Assessment Guides".
    - *For Engineers:* "CyberTeck API Integration Manuals", "Deploying SOC Telemetry Sidecars via Docker".
    - *For Compliance Officers:* "CERT-In 6-Hour Reporting Templates", "RBI Audit Evidence Checklist".

#### 12. Latest Blog Feed
*   **Visual Pattern:** Grid of 3 post cards with modern hover scaling effects.
*   **Blog Examples:** "Navigating India's DPDP Act: A Practical Guide for CTOs", "Securing API Endpoints Against Injection Scans". Includes author photo, name, and reading length indicator (e.g., "5 min read").

#### 13. Sovereign Security Newsletter
*   **Aesthetic Details:** Full-width dark cyan card with centered input.
*   **Content:** "Subscribe to Sovereign Threat Briefings." Deliver weekly CISO bulletins directly to inboxes. Simple email form with validation.

#### 14. Final Sovereign CTA
*   **Aesthetic Details:** Solid deep slate banner with an interactive radial background.
*   **Content:** "Secure your enterprise core with CyberTeck OS today." Dual CTA buttons to convert prospects immediately.

#### 15. Platform Footer
*   **Aesthetic Details:** Structured 5-column layout. Links mapped to Home, Solutions, Compliance, Resources, Company, and Support.
*   **Compliance Elements:** Dedicated links to "Privacy Policy (DPDP Aligned)", "Terms of Use", "Sitemap", "System Status (99.98% Operational)". Mapped to Mumbai corporate coordinates.

---

## 2. THE ENTERPRISE DASHBOARD COCKPIT (SaaS UI)

The Enterprise Dashboard is a modular, high-density telemetry terminal designed for continuous security monitoring, real-time threat hunting, and automated compliance auditing.

### Modular Widget Architecture

```
+-------------------------------------------------------------------------------------------------------------------+
|  [COCKPIT HEADER]  Enterprise Workspace Console: BKC-1 Datacenter              [SYNC STATUS: ONLINE] [SYNC TELEMETRY] |
+----------------------------------------------------+--------------------------------------------------------------+
|                                                    |                                                              |
|  [WIDGET 1: RISK POSTURE SCORE]                    |  [WIDGET 3: CENTRAL THREAT FEED]                             |
|  Score: 98/100  [● SECURE STATUS]                  |  Live timeline of detected anomalies and malicious scans.    |
|  Pulsing visual posture ring gauge.                |                                                              |
|                                                    |  Threats list with active mitigation controls:               |
|  +----------------------------------------------+  |  - ID: TRT-402 | Vector: SQLi Probe | Severity: CRITICAL     |
|  | [WIDGET 2: REGULATORY MATRIX COMPLIANCE]     |  |   [ACTION: MITIGATE & ISOLATE]                             |
|  | DPDP Act (2023)  | 75%  | [compliant]        |  |  - ID: TRT-211 | Vector: DDoS Probe | Severity: HIGH         |
|  | CERT-In Mandate  | 100% | [compliant]        |  |   [ACTION: ISOLATED & REMEDIATED]                          |
|  | RBI Cyber Sec    | 33%  | [non-compliant]    |  +--------------------------------------------------------------+
|  | ISO 27001 ISMS   | 100% | [compliant]        |                                                              |
|  +----------------------------------------------+  |  [WIDGET 4: AUDIT EVENT LOGS]                                |
|                                                    |  Chronological ledger of user and administrative actions:    |
|  [WIDGET 5: FRAMEWORK SEGMENTATION]                |                                                              |
|  Sub-controls detailing operational checks.        |  - 18:44:43 | admin@cyberteck.in | Triggered Threat          |
|                                                    |  - 18:40:12 | admin@cyberteck.in | Modified Compliance status|
|                                                    |                                                              |
+----------------------------------------------------+--------------------------------------------------------------+
```

### Detailed Widget Blueprint - Dashboard Cockpit

#### W1: Risk Posture Score Gauge
*   **Aesthetic Details:** Left aligned card. Centered is a circular SVG progress track dial showing active security rating. Color shifts dynamically (Emerald for score $\ge 85$, Amber for $70-84$, Red for $<70$).
*   **Telemetry Details:** Uses dynamic calculation: `Math.max(30, 98 - (criticalCount * 12) - (highCount * 5))`.
*   **System Indicators:** Displays text indicator like `● HIGH RISK EXPOSURE` or `● SECURE STATUS` pulsing in step with active threats.

#### W2: Regulatory Matrix Compliance
*   **Aesthetic Details:** Highly structured list. Each row corresponds to a major Indian framework (DPDP, CERT-In, RBI, ISO).
*   **Interactive Elements:** Clicking a compliance row status toggles its operational auditing state (e.g., swapping from `compliant` to `non-compliant` or `in-progress`).
*   **Logging Synchronization:** Any status shift automatically logs a success action in W4 (Audit Event Logs) with administrative user mapping (`admin@cyberteck.in`).

#### W3: Central Threat Feed
*   **Aesthetic Details:** High-priority, live operational security event stream.
*   **Risk Vector Indicators:** Critical/High severity incidents feature red/amber highlight panels with pulsing alert beacons.
*   **Interactive Action Button:** Clickable `Mitigate & Isolate` button on active threats. Triggering the action updates the threat state to `mitigated` and updates the global security score in real-time.
*   **Simulated Incidents:** "Trigger Test Alert" modal allows engineers to inject custom security simulations (e.g., custom attack vector, severity levels, attacker IP) straight into the active stream.

#### W4: Audit Event Logs
*   **Aesthetic Details:** Terminal-style raw monospaced text ledger (`font-mono`).
*   **Data Layout:** Grid columns presenting Timestamp, Corporate User Email, Operational Action, and Status.
*   **Operations:** Records all system events, manual alert mitigations, status updates, and AI consultation queries chronologically.

#### W5: Framework Segmentation
*   **Aesthetic Details:** Secondary tab layout showing sub-controls and detailed regulatory audits.
*   **Content:** Lists distinct statutory clauses (e.g., DPDP Section 8(5) "Data Safeguards", RBI FinSec 4.2 "Admin Console MFA", ISO A.12.6.1 "Technical Vulnerability scans"). Includes interactive toggle switches to modify control compliance status dynamically.
