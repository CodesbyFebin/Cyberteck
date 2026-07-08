import { aiIam } from "./ai-iam";
import { aiSecurityGovernance } from "./ai-security-governance";
import { applicationSecurity } from "./application-security";
import { cloudSecurity } from "./cloud-security";
import { dataSecurity } from "./data-security";
import { governancePolicyCompliance } from "./governance-policy-compliance";
import { identitySecurityZeroTrust } from "./identity-security-zero-trust";
import { riskManagement } from "./risk-management";
import { secopsAutomation } from "./secops-automation";
import { vulnerabilityExposureManagement } from "./vulnerability-exposure-management";
import type { Pillar } from "@/lib/types";

export const PILLARS: Pillar[] = [
  aiIam,
  aiSecurityGovernance,
  applicationSecurity,
  cloudSecurity,
  dataSecurity,
  governancePolicyCompliance,
  identitySecurityZeroTrust,
  riskManagement,
  secopsAutomation,
  vulnerabilityExposureManagement,
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}
