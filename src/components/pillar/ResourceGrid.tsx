import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Resource } from "@/lib/types";

function ResourceCard({ icon: Icon, title, ctaLabel, href }: Resource) {
  return (
    <li className="surface-card flex flex-col items-start gap-3 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-violet/15 text-accent-violet-light">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="font-medium text-text-primary">{title}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light hover:gap-2"
      >
        {ctaLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </li>
  );
}

export function ResourceGrid({ sectionLabel, resources }: { sectionLabel: string; resources: Resource[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <h2 className="mb-8 text-center font-display text-2xl font-bold text-text-primary">
        Deep Dive {sectionLabel} Resources
      </h2>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {resources.map((r) => (
          <ResourceCard key={r.title} {...r} />
        ))}
      </ul>
    </section>
  );
}
