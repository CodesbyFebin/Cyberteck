import { CircleCheck } from "lucide-react";

export function ChecklistItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-text-secondary">
      <CircleCheck className="h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
      {label}
    </li>
  );
}
