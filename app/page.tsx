"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  Code2,
  Layout,
  Smartphone,
  Globe,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="group relative p-8 bg-white/50 dark:bg-[#111]/50 backdrop-blur-md border border-gray-200 dark:border-[#222] rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none"
    >
      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-transparent font-sans">
      <main className="pt-32 relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm border border-gray-200 dark:border-[#222] text-sm text-gray-700 dark:text-gray-300 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for new projects
          </motion.div>
          
          <motion.div style={{ y: y1, opacity }} className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white max-w-4xl leading-[1.1]"
            >
              Crafting Digital <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                Experiences.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed mx-auto"
            >
              I build high-end, scalable, and beautifully designed web applications. 
              Transforming complex problems into elegant, professional solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/work" 
                className="px-8 py-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#222] transition-colors flex items-center justify-center shadow-sm"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Floating Animation Elements (Parallax Background) */}
        <motion.div style={{ y: y2 }} className="absolute top-[20%] left-[5%] opacity-20 dark:opacity-40 blur-[2px] pointer-events-none hidden md:block">
          <Code2 className="w-32 h-32 text-blue-500" />
        </motion.div>
        <motion.div style={{ y: y1 }} className="absolute top-[40%] right-[10%] opacity-20 dark:opacity-40 blur-[3px] pointer-events-none hidden md:block">
          <Layout className="w-24 h-24 text-purple-500" />
        </motion.div>

        {/* Services Section */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:mb-24 text-center md:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                My Expertise
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
              >
                Comprehensive digital solutions tailored for modern businesses and startups.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Frontend Development"
                description="Building responsive, accessible, and highly interactive user interfaces using React, Next.js, and Tailwind CSS."
                icon={Layout}
                delay={0.1}
              />
              <ServiceCard 
                title="Backend Architecture"
                description="Designing robust, scalable server-side solutions and APIs using Node.js, Python, and modern databases."
                icon={Code2}
                delay={0.2}
              />
              <ServiceCard 
                title="Mobile Applications"
                description="Creating seamless cross-platform mobile experiences for iOS and Android using modern frameworks."
                icon={Smartphone}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 border-t border-gray-200 dark:border-[#222] bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-lg relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" className="fill-gray-100 dark:fill-[#111]" />
                <path d="M65 35C55 25 35 25 35 50C35 75 55 75 65 65" stroke="currentColor" className="text-black dark:text-white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="75" cy="65" r="8" fill="#3b82f6" />
              </svg>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Cancellls
              </div>
            </div>
            <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Cancellls. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
