"use client";

import React, { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from './utils';

interface GridLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  gridSize?: number;
  animationDuration?: number;
}

const GridLoader: FC<GridLoaderProps> = ({
  gridSize = 9,
  animationDuration = 1.5,
  className,
  ...props
}) => {
  return (
    <div className={cn("grid grid-cols-3 gap-3", className)} {...props}>
      {Array.from({ length: gridSize }).map((_, index) => (
        <motion.div
          key={index}
          className="w-5 h-5 bg-slate-300 rounded-lg"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * (animationDuration / 2),
          }}
        />
      ))}
    </div>
  );
};

export default GridLoader;
