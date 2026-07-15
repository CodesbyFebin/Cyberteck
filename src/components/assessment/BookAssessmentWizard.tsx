"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Ported from cyberteck.in src/pages/BookAssessment.tsx and adapted for the
 * Next.js production app. The original POSTed to an Express `/api/assessment/submit`
 * endpoint; the scoring + advisory generation is reproduced locally here so the
 * wizard works as a fully static, self-contained App Router route.
 */

import React, { useState } from "react";
import {
  ChevronRight,
  FileCheck,
  Activity,
  Download,
  CheckCircle,
  Building,
  CheckSquare,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

interface AssessmentInput {
  companyName: string;
  industry: string;
  size: string;
  complianceNeeds: string[];
  auditPreparedness: string;
  activeVulnerabilities: string;
  dataStored: string[];
}

// Local reproduction of the server posture-scoring heuristic.
function computeAssessment(input: AssessmentInput): { score: number; advice: string } {
  let score = 90;

  const vulnPenalty: Record<string, number> = {
    none: 0,
    low: 6,
    medium: 18,
    high: 32,
  };
  score -= vulnPenalty[input.activeVulnerabilities] ?? 10;

  const auditPenalty: Record<string, number> = {
    prepared: 0,
    partial: 10,
    unprepared: 22,
  };
  score -= auditPenalty[input.auditPreparedness] ?? 10;

  // Sensitive data exposure increases the risk surface.
  score -= Math.min(input.dataStored.length * 4, 16);

  // Broader compliance obligations without preparation increase exposure.
  if (input.complianceNeeds.length >= 4 && input.auditPreparedness !== "prepared") {
    score -= 6;
  }

  score = Math.max(28, Math.min(98, Math.round(score)));

  const gaps: string[] = [];
  if (input.activeVulnerabilities === "high" || input.activeVulnerabilities === "medium") {
    gaps.push(
      "- **Vulnerability Management**: Prioritize patching exposed API gateways and enable continuous vulnerability scanning across middle-tier services."
    );
  }
  if (input.auditPreparedness !== "prepared") {
    gaps.push(
      "- **Audit Readiness**: Automate evidence collection so CERT-In 6-hour reporting and DPDP audit trails compile without manual effort."
    );
  }
  if (input.dataStored.includes("Citizen PII (Sovereign Data)")) {
    gaps.push(
      "- **Data Sovereignty**: Enforce DPDP Section 8 consent + erasure workflows and keep Citizen PII within Mumbai sovereign zones."
    );
  }
  if (input.complianceNeeds.includes("RBI Cyber Security Guidelines")) {
    gaps.push(
      "- **Financial Controls**: Enforce phishing-resistant MFA on all admin consoles to satisfy RBI FinSec mandates."
    );
  }
  if (gaps.length === 0) {
    gaps.push(
      "- **Continuous Assurance**: Maintain your strong posture with automated drift detection and quarterly red-team validation."
    );
  }

  const advice = [
    `### Executive Summary`,
    `${input.companyName} operates in the ${input.industry} sector at ${input.size} scale. Based on the declared parameters, your calculated sovereign risk posture is ${score}/100.`,
    ``,
    `### Priority Remediation`,
    ...gaps,
    ``,
    `### Recommended CyberTeck Modules`,
    `- **AI-SOC & Threat Hunting**: Real-time isolation of active incidents grounded on BKC-1 telemetry.`,
    `- **Compliance Automation**: Direct mapping to ${input.complianceNeeds.join(", ") || "your selected frameworks"}.`,
  ].join("\n");

  return { score, advice };
}

export default function BookAssessmentWizard() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; advice: string } | null>(
    null
  );

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("BFSI");
  const [size, setSize] = useState("medium");
  const [complianceNeeds, setComplianceNeeds] = useState<string[]>([
    "DPDP Act (2023)",
    "CERT-In SOP",
  ]);
  const [auditPreparedness, setAuditPreparedness] = useState("partial");
  const [activeVulnerabilities, setActiveVulnerabilities] = useState("low");
  const [dataStored, setDataStored] = useState<string[]>([
    "Citizen PII (Sovereign Data)",
  ]);

  const handleToggleCompliance = (name: string) => {
    setComplianceNeeds((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const handleToggleData = (name: string) => {
    setDataStored((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const submitAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate compute latency, then produce the advisory locally.
    setTimeout(() => {
      const computed = computeAssessment({
        companyName,
        industry,
        size,
        complianceNeeds,
        auditPreparedness,
        activeVulnerabilities,
        dataStored,
      });
      setResult(computed);
      setStep(4);
      setSubmitting(false);
    }, 900);
  };

  const resetForm = () => {
    setStep(1);
    setResult(null);
    setCompanyName("");
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <FileCheck className="h-4 w-4" />
            <span>AI-Powered Regulatory Compliance Auditing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Book Posture Assessment
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Audit your organization's digital topology against the Digital
            Personal Data Protection Act (DPDP) and CERT-In templates to compile
            instant actionable advice.
          </p>
        </div>

        <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(6,182,212,0.05),transparent_40%)]"></div>

          {step <= 3 && (
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/80">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                Step {step} of 3
              </span>
              <div className="flex space-x-2">
                <span
                  className={`h-2 w-8 rounded-full transition-colors ${
                    step >= 1 ? "bg-cyan-500" : "bg-slate-800"
                  }`}
                ></span>
                <span
                  className={`h-2 w-8 rounded-full transition-colors ${
                    step >= 2 ? "bg-cyan-500" : "bg-slate-800"
                  }`}
                ></span>
                <span
                  className={`h-2 w-8 rounded-full transition-colors ${
                    step >= 3 ? "bg-cyan-500" : "bg-slate-800"
                  }`}
                ></span>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <Building className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>Enterprise Profile</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tell us about your organization to contextualize regulatory
                standards.
              </p>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-2">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Mumbai Merchant Bank Ltd"
                    className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-2">
                      Industry Sector
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white"
                    >
                      <option value="BFSI">Banking & Finance (BFSI)</option>
                      <option value="Government">Government & Sovereign</option>
                      <option value="Healthcare">Healthcare Conglomerates</option>
                      <option value="Logistics">Logistics & Supply Chain</option>
                      <option value="Fintech">Fintech & Payments</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-2">
                      Organization Scale
                    </label>
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white"
                    >
                      <option value="small">Small Scale (Under 100 Employees)</option>
                      <option value="medium">Mid Market (100 - 1000 Employees)</option>
                      <option value="large">
                        Large Enterprise (1000 - 5000 Employees)
                      </option>
                      <option value="enterprise">
                        Sovereign Enterprise (5000+ Employees)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() =>
                    companyName.trim()
                      ? setStep(2)
                      : alert("Please input your company name first.")
                  }
                  className="rounded-lg bg-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 flex items-center space-x-1"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <CheckSquare className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>Compliance & Sovereign Audits</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose the statutory guidelines you need compliance advisory
                mapping for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "DPDP Act (2023)",
                  "CERT-In Directions",
                  "RBI Cyber Security Guidelines",
                  "SEBI Compliance Standards",
                  "ISO 27001 ISMS",
                  "NIST Cybersecurity Framework",
                ].map((name) => {
                  const selected = complianceNeeds.includes(name);
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => handleToggleCompliance(name)}
                      className={`flex items-center space-x-3 rounded-xl border p-4 text-left transition-all ${
                        selected
                          ? "border-cyan-500/40 bg-cyan-950/20 text-white"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span
                        className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                          selected
                            ? "bg-cyan-500 border-cyan-500"
                            : "border-slate-700 bg-slate-900"
                        }`}
                      >
                        {selected && (
                          <CheckCircle className="h-3 w-3 text-slate-950" />
                        )}
                      </span>
                      <span className="text-xs font-semibold">{name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="rounded-lg bg-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 flex items-center space-x-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0" />
                <span>Security Risk Assessment</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Summarize known internal system risks and sensitive data
                parameters.
              </p>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-2">
                      Unpatched Vulnerabilities Severity
                    </label>
                    <select
                      value={activeVulnerabilities}
                      onChange={(e) => setActiveVulnerabilities(e.target.value)}
                      className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white"
                    >
                      <option value="none">
                        None (Strict active patch management)
                      </option>
                      <option value="low">
                        Low (Minor configuration adjustments)
                      </option>
                      <option value="medium">
                        Medium (Unpatched internal middle-tier APIs)
                      </option>
                      <option value="high">
                        High (Exposed API gateways / public DB drifts)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-2">
                      Internal Audit Readiness
                    </label>
                    <select
                      value={auditPreparedness}
                      onChange={(e) => setAuditPreparedness(e.target.value)}
                      className="w-full rounded bg-slate-950 border border-slate-800 p-3 text-white"
                    >
                      <option value="prepared">
                        Excellent (Always audit ready, detailed logs)
                      </option>
                      <option value="partial">
                        Partial (Manually compile evidence files)
                      </option>
                      <option value="unprepared">
                        Unprepared (Ad-hoc assessments prior to regulatory audits)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-2">
                    Critical Data Storage profile (Select multiple)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Citizen PII (Sovereign Data)",
                      "Financial & Credit Card Records",
                      "Medical / Health Records",
                      "Sovereign Defense Secrets",
                      "Corporate Intellectual Property",
                    ].map((name) => {
                      const selected = dataStored.includes(name);
                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => handleToggleData(name)}
                          className={`flex items-center space-x-3 rounded-lg border p-3 text-left transition-all ${
                            selected
                              ? "border-cyan-500/40 bg-cyan-950/20 text-white"
                              : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <span
                            className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                              selected
                                ? "bg-cyan-500 border-cyan-500"
                                : "border-slate-700 bg-slate-900"
                            }`}
                          >
                            {selected && (
                              <CheckCircle className="h-3 w-3 text-slate-950" />
                            )}
                          </span>
                          <span>{name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={submitAssessment}
                  disabled={submitting}
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 flex items-center space-x-2"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Compiling Posture Audit...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Security Advisory</span>
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 4 && result && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-800/80 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    Sovereign Audit Completed
                  </span>
                  <h2 className="text-xl font-bold text-white uppercase">
                    {companyName} Advisory
                  </h2>
                </div>

                <div className="flex items-center space-x-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <Activity className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase">
                      calculated risk Score
                    </span>
                    <span className="text-xl font-mono font-bold text-cyan-400">
                      {result.score}/100
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-950 p-6 border border-slate-800/60 leading-relaxed text-slate-300 text-xs sm:text-sm space-y-4 font-sans">
                {result.advice.split("\n").map((line, idx) => {
                  if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={idx}
                        className="text-base font-bold text-cyan-400 uppercase tracking-wide border-b border-slate-900 pb-2 mt-6 mb-2"
                      >
                        {line.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("- **") || line.startsWith("1. **")) {
                    const parsed = line
                      .replace(/^\d+\.\s\*\*/, "")
                      .replace(/^-\s\*\*/, "");
                    const [title, desc] = parsed.split("**:");
                    return (
                      <div key={idx} className="flex items-start space-x-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                        <p>
                          <strong className="text-white">{title}</strong>: {desc}
                        </p>
                      </div>
                    );
                  }
                  if (line.trim().length === 0) return null;
                  return <p key={idx}>{line}</p>;
                })}
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 justify-between items-center">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  Configure New Assessment
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Your official executive posture audit PDF download has been initiated."
                      )
                    }
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:from-cyan-400 hover:to-blue-500 flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download CISO PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
