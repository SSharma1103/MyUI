"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "./utils";

interface Button002Props extends HTMLMotionProps<"button"> {
  label?: string;
  icon?: string;
}

const Button002 = ({
  label = "Book",
  icon = "📖",
  className,
  ...props
}: Button002Props) => {
  const textVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -10 },
  };

  const iconVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
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
        className="inline-block"
        variants={textVariants}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute inline-block text-2xl"
        variants={iconVariants}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {icon}
      </motion.span>
    </motion.button>
  );
};

export default Button002;
