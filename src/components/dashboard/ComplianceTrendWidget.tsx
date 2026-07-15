/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle } from "lucide-react";

interface ComplianceTrendWidgetProps {
  percentage: number;
}

export const ComplianceTrendWidget: React.FC<ComplianceTrendWidgetProps> = ({ percentage }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Compliance Trend</h3>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono font-bold">+{percentage}%</span>
        </div>

        <div className="py-2 space-y-3">
          <div className="flex justify-between text-xs text-slate-400 font-mono">
            <span>Overall Alignment Rating</span>
            <span className="text-white font-bold">{percentage}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-950 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          {/* SVG Trend Line */}
          <div className="pt-2">
            <span className="text-[8px] font-mono text-slate-500 block uppercase mb-1">Quarterly Audit Path</span>
            <svg className="w-full h-10 overflow-visible">
              <path
                d="M0,35 Q30,25 60,30 T120,15 T180,10 T240,5 T300,8"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                className="opacity-80"
              />
              <circle cx="300" cy="8" r="3" fill="#10b981" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
