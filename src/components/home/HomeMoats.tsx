import {
  Network,
  Lock,
  BrainCircuit,
  Plug,
  Bot,
  type LucideIcon,
} from "lucide-react";

type Moat = {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const MOATS: Moat[] = [
  {
    num: "01",
    icon: Network,
    title: "Bharat Cyber Knowledge Graph",
    description:
      "A living map of India's digital supply chain. When a zero-day hits a UPI gateway SDK, every affected client is flagged, remediated, and warned — instantly.",
  },
  {
    num: "02",
    icon: Lock,
    title: "Zero-Knowledge Proof Audits",
    description:
      "Prove DPDP and CERT-In compliance to regulators mathematically — without ever exposing raw logs or sensitive IP. Trust without disclosure.",
  },
  {
    num: "03",
    icon: BrainCircuit,
    title: "Sovereign Indic-Secure LLM",
    description:
      "A model fine-tuned exclusively on Indian cyber law — DPDP, RBI, SEBI, IT Act — hosted in air-gapped sovereign cloud. Compliant by construction.",
  },
  {
    num: "04",
    icon: Plug,
    title: "DPI-Native Compliance APIs",
    description:
      "Native integration into India's Digital Public Infrastructure. Banks and underwriters verify compliance through Cyberteck — by default.",
  },
  {
    num: "05",
    icon: Bot,
    title: "Agentic Auto-Remediation",
    description:
      "The self-healing OS. Misconfigured buckets, unpatched flaws, and drift are fixed autonomously after human approval — in minutes, not quarters.",
  },
];

export function HomeMoats() {
  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            Structural Advantage
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl">
            The Cyberteck Moats
          </h2>
          <p className="mt-4 text-text-secondary">
            Features can be copied in a quarter. These five moats cannot. Each
            one compounds the others until competitors face an insurmountable
            data, trust, and infrastructure gap.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOATS.map((moat) => (
            <article
              key={moat.num}
              className="surface-card group relative overflow-hidden p-6"
            >
              <span className="absolute right-4 top-3 font-mono text-2xl font-bold text-border-subtle transition-colors group-hover:text-accent-blue/40">
                {moat.num}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                <moat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {moat.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {moat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
