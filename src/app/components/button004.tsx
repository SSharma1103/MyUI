'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';


interface NeoButtonProps {
  children: React.ReactNode;
  className?: string;
}


const NeoButtonBase: FC<NeoButtonProps & { bgClasses: string }> = ({
  children,
  className = '',
  bgClasses,
}) => {
  return (
    <motion.button
      className={`px-6 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_#000000] ${bgClasses} ${className}`}
      whileHover={{
        boxShadow: '6px 6px 0px #000000', 
      }}
      whileTap={{
        boxShadow: 'none', 
        x: 4,
        y: 4,
      }}
      transition={{ duration: 0.1, ease: 'linear' }}
    >
      {children}
    </motion.button>
  );
};


export const NeoButtonPrimary: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-yellow-400 text-black hover:bg-yellow-300"
    className={className}
  >
    {children}
  </NeoButtonBase>
);


export const NeoButtonSecondary: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-sky-500 text-black hover:bg-sky-400"
    className={className}
  >
    {children}
  </NeoButtonBase>
);


export const NeoButtonDestructive: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-red-500 text-white hover:bg-red-400"
    className={className}
  >
    {children}
  </NeoButtonBase>
);


export const NeoButtonPreview: FC = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center p-8 bg-white rounded-lg">
      <NeoButtonPrimary>Primary</NeoButtonPrimary>
      <NeoButtonSecondary>Secondary</NeoButtonSecondary>
      <NeoButtonDestructive>Delete</NeoButtonDestructive>
    </div>
  );
};


export const neoButtonCodeString = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Base Neobrutalism Button
 * Applies the core border, shadow, and animation properties.
 */
const NeoButtonBase: FC<NeoButtonProps & { bgClasses: string }> = ({
  children,
  className = '',
  bgClasses,
}) => {
  return (
    <motion.button
      className={
        'px-6 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_#000000] ' +
        bgClasses + ' ' +
        className
      }
      whileHover={{
        boxShadow: '6px 6px 0px #000000', // <-- Corrected: 'shadow' to 'boxShadow'
      }}
      whileTap={{
        boxShadow: 'none', // <-- Corrected: 'shadow' to 'boxShadow'
        x: 4,
        y: 4,
      }}
      transition={{ duration: 0.1, ease: 'linear' }}
    >
      {children}
    </motion.button>
  );
};

/**
 * Primary Neobrutalism Button (Yellow)
 */
export const NeoButtonPrimary: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-yellow-400 text-black hover:bg-yellow-300"
    className={className}
  >
    {children}
  </NeoButtonBase>
);

/**
 * Secondary Neobrutalism Button (Sky Blue)
 */
export const NeoButtonSecondary: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-sky-500 text-black hover:bg-sky-400"
    className={className}
  >
    {children}
  </NeoButtonBase>
);

/**
 * Destructive Neobrutalism Button (Red)
 */
export const NeoButtonDestructive: FC<NeoButtonProps> = ({
  children,
  className,
}) => (
  <NeoButtonBase
    bgClasses="bg-red-500 text-white hover:bg-red-400"
    className={className}
  >
    {children}
  </NeoButtonBase>
);

`;