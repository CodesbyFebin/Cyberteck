/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AlertTriangle } from "lucide-react";

interface ThreatTrendProps {
  criticalCount: number;
  highCount: number;
}

export const ThreatTrendWidget: React.FC<ThreatTrendProps> = ({ criticalCount, highCount }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-rose-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Threat Activity Trend</h3>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-slate-950 p-2 rounded border border-slate-900">
              <span className="text-[8px] font-mono text-slate-500 uppercase block">Critical Intrusion</span>
              <span className="text-sm font-bold text-rose-500">{criticalCount}</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-900">
              <span className="text-[8px] font-mono text-slate-500 uppercase block">High Warning</span>
              <span className="text-sm font-bold text-amber-500">{highCount}</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[8px] font-mono text-slate-500 block uppercase mb-1">Weekly Attack Vector Wave</span>
            <svg className="w-full h-10 overflow-visible">
              <path
                d="M0,5 Q40,35 80,15 T160,35 T240,5 T320,15"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2"
                className="opacity-70"
              />
              <circle cx="320" cy="15" r="3" fill="#f43f5e" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
