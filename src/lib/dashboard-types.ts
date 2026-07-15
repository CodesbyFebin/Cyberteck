/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThreatAlert {
  id: string;
  timestamp: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  vector: string;
  sourceIp: string;
  status: 'active' | 'mitigated' | 'investigating';
  actionTaken?: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  status: 'success' | 'failed' | 'warning';
}

export interface ComplianceCheck {
  id: string;
  framework: 'DPDP' | 'CERT-In' | 'RBI' | 'ISO 27001' | 'NIST' | 'SEBI';
  controlId: string;
  description: string;
  status: 'compliant' | 'non-compliant' | 'in-progress';
  lastAudit: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime?: string;
  pagesCount?: number;
  downloadUrl?: string;
  tags: string[];
  type: 'blog' | 'guide' | 'whitepaper';
}

export interface SecurityScore {
  overall: number;
  threatPostponed: number;
  compliancePercentage: number;
  vulnerabilitiesCount: number;
  activeIncidents: number;
  tasksCompleted: number;
  tasksTotal: number;
}
