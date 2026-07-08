import { BookOpen, Building2, Plug, Radio, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: BookOpen, value: "100+", label: "Security & compliance guides" },
  { icon: Building2, value: "500+", label: "Enterprises protected" },
  { icon: Plug, value: "200+", label: "Integration connectors" },
  { icon: Radio, value: "150+", label: "Threat intelligence sources" },
];

export function HomeKnowledgeHub() {
  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Knowledge. Insights. Stronger Security.
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl">
            India's most comprehensive cybersecurity knowledge hub
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-panel p-6 text-center">
              <stat.icon
                className="mx-auto h-6 w-6 text-accent-violet"
                aria-hidden="true"
              />
              <div className="mt-3 font-display text-3xl font-bold text-text-primary">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
