import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoNotifications, IoClose } from 'react-icons/io5';

const hiringNotification = { 
  id: 1, 
  title: "Opportunities", 
  message: "Majid is currently open for new opportunities!", 
  icon: "✨" 
};

export default function NotificationSystem() {
  const [currentNotification, setCurrentNotification] = useState<typeof hiringNotification | null>(null);

  useEffect(() => {
    // Show single notification after 15 seconds
    const showTimer = setTimeout(() => {
      setCurrentNotification(hiringNotification);

      // Hide it after 6 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 6000);
    }, 15000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="fixed top-16 right-6 z-[2000] pointer-events-none">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-72 bg-white/10 dark:bg-black/40 border border-white/20 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl pointer-events-auto flex gap-4 items-start relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <div className="text-2xl">{currentNotification.icon}</div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white mb-0.5">{currentNotification.title}</h4>
              <p className="text-[11px] text-white/60 leading-tight">{currentNotification.message}</p>
            </div>
            <button 
              onClick={() => setCurrentNotification(null)}
              className="text-white/20 hover:text-white transition-colors"
            >
              <IoClose size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
