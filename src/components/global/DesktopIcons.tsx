import React from 'react';
import { motion } from 'framer-motion';
import { RiFolderFill } from 'react-icons/ri';
import { BsFileEarmarkPdfFill, BsTerminalFill } from 'react-icons/bs';
import { IoInformationCircle } from 'react-icons/io5';

interface DesktopIconProps {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

const Icon = ({ name, icon, onClick, color }: DesktopIconProps) => (
  <motion.div
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragElastic={0.1}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onDoubleClick={onClick}
    className="flex flex-col items-center gap-1 w-20 cursor-pointer select-none group"
  >
    <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-white text-3xl shadow-lg transition-all group-hover:shadow-white/20`}>
      {icon}
    </div>
    <span className="text-[10px] font-bold text-white text-shadow-sm px-2 py-0.5 rounded-md group-hover:bg-white/20 transition-colors">
      {name}
    </span>
  </motion.div>
);

interface DesktopIconsProps {
  onAppOpen: (app: string) => void;
}

export default function DesktopIcons({ onAppOpen }: DesktopIconsProps) {
  const icons = [
    { id: 'notes', name: 'About Me', icon: <IoInformationCircle />, color: 'bg-blue-500' },
    { id: 'github', name: 'My Projects', icon: <RiFolderFill />, color: 'bg-yellow-500' },
    { id: 'resume', name: 'Resume.pdf', icon: <BsFileEarmarkPdfFill />, color: 'bg-red-500' },
    { id: 'terminal', name: 'Terminal', icon: <BsTerminalFill />, color: 'bg-gray-800' },
  ];

  return (
    <div className="fixed top-24 left-6 z-10 hidden lg:flex flex-col gap-8">
      {icons.map((icon) => (
        <Icon 
          key={icon.id} 
          name={icon.name} 
          icon={icon.icon} 
          onClick={() => onAppOpen(icon.id)}
          color={icon.color}
        />
      ))}
    </div>
  );
}
