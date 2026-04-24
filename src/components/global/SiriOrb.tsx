import React from 'react';
import { motion } from 'framer-motion';

interface SiriOrbProps {
  onClick: () => void;
}

export default function SiriOrb({ onClick }: SiriOrbProps) {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[50] pointer-events-none hidden md:block">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="relative w-12 h-12 cursor-pointer pointer-events-auto group"
      >
        {/* Glowing Layers */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0 bg-purple-500 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 bg-cyan-400 rounded-full blur-lg"
        />
        
        {/* Core */}
        <div className="absolute inset-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-full border border-white/20 shadow-lg flex items-center justify-center overflow-hidden">
          <motion.div 
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]"
          />
        </div>

        {/* Label on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: -20 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10"
        >
          Ask AI Assistant
        </motion.div>
      </motion.div>
    </div>
  );
}
