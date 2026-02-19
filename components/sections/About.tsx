"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, Twitter, Linkedin, Send, Cpu, Database, Cloud } from "lucide-react";
import { bio, socialLinks } from "../../lib/data";

const About = () => {
  const iconMap: any = {
    Github: <Github className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Send: <Send className="w-5 h-5" />,
  };

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <span className="text-[#FF0000] font-bold tracking-[0.5em] text-sm uppercase block">
              [SYSTEM_SPECIFICATIONS]
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none break-words">
              BIO_LOG
            </h2>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-8 relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF41] opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6 text-white/40">
              <Terminal className="w-5 h-5 text-[#00FF41]" />
              <span className="text-xs font-mono tracking-widest uppercase">ROOT@CANCELLLS:~/PROFILE.SH</span>
            </div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-mono">
              {bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ x: 10, backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                className="flex items-center justify-between p-4 border border-white/5 bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/40 group-hover:text-[#00FF41] transition-colors">
                    {iconMap[link.icon]}
                  </span>
                  <span className="font-bold tracking-widest text-sm uppercase">{link.name}</span>
                </div>
                <span className="text-white/20 group-hover:text-[#00FF41] transition-colors text-xs">[LINK]</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0a0a0a] border border-white/10 p-10 space-y-8 group"
        >
          <div className="absolute top-4 right-4 text-[10px] text-white/20 font-mono tracking-widest uppercase">CORE_METRICS</div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> FRONTEND_ENGINEERING</span>
                <span className="text-[#00FF41]">98%</span>
              </div>
              <div className="h-1 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="h-full bg-[#00FF41] shadow-[0_0_10px_#00FF41]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="flex items-center gap-2"><Database className="w-3 h-3" /> BACKEND_INFRASTRUCTURE</span>
                <span className="text-[#00FF41]">85%</span>
              </div>
              <div className="h-1 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="h-full bg-[#00FF41] shadow-[0_0_10px_#00FF41]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="flex items-center gap-2"><Cloud className="w-3 h-3" /> DISTRIBUTED_SYSTEMS</span>
                <span className="text-[#00FF41]">92%</span>
              </div>
              <div className="h-1 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="h-full bg-[#00FF41] shadow-[0_0_10px_#00FF41]"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] text-white/30 uppercase mb-1 font-bold">LOC_OPERATIONS</div>
              <div className="text-xl font-black text-[#00FF41]">BERLIN_DE</div>
            </div>
            <div>
              <div className="text-[10px] text-white/30 uppercase mb-1 font-bold">UTC_OFFSET</div>
              <div className="text-xl font-black text-[#00FF41]">GMT+1</div>
            </div>
          </div>
          
          <div className="absolute -bottom-px -right-px w-20 h-20 border-b-2 border-r-2 border-[#FF0000] opacity-50 group-hover:w-full group-hover:h-full group-hover:opacity-20 transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
