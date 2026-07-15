"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Faithful port of cyberteck.in src/pages/Home.tsx, adapted for the Next.js
 * App Router (next/link instead of the custom setView router).
 */

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Terminal,
  Lock,
  Activity,
  ChevronRight,
  FileCheck,
  Globe2,
  Cpu,
  Download,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

export default function Home() {
  const [activePillarTab, setActivePillarTab] = useState(0);

  const pillars = [
    {
      title: "Identity Security & Zero Trust",
      desc: "Verify every access request continuously. Identity risk analysis with automated continuous posture validation.",
      score: 89,
      metrics: [
        { label: "High Risk Identities", value: "248", trend: "+18.3% last month" },
        { label: "Privileged Accounts", value: "1,356", trend: "Monitored Real-time" },
        { label: "Access Decisions (24h)", value: "12,847", trend: "92.1% Allowed" },
      ],
      capabilities: [
        "IGA (Identity Governance)",
        "Just-in-Time Access (JIT)",
        "Behavioral Anomaly Detection",
        "Adaptive Multi-Factor Auth",
      ],
    },
    {
      title: "Cloud & Data Protection",
      desc: "Secure multi-cloud postures, detect public access drifts, and classify PII automatically according to DPDP provisions.",
      score: 91,
      metrics: [
        { label: "Risks Identified", value: "1,876", trend: "+20.4% last month" },
        { label: "Data Assets Scanned", value: "48,932", trend: "100% catalogued" },
        { label: "Encrypted DB Assets", value: "98.7%", trend: "Fully Compliant" },
      ],
      capabilities: [
        "CSPM & CWPP Integration",
        "Data Loss Prevention (DLP)",
        "Sensitive Data Cataloguing",
        "Automated Encryption Scans",
      ],
    },
    {
      title: "AI Compliance Automation",
      desc: "Instant compliance posture audits matching CERT-In, RBI Cyber guidelines, and the Digital Personal Data Protection Act.",
      score: 98,
      metrics: [
        { label: "Overall Score", value: "98%", trend: "A-Grade Audit Readiness" },
        { label: "Controls Monitored", value: "1,248", trend: "Real-time Verification" },
        { label: "Hours Saved / Month", value: "1,200+", trend: "Automated Evidence Engine" },
      ],
      capabilities: [
        "DPDP Act Audit Builder",
        "6-Hour CERT-In Incident SOP",
        "Automated Compliance Auditing",
        "Regulatory Change Scanners",
      ],
    },
    {
      title: "AI-SOC Threat Hunting",
      desc: "Predict, capture, and isolate active adversary sessions automatically with zero human latency.",
      score: 94,
      metrics: [
        { label: "Threat Events Analyzed", value: "2.4B+", trend: "Every 24 Hours" },
        { label: "Active Incidents Tracked", value: "12", trend: "Fully Quarantined" },
        { label: "Avg Resolution Time", value: "28s", trend: "90% Faster than Legacy" },
      ],
      capabilities: [
        "APT-41 Exfiltration Blockers",
        "Automated Active Playbooks",
        "Centralized Event Correlation",
        "Web Application Firewall (WAF) Triggers",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24 pb-20 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 z-10 relative">
              <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
                <Globe2 className="h-4 w-4" />
                <span>India's #1 AI-Native Cybersecurity & Compliance OS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Secure India's Digital Future. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  AI-Native. Compliant. Unstoppable.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                CyberTeck delivers India's premier integrated security operations
                platform. Predict advanced threats, automate sovereign data
                compliance, and secure enterprise identities with unified telemetry.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-assessment"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  <span>Launch Workspace</span>
                </Link>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-slate-900">
                <div className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-400">DPDP Act Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span className="text-xs font-semibold text-slate-400">CERT-In Aligned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-400">RBI Cyber compliant</span>
                </div>
              </div>
            </div>

            {/* Right Telemetry Graphic Mockup */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-20 blur-xl"></div>

              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                    <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                    <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    CyberTeck OS Live Telemetry
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-cyan-500/20">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">Postponed Threats</div>
                    <div className="text-3xl font-bold text-cyan-400 mt-1">12,847</div>
                    <div className="text-[8px] text-emerald-500 mt-0.5 uppercase tracking-tighter">
                      ● Zero active escapees
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-indigo-500/20">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">Compliance Posture</div>
                    <div className="text-3xl font-bold text-indigo-400 mt-1">98.2%</div>
                    <div className="text-[8px] text-indigo-400 mt-0.5 uppercase tracking-tighter">
                      Fully Cert-In Certified
                    </div>
                  </div>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  <div className="rounded bg-slate-950/80 p-2 border-l-2 border-rose-500 flex justify-between">
                    <div>
                      <span className="text-rose-500 font-bold uppercase text-[9px]">[CRITICAL]</span>
                      <p className="text-[10px] text-slate-300 mt-0.5">APT-41 Identity Exfiltration Blocked</p>
                    </div>
                    <span className="text-[9px] text-slate-500">Active</span>
                  </div>
                  <div className="rounded bg-slate-950/80 p-2 border-l-2 border-emerald-500 flex justify-between">
                    <div>
                      <span className="text-emerald-500 font-bold uppercase text-[9px]">[SECURITY]</span>
                      <p className="text-[10px] text-slate-300 mt-0.5">Continuous DPDP Act audit passed</p>
                    </div>
                    <span className="text-[9px] text-slate-500">Compliant</span>
                  </div>
                  <div className="rounded bg-slate-950/80 p-2 border-l-2 border-amber-500 flex justify-between">
                    <div>
                      <span className="text-amber-500 font-bold uppercase text-[9px]">[WARNING]</span>
                      <p className="text-[10px] text-slate-300 mt-0.5">Public asset drift isolation in BKC core</p>
                    </div>
                    <span className="text-[9px] text-slate-500">Mitigating</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Threat Engine Connected</span>
                  </span>
                  <span>Port 443 SECURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust slider */}
      <TrustBar />

      {/* The CyberTeck Moats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">The CyberTeck Moats</h2>
          <p className="text-3xl font-bold tracking-tight">Our Five Sovereign Advantages</p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Why India's high-risk financial, government, and corporate enterprises
            choose CyberTeck OS over legacy foreign toolsets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "AI-First Defense", desc: "Agentic AI built for indian threat models, predicting and blocking attacks autonomously.", icon: Cpu },
            { title: "Compliance-Native", desc: "Out-of-the-box controls mapped to DPDP 2023, CERT-In, RBI, and SEBI circulars.", icon: FileCheck },
            { title: "Unified Platform", desc: "Single software agent for CSPM, Threat Intel, Compliance, and Identity PAM.", icon: Shield },
            { title: "Sovereign Infra", desc: "Trained and hosted locally on secure AWS & GCP India data centers for low latency.", icon: Globe2 },
            { title: "Audit-Ready Logs", desc: "Autopilot evidence compilation so you pass bank and regulatory audits effortlessly.", icon: Terminal },
          ].map((moat) => {
            const Icon = moat.icon;
            return (
              <div
                key={moat.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-slate-900/80"
              >
                <div className="mb-3 rounded-lg bg-slate-950 p-2 w-fit text-cyan-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white mb-2">{moat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{moat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Platform Security Pillars Showcase */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left: Tab choices */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">10 Security Pillars</h2>
              <h3 className="text-3xl font-bold tracking-tight">The CyberTeck & Compliance OS</h3>
              <p className="text-slate-400 text-sm">
                Select a major security pillar to inspect its live metric profiles and capabilities.
              </p>
            </div>

            <div className="space-y-2">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.title}
                  onClick={() => setActivePillarTab(idx)}
                  className={`w-full rounded-xl text-left p-4 border transition-all duration-300 flex justify-between items-center ${
                    activePillarTab === idx
                      ? "border-cyan-500/40 bg-cyan-950/20 text-white shadow-lg"
                      : "border-slate-800 bg-slate-900/30 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">{pillar.title}</div>
                    <p className="text-xs text-slate-500 truncate max-w-[200px] mt-0.5">{pillar.desc}</p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      activePillarTab === idx ? "text-cyan-400 transform translate-x-1" : ""
                    }`}
                  />
                </button>
              ))}
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
            >
              <span>Explore all 10 Security Pillars</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Selected Tab high-fidelity card */}
          <div className="lg:col-span-8 mt-10 lg:mt-0 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-10 blur-xl"></div>

            <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-800">
                <div>
                  <h4 className="text-xl font-bold text-white">{pillars[activePillarTab].title}</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed max-w-lg">
                    {pillars[activePillarTab].desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center space-x-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5">
                  <Activity className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase">Security score</span>
                    <span className="text-lg font-mono font-bold text-cyan-400">
                      {pillars[activePillarTab].score}/100
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars[activePillarTab].metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <span className="text-xs text-slate-500 font-medium">{m.label}</span>
                    <div className="text-2xl font-mono font-bold text-white mt-1">{m.value}</div>
                    <span className="text-[10px] font-semibold text-emerald-500 mt-1 block font-mono">
                      {m.trend}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Enterprise-Grade Features
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillars[activePillarTab].capabilities.map((cap) => (
                    <div key={cap} className="flex items-center space-x-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4">
                <Link
                  href="/book-assessment"
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  Configure and Test
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Blueprint PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_50%)]">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Case Studies & Validation</h2>
          <p className="text-3xl font-bold tracking-tight">Sovereign Protection. Realized.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              bank: "State Bank of India (SBI)",
              desc: "SBI secured central data pipelines and verified 500,000 internal employee identities using CyberTeck's zero-trust Identity Governance model.",
              impact: "99.8% Anomaly Interception",
              category: "Banking (BFSI)",
            },
            {
              bank: "BHARTI AIRTEL",
              desc: "CyberTeck's continuous CSPM engine actively monitors multi-cloud data storage clusters to prevent sensitive consumer leakages.",
              impact: "Zero Public Bucket Drifts",
              category: "Telecommunications",
            },
            {
              bank: "NPCI / BHIM UPI",
              desc: "Integrated automated compliance engine into UPI core APIs. Compilation of SEBI and RBI audit logs reduced from weeks to seconds.",
              impact: "100% Real-time Audit Score",
              category: "Financial Technology",
            },
          ].map((story) => (
            <div
              key={story.bank}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <span className="inline-block rounded bg-cyan-950/50 px-2 py-0.5 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                  {story.category}
                </span>
                <h4 className="text-lg font-bold text-white uppercase">{story.bank}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{story.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <div>
                  <span className="block text-[8px] font-mono text-slate-500 uppercase">Impact reached</span>
                  <span className="text-sm font-bold text-cyan-400">{story.impact}</span>
                </div>
                <Link
                  href="/company-about"
                  className="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center space-x-1"
                >
                  <span>View Story</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="rounded-2xl bg-gradient-to-tr from-slate-900 via-cyan-950/20 to-slate-900 p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_40%)]"></div>

          <div className="space-y-4 max-w-2xl z-10 relative">
            <h3 className="text-3xl font-bold tracking-tight">Ready to Securing Your Operations?</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Calculate your direct cybersecurity posture compliance score matching
              Indian DPDP, CERT-In and RBI rules instantly. Get your custom advisory
              generated directly by our AI engine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10 relative">
            <Link
              href="/book-assessment"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              Start Free Assessment
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-slate-800 bg-slate-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              Contact Sales Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
