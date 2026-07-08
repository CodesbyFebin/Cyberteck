import type { Metadata } from "next";
import {
  Fingerprint,
  Cloud,
  Database,
  Scale,
  Radar,
  ShieldAlert,
  GitBranch,
  Network,
  Bot,
  Code2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI-powered cybersecurity and compliance solutions across identity, cloud, data, GRC, threat response, and SecOps.",
  alternates: { canonical: "/solutions" },
};

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: Fingerprint,
    title: "Identity Security",
    description: "Zero-trust access and AI-IAM for every human and machine identity.",
    href: "/pillars/identity-security-zero-trust",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Posture management and workload protection across multi-cloud.",
    href: "/pillars/cloud-security",
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Discovery, classification, and protection for Indian PII.",
    href: "/pillars/data-security",
  },
  {
    icon: Scale,
    title: "Governance, Risk & Compliance",
    description: "Continuous evidence and audit-ready reporting.",
    href: "/pillars/governance-policy-compliance",
  },
  {
    icon: Radar,
    title: "Threat Detection & Response",
    description: "AI-correlated detection across every surface and identity.",
    href: "/pillars/vulnerability-exposure-management",
  },
  {
    icon: ShieldAlert,
    title: "Vulnerability Management",
    description: "Prioritized, context-aware remediation of real exposure.",
    href: "/pillars/vulnerability-exposure-management",
  },
  {
    icon: GitBranch,
    title: "Third-Party Risk Management",
    description: "Continuous assessment of vendors and supply-chain risk.",
    href: "/pillars/risk-management",
  },
  {
    icon: Network,
    title: "AI Security",
    description: "Guardrails, red-teaming, and governance for LLMs.",
    href: "/pillars/ai-security-governance",
  },
  {
    icon: Bot,
    title: "SecOps Automation & Orchestration",
    description: "Agentic triage and response without the burnout.",
    href: "/pillars/secops-automation",
  },
  {
    icon: Code2,
    title: "Application Security",
    description: "DevSecOps pipelines that ship secure software faster.",
    href: "/pillars/application-security",
  },
];

const WHY = [
  { title: "AI-Native by Design", description: "Agentic workflows do the manual 99%." },
  { title: "End-to-End Coverage", description: "Every surface, identity, and workload." },
  { title: "Seamless Integration", description: "Open APIs and pre-built connectors." },
  { title: "Measurable Impact", description: "Risk reduced, audits faster, liability lower." },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(139,92,246,0.16), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            Solutions
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Intelligent Solutions.
            <br />
            <span className="text-gradient">Smarter Security. Better Outcomes.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            CyberTeck's AI-powered solutions help organizations prevent,
            detect, respond, and adapt — across every surface, identity, and
            workload.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Our Solutions Portfolio
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <a
                key={solution.title}
                href={solution.href}
                className="surface-card group flex flex-col p-6 transition-colors hover:border-accent-blue-light"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                  <solution.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {solution.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-secondary">
                  {solution.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Why Choose CyberTeck Solutions?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item) => (
              <div key={item.title} className="glass-panel p-6">
                <h3 className="text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/book-assessment">Find the Right Solution</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
