'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { allLinks } from './sidebar'; 

const SearchIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-400 group-focus-within:text-sky-400 transition-colors"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

interface SearchResult {
    href: string;
    text: string;
}

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (searchTerm.trim().length > 1) {
            const lowerCaseTerm = searchTerm.toLowerCase();
            const filteredResults = allLinks.filter(link =>
                link.text.toLowerCase().includes(lowerCaseTerm)
            );
            setResults(filteredResults);
        } else {
            setResults([]); 
        }
    }, [searchTerm]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
           if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
               setIsFocused(false);
              
           }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleResultClick = () => {
        setSearchTerm('');
        setResults([]);
        setIsFocused(false);
    }

    return (
        <div ref={searchContainerRef} className="relative group">
            <input
                type="text"
                placeholder="Search docs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)} 
                className="w-full sm:w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
            </div>

            
            {isFocused && (searchTerm.length > 1 || results.length > 0) && (
                 <div className="absolute top-full mt-2 w-full sm:w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto py-1">
                   
                    {results.length > 0 && (
                        <ul>
                            {results.map(result => (
                                <li key={result.href}>
                                    <Link
                                        href={result.href}
                                        onClick={handleResultClick} 
                                        className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 transition-colors"
                                    >
                                        {result.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {searchTerm.length > 1 && results.length === 0 && (
                         <p className="text-sm text-slate-400 px-4 py-2">No results found.</p>
                     )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;