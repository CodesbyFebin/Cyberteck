import type { Metadata } from "next";
import { FileText, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Whitepapers",
  description:
    "In-depth research and actionable insights on emerging threats, security strategies, and compliance.",
  alternates: { canonical: "/resources/whitepapers" },
};

const WHITEPAPERS = [
  "2024 Cyber Threat Landscape Report",
  "Secure by Design: Building Resilient Cloud Infrastructure",
  "The Future of Identity: Passwordless and Beyond",
  "ISO 27001:2022 Compliance Implementation Guide",
  "Data Encryption Best Practices",
  "AI-Powered Security Operations: A New Era",
  "DevSecOps: Embedding Security in Every Pipeline",
  "Enterprise Risk Management in a Digital World",
  "Zero Trust Security: A Practical Implementation Guide",
];

export default function WhitepapersPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Whitepapers" }]} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
          Whitepapers
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-text-primary sm:text-5xl">
          Whitepapers
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          In-depth research. Actionable insights. Stronger security. Explore our
          expert research on emerging threats, security strategies, compliance,
          and technology trends.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHITEPAPERS.map((title) => (
            <a
              key={title}
              href="#"
              className="surface-card group flex flex-col p-6 transition-colors hover:border-accent-blue-light"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light">
                Download
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="text-sm font-semibold text-text-primary">
            Can't find what you're looking for?
          </p>
          <p className="mt-2 text-text-secondary">
            Subscribe to get the latest whitepapers and research delivered to
            your inbox.
          </p>
          <div className="mt-4">
            <Button href="/resources">Browse All Resources</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
