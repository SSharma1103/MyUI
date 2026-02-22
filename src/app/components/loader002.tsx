"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { cn } from './utils';

interface CubeLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  cubeSize?: number;
  lineThickness?: number;
  animationDuration?: number;
}

const CubeLoader: FC<CubeLoaderProps> = ({
  cubeSize = 64,
  lineThickness = 4,
  animationDuration = 4,
  className,
  ...props
}) => {
  return (
    <div className={cn(className)} style={{ perspective: "400px" }} {...props}>
      <motion.div
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateY(0deg) translateZ(${cubeSize / 2}px)` }}
        ></div>
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)` }}
        ></div>
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)` }}
        ></div>
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)` }}
        ></div>
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)` }}
        ></div>
        <div
          className="absolute w-full h-full border border-slate-700/50 bg-slate-800/20"
          style={{ transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)` }}
        ></div>

        <motion.div
          className="absolute bg-blue-500"
          style={{
            width: lineThickness,
            height: lineThickness,
            transformOrigin: `-${lineThickness / 2}px -${lineThickness / 2}px`,
          }}
          animate={{
            translateX: [cubeSize, cubeSize, 0, 0, 0, cubeSize, cubeSize, 0, 0],
            translateY: [0, cubeSize, cubeSize, 0, 0, 0, cubeSize, cubeSize, 0],
            translateZ: [0, 0, 0, 0, cubeSize, cubeSize, cubeSize, cubeSize, 0],
            width: [
              lineThickness,
              lineThickness,
              cubeSize,
              cubeSize,
              lineThickness,
              lineThickness,
              cubeSize,
              cubeSize,
              lineThickness,
            ],
            height: [
              cubeSize,
              lineThickness,
              lineThickness,
              cubeSize,
              cubeSize,
              lineThickness,
              lineThickness,
              cubeSize,
              cubeSize,
            ],
          }}
          transition={{
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
        />
      </motion.div>
    </div>
  );
};

export default CubeLoader;
