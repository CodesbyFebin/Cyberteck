/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Compliance.tsx.
 */

import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, AlertOctagon } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance — Indian Statutory Alignments",
  description:
    "Unify disconnected statutory compliance targets (DPDP, CERT-In, RBI, ISO 27001) under one continuous AI-Native auditing engine. Stay compliant and audit-ready automatically.",
};

export default function Compliance() {
  const frameworks = [
    {
      name: "DPDP Act (2023)",
      org: "Government of India",
      desc: "Mandates strict personal data protection, revocable consent frameworks, and local data residency for Indian citizens.",
      penalties: "Direct penalties scaling up to ₹250 Crores for compliance failures.",
      points: [
        "Consent manager integration rules",
        "Right to access and erase logs",
        "Mandatory local data processing audits",
        "Sovereign cross-border storage guidelines",
      ],
    },
    {
      name: "CERT-In Incident Mandate",
      org: "Indian Computer Emergency Response Team",
      desc: "Requires immediate forensically verified incident reporting for ransomware, exfiltration, and attacks within 6 hours of discovery.",
      penalties: "Failure to report exposes enterprises to regulatory operations shut downs.",
      points: [
        "6-hour automated report log generation",
        "central telemetry event tracing",
        "Encrypted backup logs verification",
        "Authorized point-of-contact audit records",
      ],
    },
    {
      name: "RBI Cyber Security Framework",
      org: "Reserve Bank of India",
      desc: "Mandates phishing-resistant MFA, active database quarantines, and real-time transaction telemetry logs for all banks and fintech platforms.",
      penalties: "Audit failures results in suspension of commercial merchant trading.",
      points: [
        "Phishing-resistant MFA enforcement",
        "Dynamic identity PAM checks",
        "Centralized encrypted ledger audits",
        "WAF transaction isolation rules",
      ],
    },
    {
      name: "ISO 27001:2022 ISMS",
      org: "International Standards Org",
      desc: "Comprehensive global standard for building, operating, and auditing an Information Security Management System (ISMS).",
      penalties: "Non-conformance leads to loss of essential enterprise client partnerships.",
      points: [
        "Management of technical security vulnerabilities",
        "Access control governance",
        "Physical and digital assets security catalogs",
        "Continuous operations recovery drills",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <ShieldCheck className="h-4 w-4" />
            <span>Sovereign Compliance & Statutory Controls</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Indian Statutory Alignments
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Unify disconnected statutory compliance targets under one continuous
            AI-Native auditing engine. Stay compliant and audit-ready automatically.
          </p>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="rounded-2xl border border-slate-900 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{fw.name}</h3>
                  <span className="rounded bg-slate-950 border border-slate-800 px-2.5 py-1 text-[10px] font-mono font-bold uppercase text-cyan-400">
                    {fw.org}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{fw.desc}</p>

                {/* Audit points checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Continuous Audit Checks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fw.points.map((pt) => (
                      <div key={pt} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Penalties card */}
              <div className="mt-8 rounded-xl bg-rose-950/20 border border-rose-500/10 p-4 flex items-start space-x-3">
                <AlertOctagon className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[8px] font-mono text-rose-500 uppercase font-bold tracking-wider">
                    Statutory Exposure Fine
                  </span>
                  <p className="text-xs text-slate-400 mt-1">{fw.penalties}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
