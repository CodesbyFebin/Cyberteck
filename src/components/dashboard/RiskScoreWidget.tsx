/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield } from "lucide-react";

interface RiskScoreWidgetProps {
  score: number;
}

export const RiskScoreWidget: React.FC<RiskScoreWidgetProps> = ({ score }) => {
  const isSecure = score >= 85;
  const isHighRisk = score < 70;
  
  // Color configuration based on the Design System
  const strokeColor = isSecure 
    ? "#10b981" // emerald-500 (Compliant)
    : isHighRisk 
    ? "#f43f5e" // rose-500 (Critical)
    : "#f59e0b"; // amber-500 (Warning)

  const glowClass = isSecure 
    ? "shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
    : isHighRisk 
    ? "shadow-[0_0_15px_rgba(244,63,94,0.05)]" 
    : "shadow-[0_0_15px_rgba(245,158,11,0.05)]";

  // Circle path math
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col justify-between h-full ${glowClass}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Enterprise Risk Posture</span>
        <Shield className="h-4 w-4 text-cyan-400" />
      </div>
      
      <div className="flex items-center justify-center py-3 relative">
        {/* Circular Gauge */}
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-slate-950 fill-none"
            strokeWidth="8"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="fill-none transition-all duration-500 ease-out"
            strokeWidth="8"
            stroke={strokeColor}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-2xl font-bold tracking-tight text-white">{score}</span>
          <span className="text-[8px] block text-slate-500 font-mono">/100</span>
        </div>
      </div>

      <div className="text-center pt-2 border-t border-slate-800/50 mt-2">
        <span className={`text-[10px] font-bold tracking-wider ${
          isSecure ? "text-emerald-500" : isHighRisk ? "text-rose-500" : "text-amber-500"
        }`}>
          {isSecure ? "● SECURE STATUS" : isHighRisk ? "● HIGH RISK EXPOSURE" : "● WARNING DETECTED"}
        </span>
      </div>
    </div>
  );
};
