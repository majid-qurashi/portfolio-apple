import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCopyOutline, IoImageOutline, IoTerminalOutline, IoPersonOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

interface ContextMenuProps {
  onOpenApp: (app: string) => void;
  onToggleTheme: () => void;
  theme: 'light' | 'dark';
}

export default function ContextMenu({ onOpenApp, onToggleTheme, theme }: ContextMenuProps) {
  const [menu, setMenu] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setMenu({ x: e.pageX, y: e.pageY });
    };

    const handleClick = () => setMenu(null);

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (!menu) return null;

  const menuItems = [
    { label: 'About Majid', icon: <IoPersonOutline />, action: () => onOpenApp('notes') },
    { label: 'Open Terminal', icon: <IoTerminalOutline />, action: () => onOpenApp('terminal') },
    { label: theme === 'dark' ? 'Switch to Light' : 'Switch to Dark', icon: theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />, action: onToggleTheme },
    { type: 'separator' },
    { label: 'Copy Portfolio Link', icon: <IoCopyOutline />, action: () => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); } },
    { label: 'Change Wallpaper', icon: <IoImageOutline />, action: () => window.location.reload() },
  ];

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{ 
            top: menu.y, 
            left: menu.x,
            backgroundColor: 'var(--panel-bg)',
            borderColor: 'var(--glass-border)'
          }}
          className="fixed z-[2000] w-56 rounded-xl border backdrop-blur-2xl shadow-2xl py-1.5 overflow-hidden"
        >
          {menuItems.map((item, i) => (
            item.type === 'separator' ? (
              <div key={i} className="h-px my-1.5" style={{ backgroundColor: 'var(--glass-border)' }} />
            ) : (
              <button
                key={i}
                onClick={item.action}
                className="w-full px-3 py-1.5 flex items-center justify-between text-xs font-medium hover:bg-blue-500 hover:text-white transition-colors group"
                style={{ color: 'var(--text-primary)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm opacity-70 group-hover:opacity-100">{item.icon}</span>
                  {item.label}
                </div>
                <span className="text-[10px] opacity-40 group-hover:opacity-60">⌥ M</span>
              </button>
            )
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
