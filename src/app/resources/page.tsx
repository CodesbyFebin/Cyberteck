import type { Metadata } from "next";
import {
  BookOpen,
  FileText,
  Video,
  CaseSensitive,
  Wrench,
  LayoutTemplate,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Newsletter } from "@/components/shared/Newsletter";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Expert insights, guides, tools, and updates to help you stay ahead of threats and meet compliance.",
  alternates: { canonical: "/resources" },
};

type Featured = { title: string; kind: string; href: string };

const FEATURED: Featured[] = [
  { title: "Understanding DPDP: A Practical Guide for Businesses", kind: "Guide", href: "/resources/guides" },
  { title: "CSPM vs CNAPP: What's Right for Your Cloud?", kind: "Article", href: "/blogs" },
  { title: "Webinar: Building Cyber Resilience with AI", kind: "Webinar", href: "/resources" },
  { title: "ISO 27001 Compliance Checklist", kind: "Template", href: "/resources" },
  { title: "Case Study: How SBI Strengthened Cloud Security", kind: "Case Study", href: "/resources" },
];

type Library = { icon: LucideIcon; title: string; href: string };

const LIBRARY: Library[] = [
  { icon: BookOpen, title: "Blogs", href: "/blogs" },
  { icon: FileText, title: "Whitepapers", href: "/resources/whitepapers" },
  { icon: Video, title: "Webinars", href: "/resources" },
  { icon: CaseSensitive, title: "Case Studies", href: "/resources" },
  { icon: Wrench, title: "Tools", href: "/resources" },
  { icon: LayoutTemplate, title: "Templates", href: "/resources" },
];

const TOPICS = ["Cloud Security", "Identity Security", "AI Security", "Compliance", "Zero Trust"];

export default function ResourcesPage() {
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
            Resources
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Knowledge. Insights.
            <br />
            <span className="text-gradient">Stronger Security.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Explore expert insights, guides, tools, and updates to help you stay
            ahead of threats, meet compliance, and build a stronger security
            posture.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Featured Resources
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="surface-card group flex flex-col p-6 transition-colors hover:border-accent-blue-light"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-accent-cyan">
                  {item.kind}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light">
                  Read more
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Resource Library
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LIBRARY.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="glass-panel flex items-center gap-4 p-6 transition-colors hover:border-accent-blue-light"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue-light">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-lg font-semibold text-text-primary">
                  {item.title}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold text-text-primary">Popular Topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-chip border border-border-subtle px-3 py-1 text-sm text-text-secondary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <Newsletter layout="bar" />
          </div>

          <div className="mt-8 text-center">
            <Button href="/book-assessment">Stay Ahead of Threats</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
