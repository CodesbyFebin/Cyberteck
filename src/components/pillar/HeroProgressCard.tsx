export function HeroProgressCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: number; // 0-100
  sublabel: string;
}) {
  return (
    <div className="glass-panel w-56 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-text-primary">{value}%</p>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-1 text-xs text-text-muted">{sublabel}</p>
    </div>
  );
}
