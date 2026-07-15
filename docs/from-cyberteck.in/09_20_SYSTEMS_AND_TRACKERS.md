# CyberTeck.in - Systems, Core Security & Project Master Tracker
# Document: 09_20_SYSTEMS_AND_TRACKERS.md
# Consolidating documents 09 to 20 for full architectural review.

---

## 09_DATABASE_ARCHITECTURE.md
We utilize a relational paradigm where assets, vulnerabilities, alerts, and audit logs are securely recorded.
### Entity-Relationship Model:
1. **Users:** `id` (uuid), `email` (string), `role` (enum: Analyst, Admin, Auditor), `org_id` (uuid).
2. **Organizations:** `id` (uuid), `name` (string), `domain` (string).
3. **ThreatAlerts:** `id` (uuid), `severity` (enum: Critical, High, Info), `source` (string), `vector` (string), `timestamp` (datetime).
4. **ComplianceControls:** `id` (uuid), `framework` (enum: DPDP, CERT_In, RBI), `control_id` (string), `status` (enum: Compliant, Non-Compliant, In-Progress).

---

## 10_API_ARCHITECTURE.md
The platform uses server-side REST endpoints mounted in `server.ts` to coordinate real-time queries.
### Key Routes:
- `POST /api/gemini/copilot` - Streams prompt context with simulated logs and returns CISO assistance.
- `POST /api/assessment/submit` - Scores incoming questionnaires and returns a structured AI-grounded vulnerability assessment.
- `GET /api/threats/feed` - Returns real-time security alerts simulating a SOC environment.

---

## 11_AUTH_ARCHITECTURE.md
- **Access Control:** Role-Based Access Control (RBAC) separating Admin, Analyst, and Auditor.
- **MFA Flow:** Time-Based One-Time Password (TOTP) is recommended for all enterprise accounts.
- **Session Handling:** Secured via HTTP-Only cookies with JSON Web Tokens (JWT) or local secure sessions.

---

## 12_SECURITY_ARCHITECTURE.md
- **HTTP Headers:** Implementation of CSP (Content Security Policy), HSTS (Strict-Transport-Security), X-Content-Type-Options, and Referrer-Policy.
- **Secrets Management:** Environment secrets like `GEMINI_API_KEY` are stored strictly on the server and never sent to the frontend.
- **API Defense:** Express rate-limiting to prevent brute force on assessment and copilot routes.

---

## 13_SEO_MASTER.md
- **Metadata Structure:** Fully declared canonical links, custom meta descriptions for Indian cybersecurity target audiences, OpenGraph / Twitter Cards.
- **Structured Data:** Built-in JSON-LD schemas for `Organization`, `FAQPage`, and `Product` to boost discoverability.
- **Search Intent:** Direct optimization for terms like "DPDP Act compliance software", "Indian enterprise SOC", and "CERT-In auditor platform".

---

## 14_CONTENT_STRATEGY.md
- **Pillars:** Dynamic educational resources detailing security steps, compliance checklists, and guides for C-suite personnel to scale into CyberTeck OS.
- **Resource Repository:** Whitepapers, compliance templates, guides, and research publications.

---

## 15_COMPLIANCE_FRAMEWORK.md
- **DPDP Act (Digital Personal Data Protection Act):** Mapped consent controls, right to access, right to erase, and cross-border transfer records.
- **CERT-In (Indian Computer Emergency Response Team):** Incident report automation templates ready for 6-hour response compliance.
- **RBI Cyber Security Framework:** Mandatory MFA, identity logs, and fraud prevention indicators.

---

## 16_DASHBOARD_BLUEPRINT.md
- **Workspace Canvas:** Multi-pane grid showing threat maps, active security score dials, alerts logs, and an integrated Gemini AI Copilot console.
- **Interactions:** Interactive tabs, toggling metrics, filter systems, and custom download commands.

---

## 17_ADMIN_BLUEPRINT.md
- **Content CMS:** Simple management interface for articles, blogs, research whitepapers, and guides.
- **Security Control Panel:** Allows triggering simulated incidents or altering default compliance parameters.

---

## 18_DESIGN_TOKENS.md
Declared inside `src/index.css` under the `@theme` tailwind structure:
- `--font-sans`: `Inter`, sans-serif
- `--font-mono`: `JetBrains Mono`, monospace
- `--color-brand-cyan`: `#06B6D4`
- `--color-brand-blue`: `#3B82F6`

---

## 19_ANIMATION_GUIDE.md
We use `motion/react` to deliver highly refined transitions:
- Page routing transitions: Subtle fade-and-rise effect.
- Counters: Rising posture score counter.
- Interactive elements: Bouncing alerts and hover glowing icons.

---

## 20_PROJECT_TRACKER.md
| Milestone | Feature | Status | Completion % |
|---|---|---|---|
| M1 | Architectural Documentation | Completed | 100% |
| M2 | Full-Stack Server Configuration | In Progress | 10% |
| M3 | Frontend Router & Shell | In Progress | 0% |
| M4 | Enterprise Core Components | In Progress | 0% |
| M5 | CyberTeck OS Dashboard | In Progress | 0% |
| M6 | AI-Native Copilot & Assess System | In Progress | 0% |
| M7 | Polishing, Linting & Compile | In Progress | 0% |
