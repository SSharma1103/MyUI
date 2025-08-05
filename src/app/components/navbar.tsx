'use client'

import React ,{useState,FC} from "react"
import Link from "next/link"
import {motion} from 'framer-motion'   
import { usePathname } from "next/navigation"

interface NavLink {
  href: string;
  text: string;
}

const Navbar:FC=()=>{
    const [mobileMenuOpen, setMobileMenuOpen]=useState<boolean>(false)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
    const pathname = usePathname();
    const navLinks: NavLink[] = [
    { href: '/docs/installation', text: 'Docs' },
    { href: '/docs/buttons', text: 'Components' },
    { href: '/showcase', text: 'Showcase' },
  ];
  return(
    <header className="sticky top-0 z-50 w-full bg-[#0B1120]/80 backdrop-blur-sm border-b border-slate-300/10">
        <div className="flex h-12 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-white font-bold text-lg">
            MyUI
          </Link>
        </div>
          <div className="hidden lg:flex flex-1 items-center justify-center mr-25">
             <nav className="flex space-x-8">
                {navLinks.map((link)=>(
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
           <div className="flex items-center space-x-4">
          {/* Mobile Menu Button: Only visible on smaller screens (lg breakpoint) */}
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


        

    </header>
  )
}
export default Navbar;