import type { DonutSegment } from "@/lib/types";

const SEGMENT_COLOR: Record<DonutSegment["color"], string> = {
  green: "#22c55e",
  red: "#ef4444",
  amber: "#f59e0b",
};

function buildDonutPaths(segments: DonutSegment[], radius: number, thickness: number) {
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return segments.map((seg) => {
    const dash = (seg.value / 100) * circumference;
    const path = {
      color: SEGMENT_COLOR[seg.color],
      dasharray: `${dash} ${circumference - dash}`,
      dashoffset: -offset,
    };
    offset += dash;
    return path;
  });
}

export function HeroDonutCard({
  label,
  total,
  segments,
}: {
  label: string;
  total: string | number;
  segments: DonutSegment[];
}) {
  const radius = 26;
  const thickness = 8;
  const paths = buildDonutPaths(segments, radius, thickness);

  return (
    <div className="glass-panel w-52 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
      <div className="mt-2 flex items-center gap-3">
        <svg width={64} height={64} viewBox="0 0 64 64" aria-hidden="true">
          <g transform="rotate(-90 32 32)">
            <circle cx={32} cy={32} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={thickness} />
            {paths.map((p, i) => (
              <circle
                key={i}
                cx={32}
                cy={32}
                r={radius}
                fill="none"
                stroke={p.color}
                strokeWidth={thickness}
                strokeDasharray={p.dasharray}
                strokeDashoffset={p.dashoffset}
              />
            ))}
          </g>
          <text x="32" y="36" textAnchor="middle" className="fill-text-primary text-[11px] font-bold">
            {total}
          </text>
        </svg>
        <ul className="flex flex-col gap-1 text-xs">
          {segments.map((seg) => (
            <li key={seg.label} className="flex items-center gap-1.5 text-text-secondary">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: SEGMENT_COLOR[seg.color] }}
                aria-hidden="true"
              />
              {seg.label} <span className="text-text-muted">{seg.value}%</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Screen-reader summary since the chart itself is decorative */}
      <p className="sr-only">
        {label}: total {total}.{" "}
        {segments.map((s) => `${s.label} ${s.value}%`).join(", ")}.
      </p>
    </div>
  );
}
