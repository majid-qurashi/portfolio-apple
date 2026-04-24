import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGithub, BsSpotify, BsFilePdf, BsStickyFill, BsLinkedin, BsCalendar } from 'react-icons/bs';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FaLink } from 'react-icons/fa';
import ResumeViewer from './ResumeViewer';
import SpotifyPlayer from './SpotifyPlayer';
import { userConfig } from '../../config/userConfig';
import { RiTerminalFill } from 'react-icons/ri';

interface DockIconProps {
  icon: any;
  label: string;
  onClick: () => void;
  color: string;
  active?: boolean;
  id: string;
  size?: number;
}

interface DesktopDockProps {
  onTerminalClick: () => void;
  onNotesClick: () => void;
  onGitHubClick: () => void;
  onResumeClick: () => void;
  onSpotifyClick: () => void;
  activeApps: {
    terminal: boolean;
    notes: boolean;
    github: boolean;
    resume: boolean;
    spotify: boolean;
  };
}

const DesktopDock = ({ 
  onTerminalClick, 
  onNotesClick, 
  onGitHubClick, 
  onResumeClick, 
  onSpotifyClick, 
  activeApps 
}: DesktopDockProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [showLinksPopup, setShowLinksPopup] = useState(false);
  const linksPopupRef = useRef<HTMLDivElement>(null);

  const handleLinksClick = () => setShowLinksPopup(!showLinksPopup);
  const handleCalendarClick = () => window.open(userConfig.contact.calendly, '_blank');
  const handleEmailClick = () => window.open(`mailto:${userConfig.contact.email}`, '_blank');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (linksPopupRef.current && !linksPopupRef.current.contains(event.target as Node)) {
        setShowLinksPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const Tooltip = ({ text }: { text: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 whitespace-nowrap z-50 shadow-2xl"
    >
      {text}
    </motion.div>
  );

  const DockIcon = ({ icon: Icon, label, onClick, color, active, id, size = 35 }: DockIconProps) => (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHoveredIcon(id)}
      onMouseLeave={() => setHoveredIcon(null)}
      whileHover={{ y: -10, scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex flex-col items-center group px-1"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${color} ${active ? 'ring-2 ring-white/50' : 'border border-white/5'}`}>
        <Icon size={size} className="text-white drop-shadow-md" />
      </div>
      <AnimatePresence>
        {hoveredIcon === id && <Tooltip key={`tooltip-${id}`} text={label} />}
      </AnimatePresence>
      {active && (
        <motion.div 
          layoutId={`indicator-${id}`}
          className="absolute -bottom-1.5 w-1 h-1 bg-white rounded-full"
        />
      )}
    </motion.button>
  );

  return (
    <div className="fixed bottom-4 left-0 right-0 hidden md:flex justify-center z-50">
      <motion.div 
        layout
        className="glass-dark p-2 rounded-[24px] flex items-end space-x-1 border border-white/10 shadow-2xl"
      >
        <DockIcon 
          id="call" 
          icon={IoIosCall} 
          label="Call Me" 
          onClick={() => window.open(`tel:${userConfig.contact.phone}`, '_self')} 
          color="bg-gradient-to-tr from-green-600 to-green-400" 
          active={false} 
          size={30}
        />
        <DockIcon 
          id="github" 
          icon={BsGithub} 
          label="My Projects" 
          onClick={onGitHubClick} 
          color="bg-gradient-to-tr from-gray-900 to-gray-700" 
          active={activeApps.github} 
        />
        <DockIcon 
          id="notes" 
          icon={BsStickyFill} 
          label="Resume Notes" 
          onClick={onNotesClick} 
          color="bg-gradient-to-tr from-yellow-600 to-yellow-400" 
          active={activeApps.notes} 
        />
        <DockIcon 
          id="resume" 
          icon={BsFilePdf} 
          label="View Resume" 
          onClick={onResumeClick} 
          color="bg-gradient-to-tr from-red-600 to-red-400" 
          active={activeApps.resume} 
        />
        <DockIcon 
          id="terminal" 
          icon={RiTerminalFill} 
          label="Terminal" 
          onClick={onTerminalClick} 
          color="bg-gradient-to-tr from-gray-800 to-black" 
          active={activeApps.terminal} 
        />
      </motion.div>
    </div>
  );
};

export default DesktopDock;
