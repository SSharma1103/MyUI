"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from './utils';

interface SquareLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  lineThickness?: number;
  animationDuration?: number;
}

const SquareLoader: React.FC<SquareLoaderProps> = ({
  squareSize = 64,
  lineThickness = 4,
  animationDuration = 2,
  className,
  ...props
}) => {
  const path = `
        M ${lineThickness / 2},${lineThickness / 2}
        L ${squareSize - lineThickness / 2},${lineThickness / 2}
        L ${squareSize - lineThickness / 2},${squareSize - lineThickness / 2}
        L ${lineThickness / 2},${squareSize - lineThickness / 2}
        Z
    `;

  return (
    <div className={cn("relative", className)} style={{ width: squareSize, height: squareSize }} {...props}>
      <div className="absolute w-full h-full border-2 border-slate-700 " />

      <motion.svg
        width={squareSize}
        height={squareSize}
        viewBox={`0 0 ${squareSize} ${squareSize}`}
        className="absolute"
      >
        <motion.path
          d={path}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={lineThickness}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="0.2 0.8"
          animate={{ strokeDashoffset: [1, 0] }}
          transition={{
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default SquareLoader;
