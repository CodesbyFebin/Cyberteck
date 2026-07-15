/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MitreIntelligenceProvider } from "./mitre";
import { NvdVulnerabilityProvider } from "./cve";
import { SecurityTelemetryProvider } from "./telemetry";
import { IOC } from "./types";

export class UnifiedThreatIntelMockService {
  private mitre = new MitreIntelligenceProvider();
  private nvd = new NvdVulnerabilityProvider();
  private telemetry = new SecurityTelemetryProvider();

  getMitreProvider() { return this.mitre; }
  getNvdProvider() { return this.nvd; }
  getTelemetryProvider() { return this.telemetry; }

  // Unified Query API
  getThreatSummary() {
    const criticalCves = this.nvd.getVulnerabilitiesBySeverity("critical");
    const activeThreatsCount = this.telemetry.getRecentEvents().filter(e => e.actionTaken !== "allowed").length;
    
    const score = this.telemetry.calculateRiskScore(
      criticalCves.filter(c => c.mitigationStatus === "unpatched").length,
      this.nvd.getVulnerabilitiesBySeverity("high").filter(c => c.mitigationStatus === "unpatched").length
    );

    return {
      riskScore: score,
      activeIncidentsCount: activeThreatsCount,
      unresolvedCriticalVulnerabilities: criticalCves.length,
      maliciousIocsCount: this.telemetry.getMaliciousIocs().length,
      observedCampaigns: this.mitre.getAllCampaigns().length
    };
  }

  getEnrichedIocs(): IOC[] {
    return this.telemetry.getMaliciousIocs().concat(
      this.telemetry.getRecentEvents()
        .filter(e => e.riskScore > 60)
        .map((e, index) => ({
          id: `ioc-enriched-${index}`,
          type: "ip",
          value: e.source,
          description: e.signatureMatch || `Suspicious source address trigger on protocol ${e.protocol}`,
          reputation: e.riskScore > 80 ? "malicious" : "suspicious",
          observedCount: 1,
          lastSeen: e.timestamp
        }))
    );
  }
}
