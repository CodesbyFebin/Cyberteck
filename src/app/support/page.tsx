import type { Metadata } from "next";
import {
  LifeBuoy,
  BookOpen,
  Download,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support",
  description:
    "We're here to help, every step of the way. Contact support, browse the knowledge base, and check system status.",
  alternates: { canonical: "/support" },
};

type Option = { icon: LucideIcon; title: string; description: string };

const OPTIONS: Option[] = [
  { icon: LifeBuoy, title: "Contact Support", description: "Get help from our security experts." },
  { icon: BookOpen, title: "Knowledge Base", description: "Step-by-step guides and answers." },
  { icon: Download, title: "Downloads", description: "Agents, connectors, and tools." },
  { icon: GraduationCap, title: "Training & Onboarding", description: "Get your team productive fast." },
  { icon: Briefcase, title: "Professional Services", description: "White-glove implementation." },
];

const GUIDES = [
  "How to onboard your organization",
  "Getting Started: Quick Setup",
  "Configuring SSO providers",
  "Creating custom policies",
];

export default function SupportPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(34,211,238,0.14), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Support
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            We're Here to Help.
            <br />
            <span className="text-gradient">Every Step of the Way.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Get the support you need, when you need it. Our team and resources
            are here to help you succeed with CyberTeck.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            How can we help you today?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIONS.map((option) => (
              <div key={option.title} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <option.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Support Resources
            </h2>
            <p className="mt-2 text-sm text-text-muted">Popular Guides</p>
            <ul className="mt-4 space-y-2">
              {GUIDES.map((guide) => (
                <li key={guide}>
                  <a href="#" className="text-text-secondary hover:text-accent-blue-light">
                    {guide}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/resources/guides">Explore Guides</Button>
              <Button href="/resources" variant="secondary">
                View All Resources
              </Button>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary">
              System Status
            </h2>
            <div className="mt-4 flex items-center gap-2 rounded-chip border border-border-subtle bg-white/5 px-4 py-2 text-sm text-text-secondary">
              <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
              All Systems Operational
            </div>
            <p className="mt-3 text-sm text-text-muted">
              Uptime (90 days): 99.98%
            </p>

            <h3 className="mt-8 text-lg font-semibold text-text-primary">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-text-secondary">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-blue-light" aria-hidden="true" />
                support@cyberteck.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-blue-light" aria-hidden="true" />
                +91 1800 123 4567
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-accent-blue-light" aria-hidden="true" />
                Support Portal
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="rounded-card border border-border-subtle bg-bg-surface p-8 text-center">
            <h3 className="text-xl font-semibold text-text-primary">
              Still need help?
            </h3>
            <p className="mt-2 text-text-secondary">
              Our team is ready to assist you with any questions.
            </p>
            <div className="mt-5">
              <Button href="/company/contact">Contact Our Team</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
