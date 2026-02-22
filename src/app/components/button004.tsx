'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './utils';

interface NeoButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

interface NeoButtonBaseProps extends NeoButtonProps {
  bgClasses: string;
}

const NeoButtonBase = ({
  children,
  className,
  bgClasses,
  ...props
}: NeoButtonBaseProps) => {
  return (
    <motion.button
      className={cn(
        "px-6 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_#000000]",
        bgClasses,
        className
      )}
      whileHover={{
        boxShadow: '6px 6px 0px #000000', 
      }}
      whileTap={{
        boxShadow: 'none', 
        x: 4,
        y: 4,
      }}
      transition={{ duration: 0.1, ease: 'linear' }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const NeoButtonPrimary = ({
  children,
  className,
  ...props
}: NeoButtonProps) => (
  <NeoButtonBase
    bgClasses="bg-yellow-400 text-black hover:bg-yellow-300"
    className={className}
    {...props}
  >
    {children}
  </NeoButtonBase>
);

export const NeoButtonSecondary = ({
  children,
  className,
  ...props
}: NeoButtonProps) => (
  <NeoButtonBase
    bgClasses="bg-sky-500 text-black hover:bg-sky-400"
    className={className}
    {...props}
  >
    {children}
  </NeoButtonBase>
);

export const NeoButtonDestructive = ({
  children,
  className,
  ...props
}: NeoButtonProps) => (
  <NeoButtonBase
    bgClasses="bg-red-500 text-white hover:bg-red-400"
    className={className}
    {...props}
  >
    {children}
  </NeoButtonBase>
);

export const NeoButtonPreview = () => (
  <div className="flex flex-wrap gap-4 items-center">
    <NeoButtonPrimary>Primary</NeoButtonPrimary>
    <NeoButtonSecondary>Secondary</NeoButtonSecondary>
    <NeoButtonDestructive>Delete</NeoButtonDestructive>
  </div>
);