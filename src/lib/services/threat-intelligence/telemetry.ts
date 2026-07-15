/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TelemetryEvent, IOC } from "./types";

export const mockIocs: IOC[] = [
  {
    id: "ioc-1",
    type: "ip",
    value: "103.221.84.12",
    description: "Associated with APT-41 credential exfiltration probes on UPI gateways.",
    reputation: "malicious",
    observedCount: 1240,
    lastSeen: new Date().toISOString()
  },
  {
    id: "ioc-2",
    type: "domain",
    value: "bkc-sandbox-leak.net",
    description: "Suspicious C2 command and control node spoofing BKC datacenter channels.",
    reputation: "suspicious",
    observedCount: 42,
    lastSeen: new Date(Date.now() - 10 * 60000).toISOString()
  },
  {
    id: "ioc-3",
    type: "file_hash",
    value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    description: "Signature match for ransomware execution scripts targeting government health files.",
    reputation: "malicious",
    observedCount: 1,
    lastSeen: new Date(Date.now() - 120 * 60000).toISOString()
  }
];

export const recentTelemetryEvents: TelemetryEvent[] = [
  {
    id: "TEL-9001",
    timestamp: new Date().toISOString(),
    source: "103.221.84.12",
    destination: "10.0.120.4",
    payloadSize: 1542,
    protocol: "HTTPS",
    actionTaken: "quarantined",
    riskScore: 98,
    signatureMatch: "APT-41 Identity Probe Signature"
  },
  {
    id: "TEL-9002",
    timestamp: new Date(Date.now() - 3 * 60000).toISOString(),
    source: "198.51.100.42",
    destination: "10.0.120.8",
    payloadSize: 844,
    protocol: "HTTP",
    actionTaken: "blocked",
    riskScore: 88,
    signatureMatch: "SQLi Select statement Injection"
  },
  {
    id: "TEL-9003",
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    source: "Internal Network Node",
    destination: "bkc-sandbox-leak.net",
    payloadSize: 412,
    protocol: "DNS",
    actionTaken: "blocked",
    riskScore: 65,
    signatureMatch: "Suspicious Dynamic DNS query"
  },
  {
    id: "TEL-9004",
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    source: "10.0.4.15",
    destination: "10.0.4.1",
    payloadSize: 220,
    protocol: "TCP",
    actionTaken: "allowed",
    riskScore: 5,
    signatureMatch: undefined
  }
];

export class SecurityTelemetryProvider {
  getRecentEvents(limit = 10): TelemetryEvent[] {
    return recentTelemetryEvents.slice(0, limit);
  }

  getIoc(value: string): IOC | undefined {
    return mockIocs.find(i => i.value === value);
  }

  getMaliciousIocs(): IOC[] {
    return mockIocs.filter(i => i.reputation === "malicious");
  }

  calculateRiskScore(criticalCount: number, highCount: number): number {
    // Dynamic posture scoring formula matching docs blueprints
    const deduction = (criticalCount * 12) + (highCount * 5);
    return Math.max(30, 98 - deduction);
  }
}
