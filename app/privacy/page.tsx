"use client";

import React from "react";
import DocumentWrapper from "@/components/ui/DocumentWrapper";
import { Shield, Eye, Database, Lock } from "lucide-react";

const Protocol = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
  <section className="space-y-6 pt-12 first:pt-0 border-t border-white/5 first:border-0 relative">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[#FF003C] font-black text-xs tracking-[0.4em] uppercase">PROTOCOL::{id}</span>
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
        {title}
      </h2>
    </div>
    <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-2xl text-white/50 font-mono">
      {children}
    </div>
  </section>
);

export default function PrivacyPage() {
  return (
    <DocumentWrapper 
      title="SYS.DOC_PRIVACY" 
      id="SEC-001" 
      lastUpdated="2024.11.24"
    >
      <div className="space-y-16">
        <Protocol title="DATA_AGGREGATION_METHODOLOGY" id="01">
          <p>
            This system aggregates hardware ID signatures, browser metadata, and neural-navigation patterns to optimize routing and performance. We do not store identifiable biometric data unless explicitly authorized via hardware handshake.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4">
              <Eye className="w-5 h-5 text-[#00FF41]" />
              <span className="text-[10px] font-bold tracking-widest uppercase">VISUAL_METRICS: ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 opacity-40">
              <Database className="w-5 h-5 text-[#00FF41]" />
              <span className="text-[10px] font-bold tracking-widest uppercase">COLD_STORAGE: DISABLED</span>
            </div>
          </div>
        </Protocol>

        <Protocol title="ENCRYPTION_STANDARDS" id="02">
          <p>
            All data in transit is protected by AES-256-GCM encryption with dynamic key rotation. We utilize zero-knowledge architecture for all sensitive system logs. No plaintext data is stored on-disk.
          </p>
          <div className="flex items-center gap-4 bg-[#00FF41]/5 border border-[#00FF41]/20 p-6">
            <Lock className="w-6 h-6 text-[#00FF41]" />
            <div className="text-xs font-bold tracking-widest text-white/70">
              [SYSTEM_STATUS] SECURITY_LAYER_ACTIVE. NO_LEAKS_DETECTED.
            </div>
          </div>
        </Protocol>

        <Protocol title="EXTERNAL_UPLINKS" id="03">
          <p>
            We do not transmit data to third-party central authorities. Any external requests are automatically scrubbed via proxy-nodes before reaching the primary gateway. Your IP address is masked through three separate routing layers.
          </p>
          <p className="text-[#FF003C] text-[10px] font-black tracking-widest uppercase">
            // TERMINATING_EXTERNAL_REQUESTS_BY_DEFAULT
          </p>
        </Protocol>

        <Protocol title="RIGHT_TO_ERASURE" id="04">
          <p>
            Users have the absolute right to purge their session logs and any associated metadata from the system. Executing the `PURGE_SESSION` command via the terminal will immediately initiate a three-pass overwrite of all local data caches.
          </p>
          <button className="px-8 py-3 bg-[#FF003C] text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#FF003C] transition-all">
            INITIATE_DATA_PURGE
          </button>
        </Protocol>
      </div>
    </DocumentWrapper>
  );
}
