import { ShieldCheck, Lock, BrainCircuit, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TRUST_BADGES = [
  "DPDP Act Ready",
  "CERT-In Aligned",
  "RBI Compliant",
  "Sovereign Cloud",
];

const FEATURE_CHIPS = [
  { icon: ShieldCheck, label: "AI-Native Defense" },
  { icon: BrainCircuit, label: "Agentic Compliance" },
  { icon: Lock, label: "Zero Trust by Design" },
  { icon: Activity, label: "Built for Bharat" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow + grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(700px 500px at 100% 0%, rgba(34,211,238,0.12), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-chip border border-border-subtle bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-cyan">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
          India's AI-First Compliance OS
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
          Secure India's Digital Future.
          <br />
          <span className="text-gradient">AI-Native. Compliant. Unstoppable.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
          Cyberteck is the agentic operating system that hardens your AI
          infrastructure, automates DPDP, CERT-In & RBI compliance
          end-to-end, and defends Bharat's enterprises against deepfake
          fraud — sovereign, scalable, and built for the regulator.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/book-assessment">
            Book a Demo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/platform" variant="secondary">
            Explore the Platform
          </Button>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {FEATURE_CHIPS.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center justify-center gap-2 text-sm text-text-secondary"
            >
              <chip.icon
                className="h-4 w-4 shrink-0 text-accent-blue-light"
                aria-hidden="true"
              />
              <span>{chip.label}</span>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-text-muted">
          {TRUST_BADGES.map((badge) => (
            <li key={badge} className="flex items-center gap-1.5">
              <ShieldCheck
                className="h-4 w-4 text-accent-green"
                aria-hidden="true"
              />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
