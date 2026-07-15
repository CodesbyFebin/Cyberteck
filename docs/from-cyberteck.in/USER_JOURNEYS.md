# USER_JOURNEYS.md — CyberTeck OS Key User Journeys

This document outlines the user personas, key operational journeys, critical touchpoints, and potential friction points across the **CyberTeck OS** platform. It ensures our interface structures align perfectly with real-world enterprise workflows.

---

## PERSONA 1: THE CISO (Chief Information Security Officer)
*“I need to understand our overall risk exposure in seconds and justify our compliance investments directly to the board.”*

### A. Journey Map: executive Posture Assessment & Reporting

```
+------------------+     +-------------------+     +------------------+     +-------------------+
|  01. ACQUISITION | --> | 02. ASSESSMENT    | --> | 03. CALCULATION  | --> | 04. REMEDIATION   |
| Discovers site,  |     | Launches form,    |     | Instant score    |     | Downloads report, |
| lands on Home    |     | enters profiles,  |     | computed, maps   |     | presents advice   |
| page, hits CTA   |     | maps requirements |     | direct penalties |     | to stakeholders   |
+------------------+     +-------------------+     +------------------+     +-------------------+
```

### B. Step-by-Step Actions
1.  **Discovery:** Lands on CyberTeck.in from organic search (e.g., querying "India DPDP compliance guide") or direct social channels.
2.  **Engagement:** Reads the visual overview, validates the trust indicators (marquee, banking partnerships), and explores the 10 Security Pillars.
3.  **Auditing:** Clicks "Book Free Posture Assessment" (navigates to `/book-assessment`).
4.  **Information Entry:** Inputs corporate profile details, ticks targeted statutory frameworks (such as DPDP and RBI), and specifies sensitive citizen database profiles.
5.  **Reviewing Results:** Submits the form, gets an instant executive risk score (e.g., `85/100`), and reads the tailored legal advisory report.
6.  **Reporting:** Clicks "Download CISO PDF" to export the official evidence document for external review boards.

### C. Key Touchpoints & Friction Points
*   **Touchpoint 1: Trust Marquee.** Must immediately establish authority. If logos appear fabricated or unrelated, trust fails. *Remedy: Keep all partners aligned strictly with genuine Indian banking, fintech, and sovereign infrastructure.*
*   **Friction Point: Complex form fields.** If the assessment questionnaire requires granular firewall configurations or log formats, the CISO will drop off immediately. *Remedy: Design the form with high-level high-impact options (e.g., selecting industry sectors and unpatched vulnerability levels instead of precise CVE identifiers).*
*   **Touchpoint 2: The Advisory Report.** Needs to translate technology logs into financial risk calculations and explicit statutory penalties.

---

## PERSONA 2: THE SECURITY ENGINEER (SecOps Analyst)
*“I need immediate alert visibility, active containment controls, and a sandbox to simulate security attacks.”*

### A. Journey Map: Incident Detection & Threat Mitigation

```
+------------------+     +-------------------+     +------------------+     +-------------------+
|  01. WORKSPACE   | --> | 02. INJECTION     | --> | 03. ISOLATION    | --> | 04. FORENSICS     |
| Logs into OS     |     | Launches test     |     | Identifies incident|    | Reviews terminal  |
| Console, views   |     | trigger, simulates|     | clicks Mitigate, |     | audit logs to     |
| telemetry gauges |     | critical SQLi     |     | network isolated |     | compile CERT-In   |
+------------------+     +-------------------+     +------------------+     +-------------------+
```

### B. Step-by-Step Actions
1.  **Initialization:** Logs into the main CyberTeck OS Console (navigates to `/dashboard`).
2.  **Monitoring:** Reviews high-density metric widgets, the active enterprise score gauge, and current compliance percentages.
3.  **Simulation:** Clicks "Trigger Test Alert" to launch the simulated threat-injection panel. Inputs an attack vector (e.g., "SQLi Probe on UPI Transaction Interface"), sets severity to Critical, and defines the attacker IP.
4.  **Mitigation:** The active threat is immediately injected into the central SOC threat feed. The engineer monitors the live alert feed, reviews the diagnostic details, and clicks "Mitigate & Isolate".
5.  **Audit Ledger:** Confirms that the threat state has shifted to "Isolated & Mitigated", the global risk score has updated, and the transaction is recorded in the central audit ledger.

### C. Key Touchpoints & Friction Points
*   **Touchpoint 1: Live Event Feed.** Must support clear visual indicators. Active high-severity threat cells feature pulsing crimson icons and high contrast headers.
*   **Friction Point: Sluggish interaction latency.** SecOps engineers expect instant sub-second response times when managing firewalls. Any delays in click responses destroy operational fidelity. *Remedy: Use highly optimized client state management and clean transitions on action buttons.*
*   **Touchpoint 2: Simulated Logs.** The system logs should be presented in standard terminal-style monospace text (`font-mono`) to fit engineering expectations.

---

## PERSONA 3: THE COMPLIANCE OFFICER (CISO/Legal Lead)
*“I need to make sure we don't violate India's newly enacted DPDP guidelines or miss immediate CERT-In reporting windows.”*

### A. Journey Map: Continuous Compliance Auditing & Verification

```
+------------------+     +-------------------+     +------------------+     +-------------------+
|  01. TARGETING   | --> | 02. AUDITING      | --> | 03. RESOLUTION   | --> | 04. ASSISTANT     |
| Selects Control  |     | Toggles controls, |     | Review live event|     | Opens AI Copilot  |
| Matrix tab, reads|     | updates compliant |     | triggers, updates|     | asks about DPDP   |
| statutory rules  |     | status in logs    |     | legal defenses   |     | or CERT-In fines  |
+------------------+     +-------------------+     +------------------+     +-------------------+
```

### B. Step-by-Step Actions
1.  **Context Selection:** Navigates to the Dashboard compliance view (clicks "Regulatory Control Matrix" tab).
2.  **Policy Gap Analysis:** Reviews the list of active requirements (such as "DPDP Sec 8(5) Data Protection Measures" or "CERT-In 6-Hour reporting mandate").
3.  **Audit Management:** Toggles compliance statuses of individual rows directly to reflect configuration updates (e.g., indicating that the team has verified local data processing residency).
4.  **AI Consultation:** Directs inquiries to the CyberTeck AI Threat Advisor panel on the right. Submits prompts like "Are we DPDP compliant?" or "Fines under DPDP Act" to receive immediate, grounded security guidance.

### C. Key Touchpoints & Friction Points
*   **Touchpoint 1: The Regulatory Control Matrix.** Must explain *why* each control is necessary. Each checklist card links back to the specific statutory clause and org authority (e.g., Ministry of Electronics and Information Technology - MeitY).
*   **Friction Point: Rigid statutory explanations.** Traditional compliance tools display legal text without explaining how to implement them. *Remedy: Our AI Copilot parses statutory regulations and outputs actionable, bulleted engineering steps (e.g., explaining exact MFA implementation parameters or local database configurations).*
