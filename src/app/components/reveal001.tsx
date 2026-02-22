"use client";

import React, { FC, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from './utils';

interface RevealEffectCardProps {
  revealTitle?: string;
  revealDescription?: string;
  dotCount?: number;
  className?: string;
}

export const RevealEffectCard: FC<RevealEffectCardProps> = ({
  revealTitle = "Revealed Content",
  revealDescription = "This panel slides in on hover to reveal more information or interactive elements.",
  dotCount = 50,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(Infinity);

  const dots = useMemo(() => {
    return Array.from({ length: dotCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
  }, [dotCount]);

  const panelX = useTransform(mouseX, [0, 448], ["-100%", "0%"]);

  const smoothPanelX = useSpring(panelX, {
    stiffness: 400,
    damping: 40,
    mass: 1,
  });

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative w-full max-w-md h-64 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl shadow-lg overflow-hidden",
        className
      )}
      onMouseMove={(e) => {
        if (cardRef.current) {
          const { left } = cardRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - left);
        }
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-0.5 h-0.5 bg-white/50 rounded-full"
            style={{ top: dot.top, left: dot.left }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0 w-full h-full bg-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center p-6"
        style={{ x: smoothPanelX }}
      >
        <h4 className="text-2xl font-bold text-white mb-2">{revealTitle}</h4>
        <p className="text-slate-300 text-center">
          {revealDescription}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default RevealEffectCard;
