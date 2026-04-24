import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoPlay, IoPause, IoPlayForward, IoPlayBack, IoMusicalNotes } from 'react-icons/io5';

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-24 left-6 z-30 hidden lg:block"
    >
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[24px] p-4 w-64 shadow-2xl overflow-hidden group">
        <div className="flex items-center gap-4">
          {/* Album Art (Mock) */}
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-inner">
            <IoMusicalNotes size={32} className={isPlaying ? "animate-bounce" : ""} />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="flex gap-1 items-end h-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, 16, 8, 12, 4] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-white rounded-full"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-bold text-sm truncate">Coding & Coffee</h4>
            <p className="text-white/60 text-[10px] truncate">Lofi Beats - Work Session</p>
            
            {/* Controls */}
            <div className="flex items-center gap-3 mt-2">
              <IoPlayBack className="text-white/60 hover:text-white cursor-pointer transition-colors" size={14} />
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
              >
                {isPlaying ? <IoPause size={14} /> : <IoPlay size={14} className="ml-0.5" />}
              </button>
              <IoPlayForward className="text-white/60 hover:text-white cursor-pointer transition-colors" size={14} />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: isPlaying ? "100%" : "30%" }}
            transition={{ duration: isPlaying ? 180 : 0.5, ease: "linear" }}
            className="h-full bg-white/60"
          />
        </div>
      </div>
    </motion.div>
  );
}
