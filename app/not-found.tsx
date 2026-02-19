"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, ArrowLeft } from "lucide-react";
import DecryptText from "@/components/ui/DecryptText";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full opacity-5 bg-[linear-gradient(rgba(255,0,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-12 relative z-10"
      >
        <div className="flex flex-col items-center gap-6">
          <ShieldAlert className="w-16 h-16 text-[#FF003C] animate-pulse" />
          <h1 className="text-8xl md:text-[12rem] font-black text-[#FF003C] leading-none tracking-tighter">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <div className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
            <DecryptText text="CRITICAL_NODE_NOT_FOUND" />
          </div>
          <p className="text-white/30 text-xs md:text-sm tracking-[0.5em] uppercase font-bold max-w-md mx-auto leading-relaxed">
            The requested sub-routing address does not exist or has been purged from the mainframe. Access denied.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
          <Link
            href="/"
            className="px-10 py-4 bg-[#FF003C] text-white font-black text-xs tracking-[0.5em] uppercase hover:bg-white hover:text-[#FF003C] transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" /> RETURN_TO_HUB
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 border-2 border-white/20 text-white/50 font-black text-xs tracking-[0.5em] uppercase hover:border-[#00FF41] hover:text-[#00FF41] transition-all flex items-center justify-center gap-3"
          >
            <Terminal className="w-4 h-4" /> REBOOT_SESSION
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-8 text-[10px] text-white/10 tracking-[0.8em] font-bold uppercase">
        SYSTEM_OVERRIDE_VER_4.0.2 // ERROR_ID: 0xDEADBEEF
      </div>
    </div>
  );
}
