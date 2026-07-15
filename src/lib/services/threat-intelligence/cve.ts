/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CVE } from "./types";

export const cveDatabase: CVE[] = [
  {
    id: "CVE-2026-1184",
    title: "SQL Injection in Transaction Router Gateway",
    score: 9.8,
    severity: "critical",
    description: "Unsanitized user-supplied parameters inside the middleware routers allow remote attackers to execute arbitrary database directives, exposing merchant logs.",
    publishedDate: "2026-02-14T09:00:00Z",
    mitigationStatus: "unpatched",
    patchUrl: "https://cyberteck.in/security/patches/cve-2026-1184"
  },
  {
    id: "CVE-2026-3021",
    title: "OAuth Token Hijacking on Developer Sandboxes",
    score: 8.5,
    severity: "high",
    description: "Improper CORS validation during Auth.js callback processes exposes authorization codes, enabling session hijacking in misconfigured multi-tenant clients.",
    publishedDate: "2026-05-18T14:30:00Z",
    mitigationStatus: "patched",
    patchUrl: "https://cyberteck.in/security/patches/cve-2026-3021"
  },
  {
    id: "CVE-2026-0899",
    title: "Sovereign S3 Directory Traversal",
    score: 7.5,
    severity: "high",
    description: "Weak access policies inside storage bucket path utilities permit read-access traversal into non-compliant backup buckets residing in Mumbai zone nodes.",
    publishedDate: "2026-01-08T11:15:00Z",
    mitigationStatus: "workaround",
    patchUrl: "https://cyberteck.in/security/workarounds/cve-2026-0899"
  },
  {
    id: "CVE-2026-5122",
    title: "Log Injection in Syslog Compliant Sidecars",
    score: 5.3,
    severity: "medium",
    description: "Unescaped carriage-return inputs inside secondary container syslog integrations facilitate log injection, muddying forensic audit packages for CERT-In teams.",
    publishedDate: "2026-06-30T10:00:00Z",
    mitigationStatus: "patched",
    patchUrl: "https://cyberteck.in/security/patches/cve-2026-5122"
  }
];

export class NvdVulnerabilityProvider {
  getCve(id: string): CVE | undefined {
    return cveDatabase.find(c => c.id === id);
  }

  getVulnerabilitiesBySeverity(severity: CVE['severity']): CVE[] {
    return cveDatabase.filter(c => c.severity === severity);
  }

  getUnpatchedVulnerabilities(): CVE[] {
    return cveDatabase.filter(c => c.mitigationStatus === "unpatched");
  }

  getAllCves(): CVE[] {
    return cveDatabase;
  }
}
