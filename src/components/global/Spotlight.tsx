import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoCodeSlash, IoBriefcaseOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { userConfig } from '../../config/userConfig';
import majidImg from '../../assets/images/majid.jpg';

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Spotlight({ isOpen, onClose }: SpotlightProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-[20px]"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            className="relative w-full max-w-2xl p-4 md:p-6"
          >
            <div 
              style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--glass-border)' }}
              className="border rounded-[32px] p-6 md:p-8 backdrop-blur-2xl shadow-2xl"
            >
              {/* Header / Close */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Quick Hub</h2>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all border"
                  style={{ backgroundColor: 'var(--btn-bg)', borderColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
                >
                  <IoClose size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Profile Widget */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                  className="border rounded-3xl p-5 backdrop-blur-md flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full border-2 overflow-hidden mb-3" style={{ borderColor: 'var(--glass-border)' }}>
                    <img src={majidImg.src} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{userConfig.name}</h3>
                  <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{userConfig.role}</p>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-center gap-2 text-[10px]" style={{ color: 'var(--text-primary)' }}>
                      <IoLocationOutline className="text-blue-500" />
                      <span>{userConfig.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[10px]" style={{ color: 'var(--text-primary)' }}>
                      <IoMailOutline className="text-purple-500" />
                      <span>{userConfig.contact.email}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Status Widget */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}
                  className="border rounded-3xl p-5 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-3">
                      <IoBriefcaseOutline size={20} />
                    </div>
                    <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-1 uppercase tracking-widest text-[9px]">Status</h4>
                    <p className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Ready for new projects</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-600 dark:text-emerald-500 text-[9px] font-bold uppercase tracking-wider">Online</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.open(`mailto:${userConfig.contact.email}?subject=Hiring Inquiry - ${userConfig.name}`, '_blank');
                      // Celebration logic can be added here
                    }}
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-xs mt-4 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity"
                      initial={false}
                      animate={{ scale: [1, 2], opacity: [0.2, 0] }}
                      transition={{ duration: 0.5 }}
                    />
                    <IoMailOutline size={16} />
                    Hire Me
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
