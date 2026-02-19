"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/5 pb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#00FF41] font-bold tracking-[0.5em] text-sm uppercase block mb-4">
            [DEPLOYED_OPERATIONS]
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none break-words">
            SELECTED<br />SYSTEMS
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:max-w-xs text-sm md:text-base text-white/40 font-mono leading-relaxed"
        >
          A selection of proprietary and open-source architectural frameworks, immersive interfaces, and experimental web-based infrastructures.
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-4 text-xl font-black tracking-widest uppercase hover:text-[#00FF41] transition-all"
        >
          <span className="w-12 h-px bg-white/30 group-hover:bg-[#00FF41] group-hover:w-20 transition-all duration-300" />
          BROWSE_ALL_ENTRIES
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
