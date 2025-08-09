"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-white"
  >
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
  </svg>
);

const AnimatedButton3: FC = () => {
  const textVariants = {
    initial: { x: 0 },
    hover: { opacity: 0 },
  };
  const iconContainerVariants = {
    initial: { width: "40px", borderLeftWidth: "1px", x: "110px" },
    hover: { width: "150px", borderLeftWidth: "0px", x: 0 },
  };
  return (
    <motion.button
      className="relative flex items-center w-[150px] h-[50px] overflow-hidden font-bold text-white transition-colors duration-200 bg-sky-500 rounded-lg shadow-lg hover:bg-[#ff3636] focus:outline-none"
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="absolute left-0 pl-9"
        variants={textVariants}
        transition={{ duration: 0.2 }}
      >
        Delete
      </motion.span>
      <motion.div
        className="absolute flex items-center justify-center h-10 border-l border-white"
        variants={iconContainerVariants}
        transition={{ duration: 0.2 }}
      >
        <DeleteIcon />
      </motion.div>
    </motion.button>
  );
};

export const buttonCodeString3 = `
'use client';

import { motion } from 'framer-motion';
import React, { FC } from 'react';

const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
    </svg>
);

const AnimatedButton: FC = () => {
    const textVariants = {
        initial: { x: 0 },
        hover: { opacity: 0 },
    };
    const iconContainerVariants = {
        initial: { width: "40px", borderLeftWidth: "1px", x: "110px" },
        hover: { width: "150px", borderLeftWidth: "0px", x: 0 },
    };
    return (
        <motion.button 
            className="relative flex items-center w-[150px] h-[50px] overflow-hidden font-bold text-white transition-colors duration-200 bg-sky-500 rounded-lg shadow-lg hover:bg-[#ff3636] focus:outline-none"
            initial="initial"
            whileHover="hover"
        >
            <motion.span
                className="absolute left-0 pl-9"
                variants={textVariants}
                transition={{ duration: 0.2 }}
            >
                Delete
            </motion.span>
            <motion.div
                className="absolute flex items-center justify-center h-10 border-l border-white"
                variants={iconContainerVariants}
                transition={{ duration: 0.2 }}
            >
                <DeleteIcon />
            </motion.div>
        </motion.button>
    );
};

export default AnimatedButton;
`;

export default AnimatedButton3;
