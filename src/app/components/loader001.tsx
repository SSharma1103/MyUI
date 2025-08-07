'use client';

 // Adjust the import path as needed
import React, { FC } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

// --- 1. Define the component to be previewed ---

const GridLoader: FC = () => {
    const animationDuration = 1.5; // Total duration for one pulse cycle

    return (
        <div className="grid grid-cols-3 gap-3">
            {/* Create an array of 9 elements to map over for the grid */}
            {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="w-5 h-5 bg-slate-300 rounded-lg"
                    animate={{
                        scale: [1, 1.5, 1], // Keyframes: normal -> grow -> normal
                    }}
                    transition={{
                        duration: animationDuration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        // Random delay for each dot to create the async pulsing effect
                        delay: Math.random() * (animationDuration / 2),
                    }}
                />
            ))}
        </div>
    );
};
export default GridLoader


// --- 2. Define the code string for the component ---
export const loaderCodeString = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const GridLoader: FC = () => {
    const animationDuration = 1.5; // Total duration for one pulse cycle

    return (
        <div className="grid grid-cols-3 gap-3">
            {/* Create an array of 9 elements to map over for the grid */}
            {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="w-5 h-5 bg-slate-300 rounded-lg"
                    animate={{
                        scale: [1, 1.5, 1], // Keyframes: normal -> grow -> normal
                    }}
                    transition={{
                        duration: animationDuration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        // Random delay for each dot to create the async pulsing effect
                        delay: Math.random() * (animationDuration / 2),
                    }}
                />
            ))}
        </div>
    );
};

export default GridLoader;
`;

