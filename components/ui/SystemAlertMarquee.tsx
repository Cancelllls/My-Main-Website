"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, Zap, Terminal } from "lucide-react";

const alerts = [
  "SYSTEM_STATUS: NOMINAL",
  "UPLINK_STABLE // BERLIN_DE_01",
  "WARNING: ENCRYPTION_ROTATION_IN_PROGRESS",
  "THREAT_LEVEL: ZERO",
  "ACCESS_GRANTED: ROOT_USER",
  "NEURAL_HANDSHAKE_COMPLETE",
  "LOG_ID: 992-001-ALPHA",
];

const SystemAlertMarquee = () => {
  return (
    <div className="w-full bg-[#FF003C] py-2 overflow-hidden flex items-center border-y-2 border-black relative z-20">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
        className="flex gap-12 whitespace-nowrap px-12"
      >
        {[...alerts, ...alerts, ...alerts].map((alert, i) => (
          <div key={i} className="flex items-center gap-3 text-black font-black text-[10px] tracking-[0.4em] uppercase">
            <ShieldAlert className="w-3 h-3" />
            {alert}
            <span className="mx-4 opacity-30">///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SystemAlertMarquee;
