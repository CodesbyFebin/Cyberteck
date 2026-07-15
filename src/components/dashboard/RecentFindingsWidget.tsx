/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldAlert, ExternalLink } from "lucide-react";

interface Finding {
  cveId: string;
  title: string;
  score: number;
  severity: 'critical' | 'high' | 'medium';
  published: string;
}

const mockFindings: Finding[] = [
  { cveId: "CVE-2026-1184", title: "SQLi in Transaction Routers", score: 9.8, severity: "critical", published: "2026-02-14" },
  { cveId: "CVE-2026-3021", title: "OAuth Callback Hijacking Risk", score: 8.5, severity: "high", published: "2026-05-18" },
  { cveId: "CVE-2026-0899", title: "Directory Traversal in S3 Utilities", score: 7.5, severity: "high", published: "2026-01-08" }
];

export const RecentFindingsWidget: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-4 w-4 text-rose-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Recent Security Findings</h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Unpatched</span>
        </div>

        <div className="space-y-3">
          {mockFindings.map((f) => (
            <div key={f.cveId} className="rounded-lg bg-slate-950 p-3 border border-slate-850">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-cyan-400 font-bold">{f.cveId}</span>
                <span className={`px-1 rounded text-[8px] font-bold uppercase ${
                  f.severity === "critical" ? "bg-rose-950 text-rose-400" : "bg-amber-950 text-amber-400"
                }`}>
                  Score {f.score}
                </span>
              </div>
              <h4 className="font-bold text-white text-xs pt-1 truncate">{f.title}</h4>
              <div className="flex items-center justify-between text-[9px] text-slate-500 pt-2 font-mono">
                <span>Published: {f.published}</span>
                <a href="#" className="hover:text-cyan-400 flex items-center space-x-1">
                  <span>Advisory</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
