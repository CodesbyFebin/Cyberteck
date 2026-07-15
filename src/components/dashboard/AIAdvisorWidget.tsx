"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Shield, Send, User } from "lucide-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAdvisorWidgetProps {
  messages: Message[];
  onSendMessage: (content: string) => Promise<void>;
  sending: boolean;
}

export const AIAdvisorWidget: React.FC<AIAdvisorWidgetProps> = ({ 
  messages, 
  onSendMessage, 
  sending 
}) => {
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || sending) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl flex flex-col h-[400px] justify-between relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-800 p-4 flex items-center justify-between bg-slate-950/20">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-tr from-cyan-500 to-blue-600">
            <Shield className="h-3 w-3 text-white" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">AI Threat Advisor</h4>
            <span className="block text-[8px] text-emerald-500 font-bold uppercase font-mono">● Active Grounding</span>
          </div>
        </div>
        <span className="rounded bg-slate-850 px-1.5 py-0.5 text-[8px] font-mono text-slate-400">gemini-3.5-flash</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[220px]">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-2 max-w-[90%] ${
              msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div className={`h-6 w-6 rounded-full shrink-0 flex items-center justify-center text-[10px] ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white'
            }`}>
              {msg.role === 'user' ? <User className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
            </div>
            
            <div className={`rounded-xl px-3 py-2 text-[11px] leading-relaxed ${
              msg.role === 'user'
                ? 'bg-indigo-950 text-white border border-indigo-900'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}>
              {msg.content.split('\n').map((line, lIdx) => {
                if (line.startsWith('### ')) {
                  return <h5 key={lIdx} className="font-bold text-white text-xs mt-2 mb-0.5">{line.replace('### ', '')}</h5>;
                }
                return <p key={lIdx} className="mt-0.5">{line}</p>;
              })}
            </div>
          </div>
        ))}
        
        {sending && (
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center">
              <Shield className="h-3 w-3 animate-pulse" />
            </div>
            <div className="rounded-xl px-3 py-2 bg-slate-950 text-slate-500 text-[10px] border border-slate-800 animate-pulse">
              AI Copilot is analyzing telemetry...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Suggested Triggers */}
      <div className="px-3 py-1.5 bg-slate-950/40 border-t border-slate-800/80 flex flex-wrap gap-1">
        {["Are we DPDP compliant?", "Scan threats"].map((s, idx) => (
          <button
            key={idx}
            onClick={() => setInput(s)}
            className="rounded bg-slate-900 border border-slate-850 px-2 py-0.5 text-[9px] text-slate-400 hover:text-white"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI Advisor..."
          className="flex-1 rounded-lg border border-slate-850 bg-slate-950 px-3 py-2 text-[11px] text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          disabled={sending || !input.trim()}
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-white hover:opacity-90 disabled:opacity-50"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
};
