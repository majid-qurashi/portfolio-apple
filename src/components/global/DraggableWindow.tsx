import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Global z-index counter
let globalZIndex = 100;

// Minimum window dimensions
const MIN_WIDTH = 450;
const MIN_HEIGHT = 350;

interface DraggableWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  className?: string;
}

export default function DraggableWindow({
  title,
  onClose,
  children,
  initialPosition = { x: 50, y: 50 },
  initialSize = { width: 800, height: 600 },
  className = '',
}: DraggableWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<'bottom' | 'right' | 'bottom-right' | 'left' | 'bottom-left' | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(globalZIndex);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    bringToFront();
    
    if (e.target instanceof HTMLElement) {
      if (e.target.closest('.window-header')) {
        setIsDragging(true);
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
        e.preventDefault();
      } else if (e.target.closest('.resize-handle')) {
        setIsResizing(true);
        setResizeDirection(e.target.getAttribute('data-direction') as any);
        e.preventDefault();
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      setPosition({ x: newX, y: newY });
    } else if (isResizing) {
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        const newSize = { ...size };
        const newPosition = { ...position };
        if (resizeDirection?.includes('right')) newSize.width = Math.max(MIN_WIDTH, e.clientX - rect.left);
        if (resizeDirection?.includes('left')) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
        }
        if (resizeDirection?.includes('bottom')) newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        if (resizeDirection?.includes('bottom-left')) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        setSize(newSize);
        setPosition(newPosition);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection(null);
  };

  useEffect(() => {
    bringToFront();
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, isResizing, resizeDirection, dragOffset, isMobile]);

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`${
        isMobile ? 'fixed top-16 bottom-24 left-4 right-4 rounded-2xl' : 'fixed rounded-2xl'
      } glass-dark shadow-2xl overflow-hidden border ${
        isDragging ? 'cursor-grabbing' : 'cursor-default'
      } ${className}`}
      style={{
        ...(isMobile ? {} : {
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
        }),
        zIndex,
        borderColor: 'var(--glass-border)',
        transition: (isDragging || isResizing) ? 'none' : 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="window-header h-10 flex items-center space-x-2 px-4 rounded-t-2xl sticky top-0 left-0 right-0 z-10 backdrop-blur-md border-b"
        style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
      >
        <div className="flex space-x-2">
          <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 opacity-80" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500 opacity-80" />
        </div>
        <span className="text-sm flex-grow text-center font-medium tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {title}
        </span>
      </div>
      <div className="relative h-[calc(100%-2.5rem)] overflow-auto scroll-smooth">
        {children}
        {!isMobile && (
          <>
            <div className="resize-handle absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize" data-direction="bottom" />
            <div className="resize-handle absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize" data-direction="right" />
            <div className="resize-handle absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize" data-direction="left" />
            <div className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize" data-direction="bottom-right" />
          </>
        )}
      </div>
    </motion.div>
  );
}
 