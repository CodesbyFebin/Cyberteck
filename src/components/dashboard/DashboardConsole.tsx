"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Ported from cyberteck.in src/pages/Dashboard.tsx and adapted for the Next.js
 * production app. The original relied on Express `/api/*` backend endpoints
 * (threats feed, mitigate, trigger, gemini copilot). Those are replaced here
 * with the ported client-side threat-intelligence mock service so the console
 * works as a fully static, self-contained App Router route.
 */

import React, { useState, useEffect, useCallback } from "react";
import { Terminal, RefreshCw, PlusCircle, X, AlertTriangle } from "lucide-react";
import { ThreatAlert, AuditLog, ComplianceCheck } from "../../lib/dashboard-types";
import { UnifiedThreatIntelMockService } from "../../lib/services/threat-intelligence";

import { RiskScoreWidget } from "./RiskScoreWidget";
import { ThreatFeedWidget } from "./ThreatFeedWidget";
import { ComplianceMatrixWidget } from "./ComplianceMatrixWidget";
import { AuditTimelineWidget } from "./AuditTimelineWidget";
import { SecurityAssetsWidget } from "./SecurityAssetsWidget";
import { RecentFindingsWidget } from "./RecentFindingsWidget";
import { AIAdvisorWidget } from "./AIAdvisorWidget";
import { QuickActionsWidget } from "./QuickActionsWidget";
import { ComplianceTrendWidget } from "./ComplianceTrendWidget";
import { ThreatTrendWidget } from "./ThreatTrendWidget";
import { FrameworkCoverageWidget } from "./FrameworkCoverageWidget";
import { SystemHealthWidget } from "./SystemHealthWidget";

const intel = new UnifiedThreatIntelMockService();

// Seed threat alerts derived from the ported telemetry provider so the console
// has realistic data without a live backend.
function seedThreats(): ThreatAlert[] {
  const events = intel.getTelemetryProvider().getRecentEvents();
  return events
    .filter((e) => e.actionTaken !== "allowed")
    .map((e, index) => ({
      id: `ALRT-${9000 + index}`,
      timestamp: e.timestamp,
      severity:
        e.riskScore >= 90
          ? "critical"
          : e.riskScore >= 75
          ? "high"
          : e.riskScore >= 50
          ? "medium"
          : "low",
      vector: e.signatureMatch || `Suspicious ${e.protocol} activity`,
      sourceIp: e.source,
      status: e.actionTaken === "quarantined" ? "investigating" : "active",
    }));
}

function seedLogs(): AuditLog[] {
  return [
    {
      id: "LOG-001",
      timestamp: new Date().toISOString(),
      user: "system-scanner",
      action: "Initialized sovereign SOC telemetry stream",
      status: "success",
    },
    {
      id: "LOG-002",
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
      user: "ciso@cyberteck.in",
      action: "Reviewed CERT-In 6-hour reporting checklist",
      status: "success",
    },
  ];
}

