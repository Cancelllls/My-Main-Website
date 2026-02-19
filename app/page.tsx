import React from "react";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#050505] selection:bg-[#00FF41] selection:text-black">
      {/* Dynamic scanline moving across the entire page */}
      <div className="scanline" aria-hidden="true" />
      
      <Hero />
      <Projects />
      <About />
      
      {/* Custom footer with brutalist aesthetic */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-4xl font-black tracking-tighter uppercase group cursor-default">
            CANCE<span className="text-[#FF00FF]">L</span><span className="text-[#00FFFF]">L</span><span className="text-[#FFFF00]">L</span>S
          </div>
          <div className="text-xs font-mono text-white/30 tracking-[0.4em] uppercase">
            © 2024 SYSTEM_OVERRIDE_VER_4.0.2 // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex gap-10 font-bold text-xs tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-[#00FF41] transition-colors hover:line-through">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-[#00FF41] transition-colors hover:line-through">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
