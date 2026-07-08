import { ShieldCheck, Lock, BrainCircuit, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CircleCheck } from "lucide-react";

const TRUST_ITEMS = ["No Credit Card", "Personalized Walkthrough", "30-Minute Session"];

const FEATURE_CHIPS = [
  { icon: ShieldCheck, label: "10 Integrated Security Pillars" },
  { icon: BrainCircuit, label: "Agentic AI Throughout" },
  { icon: Lock, label: "Zero Trust by Design" },
  { icon: Activity, label: "Built for Indian Compliance" },
];

export function HomeHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 text-center">
      <h1 className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-6xl">
        One AI-Native Platform.
        <br />
        <span className="text-gradient">Ten Pillars of Enterprise Security.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
        Cyberteck unifies identity, risk, compliance, cloud, data, application, and AI security
        into a single AI-native platform — built for the scale and regulatory reality of Indian
        enterprises.
      </p>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {FEATURE_CHIPS.map((chip) => (
          <div key={chip.label} className="flex items-center justify-center gap-2 text-sm text-text-secondary">
            <chip.icon className="h-4 w-4 shrink-0 text-accent-blue-light" aria-hidden="true" />
            <span>{chip.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/book-assessment">Book a Demo</Button>
        <Button href="/pillars" variant="secondary">
          Explore All 10 Pillars
        </Button>
      </div>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
        {TRUST_ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <CircleCheck className="h-4 w-4 text-accent-green" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
