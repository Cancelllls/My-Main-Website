"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlitchHeader = () => {
  const [glitchText, setGlitchText] = useState("CANCELLLS");

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      if (Math.random() > 0.9) {
        const newText = "CANCELLLS".split("").map((char, i) => {
          if (Math.random() > 0.9) {
            return chars.charAt(Math.floor(Math.random() * chars.length));
          }
          return char;
        }).join("");
        setGlitchText(newText);
        setTimeout(() => setGlitchText("CANCELLLS"), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative inline-block py-10">
      <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter uppercase select-none">
        <span>CANCE</span>
        <span className="relative inline-flex">
          <motion.span
            animate={{ 
              opacity: [1, 0.4, 1, 0.8, 1],
              x: [0, -2, 2, -1, 0],
              color: ["#00FF41", "#FF00FF", "#00FFFF", "#00FF41"]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1 }}
            className="text-[#FF00FF] glitch-text"
            data-text="L"
          >
            L
          </motion.span>
          <motion.span
            animate={{ 
              opacity: [1, 0.8, 1, 0.4, 1],
              x: [0, 2, -2, 1, 0],
              color: ["#00FF41", "#00FFFF", "#FF00FF", "#00FF41"]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.8 }}
            className="text-[#00FFFF] glitch-text"
            data-text="L"
          >
            L
          </motion.span>
          <motion.span
            animate={{ 
              opacity: [1, 1, 0.5, 1, 1],
              x: [0, -1, 1, -2, 0],
              color: ["#00FF41", "#FFFF00", "#FF00FF", "#00FF41"]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1.2 }}
            className="text-[#FFFF00] glitch-text"
            data-text="L"
          >
            L
          </motion.span>
        </span>
        <span>S</span>
      </h1>
      <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00FF41] shadow-[0_0_10px_#00FF41]" />
    </div>
  );
};

export default GlitchHeader;
