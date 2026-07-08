import type { StatusCard as StatusCardType } from "@/lib/types";

const TONE_TEXT: Record<NonNullable<StatusCardType["tone"]>, string> = {
  green: "text-accent-green",
  blue: "text-accent-blue-light",
  amber: "text-accent-amber",
};

export function StatusCard({ icon: Icon, label, value, tone = "blue" }: StatusCardType) {
  return (
    <div className="glass-panel flex w-52 items-center gap-3 p-4">
      <Icon className={`h-5 w-5 shrink-0 ${TONE_TEXT[tone]}`} aria-hidden="true" />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{label}</p>
        <p className={`text-sm font-bold ${TONE_TEXT[tone]}`}>{value}</p>
      </div>
    </div>
  );
}
