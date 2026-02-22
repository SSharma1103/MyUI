"use client";

import React, { useState, FC } from "react";
import { motion } from "framer-motion";
import { cn } from './utils';

interface CustomCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  numDots?: number;
  dotColor?: string;
  hintText?: string;
}

const CustomCursor: FC<CustomCursorProps> = ({
  numDots = 9,
  dotColor = "bg-sky-400",
  hintText = "Hover anywhere inside this box to see the effect.",
  className,
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const dots = Array.from({ length: numDots });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full h-64 text-center bg-transparent pointer-events-auto border border-slate-700",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: isHovering ? "none" : "auto" }}
      {...props}
    >
      <p className="text-slate-400 pointer-events-none">
        {hintText}
      </p>

      {isHovering &&
        dots.map((_, index) => {
          const size = (numDots - index) * 2;
          const opacity = (numDots - index) / numDots;

          return (
            <motion.div
              key={index}
              className={cn("fixed top-0 left-0 rounded-full pointer-events-none", dotColor)}
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

export default CustomCursor;
