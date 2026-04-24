import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMusicalNotes, IoFlash, IoTimeOutline, IoCheckmarkCircle } from 'react-icons/io5';

interface DynamicIslandProps {
  activeApp: string | null;
}

export default function DynamicIsland({ activeApp }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-expand briefly when app changes
  useEffect(() => {
    if (activeApp) {
      setIsExpanded(true);
      const timer = setTimeout(() => setIsExpanded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeApp]);

  const getTimeString = () => {
    return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
      <motion.div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        initial={false}
        animate={{
          width: isExpanded ? 320 : 120,
          height: isExpanded ? 80 : 30,
          borderRadius: isExpanded ? 40 : 20,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-black shadow-2xl pointer-events-auto cursor-pointer flex items-center justify-between px-4 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-full gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active</span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center justify-between w-full h-full px-2"
            >
              {/* Left Side: Time/App */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <IoFlash size={14} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Status</span>
                </div>
                <div className="text-white text-xs font-bold truncate max-w-[120px]">
                  {activeApp ? `Using ${activeApp}` : "Available for Hire"}
                </div>
              </div>

              {/* Center: Visualizer (Mock) */}
              <div className="flex items-center gap-0.5 h-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [4, 16, 8, 12, 4],
                    }}
                    transition={{
                      duration: 0.5 + i * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1 bg-white/40 rounded-full"
                  />
                ))}
              </div>

              {/* Right Side: Quick Info */}
              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="text-[10px] font-black uppercase">Online</span>
                  <IoCheckmarkCircle size={12} />
                </div>
                <div className="flex items-center gap-1 text-white/60 text-[10px] font-bold">
                  <IoTimeOutline size={12} />
                  <span>{getTimeString()}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
