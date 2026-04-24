import * as React from 'react';
import { useEffect, useRef } from 'react';
import { userConfig } from '../../config/userConfig';
import DraggableWindow from './DraggableWindow';
import { FaFileDownload } from 'react-icons/fa';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title="Resume.pdf"
      onClose={onClose}
      initialPosition={{ 
        x: Math.floor(window.innerWidth * 0.4), 
        y: Math.floor(window.innerHeight * 0.2) 
      }}
      className="w-[90%] h-[90%] max-w-5xl"
      initialSize={{ width: 800, height: 600 }}
    >
      <div className="flex flex-col h-full overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
        {/* Modern Header with Download Button */}
        <div 
          className="flex items-center justify-between px-6 py-3 border-b"
          style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Document Viewer</span>
          </div>
          <a 
            href={userConfig.resume.localPath} 
            download 
            title="Download PDF"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center"
          >
            <FaFileDownload size={16} />
          </a>
        </div>
        
        {/* PDF Content */}
        <div className="flex-grow p-2 md:p-6 overflow-hidden flex flex-col items-center" style={{ backgroundColor: 'var(--bg-color)' }}>
          <div className="w-full max-w-4xl h-full bg-white shadow-2xl rounded-sm overflow-hidden relative">
            {/* Backdrop to prevent black screen flash */}
            <div className="absolute inset-0 bg-white flex items-center justify-center">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
            
            <iframe 
              src={`${userConfig.resume.localPath}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full relative z-10 bg-white"
              title="Resume PDF"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
                <p className="text-gray-600 mb-4 font-medium">Your browser doesn't support viewing PDFs directly.</p>
                <a 
                  href={userConfig.resume.localPath} 
                  target="_blank"
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-shadow shadow-md"
                >
                  Open PDF in New Tab
                </a>
              </div>
            </iframe>
          </div>
          <div className="mt-4 text-xs opacity-50" style={{ color: 'var(--text-muted)' }}>
            PDF Viewer powered by browser
          </div>
        </div>
      </div>
    </DraggableWindow>
  );
};

export default ResumeViewer;