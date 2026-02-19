"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Database, Activity, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const RoutingNode = ({ 
  id, 
  title, 
  description, 
  href, 
  status, 
  icon: Icon 
}: { 
  id: string; 
  title: string; 
  description: string; 
  href: string; 
  status: string;
  icon: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(title);
  
  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      const interval = setInterval(() => {
        setDisplayText(
          title
            .split("")
            .map((char, index) => {
              if (index < iteration) return title[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        if (iteration >= title.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 40);
      return () => clearInterval(interval);
    } else {
      setDisplayText(title);
    }
  }, [isHovered, title]);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block w-full bg-[#080808] border-2 border-[#1a1a1a] hover:border-[#00FF41] transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-[#00FF41] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-[#00FF41] -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>

      <div className="p-8 md:p-12 space-y-8">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <span className="text-[#FF003C] font-mono text-[10px] tracking-[0.4em] font-bold uppercase block">
              SYSTEM_PATH::{id}
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              {displayText}
            </h2>
          </div>
          <Icon className={`w-12 h-12 ${isHovered ? "text-[#00FF41]" : "text-white/10"} transition-colors duration-500`} />
        </div>

        <div className="space-y-6">
          <p className="text-white/40 font-mono text-sm md:text-base max-w-md leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isHovered ? "bg-[#00FF41] animate-pulse" : "bg-white/20"}`} />
              <span className={isHovered ? "text-[#00FF41]" : "text-white/40"}>STATUS: {isHovered ? "ESTABLISHING..." : status}</span>
            </div>
            <div className="text-white/20">|</div>
            <div className="text-white/40">PROTOCOL: SECURE_SSH</div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs tracking-[0.3em]">
            <ShieldCheck className="w-4 h-4" /> AUTH_VERIFIED
          </div>
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-sm group-hover:text-[#00FF41] transition-colors">
            EXECUTE_REDIRECT <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>

      {/* Background Glitch Fill */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        className="absolute inset-0 bg-gradient-to-t from-[#00FF41]/5 to-transparent pointer-events-none"
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
};

export default function PortalPage() {
  const [bootSequence, setBootSequence] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      "INITIALIZING_SUB-ROUTING_PROTOCOL...",
      "SCANNING_ACTIVE_NODES...",
      "MOUNTING_FILESYSTEM_DATA.CANCELLLS.COM",
      "ESTABLISHING_HANDSHAKE_LIVE.CANCELLLS.COM",
      "ENCRYPTION_LAYER_ACTIVE [AES-256]",
      "GATEWAY_READY_FOR_INPUT."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        setBootSequence(false);
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono p-6 md:p-12 selection:bg-[#00FF41] selection:text-black">
      {/* Background Scanline */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        <div className="w-full h-[100px] bg-gradient-to-b from-transparent via-[#00FF41]/5 to-transparent animate-[scanline_8s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Terminal Header */}
        <header className="border-b border-[#1a1a1a] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#00FF41]">
              <Terminal className="w-6 h-6" />
              <span className="font-bold tracking-[0.4em] uppercase text-sm animate-pulse">GATEWAY_SESSION_ACTIVE</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              SYSTEM<br />ROUTING
            </h1>
          </div>

          <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 w-full md:w-96 h-40 overflow-hidden text-[10px] leading-relaxed">
            <AnimatePresence>
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2"
                >
                  <span className="text-[#00FF41]">[OK]</span>
                  <span className="text-white/60">{line}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {bootSequence && (
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="inline-block w-2 h-3 bg-[#00FF41] ml-1 align-middle"
              />
            )}
          </div>
        </header>

        {/* Node Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RoutingNode
            id="0x01"
            title="DATA_NODE"
            description="Secure data lake and metric aggregation. Access proprietary datasets, historical logs, and real-time visualization frameworks."
            href="https://data.cancellls.com"
            status="IDLE"
            icon={Database}
          />
          <RoutingNode
            id="0x02"
            title="LIVE_NODE"
            description="Real-time production environment and active web sockets. Direct uplink to sensory monitoring and active system state."
            href="https://live.cancellls.com"
            status="IDLE"
            icon={Activity}
          />
        </main>

        {/* Footer Warning */}
        <footer className="pt-20 border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0a0a0a] border-2 border-[#1a1a1a] p-8">
            <div className="flex items-center gap-6">
              <div className="bg-[#FF003C]/10 p-4 border border-[#FF003C]/30">
                <AlertTriangle className="w-8 h-8 text-[#FF003C] animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="text-[#FF003C] font-black text-xs tracking-widest uppercase">RESTRICTED_ACCESS_WARNING</div>
                <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em] max-w-md">
                  Unauthorized access to subdomain nodes is strictly prohibited. All connection attempts are logged via hardware ID and neural-signature.
                </div>
              </div>
            </div>
            
            <Link 
              href="/"
              className="px-10 py-4 bg-white/5 border border-white/10 hover:border-white/40 transition-all font-black text-xs tracking-[0.5em] uppercase"
            >
              EXIT_TO_ROOT
            </Link>
          </div>

          <div className="mt-12 flex justify-between items-center text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">
            <span>TERMINAL_ID: 992-001-ALPHA</span>
            <span>SYSTEM_OVERRIDE_VER_4.0.2</span>
          </div>
        </footer>
      </div>
      
      {/* Global Style for Scanline Animation */}
      <style jsx global>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
