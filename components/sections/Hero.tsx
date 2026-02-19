"use client";

import React from "react";
import { motion } from "framer-motion";
import GlitchHeader from "../ui/GlitchHeader";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <GlitchHeader />
        
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm md:text-xl font-mono border border-white/20 px-4 py-2 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-[#00FF41]">STATUS:</span>
            <span className="animate-pulse">ONLINE</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-white/60">ACCESS_LEVEL: 0</span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Architecting high-performance digital systems and brutalist interfaces for the next generation of the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-[#00FF41] text-black font-bold uppercase tracking-widest hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              INITIATE_DOWNLOAD <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-white/20 hover:border-[#00FF41] hover:text-[#00FF41] transition-all duration-300 uppercase font-bold tracking-widest"
          >
            SYSTEM_SPECS
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-48 h-[1px] bg-white/40 rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-64 h-[1px] bg-white/40 -rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full scale-[1.5]" />
      </div>
    </section>
  );
};

export default Hero;
