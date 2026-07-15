"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { FileText } from "lucide-react";
import { ComplianceCheck } from "../../lib/dashboard-types";

interface ComplianceMatrixWidgetProps {
  checks: ComplianceCheck[];
  onToggleStatus: (id: string) => void;
}

export const ComplianceMatrixWidget: React.FC<ComplianceMatrixWidgetProps> = ({ checks, onToggleStatus }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Regulatory Control Matrix</h3>
          </div>
          <span className="rounded bg-slate-800 px-2 py-0.5 text-[9px] font-mono text-slate-400 uppercase">
            Active
          </span>
        </div>

        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {checks.map((c) => (
            <div 
              key={c.id}
              className="rounded-lg border border-slate-800/60 bg-slate-950 p-3 flex items-center justify-between gap-4"
            >
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="rounded bg-slate-900 px-1.5 py-0.25 text-[8px] font-mono font-bold uppercase text-slate-400">{c.framework}</span>
                  <span className="text-[9px] font-mono text-slate-500">{c.controlId}</span>
                </div>
                <h4 className="font-bold text-white text-xs truncate">{c.description}</h4>
              </div>

              <div>
                <button
                  onClick={() => onToggleStatus(c.id)}
                  className={`inline-flex items-center space-x-1 rounded px-2 py-1 text-[9px] font-bold uppercase transition-colors border ${
                    c.status === "compliant"
                      ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
                      : c.status === "non-compliant"
                      ? "bg-rose-950/20 border-rose-500/20 text-rose-400"
                      : "bg-amber-950/20 border-amber-500/20 text-amber-400"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    c.status === "compliant" ? "bg-emerald-500" : c.status === "non-compliant" ? "bg-rose-500" : "bg-amber-500"
                  }`}></span>
                  <span>{c.status}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
