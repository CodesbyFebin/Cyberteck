import type { Metadata } from "next";
import {
  Landmark,
  Radio,
  ShoppingBag,
  Factory,
  HeartPulse,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI-native security and compliance solutions purpose-built for BFSI, Telecom, Retail, Manufacturing, Healthcare, and Government.",
  alternates: { canonical: "/industries" },
};

type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: Landmark,
    name: "BFSI",
    description:
      "RBI, SEBI, and FREE-AI aligned. Defend payments, detect deepfake KYC fraud, and prove audit readiness.",
    href: "/industries/bfsi",
  },
  {
    icon: Radio,
    name: "Telecom",
    description:
      "Protect critical infrastructure and millions of identities with zero-trust access and continuous monitoring.",
    href: "/industries/telecom",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description:
      "Secure customer PII, payment flows, and supply-chain integrations against escalating fraud vectors.",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Extend OT/SCADA and IoT security to the factory floor with segmentation and anomaly detection.",
    href: "/industries/manufacturing",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Safeguard patient data and medical IoT under DPDP while resisting ransomware and extortion.",
    href: "/industries/healthcare",
  },
  {
    icon: Building2,
    name: "Government",
    description:
      "Sovereign, NIC-aligned security for public infrastructure and citizen-scale digital services.",
    href: "/industries/government",
  },
];

const WHY = [
  { title: "Scalable & Resilient", description: "From startup to nation-scale deployment." },
  { title: "AI-Native by Design", description: "Agentic defense tuned to your threat model." },
  { title: "Industry-Aligned Solutions", description: "Built for the regulations you actually face." },
];

export default function IndustriesPage() {
  return (
    <main>
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue-light">
            Industries
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Security Built for Every Industry.
            <br />
            <span className="text-gradient">Outcomes That Matter.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            CyberTeck delivers AI-powered compliance and security solutions for
            every industry. Protect what matters. Drive what's next.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <a
                key={industry.name}
                href={industry.href}
                className="surface-card group flex flex-col p-6 transition-colors hover:border-accent-blue-light"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue-light">
                  <industry.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {industry.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-secondary">
                  {industry.description}
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
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
              Industry-Focused. Outcome-Driven.
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-text-primary">
              Why Leading Industries Choose CyberTeck
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
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
          <p className="mt-12 text-center font-display text-2xl font-bold text-text-primary">
            Secure Every Industry. Empower Every Outcome.
          </p>
          <div className="mt-6 text-center">
            <Button href="/book-assessment">Partner With CyberTeck</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
