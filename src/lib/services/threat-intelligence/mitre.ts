/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Technique, ThreatActor, Campaign } from "./types";

export const mitreTechniques: Technique[] = [
  {
    id: "T1110",
    name: "Brute Force",
    tactic: "Credential Access",
    description: "Adversaries may use brute force techniques to attempt access to accounts when passwords or pins are not known.",
    mitigationSteps: [
      "Enforce account lockout thresholds.",
      "Mandate phishing-resistant multi-factor authentication (MFA).",
      "Deploy rate limiting on login interfaces."
    ]
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tactic: "Initial Access",
    description: "Adversaries may attempt to take advantage of a weakness in an Internet-facing computer or program to gain access.",
    mitigationSteps: [
      "Configure automated Middle-tier API Web Application Firewalls (WAF).",
      "Execute hourly vulnerability scans across exposed services.",
      "Enforce IP Whitelisting for backend administration portals."
    ]
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tactic: "Defense Evasion",
    description: "Adversaries may obtain and abuse credentials of existing accounts to bypass security controls and masquerade as legitimate users.",
    mitigationSteps: [
      "Implement Privileged Access Management (PAM) session monitoring.",
      "Configure behavioral anomaly scoring for user login sessions.",
      "Establish automated identity quarantine isolation rules."
    ]
  },
  {
    id: "T1566",
    name: "Phishing",
    tactic: "Initial Access",
    description: "Adversaries may send phishing messages to gain access to sensitive employee portals or deploy credential harvesting scripts.",
    mitigationSteps: [
      "Enforce hardware-based security keys (FIDO2) across all corporate sessions.",
      "Conduct simulated phishing training drills.",
      "Deploy sandboxed email attachments filters."
    ]
  }
];

export const threatActors: ThreatActor[] = [
  {
    id: "ACT-041",
    name: "APT-41 (Double Dragon)",
    aliases: ["Barium", "Wicked Panda"],
    origin: "State-sponsored",
    targetSectors: ["BFSI", "Sovereign Infrastructure", "Fintech", "Telecom"],
    description: "Highly sophisticated threat actor group executing both state-sponsored espionage and financially-motivated cyber operations, specifically targeting Asian trade corridors.",
    associatedCampaigns: ["CAMP-2026-UPI"],
    observedTechniques: ["T1190", "T1078"],
    severityLevel: "critical"
  },
  {
    id: "ACT-029",
    name: "Cozy Bear",
    aliases: ["APT29", "Nobelium"],
    origin: "State-sponsored",
    targetSectors: ["Government Nodes", "Defense Systems", "Healthcare Conglomerates"],
    description: "Active intelligence-gathering cluster executing advanced identity exfiltration campaigns, cloud infrastructure drifts, and supply chain intrusions.",
    associatedCampaigns: ["CAMP-2026-GOV"],
    observedTechniques: ["T1566", "T1078"],
    severityLevel: "high"
  }
];

export const activeCampaigns: Campaign[] = [
  {
    id: "CAMP-2026-UPI",
    name: "Operation RupeeDrain",
    target: "Indian Payment Gateway API Nodes",
    status: "active",
    firstSeen: "2026-03-12T08:00:00Z",
    description: "Targeted, multi-vector DDoS and SQL Injection probe campaign attempting to bypass SEBI and RBI security compliance gateways to steal cardholder logs.",
    associatedActors: ["ACT-041"],
    observedIocs: ["ioc-1", "ioc-2"]
  },
  {
    id: "CAMP-2026-GOV",
    name: "Operation CloudBreach",
    target: "Sovereign Government Datacenter Nodes",
    status: "monitored",
    firstSeen: "2026-05-22T14:30:00Z",
    description: "Continuous identity hijacking probe targeting exposed unpatched cloud infrastructure configurations on Mumbai regional host nodes.",
    associatedActors: ["ACT-029"],
    observedIocs: ["ioc-3"]
  }
];

export class MitreIntelligenceProvider {
  getTechnique(id: string): Technique | undefined {
    return mitreTechniques.find(t => t.id === id);
  }

  getActor(id: string): ThreatActor | undefined {
    return threatActors.find(a => a.id === id);
  }

  getCampaign(id: string): Campaign | undefined {
    return activeCampaigns.find(c => c.id === id);
  }

  getAllTechniques(): Technique[] {
    return mitreTechniques;
  }

  getAllActors(): ThreatActor[] {
    return threatActors;
  }

  getAllCampaigns(): Campaign[] {
    return activeCampaigns;
  }
}
