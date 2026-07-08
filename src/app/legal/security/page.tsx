import type { Metadata } from "next";
import {
  Lock,
  ShieldCheck,
  Radar,
  Code2,
  KeyRound,
  Server,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Security is our foundation. Learn how CyberTeck protects your data with sovereign, compliant, and resilient practices.",
  alternates: { canonical: "/legal/security" },
};

const STATS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "24/7/365", label: "Monitoring" },
  { value: "Zero", label: "Known Data Breaches" },
  { value: "256-bit", label: "Encryption at Rest" },
  { value: "SOC 2", label: "Type II Certified" },
  { value: "ISO 27001", label: "Aligned" },
];

const COMMITMENTS: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Lock, title: "Data Protection", description: "Data encrypted in transit and at rest using modern ciphers." },
  { icon: ShieldCheck, title: "Privacy by Design", description: "Privacy engineered into every product from day one." },
  { icon: Radar, title: "Threat Detection", description: "Continuous monitoring and anomaly detection across systems." },
  { icon: Code2, title: "Secure Development", description: "Secure SDLC, code reviews, and continuous testing." },
  { icon: KeyRound, title: "Access Control", description: "Least-privilege, MFA, and just-in-time access." },
  { icon: Server, title: "Infrastructure Security", description: "Hardened, segmented, and sovereign cloud infrastructure." },
];

const CERTS = ["ISO 27001", "SOC 2 Type II", "HIPAA Ready", "PCI DSS Aligned"];

export default function SecurityPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(139,92,246,0.16), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            Trust Center
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Security is Our Foundation.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            We build secure products, protect your data, and earn your trust
            every day. CyberTeck is committed to maintaining the highest
            standards of security, privacy, and resilience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-6 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-panel p-5 text-center">
              <div className="font-display text-xl font-bold text-text-primary">
                {stat.value}
              </div>
              <p className="mt-1 text-xs text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Our Commitment to Security
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMMITMENTS.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue-light">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary">
                Compliance & Certifications
              </h2>
              <p className="mt-4 text-text-secondary">
                We adhere to global security and compliance standards so you can
                trust us with your most sensitive data.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {CERTS.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-2 rounded-chip border border-border-subtle bg-white/5 px-4 py-2 text-sm text-text-secondary"
                  >
                    <BadgeCheck className="h-4 w-4 text-accent-green" aria-hidden="true" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-card border border-border-subtle bg-bg-surface p-8">
              <h3 className="text-xl font-semibold text-text-primary">
                Responsible Disclosure
              </h3>
              <p className="mt-3 text-text-secondary">
                We value the security community. If you discover a
                vulnerability, please let us know responsibly — we acknowledge
                all reports and reward valid disclosures.
              </p>
              <Button href="/support" className="mt-5">
                Report a Vulnerability
              </Button>
            </div>
          </div>

          <p className="mt-12 text-center font-display text-2xl font-bold text-text-primary">
            Security you can trust. Focus on innovation — we'll protect the
            rest.
          </p>
        </div>
      </section>
    </main>
  );
}
