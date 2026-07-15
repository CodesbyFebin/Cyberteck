/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Layers } from "lucide-react";

interface CoverageItem {
  name: string;
  percent: number;
  status: 'compliant' | 'warning' | 'audit';
}

const mockCoverages: CoverageItem[] = [
  { name: "DPDP Act (2023)", percent: 85, status: "compliant" },
  { name: "CERT-In 6-Hour Rule", percent: 100, status: "compliant" },
  { name: "RBI FinSec Directives", percent: 66, status: "warning" },
  { name: "SEBI Compliance Frame", percent: 75, status: "audit" },
  { name: "ISO/IEC 27001:2022", percent: 100, status: "compliant" }
];

export const FrameworkCoverageWidget: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <Layers className="h-4 w-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Statutory Frameworks</h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Mapped: 5</span>
        </div>

        <div className="space-y-3">
          {mockCoverages.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-white font-bold">{item.name}</span>
                <span className={
                  item.status === "compliant" 
                    ? "text-emerald-400" 
                    : item.status === "warning"
                    ? "text-rose-400 animate-pulse"
                    : "text-amber-400"
                }>
                  {item.percent}%
                </span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${
                    item.status === "compliant" 
                      ? "bg-emerald-500" 
                      : item.status === "warning"
                      ? "bg-rose-500"
                      : "bg-amber-500"
                  }`} 
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
