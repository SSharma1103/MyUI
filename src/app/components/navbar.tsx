'use client';

import React, { useState, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

interface NavLink {
  href: string;
  text: string;
}

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    { href: '/docs/installation', text: 'Docs' },
    { href: '/docs/buttons', text: 'Components' },
    { href: 'https://github.com/SSharma1103/MyUI', text: 'Github' },
  ];

  // Animation variants for the dropdown menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1120]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-white font-bold text-lg">
            MyUI
          </Link>
        </div>
        <div className="hidden lg:flex flex-20 items-center justify-center">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  pathname.startsWith(link.href) ? "text-sky-400" : "text-slate-300"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden border-t border-slate-800 bg-[#0B1120]/95"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  className={`rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-slate-800 ${
                    pathname.startsWith(link.href) ? "text-sky-400 bg-slate-800/50" : "text-slate-300"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
