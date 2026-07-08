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

export function HomeIndustries() {
  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
              Industry-Focused. Outcome-Driven.
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Securing every industry in India
            </h2>
            <p className="mt-4 text-text-secondary">
              Cyberteck delivers AI-powered compliance and security solutions
              purpose-built for the realities of each sector.
            </p>
          </div>
          <Button href="/industries" variant="secondary">
            View All Industries
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
