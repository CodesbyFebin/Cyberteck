import type { FeatureChip as FeatureChipType } from "@/lib/types";

export function FeatureChip({ icon: Icon, label }: FeatureChipType) {
  return (
    <div className="flex items-center gap-2 text-sm text-text-secondary">
      <Icon className="h-4 w-4 shrink-0 text-accent-blue-light" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