export default function DashboardConsole() {
  const [threats, setThreats] = useState<ThreatAlert[]>([]);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [copilotMessages, setCopilotMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Welcome to CyberTeck OS AI Console. I am grounding my threat modeling on your active BKC-1 datacenter telemetry logs. How can I help secure your enterprise?",
    },
  ]);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [showTriggerModal, setShowTriggerModal] = useState(false);

  const [newVector, setNewVector] = useState(
    "SQLi Probe on UPI Transaction Interface"
  );
  const [newSeverity, setNewSeverity] = useState<
    "critical" | "high" | "medium" | "low"
  >("critical");
  const [newSource, setNewSource] = useState("103.112.44.18");

  const [complianceChecks, setComplianceChecks] = useState<ComplianceCheck[]>([
    {
      id: "C-01",
      framework: "DPDP",
      controlId: "Sec 8(5)",
      description: "Implement explicit data protection safeguarding measures",
      status: "in-progress",
      lastAudit: "2026-07-01",
    },
    {
      id: "C-02",
      framework: "CERT-In",
      controlId: "Mandate-1",
      description:
        "Package forensic records and report within 6 hours of breach",
      status: "compliant",
      lastAudit: "2026-07-05",
    },
    {
      id: "C-03",
      framework: "RBI",
      controlId: "FinSec 4.2",
      description:
        "Enforce multi-factor authentication (MFA) on all admin consoles",
      status: "non-compliant",
      lastAudit: "2026-06-12",
    },
    {
      id: "C-04",
      framework: "ISO 27001",
      controlId: "A.12.6.1",
      description:
        "Management of technical security vulnerabilities scan pipeline",
      status: "compliant",
      lastAudit: "2026-06-30",
    },
  ]);

  const fetchData = useCallback(() => {
    setLoading(true);
    // Simulate an async telemetry sync using the local mock service.
    setTimeout(() => {
      setThreats(seedThreats());
      setLogs((prev) => (prev.length ? prev : seedLogs()));
      setLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const mitigateThreat = (id: string) => {
    setThreats((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: "mitigated", actionTaken: "Auto-isolated" }
          : t
      )
    );
    setLogs((prev) => [
      {
        id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: new Date().toISOString(),
        user: "soc-automation",
        action: `Mitigated & isolated threat alert: ${id}`,
        status: "success",
      },
      ...prev,
    ]);
  };

  const triggerThreat = (e: React.FormEvent) => {
    e.preventDefault();
    const newAlert: ThreatAlert = {
      id: `ALRT-${Math.floor(9000 + Math.random() * 900)}`,
      timestamp: new Date().toISOString(),
      severity: newSeverity,
      vector: newVector,
      sourceIp: newSource,
      status: "active",
    };
    setThreats((prev) => [newAlert, ...prev]);
    setLogs((prev) => [
      {
        id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: new Date().toISOString(),
        user: "admin@cyberteck.in",
        action: `Injected simulated threat vector: ${newVector}`,
        status: "warning",
      },
      ...prev,
    ]);
    setShowTriggerModal(false);
  };

  const toggleComplianceStatus = (id: string) => {
    setComplianceChecks((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextStatus =
            c.status === "compliant"
              ? "non-compliant"
              : c.status === "non-compliant"
              ? "in-progress"
              : "compliant";
          return {
            ...c,
            status: nextStatus,
            lastAudit: new Date().toISOString().split("T")[0],
          };
        }
        return c;
      })
    );
    setLogs((prev) => [
      {
        id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: new Date().toISOString(),
        user: "admin@cyberteck.in",
        action: `Modified compliance control status for: ${id}`,
        status: "success",
      },
      ...prev,
    ]);
  };

  const sendCopilotMessage = async (content: string) => {
    const userMsg = { role: "user" as const, content };
    setCopilotMessages((prev) => [...prev, userMsg]);
    setSendingMessage(true);

    // Local heuristic "AI" response grounded on the mock threat summary.
    await new Promise((r) => setTimeout(r, 700));
    const summary = intel.getThreatSummary();
    const lower = content.toLowerCase();
    let reply: string;
    if (lower.includes("dpdp") || lower.includes("complian")) {
      const compliant = complianceChecks.filter(
        (c) => c.status === "compliant"
      ).length;
      reply = `### Compliance Posture\nYou currently satisfy ${compliant}/${complianceChecks.length} tracked controls. Priority gap: enforce MFA on admin consoles (RBI FinSec 4.2) to reach DPDP Section 8(5) alignment.`;
    } else if (lower.includes("threat") || lower.includes("scan")) {
      reply = `### Threat Snapshot\nActive incidents: ${summary.activeIncidentsCount}. Unresolved critical vulnerabilities: ${summary.unresolvedCriticalVulnerabilities}. Malicious IOCs observed: ${summary.maliciousIocsCount}. Recommend immediate isolation of quarantined APT-41 probe sources.`;
    } else {
      reply = `### Analysis\nGrounding on BKC-1 telemetry: enterprise risk score is ${summary.riskScore}/100 with ${summary.observedCampaigns} monitored campaigns. Ask me about DPDP compliance or an active threat scan for a deeper drill-down.`;
    }
    setCopilotMessages((prev) => [
      ...prev,
      { role: "assistant", content: reply },
    ]);
    setSendingMessage(false);
  };

  const runPostureCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLogs((prev) => [
        {
          id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
          timestamp: new Date().toISOString(),
          user: "system-scanner",
          action:
            "Initiated automated real-time corporate posture vulnerability scan",
          status: "success",
        },
        ...prev,
      ]);
    }, 1000);
  };

  const criticalCount = threats.filter(
    (t) => t.severity === "critical" && t.status !== "mitigated"
  ).length;
  const highCount = threats.filter(
    (t) => t.severity === "high" && t.status !== "mitigated"
  ).length;
  const dynamicScore = Math.max(30, 98 - criticalCount * 12 - highCount * 5);
  const compliantCount = complianceChecks.filter(
    (c) => c.status === "compliant"
  ).length;
  const compliancePercent = Math.round(
    (compliantCount / complianceChecks.length) * 100
  );

  return (
    <div className="bg-slate-950 text-white min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-cyan-400 shrink-0" />
              <span>CyberTeck OS Workspace</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Enterprise Posture Telemetry Console & Sovereign Threat Hunter
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowTriggerModal(true)}
              className="inline-flex items-center space-x-2 rounded-lg border border-rose-500/30 bg-rose-950/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:bg-rose-950/50 transition-colors"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Trigger Test Alert</span>
            </button>
            <button
              onClick={fetchData}
              disabled={loading}
              className="inline-flex items-center space-x-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span>Sync Telemetry</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 items-stretch">
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <RiskScoreWidget score={dynamicScore} />
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <QuickActionsWidget
              onTriggerAlert={() => setShowTriggerModal(true)}
              onSyncTelemetry={fetchData}
              syncing={loading}
              onAuditingCheck={runPostureCheck}
            />
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <ComplianceTrendWidget percentage={compliancePercent} />
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <ThreatTrendWidget criticalCount={criticalCount} highCount={highCount} />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <ThreatFeedWidget threats={threats} onMitigate={mitigateThreat} />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <ComplianceMatrixWidget
              checks={complianceChecks}
              onToggleStatus={toggleComplianceStatus}
            />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <AIAdvisorWidget
              messages={copilotMessages}
              onSendMessage={sendCopilotMessage}
              sending={sendingMessage}
            />
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-4">
            <FrameworkCoverageWidget />
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-4">
            <SystemHealthWidget />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <SecurityAssetsWidget />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <RecentFindingsWidget />
          </div>

          <div className="col-span-1 md:col-span-6 lg:col-span-12">
            <AuditTimelineWidget logs={logs} />
          </div>
        </div>
      </div>

      {showTriggerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={() => setShowTriggerModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <AlertTriangle className="text-rose-500 h-5 w-5 shrink-0" />
              <span>Simulate Threat Exfiltration</span>
            </h2>

            <form onSubmit={triggerThreat} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1.5">
                  Threat Attack Vector
                </label>
                <input
                  type="text"
                  value={newVector}
                  onChange={(e) => setNewVector(e.target.value)}
                  className="w-full rounded bg-slate-950 border border-slate-800 p-2 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1.5">
                    Severity Level
                  </label>
                  <select
                    value={newSeverity}
                    onChange={(e) =>
                      setNewSeverity(
                        e.target.value as "critical" | "high" | "medium" | "low"
                      )
                    }
                    className="w-full rounded bg-slate-950 border border-slate-800 p-2 text-white"
                  >
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1.5">
                    Source IP address
                  </label>
                  <input
                    type="text"
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    className="w-full rounded bg-slate-950 border border-slate-800 p-2 text-white"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-rose-600 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-colors shadow-lg shadow-rose-600/15"
              >
                Trigger Incident Simulation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
