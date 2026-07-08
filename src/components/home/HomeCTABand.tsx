import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ChecklistItem } from "@/components/ui/ChecklistItem";

const CHECKLIST = [
  "Full Platform Walkthrough",
  "Use Cases Relevant to Your Industry",
  "Architecture & Integration Guidance",
  "No Obligation. No Credit Card.",
];

export function HomeCTABand() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="surface-card grid grid-cols-1 items-center gap-10 p-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Ready to Secure. Comply. Grow.
          </h2>
          <p className="mt-3 text-text-secondary">
            Book a personalized walkthrough and see how Cyberteck's AI-native platform maps to
            your organization's security and compliance priorities.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <ChecklistItem key={item} label={item} />
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-assessment">Book a Demo</Button>
            <Button href="/company/contact" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </div>

        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-accent-blue/10 shadow-glow">
          <ShieldCheck className="h-16 w-16 text-accent-blue-light" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
