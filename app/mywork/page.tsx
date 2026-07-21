"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Activity, Shield, Cpu, BarChart2, Plane, Globe2, Radio, Server } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10 bg-transparent">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">Selected Work</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl font-light">A curated showcase of my most complex, highly-scalable engineering projects.</p>
      </div>

      {/* CASE STUDY 1: LIVE MARKET BOT */}
      <div className="mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#222] shadow-xl"
        >
          <motion.div 
            style={{ y }} 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 dark:opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-transparent dark:to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex flex-wrap gap-3 mb-4">
              {["Next.js", "Python", "FastAPI", "WebSockets"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium tracking-wide shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Live Market Bot</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-light">An advanced cryptocurrency algorithmic trading engine with real-time analytics dashboard.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                The goal was to build a highly optimized, extremely fast algorithmic trading bot capable of making split-second decisions using advanced mathematical models (like Bayesian Optimization). The system needed to process massive amounts of candlestick data via WebSockets and present it securely on a beautiful, ultra-responsive dashboard.
              </p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                I architected a dual-stack solution. The backend is a robust Python FastAPI engine deployed via Docker, handling secure Apex API connections, AI Insights generation, and real-time ledger tracking. 
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                The frontend is a blazing-fast Next.js application that leverages custom charting libraries and fluid animations to give users a premium experience with instantaneous theming and live data updates.
              </p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Real-time AI Insights", icon: Activity, desc: "Live feed of algorithmic decisions and confidence scores." },
                  { title: "Secure Key Management", icon: Shield, desc: "Enterprise-grade environment variable injection." },
                  { title: "Bayesian Tuning", icon: Cpu, desc: "Automated hyperparameter optimization via Optuna." },
                  { title: "Dynamic Charting", icon: BarChart2, desc: "Responsive SVGs with auto-adjusting themes for Android/iOS." },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#222] shadow-sm">
                    <feature.icon className="w-6 h-6 text-blue-500 mb-4" />
                    <h4 className="text-gray-900 dark:text-white font-medium mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn delay={0.2} className="p-8 bg-white/80 dark:bg-[#111] backdrop-blur-md rounded-3xl border border-gray-200 dark:border-[#222] shadow-lg">
              <h3 className="text-gray-900 dark:text-white font-medium mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Role</span>
                  <span className="text-gray-900 dark:text-gray-300">Lead Full Stack Developer</span>
                </div>
                <div className="h-px w-full bg-gray-200 dark:bg-[#222]" />
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Status</span>
                  <span className="text-gray-900 dark:text-gray-300">Active Pipeline</span>
                </div>
              </div>
              <a href="https://market.cancellls.com" target="_blank" rel="noreferrer" className="mt-8 w-full py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group shadow-md shadow-blue-500/20">
                View Live Dashboard <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 dark:bg-[#222] my-20" />

      {/* CASE STUDY 2: RTA FLIGHT TRACKER */}
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#222] shadow-xl"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 dark:opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-transparent dark:to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex flex-wrap gap-3 mb-4">
              {["React", "Leaflet", "FastAPI", "OpenSky API", "Docker"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-wide shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">RTA Flight Tracker</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-light">A real-time global aviation tracking platform using live ADS-B telemetry streams.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Tracking thousands of high-speed aircraft across the globe requires ingesting massive amounts of state vectors per second. The client needed a robust mapping interface that could render thousands of moving points dynamically without degrading browser performance, paired with a reliable backend that manages strict OpenSky API rate limits via OIDC authentication.
              </p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                I engineered an asynchronous FastAPI backend utilizing `httpx` to continuously poll and process OpenSky network data. The server normalizes the telemetry and broadcasts it via high-throughput WebSockets.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                The frontend utilizes React coupled with Leaflet to deliver 60FPS marker interpolations. To prevent UI lockups, data streaming is debounced and mapped efficiently, allowing users to select individual planes, view live altitude parameters, and track flight paths directly over a beautiful monochromatic map skin.
              </p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Live Interpolation", icon: Plane, desc: "Smooth visual movement of flight markers mapped using WebSockets." },
                  { title: "Global OIDC Auth", icon: Shield, desc: "Automated token rotation for uninterrupted data ingestion." },
                  { title: "Asynchronous I/O", icon: Server, desc: "FastAPI handles thousands of concurrent data pipelines flawlessly." },
                  { title: "Responsive Map UI", icon: Globe2, desc: "A beautifully styled dark-mode mapping interface." },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#222] shadow-sm">
                    <feature.icon className="w-6 h-6 text-indigo-500 mb-4" />
                    <h4 className="text-gray-900 dark:text-white font-medium mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn delay={0.2} className="p-8 bg-white/80 dark:bg-[#111] backdrop-blur-md rounded-3xl border border-gray-200 dark:border-[#222] shadow-lg">
              <h3 className="text-gray-900 dark:text-white font-medium mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Role</span>
                  <span className="text-gray-900 dark:text-gray-300">Architecture & Full Stack</span>
                </div>
                <div className="h-px w-full bg-gray-200 dark:bg-[#222]" />
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Status</span>
                  <span className="text-gray-900 dark:text-gray-300">Live Production</span>
                </div>
              </div>
              <a href="https://rta.cancellls.com" target="_blank" rel="noreferrer" className="mt-8 w-full py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group shadow-md shadow-indigo-500/20">
                Launch Flight Tracker <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

