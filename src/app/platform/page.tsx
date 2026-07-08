import type { Metadata } from "next";
import {
  Fingerprint,
  ShieldCheck,
  Cloud,
  Radar,
  Siren,
  Scale,
  Bot,
  FileBarChart,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "One AI-native platform for end-to-end cybersecurity and compliance — identity, data, cloud, threat detection, SecOps, and governance.",
  alternates: { canonical: "/platform" },
};

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Fingerprint,
    title: "Identity & Access Security",
    description:
      "Zero-trust access, AI-IAM, and continuous verification across every human and machine identity.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "Discovery, classification, and encryption for Indian PII — DPDP-ready by default.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Posture management, workload protection, and misconfiguration defense across multi-cloud.",
  },
  {
    icon: Radar,
    title: "Threat Detection",
    description:
      "AI-correlated detection across identity, endpoint, network, and cloud telemetry.",
  },
  {
    icon: Siren,
    title: "Security Operations",
    description:
      "Agentic triage, investigation, and response — an autonomous SOC without the burnout.",
  },
  {
    icon: Scale,
    title: "Governance & Compliance",
    description:
      "Continuous evidence, control mapping, and audit-ready reporting for DPDP, CERT-In, RBI, SEBI.",
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "Self-healing remediation and policy-as-code that acts after human approval.",
  },
  {
    icon: FileBarChart,
    title: "Reporting & Insights",
    description:
      "Unified posture scoring and executive dashboards across every security domain.",
  },
];

const INTEGRATIONS = ["ServiceNow", "Splunk", "Palo Alto", "Okta", "AWS", "Azure"];

const AUDIENCES = [
  {
    title: "Built for Security Teams",
    description:
      "One console for detection, response, and posture — no more tool sprawl or alert fatigue.",
  },
  {
    title: "Built for Compliance Teams",
    description:
      "Continuous evidence and audit-ready reports that survive regulator scrutiny.",
  },
  {
    title: "Built for Your Business",
    description:
      "Lower liability, faster audits, and demonstrable resilience for the board.",
  },
];

export default function PlatformPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(59,130,246,0.16), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            The Platform
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            The AI-Native Cybersecurity
            <br />
            <span className="text-gradient">& Compliance Platform</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            One platform. End-to-end protection. Identity, data, cloud, threat
            detection, SecOps, and governance — unified under a single agentic
            operating system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/book-assessment">Book a Demo</Button>
            <Button href="/solutions" variant="secondary">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Platform Capabilities
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => (
              <article key={cap.title} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue-light">
                  <cap.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {cap.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Integrated. Extensible. Interoperable.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Cyberteck plugs into the tools you already run — SIEM, ticketing,
            identity, and cloud — through open APIs and pre-built connectors.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-chip border border-border-subtle bg-white/5 px-4 py-2 text-sm text-text-secondary"
              >
                <Plug className="h-4 w-4 text-accent-violet" aria-hidden="true" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <div key={audience.title} className="glass-panel p-8">
                <h3 className="text-lg font-semibold text-text-primary">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center font-display text-2xl font-bold text-text-primary">
            One Platform. Infinite Possibilities.
          </p>
        </div>
      </section>
    </main>
  );
}
