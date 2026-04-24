import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoNotifications, IoClose } from 'react-icons/io5';

const notifications = [
  { id: 1, title: "System Tip", message: "Press Cmd + K to open the Quick Hub!", icon: "🚀" },
  { id: 2, title: "Achievement", message: "Majid just completed a new project in React!", icon: "🏆" },
  { id: 3, title: "Notice", message: "Check out the Resume in the top right corner.", icon: "📄" },
  { id: 4, title: "Status", message: "Majid is currently open for new opportunities!", icon: "✨" },
];

export default function NotificationSystem() {
  const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotification(notifications[index]);
      setIndex((prev) => (prev + 1) % notifications.length);

      // Hide after 5 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);

    }, 15000); // Show every 15 seconds

    return () => clearInterval(timer);
  }, [index]);

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
