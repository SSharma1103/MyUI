
'use client';

import React, { useState, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar"; 

interface NavLink {
  href: string;
  text: string;
}

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const navLinks: NavLink[] = [
     { href: "/docs/installation", text: "Docs" },
     { href: "/docs/buttons", text: "Components" },
     { href: "/docs/reviews", text: "Reviews" },
     { href: "/docs/mytools", text: "MyTools" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1120]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
      
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center text-white font-bold text-lg"
          >
            MyUI
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 ml-25">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  pathname.startsWith(link.href) 
                    ? "text-sky-400"
                    : "text-slate-300"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
              <SearchBar />
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500" 
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> 
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg> 
              )}
            </button>
          </div>
        </div>
      </div>

     
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden border-t border-slate-800 bg-[#0B1120]/95"
          >
             
             <div className="p-4 border-b border-slate-800 sm:hidden">
                <SearchBar />
             </div>
            <nav className="flex flex-col space-y-1 p-4"> 
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-slate-800 ${
                    pathname.startsWith(link.href)
                      ? "text-sky-400 bg-slate-800/50"
                      : "text-slate-300"
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