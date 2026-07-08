import type { Pillar } from "@/lib/types";
import { aiIam } from "./ai-iam";
import { cloudSecurity } from "./cloud-security";
import { dataSecurity } from "./data-security";
import { appSecurity } from "./application-security";
import { riskManagement } from "./risk-management";
import { governancePolicyCompliance } from "./governance-policy-compliance";
import { identitySecurityZeroTrust } from "./identity-security-zero-trust";
import { aiSecurityGovernance } from "./ai-security-governance";
import { secOpsAutomation } from "./secops-automation";
import { vulnerabilityExposureManagement } from "./vulnerability-exposure-management";

// All 10 pillars are now present. Pillars 1, 5, 6, 7, 9 were transcribed
// from real screenshots (Phase 1/2). Pillars 2, 3, 4, 8, 10 have no source
// material and were designed fresh, extending the same design system/
// component contracts — see PROJECT_TRACKER.md for the provenance of each.
export const PILLARS: Pillar[] = [
  aiIam,
  cloudSecurity,
  dataSecurity,
  appSecurity,
  riskManagement,
  governancePolicyCompliance,
  identitySecurityZeroTrust,
  aiSecurityGovernance,
  secOpsAutomation,
  vulnerabilityExposureManagement,
].sort((a, b) => a.index - b.index);

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}
