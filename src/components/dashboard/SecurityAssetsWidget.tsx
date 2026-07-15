/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Database, Cpu } from "lucide-react";

interface SecurityAsset {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'secure' | 'critical' | 'vulnerable';
}

const mockAssets: SecurityAsset[] = [
  { id: "ast-01", name: "Mumbai Gateway UPI-Router", type: "API Gateway", location: "Mumbai Zone A", status: "secure" },
  { id: "ast-02", name: "Core Ledger Database Node", type: "PostgreSQL DB", location: "Mumbai Zone B", status: "critical" },
  { id: "ast-03", name: "Immutable Audits S3 Bucket", type: "S3 Object Store", location: "Mumbai Zone A", status: "secure" },
  { id: "ast-04", name: "Compliance PDF Worker VM", type: "Compute Engine", location: "Mumbai Zone C", status: "vulnerable" }
];

export const SecurityAssetsWidget: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <Database className="h-4 w-4 text-indigo-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Sovereign Security Assets</h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Count: 4</span>
        </div>

        <div className="space-y-3">
          {mockAssets.map((asset) => (
            <div key={asset.id} className="rounded-lg bg-slate-950 p-3 border border-slate-850 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Cpu className="h-4 w-4 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-white">{asset.name}</h4>
                  <p className="text-[9px] text-slate-500 font-mono">{asset.type} • {asset.location}</p>
                </div>
              </div>

              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                asset.status === "secure" 
                  ? "bg-emerald-950 text-emerald-400 border border-emerald-500/20" 
                  : asset.status === "critical"
                  ? "bg-rose-950 text-rose-400 border border-rose-500/20 animate-pulse"
                  : "bg-amber-950 text-amber-400 border border-amber-500/20"
              }`}>
                {asset.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
