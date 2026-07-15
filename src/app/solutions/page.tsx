/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Solutions.tsx.
 */

import React from "react";
import type { Metadata } from "next";
import {
  Shield,
  Lock,
  Database,
  Terminal,
  Activity,
  FileCheck,
  Globe,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — 10 Security & Compliance Pillars",
  description:
    "CyberTeck merges 10 core cybersecurity and compliance pillars to provide uncompromised resilience for Indian banks, businesses, and critical infrastructure.",
};

export default function Solutions() {
  const pillars = [
    { id: "01", name: "Identity Security & Zero Trust", desc: "Enforce continuous identity verification. Eliminates legacy session leaks across public and private topologies.", icon: Lock, impact: "Prevents privileged identity hijack" },
    { id: "02", name: "AI Cloud Security & Data Protection", desc: "Continuous multi-cloud posture checks (CSPM) and automatic PII indexing under sovereign legal rules.", icon: Database, impact: "Stops database leakage and public S3 bucket drift" },
    { id: "03", name: "AI-Native Identity & Access Management (AI-IAM)", desc: "Autonomous joiner-mover-leaver access changes. Features behavioral anomaly scoring for privileged commands.", icon: Shield, impact: "Automates complex RBAC roles" },
    { id: "04", name: "AI-Native Compliance Automation", desc: "Auto-compilation of statutory evidence reports for CERT-In, RBI, SEBI, and India's newly enacted DPDP guidelines.", icon: FileCheck, impact: "Provides continuous audit readiness" },
    { id: "05", name: "AI-Native Threat Intelligence", desc: "Scans active underground channels and exfiltration vectors to block malicious IPs dynamically.", icon: Terminal, impact: "Stops advanced persistent threats (APTs)" },
    { id: "06", name: "AI-Native Security Operations (AI-SOC)", desc: "Consolidates central telemetry events into a single autonomous threat containment panel.", icon: Activity, impact: "Sub-minute threat mitigation response" },
    { id: "07", name: "Threat Hunting & Proactive Intelligence", desc: "Automated red teaming and penetration test simulations run directly against enterprise test boundaries.", icon: Globe, impact: "Finds system vulnerabilities before adversaries do" },
    { id: "08", name: "AI Security Operations & Automation (SecOps)", desc: "Inject secure container scans and dependency audits straight into live development CI/CD pipelines.", icon: Cpu, impact: "Accelerates secure code deployments" },
    { id: "09", name: "AI-Native Risk Management", desc: "Calculates enterprise-wide financial risk exposure and compiles boardroom security posture summaries.", icon: Shield, impact: "Provides clear, non-technical risk overview" },
    { id: "10", name: "AI-Powered Governance, Policy & Compliance (GPC)", desc: "Maps and unifies complex corporate security compliance targets under one single pane of glass.", icon: FileCheck, impact: "Consolidates disjointed control frameworks" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Solutions Hero */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Shield className="h-4 w-4" />
            <span>CyberTeck Platform Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Sovereign Protection
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our platform merges 10 core cybersecurity and compliance pillars to provide
            uncompromised resilience for Indian banks, businesses, and critical
            infrastructure.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="rounded-2xl border border-slate-900 bg-slate-900/60 p-6 sm:p-8 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/10 text-white shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-600 font-bold">PILLAR {p.id}</span>
                </div>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">{p.name}</h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">{p.desc}</p>

                <div className="border-t border-slate-950 pt-4 flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-bold uppercase tracking-tighter shrink-0">
                    Major outcome:
                  </span>
                  <span className="truncate">{p.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
