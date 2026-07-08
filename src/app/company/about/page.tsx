import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, ShieldCheck, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CyberTeck is built on trust, driven by innovation, and securing what matters for India's digital future.",
  alternates: { canonical: "/company/about" },
};

const STATS = [
  { value: "2015", label: "Founded" },
  { value: "500+", label: "Enterprises Protected" },
  { value: "20+", label: "Compliance Frameworks" },
  { value: "99.8%", label: "Platform Uptime" },
  { value: "2.4B+", label: "Threats Analyzed" },
  { value: "24/7", label: "Monitoring & Response" },
];

const VALUES = [
  { icon: Users, title: "Customer First", description: "Every decision starts with the customer's security and success." },
  { icon: Lightbulb, title: "Innovate Relentlessly", description: "We push AI-native defense further every single quarter." },
  { icon: ShieldCheck, title: "Act with Integrity", description: "Transparent, honest, and accountable in everything we do." },
  { icon: HeartHandshake, title: "Stronger Together", description: "We partner with CAs, auditors, and enterprises as one team." },
  { icon: Globe, title: "Secure the Future", description: "Sovereign, scalable security for Bharat's digital economy." },
];

const LEADERS = [
  { name: "Vikram S.", role: "Co-Founder & CEO" },
  { name: "Rohit M.", role: "Co-Founder & CTO" },
  { name: "Arjun K.", role: "Co-Founder & CISO" },
];

export default function AboutPage() {
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
            About Us
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Built on Trust.
            <br />
            <span className="text-gradient">Driven by Innovation.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Securing what matters. CyberTeck exists to make world-class,
            AI-native cybersecurity and compliance accessible to every Indian
            enterprise.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-6 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-panel p-5 text-center">
              <div className="font-display text-2xl font-bold text-text-primary">
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
            Our Values
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Leadership Team
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="glass-panel p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/10 text-xl font-bold text-accent-blue-light">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {leader.name}
                </h3>
                <p className="text-sm text-text-secondary">{leader.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span className="font-semibold text-text-primary">Awards & Recognition:</span>
            <span className="rounded-chip border border-border-subtle px-3 py-1">Gartner</span>
            <span className="rounded-chip border border-border-subtle px-3 py-1">Forrester</span>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Let's Build a Safer Future Together.
          </h2>
          <p className="mt-4 text-text-secondary">
            Join hundreds of organizations that trust CyberTeck.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/book-assessment">Book a Demo</Button>
            <Button href="/company/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
