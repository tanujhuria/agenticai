import React from 'react';
import { motion } from 'motion/react';

interface FloatingShapesProps {
  className?: string;
}

export function FloatingShapes({ className = '' }: FloatingShapesProps) {
  const shapes = [
    {
      id: 1,
      type: 'circle',
      size: 'w-16 h-16',
      color: 'bg-gradient-to-r from-blue-400/20 to-purple-400/20',
      position: 'top-10 left-10',
      delay: 0,
      duration: 8,
    },
    {
      id: 2,
      type: 'square',
      size: 'w-12 h-12',
      color: 'bg-gradient-to-r from-purple-400/15 to-pink-400/15',
      position: 'top-32 right-20',
      delay: 2,
      duration: 10,
    },
    {
      id: 3,
      type: 'circle',
      size: 'w-8 h-8',
      color: 'bg-gradient-to-r from-cyan-400/25 to-blue-400/25',
      position: 'bottom-32 left-32',
      delay: 4,
      duration: 6,
    },
    {
      id: 4,
      type: 'triangle',
      size: 'w-10 h-10',
      color: 'bg-gradient-to-r from-indigo-400/20 to-purple-400/20',
      position: 'bottom-20 right-16',
      delay: 1,
      duration: 9,
    },
    {
      id: 5,
      type: 'circle',
      size: 'w-6 h-6',
      color: 'bg-gradient-to-r from-violet-400/30 to-purple-400/30',
      position: 'top-1/2 left-16',
      delay: 3,
      duration: 7,
    },
    {
      id: 6,
      type: 'square',
      size: 'w-14 h-14',
      color: 'bg-gradient-to-r from-blue-400/15 to-cyan-400/15',
      position: 'top-1/3 right-32',
      delay: 5,
      duration: 11,
    },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${
            shape.type === 'circle' ? 'rounded-full' : 
            shape.type === 'triangle' ? 'transform rotate-45' : ''
          }`}
          animate={{
            y: [0, -30, 0],
            x: [0, shape.id % 2 === 0 ? 20 : -20, 0],
            rotate: shape.type === 'square' ? [0, 360] : [0, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
          style={{
            filter: 'blur(1px)',
          }}
        />
      ))}
      
      {/* Additional floating dots */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}