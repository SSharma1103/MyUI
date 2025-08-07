'use client';

import React, { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export const TextRevealEffect: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth values
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Use MotionTemplate for reactive style
    const maskImage = useMotionTemplate`radial-gradient(circle 100px at ${smoothMouseX}px ${smoothMouseY}px, black, transparent)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const { left, top } = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-48 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Base text */}
            <h2 className="text-7xl font-bold text-slate-700 select-none">
                MyUI
            </h2>

            {/* Motion overlay with mask */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                }}
            >
                <h2 className="absolute inset-0 w-full h-full flex items-center justify-center text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-sky-500 bg-clip-text text-transparent select-none">
                    MyUI
                </h2>
            </motion.div>
        </div>
    );
};

// --- 2. Define the code string for the component ---
export const textRevealCodeString = `
'use client';

import React, { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TextRevealEffect: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const { left, top } = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-48 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Base Text (Gray) */}
            <h2 className="text-7xl font-bold text-slate-700 select-none">
                MyUI
            </h2>

            {/* Revealed Text (Gradient with Mask) */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    maskImage: \`radial-gradient(circle 100px at \${smoothMouseX.get()}px \${smoothMouseY.get()}px, black, transparent)\`,
                    WebkitMaskImage: \`radial-gradient(circle 100px at \${smoothMouseX.get()}px \${smoothMouseY.get()}px, black, transparent)\`,
                }}
            >
                <h2 className="absolute inset-0 w-full h-full flex items-center justify-center text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-sky-500 bg-clip-text text-transparent select-none">
                    MyUI
                </h2>
            </motion.div>
        </div>
    );
};

export default TextRevealEffect;
`;

