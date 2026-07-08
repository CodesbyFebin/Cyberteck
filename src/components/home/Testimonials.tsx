import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/home-data";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-bold text-text-primary">
        Trusted by Security Teams Across India
      </h2>
      <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li key={t.name} className="surface-card flex flex-col p-6">
            <Quote className="h-6 w-6 text-accent-violet-light" aria-hidden="true" />
            <p className="mt-4 flex-1 text-sm text-text-secondary">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 border-t border-border-subtle pt-4">
              <p className="text-sm font-semibold text-text-primary">{t.name}</p>
              <p className="text-xs text-text-muted">
                {t.role}, {t.company}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
