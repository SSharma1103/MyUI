"use client";

import React from "react";
import { motion } from "framer-motion";

const SquareLoader: React.FC = () => {
  const squareSize = 64;
  const lineThickness = 4;
  const animationDuration = 2;

  const path = `
        M ${lineThickness / 2},${lineThickness / 2}
        L ${squareSize - lineThickness / 2},${lineThickness / 2}
        L ${squareSize - lineThickness / 2},${squareSize - lineThickness / 2}
        L ${lineThickness / 2},${squareSize - lineThickness / 2}
        Z
    `;

  return (
    <div className="relative" style={{ width: squareSize, height: squareSize }}>
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

export const loaderCodeString3 = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const SquareLoader: FC = () => {
    const squareSize = 64; // Size of the square in pixels
    const lineThickness = 4; // Thickness of the tracing line
    const animationDuration = 2; // Duration for one full loop

    // The SVG path for the square.
    const path = \`M \${lineThickness / 2},\${lineThickness / 2} 
                  L \${squareSize - lineThickness / 2},\${lineThickness / 2} 
                  L \${squareSize - lineThickness / 2},\${squareSize - lineThickness / 2} 
                  L \${lineThickness / 2},\${squareSize - lineThickness / 2} 
                  Z\`;

    return (
        <div className="relative" style={{ width: squareSize, height: squareSize }}>
            {/* The square outline */}
            <div className="absolute w-full h-full border-2 border-slate-700 rounded-lg"></div>

            {/* Animated Tracing Line using SVG */}
            <motion.svg
                width={squareSize}
                height={squareSize}
                viewBox={\`0 0 \${squareSize} \${squareSize}\`}
                className="absolute"
            >
                <motion.path
                    d={path}
                    fill="none"
                    stroke="#3b82f6" // blue-500
                    strokeWidth={lineThickness}
                    strokeLinecap="round"
                    // This defines the length of the visible line segment (20% of the total path)
                    pathLength="0.2"
                    // Animate the offset to make the segment travel
                    animate={{ pathOffset: [1, 0] }}
                    transition={{
                        duration: animationDuration,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default SquareLoader;
`;
export default SquareLoader;
