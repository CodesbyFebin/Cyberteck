import type { Metadata } from "next";
import {
  FileCheck2,
  ShieldCheck,
  BadgeCheck,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Continuous, audit-ready compliance for DPDP, CERT-In, RBI, SEBI, ISO 27001, SOC 2, and GDPR — built for Indian enterprises.",
  alternates: { canonical: "/compliance" },
};

type Framework = { name: string; note: string };

const FRAMEWORKS: Framework[] = [
  { name: "DPDP Act 2023", note: "India's digital personal data protection law" },
  { name: "CERT-In", note: "6-hour incident reporting & log retention" },
  { name: "RBI Guidelines", note: "Master Direction & FREE-AI framework" },
  { name: "SEBI CSCRF", note: "Cyber governance for the securities market" },
  { name: "ISO 27001", note: "Information security management" },
  { name: "SOC 2", note: "Service organization controls" },
  { name: "GDPR", note: "EU data protection (for exporters)" },
  { name: "PCI DSS", note: "Payment card industry security" },
];

const CAPABILITIES = [
  "Continuous control monitoring & evidence collection",
  "Automated RoPA, consent, and DSAR workflows",
  "Regulatory change tracking across DPDP, CERT-In, RBI, SEBI",
  "Audit-ready reports with immutable trails",
  "Policy-as-code mapped to global frameworks",
  "Third-party & vendor compliance assessment",
];

const CERTIFICATIONS = ["ISO 27001", "SOC 2 Type II", "GDPR Ready", "PCI DSS Aligned"];

export default function CompliancePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(34,211,238,0.14), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Compliance
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Built for Compliance.
            <br />
            <span className="text-gradient">Designed for Trust.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Compliance made simple. Confidence made possible. Continuous,
            audit-ready adherence to the frameworks that matter for Indian
            enterprises.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Global Frameworks & Regulations Supported
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORKS.map((fw) => (
              <div key={fw.name} className="surface-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">
                  {fw.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{fw.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Comprehensive Compliance Capabilities
            </h2>
            <ul className="mt-6 space-y-3">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-text-secondary">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-green"
                    aria-hidden="true"
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Certifications & Attestations
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-chip border border-border-subtle bg-white/5 px-4 py-2 text-sm text-text-secondary"
                >
                  <BadgeCheck className="h-4 w-4 text-accent-green" aria-hidden="true" />
                  {cert}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-card border border-border-subtle bg-bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                Compliance Resources
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Guides, templates, and checklists to accelerate your audit
                readiness.
              </p>
              <Button href="/resources" className="mt-4">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
