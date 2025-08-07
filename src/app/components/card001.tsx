'use client';


import React, { FC } from 'react';


// Standard Card Component
export const StandardCard: FC = () => {
    return (
        <div className="w-full max-w-sm p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Standard Card</h3>
            <p className="text-slate-400">
                This is a simple and clean card for displaying static content. Its perfect for articles, profiles, or information blocks.
            </p>
        </div>
    );
};





// --- 2. Define the code string for the components ---
export const cardCodeString = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

// Standard Card Component
const StandardCard: FC = () => {
    return (
        <div className="w-full max-w-sm p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Standard Card</h3>
            <p className="text-slate-400">
                This is a simple and clean card for displaying static content.
            </p>
        </div>
    );
};

`;


