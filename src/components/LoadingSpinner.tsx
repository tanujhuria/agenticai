import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="relative">
        {/* Main spinning circle */}
        <motion.div
          className="w-16 h-16 border-4 border-gray-800 rounded-full"
          style={{ borderTopColor: '#67eadd' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner pulsing dot */}
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{ backgroundColor: '#67eadd' }}
          animate={{ scale: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}