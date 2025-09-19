import { motion } from 'motion/react';

export function ShimmerLoader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1 }}
      onAnimationComplete={() => {
        const loader = document.getElementById('shimmer-loader');
        if (loader) loader.remove();
      }}
    >
      <div className="relative overflow-hidden">
        {/* Logo with shimmer effect */}
        <div className="flex items-center space-x-4">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #67eadd 0%, #5dd9cc 100%)',
              color: '#000'
            }}
          >
            g
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.span 
            className="text-white text-3xl font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            genies
          </motion.span>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-400">Loading your AI workspace...</p>
        </motion.div>
      </div>
    </motion.div>
  );
}