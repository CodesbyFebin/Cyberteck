// Aggregator re-exporting the pillar registry from ./pillars so both
// `@/lib` and `@/lib/pillars` resolve to the same source of truth.
export { PILLARS, getPillarBySlug } from "./pillars";
export type { Pillar } from "@/lib/types";
