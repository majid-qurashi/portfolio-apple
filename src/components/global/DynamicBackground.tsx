import * as React from 'react';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Reactive transforms
  const x1 = useTransform(smoothX, [-0.5, 0.5], ["-5%", "5%"]);
  const y1 = useTransform(smoothY, [-0.5, 0.5], ["-5%", "5%"]);
  
  const x2 = useTransform(smoothX, [-0.5, 0.5], ["5%", "-5%"]);
  const y2 = useTransform(smoothY, [-0.5, 0.5], ["5%", "-5%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* Animated Mesh Gradients */}
      <motion.div
        className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] opacity-50"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 40%)
          `,
          x: x1,
          y: y1,
          scale: 1.1,
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.2) 0%, transparent 70%)',
          x: x2,
          y: y2,
        }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
