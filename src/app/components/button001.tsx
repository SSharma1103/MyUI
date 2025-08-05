'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

// --- 1. Define the component to be previewed ---

// A simple right arrow icon for the button
const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ButtonPreview = () => {
    // Variants for the text animation
    const textVariants = {
        initial: { x: 0 },
        hover: { x: "-125%" }, // Slide text out to the left
    };

    // Variants for the arrow animation
    const arrowVariants = {
        initial: { x: "125%" }, // Start arrow off-screen to the right
        hover: { x: 0 }, // Slide arrow into the center
    };

    return (
        <motion.button 
            className="relative flex items-center justify-center w-40 h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
            initial="initial"
            whileHover="hover" // Triggers the 'hover' variant on child elements
        >
            <motion.span
                className="inline-block mr-5"
                variants={textVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                Click me
            </motion.span>
            <motion.span
                className="absolute inline-block pl-3"
                variants={arrowVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ArrowRightIcon />
            </motion.span>
        </motion.button>
    );
};

// --- 2. Define the code string for the component ---
export const buttonCodeString = `
'use client';

import { motion } from 'framer-motion';

const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AnimatedButton = () => {
    const textVariants = {
        initial: { x: 0 },
        hover: { x: "-125%" },
    };

    const arrowVariants = {
        initial: { x: "125%" },
        hover: { x: 0 },
    };

    return (
        <motion.button 
            className="relative flex items-center justify-center w-40 h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
            initial="initial"
            whileHover="hover"
        >
            <motion.span
                className="inline-block mr-5"
                variants={textVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                Click Me
            </motion.span>
            <motion.span
                className="absolute inline-block pl-3"
                variants={arrowVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ArrowRightIcon />
            </motion.span>
        </motion.button>
    );
};

export default AnimatedButton;
`;
export default ButtonPreview