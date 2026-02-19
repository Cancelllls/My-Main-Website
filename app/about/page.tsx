"use client";

import React from "react";
import DocumentWrapper from "@/components/ui/DocumentWrapper";
import { motion } from "framer-motion";
import { Cpu, Terminal, Eye, Layers } from "lucide-react";

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
  <section className="space-y-6 pt-12 first:pt-0 border-t border-white/5 first:border-0 relative group">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[#00FF41] font-black text-xs tracking-[0.4em] uppercase">SECTION::{id}</span>
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
        {title}
      </h2>
    </div>
    <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-2xl">
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <DocumentWrapper 
      title="SYS.DOC_BIO" 
      id="PROFILE-001" 
      lastUpdated="2024.11.24"
    >
      <div className="space-y-16">
        <Section title="MISSION_OBJECTIVE" id="01">
          <p>
            Architecting high-performance digital systems and brutalist interfaces for the next generation of the web. I bridge the gap between radical design aesthetics and cutting-edge engineering.
          </p>
          <p>
            My work is focused on creating immersive, "alive" digital environments that challenge the standard UI conventions of the modern web. I believe in software that feels heavy, intentional, and powerful.
          </p>
        </Section>

        <Section title="CORE_STACK" id="02">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4 bg-white/5 p-6 border border-white/10 relative group hover:border-[#00FF41] transition-all duration-300">
              <div className="flex items-center gap-3 text-white mb-2">
                <Cpu className="w-5 h-5 text-[#00FF41]" />
                <span className="font-bold tracking-widest text-xs uppercase">ARCHITECTURES</span>
              </div>
              <ul className="text-xs space-y-2 text-white/40 list-none font-bold tracking-[0.2em]">
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">NEXT.JS / APP ROUTER</li>
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">TYPESCRIPT / RUST / GO</li>
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">DISTRIBUTED SYSTEMS</li>
              </ul>
            </div>

            <div className="space-y-4 bg-white/5 p-6 border border-white/10 relative group hover:border-[#00FF41] transition-all duration-300">
              <div className="flex items-center gap-3 text-white mb-2">
                <Layers className="w-5 h-5 text-[#00FF41]" />
                <span className="font-bold tracking-widest text-xs uppercase">INTERFACE_TECH</span>
              </div>
              <ul className="text-xs space-y-2 text-white/40 list-none font-bold tracking-[0.2em]">
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">TAILWIND CSS V4</li>
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">FRAMER MOTION / THREE.JS</li>
                <li className="flex items-center gap-2 underline decoration-[#00FF41]/30">GLSL SHADER PROGRAMMING</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="SYSTEM_HISTORY" id="03">
          <p>
            With over 10 years of experience in the digital sector, I have transitioned from standard corporate development to high-concept creative engineering. I currently operate as a lead developer and UI architect for decentralized projects and privacy-first infrastructures.
          </p>
          <p className="border-l-2 border-[#FF003C] pl-6 py-4 bg-[#FF003C]/5 text-xs font-bold tracking-wider text-white/70">
            [WARNING] CONNECTION_ESTABLISHED. LOGGING_USER_PROFILE... SUCCESS.
          </p>
        </Section>

        <div className="pt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 text-xl font-black text-white tracking-widest uppercase hover:text-[#00FF41] transition-all"
          >
            <Eye className="w-6 h-6" /> REQUEST_FULL_DOSSIER.PDF
          </motion.button>
        </div>
      </div>
    </DocumentWrapper>
  );
}
