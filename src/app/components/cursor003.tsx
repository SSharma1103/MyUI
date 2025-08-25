'use client';


import React, { useState, useEffect, FC } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';


interface PriceDisplayProps {
    price: MotionValue<string>;
}
const PriceDisplay: FC<PriceDisplayProps> = ({ price }) => {
    return (
        <div className="flex flex-col items-center mb-3">
            <div className="w-8 h-8 mb-2 rounded-full bg-gray-900 flex items-center justify-center border-2 border-sky-500 text-sky-400 font-bold text-lg shadow-[0_0_5px_0_rgba(14,165,233,0.5)]">
                B
            </div>
            <motion.p className="text-sky-400 text-xs font-mono h-4">
                {price}
            </motion.p>
        </div>
    );
};

interface BarProps {
    mouseY: MotionValue<number>;
    index: number;
}
const Bar: FC<BarProps> = ({ mouseY, index }) => {
    const offset = index * 80;
    const scaleY = useTransform(
        mouseY,
        [0 + offset, typeof window !== 'undefined' ? window.innerHeight - offset : 1000],
        [0.1, 1],
        { clamp: true }
    );
    const price = useTransform(scaleY, [0.1, 1], [10 + index * 2, 95 + index * 5]);
    const formattedPrice = useTransform(price, (p) => `$${Math.round(p)}`);
    const delay = Math.sin(index * 1.2) * 0.2 + 0.2;

    return (
        <div className="flex flex-col-reverse">
            <motion.div
                className="w-9 rounded-t-sm"
                style={{
                    height: '250px',
                    backgroundColor: "#0ea5e9", // sky-500
                    boxShadow: "0 0 8px rgba(14, 165, 233, 0.7)", // Glow effect
                    scaleY: scaleY,
                    transformOrigin: 'bottom',
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            />
            <PriceDisplay price={formattedPrice} />
        </div>
    );
};


export const InteractiveBarDisplay: FC = () => {
    const mouseY = useMotionValue(Infinity);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseY]);

    const bars = Array.from({ length: 7 });

    return (
        <div className="flex justify-center items-end space-x-6 p-12 h-[350px]">
            {bars.map((_, i) => (
                <Bar key={i} mouseY={mouseY} index={i} />
            ))}
        </div>
    );
};



export const barDisplayCodeString = `
'use client';

import React, { useState, useEffect, FC } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';

// --- PriceDisplay Sub-Component ---
interface PriceDisplayProps {
    price: MotionValue<string>;
}
const PriceDisplay: FC<PriceDisplayProps> = ({ price }) => {
    return (
        <div className="flex flex-col items-center mb-3">
            <div className="w-8 h-8 mb-2 rounded-full bg-gray-900 flex items-center justify-center border-2 border-sky-500 text-sky-400 font-bold text-lg shadow-[0_0_5px_0_rgba(14,165,233,0.5)]">
                B
            </div>
            <motion.p className="text-sky-400 text-xs font-mono h-4">
                {price}
            </motion.p>
        </div>
    );
};

// --- Bar Sub-Component ---
interface BarProps {
    mouseY: MotionValue<number>;
    index: number;
}
const Bar: FC<BarProps> = ({ mouseY, index }) => {
    const offset = index * 80;
    const scaleY = useTransform(
        mouseY,
        [0 + offset, typeof window !== 'undefined' ? window.innerHeight - offset : 1000],
        [0.1, 1],
        { clamp: true }
    );
    const price = useTransform(scaleY, [0.1, 1], [10 + index * 2, 95 + index * 5]);
    const formattedPrice = useTransform(price, (p) => \`$\${Math.round(p)}\`);
    const delay = Math.sin(index * 1.2) * 0.2 + 0.2;

    return (
        <div className="flex flex-col-reverse">
            <motion.div
                className="w-9 rounded-t-sm"
                style={{
                    height: '250px',
                    backgroundColor: "#0ea5e9", // sky-500
                    boxShadow: "0 0 8px rgba(14, 165, 233, 0.7)", // Glow effect
                    scaleY: scaleY,
                    transformOrigin: 'bottom',
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            />
            <PriceDisplay price={formattedPrice} />
        </div>
    );
};

// --- Main InteractiveBarDisplay Component ---
const InteractiveBarDisplay: FC = () => {
    const mouseY = useMotionValue(Infinity);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseY]);

    const bars = Array.from({ length: 7 });

    return (
        <div className="flex justify-center items-end space-x-6 p-12 h-[350px]">
            {bars.map((_, i) => (
                <Bar key={i} mouseY={mouseY} index={i} />
            ))}
        </div>
    );
};

export default InteractiveBarDisplay;
`;