"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Terminal, FileText, Share2 } from "lucide-react";
import Link from "next/link";

interface DocumentWrapperProps {
  children: React.ReactNode;
  title: string;
  id: string;
  lastUpdated: string;
}

const DocumentWrapper = ({ children, title, id, lastUpdated }: DocumentWrapperProps) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#cccccc] font-mono selection:bg-[#00FF41] selection:text-black p-6 md:p-12 lg:p-20 relative overflow-hidden">
      {/* Background Grid & Scanline */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Terminal Top Bar */}
        <header className="border-b-2 border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#00FF41] text-xs font-bold tracking-[0.3em] hover:line-through transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> [SYSTEM_BACK_LINK]
            </Link>
            <div className="flex items-center gap-4">
              <Terminal className="w-8 h-8 text-[#00FF41]" />
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                {title}
              </h1>
            </div>
          </div>

          <div className="text-[10px] text-white/30 space-y-1 uppercase tracking-[0.2em] font-bold">
            <div>DOC_ID: {id}</div>
            <div>STATUS: UNRESTRICTED_ACCESS</div>
            <div>VERIFIED: {lastUpdated}</div>
          </div>
        </header>

        {/* Content Area */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {children}
        </motion.main>

        {/* Brutalist Footer */}
        <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] font-bold">
            <div className="flex items-center gap-2"><FileText className="w-4 h-4" /> LOCAL_COPY_ACTIVE</div>
            <div className="flex items-center gap-2"><Share2 className="w-4 h-4" /> UPLINK_STABLE</div>
          </div>
          <div className="text-[9px] uppercase tracking-[0.5em]">
            SYSTEM_OVERRIDE_VER_4.0.2 // ARCHIVE_LOGS
          </div>
        </footer>
      </div>
      
      {/* Decorative vertical border lines */}
      <div className="fixed top-0 left-6 w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="fixed top-0 right-6 w-[1px] h-full bg-white/5 pointer-events-none" />
    </div>
  );
};

export default DocumentWrapper;
