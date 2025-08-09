"use client";

import React, { FC } from "react";

export const StandardCard: FC = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-white mb-2">Standard Card</h3>
      <p className="text-slate-400">
        This is a simple and clean card for displaying static content. Its
        perfect for articles, profiles, or information blocks.
      </p>
    </div>
  );
};

export const cardCodeString = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';


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
