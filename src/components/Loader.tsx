import { motion } from 'motion/react';
import logoIconImg from 'figma:asset/bd28315832c77c36328805e69c07a718c6c222cc.png';

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-4"
        >
          <motion.img 
            src={logoIconImg}
            alt="AgenticView Bird Logo"
            className="w-14 h-14"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <span className="text-3xl font-medium text-gray-900 font-family-headings">AgenticView</span>
        </motion.div>

        {/* Loading Animation */}
        <div className="relative">
          <motion.div
            className="w-12 h-12 border-4 border-gray-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}