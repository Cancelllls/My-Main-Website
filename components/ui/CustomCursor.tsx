"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsTouchDevice(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Primary Reticle */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -12,
          top: -12,
        }}
        animate={{
          width: isPointer ? 40 : 24,
          height: isPointer ? 40 : 24,
          rotate: isPointer ? 90 : 0,
          borderColor: isPointer ? "#FF003C" : "#00FF41",
        }}
        className="absolute border-2 flex items-center justify-center transition-colors duration-300"
      >
        {/* Inner Crosshair Dot */}
        <motion.div 
          animate={{
            scale: isPointer ? 2 : 1,
            backgroundColor: isPointer ? "#FF003C" : "#00FF41",
          }}
          className="w-1 h-1 rounded-full shadow-[0_0_10px_rgba(0,255,65,0.8)]" 
        />
        
        {/* Corner Brackets (Brutalist style) */}
        <div className="absolute top-[-2px] left-[-2px] w-1 h-1 bg-[#050505]" />
        <div className="absolute top-[-2px] right-[-2px] w-1 h-1 bg-[#050505]" />
        <div className="absolute bottom-[-2px] left-[-2px] w-1 h-1 bg-[#050505]" />
        <div className="absolute bottom-[-2px] right-[-2px] w-1 h-1 bg-[#050505]" />
      </motion.div>

      {/* Trailing Glow/Shadow */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -30,
          top: -30,
        }}
        animate={{
          opacity: isVisible ? 0.2 : 0,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "#FF003C" : "#00FF41",
        }}
        className="absolute w-[60px] h-[60px] rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
};

export default CustomCursor;
