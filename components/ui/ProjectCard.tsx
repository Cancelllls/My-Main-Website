"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ id, title, category, description, image, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(title);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          title
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return title[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= title.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayText(title);
    }
  }, [isHovered, title]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#0a0a0a] border-l border-white/10 hover:border-[#00FF41] transition-colors duration-500 overflow-hidden"
    >
      {/* Index Number */}
      <div className="absolute top-4 left-4 z-20 font-bold text-[#00FF41] text-xs opacity-40 group-hover:opacity-100 transition-opacity">
        [{id}]
      </div>

      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.3em] text-[#FF0000] font-bold uppercase">
            {category}
          </p>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none break-words">
            {displayText}
          </h3>
        </div>

        <div className="relative aspect-video bg-[#111] border border-white/5 overflow-hidden">
          <motion.img
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? "grayscale(0) brightness(1.1)" : "grayscale(1) brightness(0.7)",
            }}
            transition={{ duration: 0.7 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Scanline effect on image */}
          {isHovered && (
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
          )}
        </div>

        <p className="text-white/50 text-sm leading-relaxed font-mono min-h-[4rem]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/40 font-mono tracking-wider group-hover:border-[#00FF41]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-white/5">
          <a
            href={link}
            className="flex items-center gap-2 text-sm font-bold tracking-widest hover:text-[#00FF41] transition-colors"
          >
            VIEW_LOG <ExternalLink className="w-4 h-4" />
          </a>
          <Terminal className="w-4 h-4 text-white/20 group-hover:text-[#00FF41] transition-colors" />
        </div>
      </div>

      {/* Hover Overlays */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute top-0 right-0 w-1 h-full bg-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.5)]"
      />
    </motion.div>
  );
};

export default ProjectCard;
