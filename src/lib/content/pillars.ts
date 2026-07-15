/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContentRoute } from "../ContentIndexer";

export const pillars: ContentRoute[] = [
  {
    url: "/pillars/ai-native-identity-access-management",
    title: "AI-Native Identity & Access Management (Pillar 1) | CyberTeck OS",
    description: "Automate enterprise PAM, dynamic Just-In-Time access controls, adaptive authentication, and FIDO2 authentication mapping with CyberTeck IAM.",
    category: "pillars",
    keywords: ["AI-PAM", "Just-In-Time Access", "Zero-Trust Identity", "Adaptive MFA", "IGA Lifecycle"],
    summary: "Pillar 1 addresses technical enterprise identity lifecycle operations. By establishing AI-powered Privileged Access Management (AI-PAM), dynamic JIT directory structures, and adaptive multi-factor logins, we eliminate unauthorized lateral migration risks.",
    faqs: [
      {
        question: "What is AI-PAM?",
        answer: "AI-PAM is Privileged Access Management powered by machine behavioral profiles. It monitors administrative terminal commands, dynamically scaling authorization boundaries or triggering multi-factor checks if abnormal patterns occur."
      },
      {
        question: "How does CyberTeck handle directory integrations?",
        answer: "We support real-time sync with Active Directory, Okta, and Azure AD, layer-hardening them with sovereign FIDO2 authentication keys."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-native-compliance-automation",
    title: "AI-Native Compliance Automation (Pillar 2) | CyberTeck OS",
    description: "Continuous compliance monitoring and evidence collection for statutory frameworks including DPDP, CERT-In, RBI, and ISO 27001.",
    category: "pillars",
    keywords: ["Continuous Auditing", "Evidence Collection", "DPDP Automation", "CERT-In Reporting", "RBI Compliance"],
    summary: "Pillar 2 delivers autonomous compliance checks across enterprise systems. By constantly analyzing system settings and audit trails, the compliance engine automatically generates reports for statutory bodies like SEBI and RBI.",
    faqs: [
      {
        question: "How does automated evidence collection work?",
        answer: "Our engine queries live database security settings, identity tables, and encryption states, archiving cryptographically signed evidence records directly inside a tamper-proof repository."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-native-threat-intelligence",
    title: "AI-Native Threat Intelligence (Pillar 3) | CyberTeck OS",
    description: "Sovereign threat analytics, active external attack surface intelligence, and localized dark web monitoring targeting Indian critical systems.",
    category: "pillars",
    keywords: ["Threat Intelligence", "Sovereign Feeds", "Attack Surface Discovery", "Dark Web Scans", "APT Targeting"],
    summary: "Pillar 3 maps external risks facing your organization. It monitors local and global intelligence feeds to identify credential leaks, active phishing campaigns, and focused APT targets targeting Indian commercial infrastructure.",
    faqs: [
      {
        question: "What makes CyberTeck Threat Intelligence sovereign?",
        answer: "Our feeds focus heavily on localized threat campaigns, malware distributions, and state-sponsored APT cells specifically targeting Indian critical assets, ministries, and financial infrastructure."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-native-security-operations",
    title: "AI-Native Security Operations (Pillar 4) | CyberTeck OS",
    description: "Continuous event ingestion, AI triage, automated forensic investigations, and dynamic incident correlation systems.",
    category: "pillars",
    keywords: ["Security Operations", "AI-SOC Triage", "Event Correlation", "Automated Forensic Analysis", "Telemetry Ingestion"],
    summary: "Pillar 4 provides the operational foundation of the Security Operations Center. It integrates high-volume system logging with automated alert triage, minimizing the fatigue of security analysts and accelerating mean-time-to-resolution.",
    faqs: [
      {
        question: "How does the AI triage work in the SOC?",
        answer: "The AI classifier compares incoming logs against known attack topologies, resolving 95% of false alarms autonomously and escalating high-fidelity vectors to analysts immediately."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-native-risk-management",
    title: "AI-Native Risk Management (Pillar 5) | CyberTeck OS",
    description: "Enterprise risk modeling, risk treatment registries, third-party risk analysis, and continuous supply chain auditing.",
    category: "pillars",
    keywords: ["Enterprise Risk", "Risk Assessment", "Supply Chain Audit", "Third-Party Governance", "Risk Treatment"],
    summary: "Pillar 5 quantifies organizational risk variables. It consolidates internal system gaps, regulatory compliance drift, and third-party vendor risks into a continuous dashboard to align security parameters with business objectives.",
    faqs: [
      {
        question: "How often are supply-chain third-party vendors audited?",
        answer: "CyberTeck continuously polls third-party endpoints, reviewing SSL configurations, domain hijacking indicators, and compliance certificate statuses."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-powered-governance-policy-compliance",
    title: "AI-Powered Governance, Policy & Compliance (Pillar 6) | CyberTeck OS",
    description: "Automated corporate policy drafting, standard control mapping, risk self-assessment surveys, and board reports.",
    category: "pillars",
    keywords: ["GRC Workflows", "Policy Lifecycle", "Control Mapping", "Board Reporting", "Self-Assessment"],
    summary: "Pillar 6 manages corporate security policies and human GRC workflows. It tracks policy revision dates, links security procedures to specific statutory controls, and manages employee audit campaigns.",
    faqs: [
      {
        question: "Does the policy engine map to ISO 27001?",
        answer: "Yes, it maps internal administrative policies directly to ISO/IEC 27001:2022 Annex A controls automatically."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-identity-security-zero-trust",
    title: "AI Identity Security & Zero Trust (Pillar 7) | CyberTeck OS",
    description: "Modern Zero Trust architecture, network microsegmentation, workload access verification, and entitlement auditing.",
    category: "pillars",
    keywords: ["Zero Trust Network", "Microsegmentation", "Workload Identity", "Access Entitlements", "Identity Analytics"],
    summary: "Pillar 7 guides Zero Trust design layouts. Rather than verifying trust once at the perimeter, it continuously audits every user, device, and API request, segmenting high-value systems to prevent lateral movement.",
    faqs: [
      {
        question: "What is the core rule of CyberTeck Zero Trust?",
        answer: "Never Trust, Always Verify. Every transaction, user, and container request must demonstrate valid identity, approved entitlement parameters, and secure device postures."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-threat-hunting-proactive-intelligence",
    title: "AI Threat Hunting & Proactive Intelligence (Pillar 8) | CyberTeck OS",
    description: "Behavioral anomaly detection, indicator of compromise (IoC) hunting, and automated fileless malware detection.",
    category: "pillars",
    keywords: ["Threat Hunting", "IoC Tracking", "Behavioral Anomalies", "Fileless Malware", "Incident Profiling"],
    summary: "Pillar 8 conducts proactive threat hunting. By analyzing micro-behaviors across file structures, memory systems, and active network connections, it identifies hidden intrusions that slip past traditional antivirus scans.",
    faqs: [
      {
        question: "How does proactive hunting differ from traditional SIEM?",
        answer: "SIEM relies on known log signatures; threat hunting actively searches for abnormal telemetry footprints and advanced memory-only payloads before they trigger alerts."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-security-operations-automation",
    title: "AI Security Operations & Automation (SOAR Core) (Pillar 9) | CyberTeck OS",
    description: "Incident response orchestration, automated playbook creation, container quarantines, and security integrations.",
    category: "pillars",
    keywords: ["SOAR Playbooks", "Incident Orchestration", "Active Quarantine", "Platform Integrations", "Response Optimization"],
    summary: "Pillar 9 is built around our Security Orchestration, Automation, and Response (SOAR) engine. It maps security response guidelines into automated digital workflows, deploying immediate container isolations and firewall changes.",
    faqs: [
      {
        question: "How do SOAR playbooks reduce response times?",
        answer: "When an active exfiltration alert is validated, the SOAR playbook executes in milliseconds: it isolates affected servers, disables compromised credentials, and drafts report documents instantly."
      }
    ],
    parent: "/solutions",
    children: []
  },
  {
    url: "/pillars/ai-cloud-security-data-protection",
    title: "AI Cloud Security & Data Protection (Pillar 10) | CyberTeck OS",
    description: "Cloud security posture management (CSPM), data classification, automated encryption keys, and cloud compliance auditing.",
    category: "pillars",
    keywords: ["CSPM Posture", "Data Classification", "Key Management", "Cloud Workloads", "Compliance Auditing"],
    summary: "Pillar 10 defends modern cloud ecosystems. It scans public cloud deployments (such as AWS and Azure) to find storage flaws, manages database encryption, and classifications of user files in alignment with DPDP Act principles.",
    faqs: [
      {
        question: "What is CSPM?",
        answer: "CSPM stands for Cloud Security Posture Management. It scans cloud infrastructure continuously to flag security drifts, misconfigured buckets, or excessive permissions."
      }
    ],
    parent: "/solutions",
    children: []
  }
];
