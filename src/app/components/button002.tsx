"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

const AnimatedButton: FC = () => {
  const textVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -10 },
  };

  const iconVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.button
      className="relative flex items-center justify-center w-40 h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="inline-block"
        variants={textVariants}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Book
      </motion.span>
      <motion.span
        className="absolute inline-block text-2xl"
        variants={iconVariants}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        📖
      </motion.span>
    </motion.button>
  );
};

export const buttonCodeString2 = `
'use client';

import { motion } from 'framer-motion';
import React, { FC } from 'react';

const AnimatedButton: FC = () => {
    // Animation variants for the text "Book"
    const textVariants = {
        initial: { opacity: 1, y: 0 },
        hover: { opacity: 0, y: -10 }, // Fades out and moves up slightly
    };

    // Animation variants for the book emoji
    const iconVariants = {
        initial: { opacity: 0, y: 10 }, // Starts invisible and slightly down
        hover: { opacity: 1, y: 0 }, // Fades in and moves to the center
    };

    return (
        <motion.button 
            className="relative flex items-center justify-center w-40 h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
            initial="initial"
            whileHover="hover"
        >
            <motion.span
                className="inline-block"
                variants={textVariants}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                Book
            </motion.span>
            <motion.span
                className="absolute inline-block text-2xl"
                variants={iconVariants}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                📖
            </motion.span>
        </motion.button>
    );
};

export default AnimatedButton;
`;
export default AnimatedButton;
