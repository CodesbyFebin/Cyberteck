import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Cluster } from "@/lib/types";

const TILE_COLORS = ["bg-accent-blue/15 text-accent-blue-light", "bg-accent-violet/15 text-accent-violet-light", "bg-accent-green/15 text-accent-green", "bg-accent-amber/15 text-accent-amber", "bg-accent-cyan/15 text-accent-cyan"];

function ClusterCard({ cluster, tileClass }: { cluster: Cluster; tileClass: string }) {
  const Icon = cluster.icon;
  return (
    <li className="surface-card flex flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-text-muted">
          {String(cluster.index).padStart(2, "0")}
        </span>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${tileClass}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <h3 className="font-semibold text-text-primary">{cluster.title}</h3>
      <p className="mt-2 flex-1 text-sm text-text-secondary">{cluster.description}</p>
      <Link
        href={cluster.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue-light hover:gap-2"
      >
        Explore Cluster <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </li>
  );
}

export function ClusterGrid({
  sectionLabel,
  subheading,
  clusters,
}: {
  sectionLabel: string;
  subheading: string;
  clusters: Cluster[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-bold text-text-primary">
        The 10 Clusters of {sectionLabel}
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-text-secondary">{subheading}</p>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {clusters.map((cluster, i) => (
          <ClusterCard key={cluster.index} cluster={cluster} tileClass={TILE_COLORS[i % TILE_COLORS.length]} />
        ))}
      </ul>
    </section>
  );
}
