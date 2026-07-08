import { PLATFORM_STATS } from "@/lib/home-data";

export function PlatformStatsBar() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {PLATFORM_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <stat.icon className="h-6 w-6 text-accent-blue-light" aria-hidden="true" />
            <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
