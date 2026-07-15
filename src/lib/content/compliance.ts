/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContentRoute } from "../ContentIndexer";

export const compliance: ContentRoute[] = [
  {
    url: "/compliance/dpdp-act",
    title: "DPDP Act (2023) Compliance Mapping | CyberTeck OS",
    description: "Fulfill the statutory mandates of India's Digital Personal Data Protection Act. Automate consent management, localized data residency, and user erasure requests.",
    category: "compliance-detail",
    keywords: ["DPDP Act", "Consent Manager", "Data Residency", "Right to Erasure", "Personal Data Protection"],
    summary: "CyberTeck's DPDP Act mapping tool simplifies compliance under India's central privacy legislation. It provides real-time checks for citizen consent forms, records processing trails, and guarantees Mumbai-based regional residency for PII records.",
    faqs: [
      {
        question: "What is the penalty for DPDP non-compliance?",
        answer: "Section 8(5) of the DPDP Act empowers the Data Protection Board of India to impose statutory administrative penalties scaling up to ₹250 Crores for organizations failing to safeguard personal data."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/cert-in",
    title: "CERT-In 6-Hour Incident Reporting & Audit | CyberTeck OS",
    description: "Automate system logging and forensic packaging to satisfy CERT-In directions. Meet the mandatory 6-hour security reporting threshold easily.",
    category: "compliance-detail",
    keywords: ["CERT-In Directions", "6-Hour Incident Reporting", "Forensic Log Packaging", "Log Retention Rules", "Sovereign Audit"],
    summary: "To address CERT-In mandates, CyberTeck deploys secure, synchronized log capture agents across your architecture. If an intrusion is detected, the platform compiles forensic packages, reducing the manual reporting pipeline down to minutes.",
    faqs: [
      {
        question: "What incidents must be reported to CERT-In within 6 hours?",
        answer: "Critical intrusions including ransomware, database exfiltrations, targeted APT operations, session hijacking of administrative systems, and active attacks on domain controllers must be reported to CERT-In."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/rbi-guidelines",
    title: "RBI Cyber Security Compliance Framework | CyberTeck OS",
    description: "Secure financial systems under Reserve Bank of India IT regulations. Automate transaction audits, phishing-resistant PAM logins, and microsegmentation.",
    category: "compliance-detail",
    keywords: ["RBI Cybersecurity", "BFSI Hardening", "Transaction Auditing", "Phishing-Resistant MFA", "Network Segmentation"],
    summary: "Our RBI alignment system hardens banking and financial infrastructures. It monitors transaction endpoints, enforces strict privileged access rules for developer consoles, and provides audit artifacts tailored for Reserve Bank oversight.",
    faqs: [
      {
        question: "Who does RBI cyber framework apply to?",
        answer: "The RBI cyber security guidelines apply to commercial banks, cooperative institutions, primary dealers, NBFCs, and financial entities processing payments across India."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/iso-27001",
    title: "ISO/IEC 27001:2022 ISMS Compliance | CyberTeck OS",
    description: "Automate ISO 27001 ISMS implementation, corporate risk registries, and internal audits with CyberTeck continuous compliance logs.",
    category: "compliance-detail",
    keywords: ["ISO 27001 ISMS", "Information Security", "Internal Audit", "Risk Registry", "Compliance Evidence"],
    summary: "Fulfill global information security standards. CyberTeck automates Annex A security control validations, maintains continuous risk registers, and exports compliant telemetry logs to streamline third-party audits.",
    faqs: [
      {
        question: "Is CyberTeck ISO 27001 certified?",
        answer: "Yes, our hosting systems are fully audited and operate under active ISO 27001 certifications across all physical and cloud layers."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/sebi-cybersecurity",
    title: "SEBI Cyber Security and Resilience Framework | CyberTeck OS",
    description: "Complete SEBI cybersecurity requirements for stockbrokers, depository participants, and mutual funds. Core security telemetry and automated VAPT reporting.",
    category: "compliance-detail",
    keywords: ["SEBI Circular", "Resilience Framework", "Brokers Compliance", "VAPT Audits", "Mutual Funds Security"],
    summary: "Fulfill the Securities and Exchange Board of India (SEBI) guidelines on cyber security and cyber resilience. CyberTeck enables regular VAPT scheduling, multi-factor credential validations, and immediate breach-containment playbooks for capital market operations.",
    faqs: [
      {
        question: "What is the SEBI reporting timeline for cyber attacks?",
        answer: "SEBI mandates that all registered market intermediaries must report cyber incidents within 6 hours of detection directly to SEBI and CERT-In."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/irdai-guidelines",
    title: "IRDAI Cyber Security Guidelines for Insurers | CyberTeck OS",
    description: "Automate compliance with the Insurance Regulatory and Development Authority of India's cyber security guidelines. Safeguard personal policy records.",
    category: "compliance-detail",
    keywords: ["IRDAI Security", "Insurers Policy", "Health Insurance Logs", "PII Encryption", "Data Classification"],
    summary: "IRDAI enforces rigid guidelines to secure insurance policyholders' data. CyberTeck's data security engine implements advanced AES-256 field-level encryption, dynamic key rotation, and automated access log audits to satisfy statutory insurance inspectors.",
    faqs: [
      {
        question: "Does IRDAI require localized storage?",
        answer: "Yes, insurance policy and claim records must reside within national sovereign boundaries, a requirement fully solved by our Mumbai Tier-IV datacenter clusters."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/nist-csf",
    title: "NIST Cybersecurity Framework Alignment | CyberTeck OS",
    description: "Assess, organize, and mature your security posture using the NIST CSF 2.0. Identify, Protect, Detect, Respond, and Recover automatically.",
    category: "compliance-detail",
    keywords: ["NIST CSF 2.0", "Security Maturity", "Posture Management", "Incident Response", "Identify and Detect"],
    summary: "Our platform maps internal events, access audits, and vulnerability patches directly to the subcategories of the NIST Cybersecurity Framework (NIST CSF 2.0), providing clear board-level metrics on organizational resilience.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/soc-2",
    title: "SOC 2 Type II Auditing and Continuous Readiness | CyberTeck OS",
    description: "Accelerate your SOC 2 audit. Continuous monitoring of security, availability, processing integrity, confidentiality, and privacy trust criteria.",
    category: "compliance-detail",
    keywords: ["SOC 2 Type II", "Trust Services Criteria", "Continuous Audit", "Confidentiality Policy", "Security Controls"],
    summary: "SOC 2 audits represent standard proof of SaaS security posture. CyberTeck replaces episodic audits with continuous control mapping, alerting your security leads immediately if any device posture drifts from compliant states.",
    faqs: [
      {
        question: "How long does a SOC 2 readiness audit take with CyberTeck?",
        answer: "By automating continuous log and access control integrations, CyberTeck cuts SOC 2 preparation time down from months to less than two weeks."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/gdpr",
    title: "GDPR Data Protection & EU Citizen Consent | CyberTeck OS",
    description: "Fulfill General Data Protection Regulation requirements for Indian enterprises conducting operations in European markets. Data processing agreements and user rights management.",
    category: "compliance-detail",
    keywords: ["GDPR Privacy", "EU citizen data", "Right to be Forgotten", "Consent Logging", "Data Portability"],
    summary: "Indian companies servicing European users must demonstrate GDPR alignment. CyberTeck offers out-of-the-box user-rights management interfaces, automated Article 30 record-of-processing logs, and localized consent controls.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/hipaa",
    title: "HIPAA Security Rule Compliance for HealthTech | CyberTeck OS",
    description: "Maintain strict compliance under the HIPAA Security Rule. Ensure confidentiality, integrity, and availability of protected health information (PHI).",
    category: "compliance-detail",
    keywords: ["HIPAA Health", "PHI Security", "Healthcare Encryption", "BAA Agreements", "Administrative Safeguards"],
    summary: "Health technology firms servicing global clients must prove HIPAA alignment. CyberTeck provides dedicated clinical infrastructure isolation, cryptographically secure audit logs, and automatic workstation auto-lock logging features.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/pci-dss",
    title: "PCI DSS 4.0 Payment Card Compliance Engine | CyberTeck OS",
    description: "Achieve and maintain compliance with Payment Card Industry Data Security Standard 4.0. Secure transaction pathways and encrypt primary account numbers.",
    category: "compliance-detail",
    keywords: ["PCI DSS 4.0", "Primary Account Number", "Transaction Gateway", "Card Security", "Tokenization"],
    summary: "PCI DSS 4.0 mandates continuous control checks. CyberTeck isolates cardholder data environments (CDE) automatically, logs administrative console commands, and conducts scheduled vulnerability scans mapped to payment card industry norms.",
    faqs: [
      {
        question: "Does CyberTeck store primary credit card numbers?",
        answer: "No, CyberTeck does not store credit card details. We integrate and monitor transactional pipelines to guarantee they are isolated and securely tokenized."
      }
    ],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/cis-controls",
    title: "CIS Critical Security Controls Implementation | CyberTeck OS",
    description: "Establish a baseline of essential cybersecurity defense actions with CIS Critical Security Controls mapping (v8).",
    category: "compliance-detail",
    keywords: ["CIS Controls v8", "Essential Cyber Hygiene", "Inventory Assets", "Vulnerability Management", "Access Control Logs"],
    summary: "Implement CIS Controls v8 systematically. CyberTeck automates standard cyber hygiene configurations, including continuous hardware/software asset discovery, configuration hardening monitoring, and user credential reviews.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/cobit-governance",
    title: "COBIT Governance Framework Alignment | CyberTeck OS",
    description: "Align enterprise cybersecurity initiatives with overarching corporate IT governance using COBIT controls and processes.",
    category: "compliance-detail",
    keywords: ["COBIT 2019", "Enterprise IT Governance", "Risk Alignment", "Governance Objective", "Operational Efficiency"],
    summary: "Integrate security with enterprise goals. CyberTeck maps engineering control logs to COBIT governance objectives, facilitating smooth corporate audits and executive reporting pipelines for large-scale conglomerates.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/dpdb-consent-board",
    title: "DPDP Board Directives & Advisory Integrations | CyberTeck OS",
    description: "Integrate guidelines issued by the Data Protection Board of India. Fulfill DPDP Section 9 obligations and minor consent handling criteria.",
    category: "compliance-detail",
    keywords: ["DPDB India", "Minor Consent", "Data Fiduciary", "Consent Architect", "Regulatory Notices"],
    summary: "Ensure compliance with the latest advisories of the newly formed Data Protection Board of India (DPDB). CyberTeck updates verification forms, records consent signatures, and structures grievances to meet Board standards.",
    faqs: [],
    parent: "/compliance",
    children: []
  },
  {
    url: "/compliance/nciipc-critical-infrastructure",
    title: "NCIIPC Critical Information Infrastructure Alignment | CyberTeck OS",
    description: "Secure critical national digital infrastructure in alignment with the National Critical Information Infrastructure Protection Centre (NCIIPC) guidelines.",
    category: "compliance-detail",
    keywords: ["NCIIPC CII", "Critical Infrastructure", "SCADA Hardening", "National Security", "Disaster Recovery"],
    summary: "Indian vital sectors (Power, Transport, Telecom, Finance, Government, Strategic) require elite protection. CyberTeck deploys robust physical isolation tracking, OT/IT boundary monitoring, and high-priority localized backup syncing to defend Indian critical systems.",
    faqs: [
      {
        question: "What is CII?",
        answer: "Critical Information Infrastructure (CII) refers to those digital assets whose incapacitation or destruction would have a debilitating impact on national security, economy, or public health."
      }
    ],
    parent: "/compliance",
    children: []
  }
];
