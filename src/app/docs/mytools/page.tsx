'use client';

import React from 'react';
import { motion } from 'framer-motion';

// A simple arrow icon for the interactive card
const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

// This is the main component for your new page
export default function MyToolsPage() {
  return (
    <div className="w-full mb-77">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">My Tools</h1>
        <p className="text-lg text-slate-400">
          A collection of useful tools and side-projects I've built.
        </p>
      </div>

      {/* Grid for Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Interactive Card for the Heatmap Tool */}
        <motion.a 
            href="https://heatmap-kglq.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full p-6 overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg"
            whileHover="hover"
        >
            {/* The glowing border effect on hover */}
            <motion.div 
                className="absolute inset-0 border-2 border-sky-500/50 rounded-xl"
                initial={{ opacity: 0, scale: 1.05 }}
                variants={{ hover: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <div className="relative">
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white mb-2">Combined Dev Heatmap</h3>
                    <motion.div 
                        className="text-slate-500 group-hover:text-sky-400"
                        variants={{ hover: { x: 5, y: -5 } }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <ArrowUpRightIcon />
                    </motion.div>
                </div>
                <p className="text-slate-400">
                  Visualize your contributions from multiple platforms like GitHub and LeetCode in a single, unified heatmap.
                </p>
            </div>
        </motion.a>

        {/* You can add more tool cards here in the future */}

      </div>
    </div>
  );
}