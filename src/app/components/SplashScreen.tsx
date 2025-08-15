'use client';


import React, { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: FC<SplashScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // New state to control whether the user can skip the animation
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Timer for the total duration of the splash screen
    const autoHideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Timer to enable skipping after 2 seconds
    const enableSkipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 2000);

    return () => {
        clearTimeout(autoHideTimer);
        clearTimeout(enableSkipTimer);
    };
  }, []);

  // Function to handle the click/tap to skip
  const handleSkip = () => {
    if (canSkip) {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-[300px]">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950 cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onClick={handleSkip} // Attach the skip handler
          >
            <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1.1, 0.8] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1],
              }}
            >
              <div
                className="text-9xl font-mono font-bold text-sky-500"
                style={{
                  textShadow: '0 0 15px rgba(14, 165, 233, 0.6), 0 0 40px rgba(59, 130, 246, 0.2)'
                }}
              >
                &lt;/&gt;
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export const SplashScreenPreview = () => (
    <SplashScreen>
        <div className="flex items-center justify-center w-full h-full text-center">
            <h3 className="text-2xl font-bold text-white">Content Loaded!</h3>
        </div>
    </SplashScreen>
);

export const splashScreenCodeString = `
'use client';

import React, { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: FC<SplashScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const autoHideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const enableSkipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 2000);

    return () => {
        clearTimeout(autoHideTimer);
        clearTimeout(enableSkipTimer);
    };
  }, []);

  const handleSkip = () => {
    if (canSkip) {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950 cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onClick={handleSkip}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1.1, 0.8] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1],
              }}
            >
              <div
                className="text-9xl font-mono font-bold text-sky-500"
                style={{
                  textShadow: '0 0 15px rgba(14, 165, 233, 0.6), 0 0 40px rgba(59, 130, 246, 0.2)'
                }}
              >
                &lt;/&gt;
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SplashScreen;
`;
