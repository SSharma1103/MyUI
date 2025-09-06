'use client';

// Import the named export from your showcase template
 // Adjust the import path as needed
import React, { useState, FC, useRef } from 'react';
import { motion } from 'framer-motion';

// --- 1. Define the component to be previewed ---

// Define the props for the GlassmorphismCard
interface GlassmorphismCardProps {
  isLoggedIn: boolean;
  onButtonClick: () => void;
}

 const GlassmorphismCard: FC<GlassmorphismCardProps> = ({ isLoggedIn, onButtonClick }) => {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="w-96 h-96 relative flex items-center justify-center">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        className="w-80 h-80 rounded-2xl flex flex-col items-center justify-center text-white cursor-grab
                   backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.36)]
                   relative overflow-hidden px-6 py-8"
        whileDrag={{
          cursor: "grabbing",
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl pointer-events-none" />

        <motion.span
          className="text-6xl font-extrabold drop-shadow-md text-white/90"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          MyUI
        </motion.span>

        <motion.span
          className="text-sm font-medium mt-4 text-center text-white/70 tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Animated Components
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute bottom-12 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isLoggedIn ? (
          <a
            href="/docs/introduction"
            className="px-6 py-3 rounded-xl text-white font-medium backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group"
          >
            Get Started
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </a>
        ) : (
          <motion.button
            onClick={onButtonClick}
            className="px-6 py-3 rounded-xl text-white font-medium backdrop-blur-sm bg-sky-600/80 border border-white/20 shadow-lg hover:bg-sky-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In to Explore
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};


// --- Preview Component to manage state ---
export const GlassmorphismCardPreview = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleToggle = () => {
    setIsLoggedIn(prev => !prev);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <GlassmorphismCard isLoggedIn={isLoggedIn} onButtonClick={handleToggle} />
      <button 
        onClick={handleToggle}
        className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700 transition-colors"
      >
        Toggle State
      </button>
    </div>
  )
}

// --- 2. Define the code string for the component ---
export const glassmorphismCodeString = `
'use client';

import React, { FC, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the props for the GlassmorphismCard
interface GlassmorphismCardProps {
  isLoggedIn: boolean;
  onButtonClick: () => void;
}

const GlassmorphismCard: FC<GlassmorphismCardProps> = ({ isLoggedIn, onButtonClick }) => {
  const constraintsRef = useRef(null);

  return (
    // ... (rest of the component code)
  );
};

export default GlassmorphismCard;
`;