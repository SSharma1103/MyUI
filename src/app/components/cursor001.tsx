"use client";

import React, { useState, FC } from "react";
import { motion } from "framer-motion";

const CustomCursor: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const numDots = 9;
  const dots = Array.from({ length: numDots });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative flex items-center justify-center w-full h-64 text-center bg-transparent pointer-events-auto border border-slate-700"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: isHovering ? "none" : "auto" }}
    >
      <p className="text-slate-400 pointer-events-none">
        Hover anywhere inside this box to see the effect.
      </p>

      {isHovering &&
        dots.map((_, index) => {
          const size = (numDots - index) * 2;
          const opacity = (numDots - index) / numDots;

          return (
            <motion.div
              key={index}
              className="fixed top-0 left-0 rounded-full bg-sky-400 pointer-events-none"
              style={{
                width: size,
                height: size,
                opacity: opacity,
                zIndex: 9999 - index,
              }}
              animate={{
                x: mousePosition.x - size / 2,
                y: mousePosition.y - size / 2,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 30,
                mass: 0.5,
                delay: index * 0.001,
              }}
            />
          );
        })}
    </div>
  );
};

export const cursorCodeString = `
'use client';

import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';

const ScopedCustomCursor: FC = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const numDots = 15;
  const dots = Array.from({ length: numDots });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full h-64 bg-transparent pointer-events-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: isHovering ? 'none' : 'auto' }}
    >
      <div className="pointer-events-none">{children}</div>

      {isHovering &&
        dots.map((_, index) => {
          const size = (numDots - index) * 2;
          const opacity = (numDots - index) / numDots;

          return (
            <motion.div
              key={index}
              className="fixed top-0 left-0 rounded-full bg-sky-400 pointer-events-none"
              style={{
                width: size,
                height: size,
                opacity: opacity,
                zIndex: 9999 - index,
              }}
              animate={{
                x: mousePosition.x - size / 2,
                y: mousePosition.y - size / 2,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 30,
                mass:0.5,
                delay: index * 0.001,
              }}
            />
          );
        })}
    </div>
  );
};

export default ScopedCustomCursor;
`;
export default CustomCursor;
