/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContentRoute } from "../ContentIndexer";

export const industries: ContentRoute[] = [
  {
    url: "/industries/banking-bfsi",
    title: "Banking, Financial Services & BFSI Security | CyberTeck OS",
    description: "Protect transactional pipelines, NBFCs, and banking operations under Indian banking and financial cybersecurity mandates (RBI).",
    category: "industries",
    keywords: ["BFSI Security", "NBFC Safeguards", "Transaction Gateway", "Financial Threat Defense", "Sovereign Core Banking"],
    summary: "BFSI institutions face high-frequency threat actors. CyberTeck secures payment gateways and core banking integrations on sovereign infrastructure, meeting RBI criteria and auditing requirements seamlessly.",
    faqs: [
      {
        question: "How does CyberTeck align with RBI BFSI mandates?",
        answer: "We automate transaction endpoint tracing, enforce phishing-resistant MFA logins for server administrators, and supply signed security audit files suitable for RBI inspectors."
      }
    ],
    parent: "/",
    children: []
  },
  {
    url: "/industries/government",
    title: "Government & Critical Infrastructure Cyber-Defense | CyberTeck OS",
    description: "Secure ministry datasets, localized state systems, and municipal operations in alignment with MeitY guidelines.",
    category: "industries",
    keywords: ["MeitY Guidelines", "Ministry Security", "Critical Digital Assets", "Sovereign Hosting", "National Protection"],
    summary: "CyberTeck helps Indian public offices and municipal structures protect vital services. It implements sovereign encryption standards, strict multi-factor logins, and certified cloud hosting configurations.",
    faqs: [
      {
        question: "Are your datacenters empanelled with MeitY?",
        answer: "Yes, our sovereign Tier-IV hosting environments operate on fully empanelled MeitY cloud architectures, conforming to strict security criteria for public-sector data."
      }
    ],
    parent: "/",
    children: []
  },
  {
    url: "/industries/healthcare",
    title: "Healthcare, Diagnostic, & Pharma Data Security | CyberTeck OS",
    description: "Safeguard health registries, clinical systems, and trial databases under Indian personal data security guidelines (DPDP).",
    category: "industries",
    keywords: ["Healthcare Privacy", "Pharma IP Defense", "Patient Record Encryption", "Clinical Systems Audit", "Diagnostic Records"],
    summary: "Protect patient trust and research files. CyberTeck deploys classifications and strict encryption for clinical datasets, verifying that diagnostic networks maintain full compliance under current privacy legislation.",
    faqs: [
      {
        question: "How is patient medical record access audited?",
        answer: "We implement fine-grained access control logs that cryptographically sign and log every retrieval of patient PII or clinical diagnostic assets."
      }
    ],
    parent: "/",
    children: []
  },
  {
    url: "/industries/manufacturing",
    title: "Industrial Manufacturing & OT Cyber Defense | CyberTeck OS",
    description: "Secure industrial supply chains, SCADA operations, and localized logistics systems against advanced malware.",
    category: "industries",
    keywords: ["SCADA Protection", "OT Cybersecurity", "Supply Chain Control", "Operational Telemetry", "Industrial Intrusion"],
    summary: "Industrial architectures rely on mixed OT/IT protocols. CyberTeck defends legacy machinery, controls active access networks, and prevents external threat vectors from disrupting critical manufacturing lines.",
    faqs: [
      {
        question: "How do you secure SCADA networks?",
        answer: "We establish strict network microsegmentation and deploy deep packet inspection on industrial protocols to identify abnormal logic controller commands."
      }
    ],
    parent: "/",
    children: []
  },
  {
    url: "/industries/energy-utilities",
    title: "Energy, Power Grids & Utilities Defense | CyberTeck OS",
    description: "Shield smart energy grids, power distribution centers, and hydro/solar telemetry systems against targeted geopolitical cyber-attacks.",
    category: "industries",
    keywords: ["Energy Grid Security", "Power Plant SCADA", "Utilities Defense", "Geopolitical Threats", "Operational Resiliency"],
    summary: "National power grids are premium geopolitical targets. CyberTeck's sovereign infrastructure layers protect substation telemetry, verify administrative personnel identity, and implement localized, air-gapped system restoration files.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/industries/retail-ecommerce",
    title: "Retail, E-Commerce & Consumer Technology | CyberTeck OS",
    description: "Protect massive shopping platforms, consumer profiling systems, and checkout workflows. Ensure full compliance with DPDP consent and PCI DSS 4.0.",
    category: "industries",
    keywords: ["Retail Security", "E-Commerce Safeguards", "PII Consent Management", "PCI Compliance", "Shopping Gateways"],
    summary: "E-Commerce platforms collect large quantities of personal shopper metrics. CyberTeck provides easy consent-capture widgets, database encryption protocols, and automated shopping checkout protection modules.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/industries/telecom-media",
    title: "Telecom, ISPs & Media Communications | CyberTeck OS",
    description: "Defend high-volume telecommunication networks, fiber networks, and public media backbones from session hijacking and carrier-grade attacks.",
    category: "industries",
    keywords: ["Telecom Security", "ISP Gateway Protection", "Carrier Resiliency", "SS7/Diameter Audit", "Broadcasting Integrity"],
    summary: "Telecom networks represent critical communications arteries. CyberTeck monitors infrastructure traffic patterns, isolates active identity probes on administrative routing panels, and enforces zero-trust protocols across remote-access networks.",
    faqs: [],
    parent: "/",
    children: []
  },
  {
    url: "/industries/transportation-logistics",
    title: "Transportation, Aviation & Logistics Systems | CyberTeck OS",
    description: "Secure air traffic systems, railway signaling centers, marine freight logistics, and supply chain tracking hubs.",
    category: "industries",
    keywords: ["Aviation Security", "Railway Signaling", "Logistics Operations", "Cargo Tracking Hubs", "Transit Cyber Defense"],
    summary: "Aviation, transit, and cargo supply lines operate under highly precise timelines. CyberTeck guards logistics systems from ransomware disruption, tracks employee terminal actions, and monitors supply chain APIs for security vulnerabilities.",
    faqs: [],
    parent: "/",
    children: []
  }
];
