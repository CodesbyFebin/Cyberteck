/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContentRoute } from "../ContentIndexer";

export const security: ContentRoute[] = [
  {
    url: "/security/sovereign-hosting",
    title: "Sovereign Cloud Hosting & Data Residency | CyberTeck OS",
    description: "Learn about CyberTeck's Mumbai sovereign cloud infrastructure, Tier-IV secure datacenters, BKC hosting vaults, and full compliance with national data localization rules.",
    category: "security",
    keywords: ["Sovereign Cloud", "Data Residency", "Mumbai Datacenter", "Tier-IV Facility", "BKC hosting"],
    summary: "CyberTeck hosts all customer console dashboards, telemetry logs, and identity datasets strictly within geopolitical boundaries of India at state-of-the-art Tier-IV facilities in Mumbai.",
    faqs: [
      {
        question: "Can data reside in secondary regional cloud locations?",
        answer: "By default, no. All computing nodes and log records are restricted entirely to the primary Mumbai zone to satisfy central compliance mandates."
      }
    ],
    parent: "/",
    children: []
  },
  {
    url: "/security/data-protection-officer",
    title: "Data Protection Officer (DPO) Grievance Portal | CyberTeck OS",
    description: "Contact CyberTeck's registered Data Protection Officer. File data rights requests, right to erasure, or citizen privacy inquiries in alignment with DPDP Act Section 8.",
    category: "security",
    keywords: ["Data Protection Officer", "DPO Register", "DPDP Rights", "Citizen Inquiries", "Privacy Grievance"],
    summary: "In alignment with the Digital Personal Data Protection Act (2023), CyberTeck maintains a registered and accessible Data Protection Officer (DPO) stationed at our Mumbai headquarters to resolve citizen data claims.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/vulnerability-disclosure-policy",
    title: "Vulnerability Disclosure & Bug Bounty Program | CyberTeck OS",
    description: "Review our security posture rules, report potential product vulnerabilities, and work with our security response desk.",
    category: "security",
    keywords: ["Vulnerability Disclosure", "Bug Bounty", "Report Vulnerability", "Responsible Disclosure", "Security Desk"],
    summary: "CyberTeck values the cybersecurity community. We maintain a clear vulnerability disclosure pipeline, committing to acknowledge security report findings within 24 hours.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/incident-response-commitment",
    title: "Incident Response SLAs and Incident Management | CyberTeck OS",
    description: "Review our incident containment, alert escalation, and forensic report support commitments. 24/7 security team SLAs.",
    category: "security",
    keywords: ["Incident SLAs", "Security Response Team", "Containment Threshold", "CERT-In Compliance", "24/7 Operations"],
    summary: "We operate an elite incident management system, offering high-priority SLAs to enterprise tenants to isolate, contain, and report intrusions rapidly in compliance with Indian cyber frameworks.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/datacenter-physical-security",
    title: "Physical Infrastructure Hardening and Security | CyberTeck OS",
    description: "Discover physical defense barriers, biometric tracking, disaster backup generators, and network isolation protocols at our hosting datacenters.",
    category: "security",
    keywords: ["Physical Security", "Biometrics", "Tier-IV Power", "Air-Gapped Vaults", "Disaster Recovery"],
    summary: "Our systems run in secure datacenter racks protected by round-the-clock physical security teams, multi-point biometric authentication gates, and advanced climate control systems.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/cryptographic-standards",
    title: "Cryptographic Protection & Key Management Policy | CyberTeck OS",
    description: "Details on field-level database encryption, TLS 1.3 transit guidelines, and automatic key rotation configurations built into the OS platform.",
    category: "security",
    keywords: ["Cryptographic Standards", "Encryption Keys", "Key Management", "TLS 1.3", "AES-256 Encryption"],
    summary: "All data ingested by CyberTeck is encrypted at rest using AES-256-GCM, and in transit using TLS 1.3. Cryptographic keys are stored in dedicated hardware security modules (HSM).",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/sovereign-supply-chain",
    title: "Sovereign Supply Chain & Third-Party Code Auditing | CyberTeck OS",
    description: "Review CyberTeck's rigid software supply chain controls. Static code scans, runtime checks, and dependencies validation to defend against supply-chain infiltration.",
    category: "security",
    keywords: ["Supply Chain", "Sovereign Dependencies", "Code Auditing", "Software Bill of Materials", "SBOM Validation"],
    summary: "CyberTeck maintains an audited Software Bill of Materials (SBOM). Every package and open-source library is continuously scanned for vulnerabilities before integration into our build environment.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/security/gdpr-dpdp-interoperability",
    title: "GDPR & DPDP Interoperability and Legal Compliance | CyberTeck OS",
    description: "Learn how CyberTeck bridges regulatory parameters, mapping common privacy controls between the European GDPR and India DPDP Act.",
    category: "security",
    keywords: ["Privacy Interoperability", "GDPR DPDP Bridge", "Cross-Border Data Flows", "Consent Standards", "Data Portability"],
    summary: "For enterprises operating across regions, CyberTeck provides unified data processing mappings that resolve requirements from both European and Indian privacy frameworks automatically.",
    faqs: [],
    parent: "/",
    children: []
  }
];
