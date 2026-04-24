import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSunny, IoMoon, IoBluetooth, IoWifi, IoFlash, IoStatsChart } from 'react-icons/io5';
import { BsDisplay, BsVolumeUpFill } from 'react-icons/bs';

interface ControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function ControlCenter({ isOpen, onClose, theme, toggleTheme }: ControlCenterProps) {
  const [brightness, setBrightness] = useState(100);
  const [isWifiOn, setIsWifiOn] = useState(true);
  const [isBluetoothOn, setIsBluetoothOn] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-14 right-2 left-2 md:left-auto md:right-4 md:w-[260px] glass-dark rounded-[20px] p-3 shadow-2xl z-[70] border border-white/10 select-none"
          >
            {/* Theme Toggle Section */}
            <div className="grid grid-cols-1 gap-2 mb-2">
              <div 
                className="glass-light rounded-xl p-3 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group" 
                onClick={toggleTheme}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)]' : 'bg-yellow-400 text-gray-900 shadow-[0_0_10px_rgba(250,204,21,0.4)]'}`}>
                    {theme === 'dark' ? <IoMoon size={18} /> : <IoSunny size={18} />}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </div>
                    <div className="text-[10px] opacity-50 uppercase tracking-tighter" style={{ color: 'var(--text-secondary)' }}>
                      Click to switch
                    </div>
                  </div>
                </div>
                <div className={`w-8 h-4 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-400'}`}>
                   <motion.div 
                    animate={{ x: theme === 'dark' ? 16 : 0 }}
                    className="w-2 h-2 bg-white rounded-full shadow-sm"
                   />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-3">
              <div className="glass-light rounded-xl p-2.5">
                <div className="flex items-center gap-2 mb-1.5 opacity-60" style={{ color: 'var(--text-secondary)' }}>
                  <IoSunny size={12} />
                  <span className="text-[10px] font-medium uppercase tracking-wider">Display</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(parseInt(e.target.value))}
                  className="w-full h-4 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                  style={{
                    background: theme === 'dark' 
                      ? `linear-gradient(to right, white ${brightness}%, rgba(255,255,255,0.1) ${brightness}%)`
                      : `linear-gradient(to right, #007AFF ${brightness}%, rgba(0,0,0,0.1) ${brightness}%)`
                  }}
                />
              </div>
            </div>

            {/* Recommendation Message */}
            <div className="glass-light rounded-xl p-3 flex flex-col items-center justify-center border border-white/5">
              <motion.p 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[10px] text-center font-medium leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                This site provides best experience in <span className="text-blue-500 font-bold">Dark Mode</span>.
                <br />
                <span className="opacity-80">So Dark mode is recommended.</span>
              </motion.p>
            </div>
          </motion.div>
          
          {/* Brightness Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-[1000] bg-black"
            style={{ opacity: (100 - brightness) / 200 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
