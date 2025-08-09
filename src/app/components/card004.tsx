"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

const CartIcon = () => (
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
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export const ProductSaleCard: FC = () => {
  const textVariants = {
    initial: { x: 0 },
    hover: { x: "-125%" },
  };
  const iconVariants = {
    initial: { x: "125%" },
    hover: { x: 0 },
  };

  return (
    <motion.div
      className="w-full max-w-sm bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://placehold.co/600x400/0B1120/38BDF8?text=Product)",
        }}
      ></div>

      <div className="p-6">
        <p className="text-sm text-slate-400 mb-1">Men s Apparel</p>
        <h3 className="text-xl font-bold text-white mb-3">AeroGlide Runners</h3>

        <div className="flex items-baseline gap-3 mb-4">
          <p className="text-2xl font-bold text-sky-400">$79.99</p>
          <p className="text-lg text-slate-500 line-through">$129.99</p>
        </div>

        <motion.button
          className="relative w-full flex items-center justify-center h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          initial="initial"
          whileHover="hover"
        >
          <motion.span
            className="inline-block"
            variants={textVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Add to Cart
          </motion.span>
          <motion.span
            className="absolute inline-block ml-15"
            variants={iconVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CartIcon />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export const productCardCodeString = `
'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

const ProductSaleCard: FC = () => {
    const textVariants = {
        initial: { x: 0 },
        hover: { x: "-125%" },
    };
    const iconVariants = {
        initial: { x: "125%" },
        hover: { x: 0 },
    };

    return (
        <motion.div 
            className="w-full max-w-sm bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
            <div className="w-full h-48 bg-cover bg-center"
                 style={{ backgroundImage: 'url(https://placehold.co/600x400/0B1120/38BDF8?text=Product)' }}>
            </div>
            
            <div className="p-6">
                <p className="text-sm text-slate-400 mb-1">Men's Apparel</p>
                <h3 className="text-xl font-bold text-white mb-3">AeroGlide Runners</h3>
                
                <div className="flex items-baseline gap-3 mb-4">
                    <p className="text-2xl font-bold text-sky-400">$79.99</p>
                    <p className="text-lg text-slate-500 line-through">$129.99</p>
                </div>

                <motion.button 
                    className="relative w-full flex items-center justify-center h-12 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-200 bg-sky-500 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                    initial="initial"
                    whileHover="hover"
                >
                    <motion.span
                        className="inline-block"
                        variants={textVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        Add to Cart
                    </motion.span>
                    <motion.span
                        className="absolute inline-block"
                        variants={iconVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <CartIcon />
                    </motion.span>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductSaleCard;
`;
