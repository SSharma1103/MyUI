"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "./utils";

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

interface Card002Props extends HTMLMotionProps<"a"> {
  title?: string;
  description?: string;
}

export const InteractiveCard = ({
  title = "Interactive Card",
  description = "This card has a hover effect, making it ideal for navigation links or calls to action. The border glows and the arrow moves.",
  className,
  href = "#",
  ...props
}: Card002Props) => {
  return (
    <motion.a
      href={href}
      className={cn(
        "group relative block w-full max-w-sm p-6 overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg",
        className
      )}
      whileHover="hover"
      {...props}
    >
      <motion.div
        className="absolute inset-0 border-2 border-sky-500/50 rounded-xl"
        initial={{ opacity: 0, scale: 1.05 }}
        variants={{ hover: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <div className="relative">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <motion.div
            className="text-slate-500 group-hover:text-sky-400"
            variants={{ hover: { x: 5, y: -5 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowUpRightIcon />
          </motion.div>
        </div>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.a>
  );
};

export default InteractiveCard;
