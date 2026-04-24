import * as React from "react";
import { BsGithub, BsSpotify, BsLinkedin } from 'react-icons/bs';
import { IoIosMail, IoIosCall } from 'react-icons/io';
import { userConfig } from '../../config/userConfig';
import { BsStickyFill } from 'react-icons/bs';
import { RiTerminalFill } from 'react-icons/ri';
import { BsFilePdf } from 'react-icons/bs';

interface MobileDockProps {
  onGitHubClick: () => void;
  onNotesClick: () => void;
  onResumeClick: () => void;
  onTerminalClick: () => void;
}

export default function MobileDock({ onGitHubClick, onNotesClick, onResumeClick, onTerminalClick }: MobileDockProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };

  const handleSpotifyClick = () => {
    window.open(`https://open.spotify.com/playlist/${userConfig.spotify.playlistId}`, '_blank');
  };

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm md:hidden z-50'>
      <div className='glass-dark p-2 rounded-[32px] flex justify-around items-center border border-white/10 shadow-2xl backdrop-blur-2xl'>
        <a href={`tel:${userConfig.contact.phone}`} className='active:scale-90 transition-transform'>
          <div className='w-12 h-12 bg-gradient-to-tr from-green-500 to-green-400 rounded-2xl flex items-center justify-center'>
            <IoIosCall size={28} className='text-white' />
          </div>
        </a>
        <button onClick={onGitHubClick} className='active:scale-90 transition-transform'>
          <div className='w-12 h-12 bg-gradient-to-tr from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center'>
            <BsGithub size={28} className='text-white' />
          </div>
        </button>
        <button onClick={onNotesClick} className='active:scale-90 transition-transform'>
          <div className='w-12 h-12 bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-2xl flex items-center justify-center'>
            <BsStickyFill size={28} className='text-white' />
          </div>
        </button>
        <button onClick={onResumeClick} className='active:scale-90 transition-transform'>
          <div className='w-12 h-12 bg-gradient-to-tr from-red-600 to-red-400 rounded-2xl flex items-center justify-center'>
            <BsFilePdf size={28} className='text-white' />
          </div>
        </button>
        <button onClick={onTerminalClick} className='active:scale-90 transition-transform'>
          <div className='w-12 h-12 bg-gradient-to-tr from-gray-800 to-black rounded-2xl flex items-center justify-center'>
            <RiTerminalFill size={28} className='text-white' />
          </div>
        </button>
      </div>
    </div>
  );
}
