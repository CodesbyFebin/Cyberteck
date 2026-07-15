/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThreatActor {
  id: string;
  name: string;
  aliases: string[];
  origin: string;
  targetSectors: string[];
  description: string;
  associatedCampaigns: string[]; // references Campaign.id
  observedTechniques: string[];  // references Technique.id
  severityLevel: 'critical' | 'high' | 'medium';
}

export interface Campaign {
  id: string;
  name: string;
  target: string;
  status: 'active' | 'historic' | 'monitored';
  firstSeen: string;
  lastSeen?: string;
  description: string;
  associatedActors: string[]; // references ThreatActor.id
  observedIocs: string[];     // references IOC.id
}

export interface Technique {
  id: string; // e.g. T1110 (Brute Force)
  name: string;
  tactic: string; // e.g. Credential Access
  description: string;
  mitigationSteps: string[];
}

export interface CVE {
  id: string; // e.g. CVE-2026-1234
  title: string;
  score: number; // CVSS Score (0-10)
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  publishedDate: string;
  mitigationStatus: 'patched' | 'unpatched' | 'workaround';
  patchUrl?: string;
}

export interface IOC {
  id: string;
  type: 'ip' | 'domain' | 'file_hash' | 'url';
  value: string;
  description: string;
  reputation: 'malicious' | 'suspicious' | 'clean';
  observedCount: number;
  lastSeen: string;
}

export interface TelemetryEvent {
  id: string;
  timestamp: string;
  source: string;
  destination: string;
  payloadSize: number;
  protocol: 'TCP' | 'UDP' | 'HTTP' | 'HTTPS' | 'DNS';
  actionTaken: 'allowed' | 'blocked' | 'quarantined';
  riskScore: number;
  signatureMatch?: string;
}

export interface RiskScore {
  overall: number;
  threatExposure: number;
  complianceRating: number;
  unresolvedCriticalThreats: number;
  activeAssetCount: number;
  lastCalculated: string;
}
