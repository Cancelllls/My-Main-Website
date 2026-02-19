"use client";

import React from "react";
import DocumentWrapper from "@/components/ui/DocumentWrapper";
import { Terminal, ShieldAlert, Cpu, Activity } from "lucide-react";

const Directive = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
  <section className="space-y-6 pt-12 first:pt-0 border-t border-white/5 first:border-0 relative">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[#00FF41] font-black text-xs tracking-[0.4em] uppercase">DIRECTIVE::{id}</span>
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
        {title}
      </h2>
    </div>
    <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-2xl text-white/40 font-mono">
      {children}
    </div>
  </section>
);

export default function TermsPage() {
  return (
    <DocumentWrapper 
      title="SYS.DOC_TERMS" 
      id="LAW-001" 
      lastUpdated="2024.11.24"
    >
      <div className="space-y-16">
        <Directive title="USAGE_OF_SYSTEM_ASSETS" id="01">
          <p>
            By accessing this system, you agree to adhere to the following operational parameters. Any attempt to decompile, reverse-engineer, or maliciously manipulate the system's neural-mapping code will result in an immediate hardware ban.
          </p>
          <div className="p-6 bg-[#FF003C]/5 border border-[#FF003C]/20 flex items-start gap-6">
            <ShieldAlert className="w-8 h-8 text-[#FF003C] shrink-0" />
            <div className="text-[10px] font-bold tracking-widest text-white/50 leading-relaxed uppercase">
              [WARNING] UNAUTHORIZED_ACCESS_TO_RESERVED_SYMBOLS_IS_PROHIBITED. ALL_RESOURCES_ARE_PROTECTED_BY_NEURAL_SIGNATURES.
            </div>
          </div>
        </Directive>

        <Directive title="INTELLECTUAL_PROPERTY_LOGS" id="02">
          <p>
            All graphical components, GLSL shader sequences, and React-based architectures contained within the `cancellls.com` gateway are the exclusive property of the system administrator. No reproduction or redistribution is permitted without an encrypted signature.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["UI_CODE", "SHADERS", "METADATA", "LOGOS"].map(asset => (
              <div key={asset} className="border border-white/10 p-4 text-[10px] text-center font-bold tracking-widest text-[#00FF41]/40 hover:text-[#00FF41] transition-colors cursor-default">
                {asset}::SECURED
              </div>
            ))}
          </div>
        </Directive>

        <Directive title="SYSTEM_LIABILITY_WAIVER" id="03">
          <p>
            The administrator of this system is not responsible for any data corruption, neural-fatigue, or device overheating that may occur during the execution of high-performance shader protocols. Use of this system is at the user's own operational risk.
          </p>
          <div className="flex items-center gap-4 py-4 text-[#00FF41]">
            <Activity className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">SYSTEM_STABILITY: 99.98%</span>
          </div>
        </Directive>

        <Directive title="TERMINATION_OF_SESSION" id="04">
          <p>
            The system administrator reserves the absolute right to terminate any user session, block any IP signature, or revoke access to any sub-routing node without prior notification. Compliance with system directives is mandatory for continued access.
          </p>
          <p className="text-white/20 text-[9px] font-mono uppercase tracking-[0.5em] mt-8">
            // END_OF_LEGAL_DOC_STREAM
          </p>
        </Directive>

        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row gap-8">
          <button className="flex-1 px-10 py-5 bg-[#00FF41] text-black font-black text-xs tracking-widest uppercase hover:bg-white transition-all">
            ACCEPT_DIRECTIVES
          </button>
          <button className="flex-1 px-10 py-5 border-2 border-[#FF003C] text-[#FF003C] font-black text-xs tracking-widest uppercase hover:bg-[#FF003C] hover:text-white transition-all">
            REJECT_ACCESS
          </button>
        </div>
      </div>
    </DocumentWrapper>
  );
}
