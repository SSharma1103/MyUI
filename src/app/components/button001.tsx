"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "./utils";

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.43 5.92999L20.5 12L14.43 18.07"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 12H20.33"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ButtonProps extends HTMLMotionProps<"button"> {
  label?: string;
}

const Button001 = ({ 
  label = "Click me", 
  className, 
  ...props 
}: ButtonProps) => {
  const textVariants = {
    initial: { x: 0 },
    hover: { x: "-125%" },
  };

  const arrowVariants = {
    initial: { x: "125%" },
    hover: { x: 0 },
  };

  return (
    <motion.button
      className={cn(
        "relative flex items-center justify-center w-40 h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75",
        className
      )}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <motion.span
        className="inline-block mr-5"
        variants={textVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute inline-block pl-3"
        variants={arrowVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ArrowRightIcon />
      </motion.span>
    </motion.button>
  );
};

export default Button001;