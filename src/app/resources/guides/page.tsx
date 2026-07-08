import type { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Guides & How-Tos",
  description:
    "In-depth guides and step-by-step instructions to implement best practices and achieve compliance.",
  alternates: { canonical: "/resources/guides" },
};

const GUIDES = [
  { title: "Getting Started with CyberTeck", level: "Beginner", href: "#" },
  { title: "Navigating the CyberTeck Dashboard", level: "Beginner", href: "#" },
  { title: "Achieving ISO 27001 Compliance", level: "Intermediate", href: "#" },
  { title: "Securing Your Cloud Infrastructure", level: "Intermediate", href: "#" },
  { title: "Implementing Zero Trust Security", level: "Advanced", href: "#" },
  { title: "Multi-Factor Authentication (MFA) Best Practices", level: "Intermediate", href: "#" },
  { title: "Cybersecurity Best Practices for 2024", level: "Beginner", href: "#" },
];

export default function GuidesPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Guides" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          Resources
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-text-primary sm:text-5xl">
          Guides & How-Tos
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Simplify security. Strengthen your strategy. In-depth guides and
          step-by-step instructions to help you implement best practices,
          achieve compliance, and strengthen your security posture.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="surface-card group flex flex-col p-6 transition-colors hover:border-accent-blue-light"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="mt-4 text-xs font-medium uppercase tracking-wide text-text-muted">
                {guide.level}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">
                {guide.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light">
                Read guide
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-card border border-border-subtle bg-bg-surface p-8 text-center">
          <h2 className="text-xl font-semibold text-text-primary">
            Need help finding a guide?
          </h2>
          <p className="mt-2 text-text-secondary">
            Our experts are here to help you find the right solution.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button href="/support">Contact Support</Button>
            <Button href="/resources" variant="secondary">
              View All Resources
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
