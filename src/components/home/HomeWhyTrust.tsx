import {
  Sparkles,
  ShieldCheck,
  Server,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { LogoWall } from "@/components/shared/LogoWall";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Sparkles,
    title: "AI-Native by Design",
    description:
      "Agentic workflows do the manual 99% — discovery, classification, evidence, and remediation — gated by human approval.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance, Continuous",
    description:
      "DPDP, CERT-In, RBI, and SEBI obligations tracked and proven in real time, not scraped together before an audit.",
  },
  {
    icon: Server,
    title: "Sovereign & Secure",
    description:
      "100% India data residency on AWS Mumbai. Zero cross-border transfers. Built for the regulator, not around it.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Driven",
    description:
      "Measurable risk reduction, faster audits, and lower liability — not dashboards you have to interpret yourself.",
  },
];

export function HomeWhyTrust() {
  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Why Businesses Trust Cyberteck
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Security you can prove. Compliance you can trust.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <article key={reason.title} className="surface-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-text-primary">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-sm text-text-muted">
            Trusted by India's leading organizations
          </p>
          <div className="mt-8">
            <LogoWall />
          </div>
        </div>
      </div>
    </section>
  );
}
