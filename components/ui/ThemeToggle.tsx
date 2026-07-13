"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#222] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}>
          <Sun className="w-4 h-4" />
        </motion.div>
      ) : (
        <motion.div initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }}>
          <Moon className="w-4 h-4" />
        </motion.div>
      )}
    </button>
  );
}
