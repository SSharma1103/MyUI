"use client";

import React, { FC, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { cn } from './utils';

interface TextRevealEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const TextRevealEffect: FC<TextRevealEffectProps> = ({
  text = "MyUI",
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

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
      className={cn(
        "relative w-full h-48 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <h2 className="text-7xl font-bold text-slate-700 select-none">{text}</h2>

      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        <h2 className="absolute inset-0 w-full h-full flex items-center justify-center text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-sky-500 bg-clip-text text-transparent select-none">
          {text}
        </h2>
      </motion.div>
    </div>
  );
};

export default TextRevealEffect;
