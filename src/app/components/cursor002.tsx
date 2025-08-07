'use client';

// Adjust the import path
import React, { RefObject } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion'; // Import motion and hooks

// --- 1. The Crosshair Component ---
// This is the component users will copy. It's rebuilt with Framer Motion.

interface CrosshairProps {
    color?: string;
    // THE FIX: The type is now correctly set to RefObject<HTMLDivElement>,
    // which matches the type created by useRef<HTMLDivElement>(null).
    containerRef: RefObject<HTMLDivElement| null>;
}

const Crosshair: React.FC<CrosshairProps> = ({ color = "white", containerRef }) => {
    const [isHoveringLink, setIsHoveringLink] = React.useState(false);
    
    // Use Framer Motion's motion values for direct, optimized updates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Use spring physics for a smooth, natural follow effect
    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top } = container.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        };

        container.addEventListener('mousemove', handleMouseMove);
        
        // Add listeners to links within the container for the turbulence effect
        const links = container.querySelectorAll("a");
        const handleLinkEnter = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);

        links.forEach(link => {
            link.addEventListener("mouseenter", handleLinkEnter);
            link.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            links.forEach(link => {
                link.removeEventListener("mouseenter", handleLinkEnter);
                link.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, [containerRef, mouseX, mouseY]);

    const turbulenceVariants = {
        initial: { baseFrequency: "0.00001" },
        hover: { baseFrequency: "0.1" },
    };

    return (
        <div className="absolute inset-0 pointer-events-none z-[10000]">
            <svg className="absolute w-full h-full">
                <defs>
                    <filter id="filter-noise">
                        <motion.feTurbulence
                            type="fractalNoise"
                            numOctaves="1"
                            variants={turbulenceVariants}
                            animate={isHoveringLink ? "hover" : "initial"}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </defs>
            </svg>
            <motion.div
                className="absolute w-full h-[1px]"
                style={{ y: smoothMouseY, background: color, filter: "url(#filter-noise)" }}
            />
            <motion.div
                className="absolute h-full w-[1px]"
                style={{ x: smoothMouseX, background: color, filter: "url(#filter-noise)" }}
            />
        </div>
    );
};

// --- 2. The Preview Component ---
const CrosshairPreview = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-center w-full h-50 text-center bg-transparent pointer-events-auto border border-slate-700 rounded-lg"
            style={{ cursor: 'none' }}
        >
            <Crosshair containerRef={containerRef} color="#0ea5e9" />
            <p className="text-slate-400 pointer-events-none">
                Hover inside this box.
            </p>
            <a href="#" className="text-sky-400 mt-4 text-lg hover:underline z-10 relative pointer-events-auto">
                Hover over this link
            </a>
        </div>
    );
};

// --- 3. The Code String for Users to Copy ---
export const crosshairCodeString = `
'use client';

import React, { useRef, useEffect, FC, RefObject } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CrosshairProps {
    color?: string;
    containerRef: RefObject<HTMLDivElement>;
}

const Crosshair: FC<CrosshairProps> = ({ color = "white", containerRef }) => {
    const [isHoveringLink, setIsHoveringLink] = React.useState(false);
    
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top } = container.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        };

        container.addEventListener('mousemove', handleMouseMove);
        
        const links = container.querySelectorAll("a");
        const handleLinkEnter = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);

        links.forEach(link => {
            link.addEventListener("mouseenter", handleLinkEnter);
            link.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            links.forEach(link => {
                link.removeEventListener("mouseenter", handleLinkEnter);
                link.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, [containerRef, mouseX, mouseY]);

    const turbulenceVariants = {
        initial: { baseFrequency: "0.00001" },
        hover: { baseFrequency: "0.1" },
    };

    return (
        <div className="absolute inset-0 pointer-events-none z-[10000]">
            <svg className="absolute w-full h-full">
                <defs>
                    <filter id="filter-noise">
                        <motion.feTurbulence
                            type="fractalNoise"
                            numOctaves="1"
                            variants={turbulenceVariants}
                            animate={isHoveringLink ? "hover" : "initial"}
                            transition={{ duration: 0.4, ease: "power1.inOut" }}
                        />
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </defs>
            </svg>
            <motion.div
                className="absolute w-full h-[1px]"
                style={{ y: smoothMouseY, background: color, filter: "url(#filter-noise)" }}
            />
            <motion.div
                className="absolute h-full w-[1px]"
                style={{ x: smoothMouseX, background: color, filter: "url(#filter-noise)" }}
            />
        </div>
    );
};

export default Crosshair;
`;

// --- 4. The Final Page Component ---

export default CrosshairPreview