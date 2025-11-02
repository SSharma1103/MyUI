"use client"

import { useCallback, useEffect } from "react"

export default function GlobalShortcut() {
  const handleshort = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") { 
      event.preventDefault();
      
      const openSearchEvent = new CustomEvent('open-search');
      document.dispatchEvent(openSearchEvent);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleshort);
    return () => {
      document.removeEventListener('keydown', handleshort);
    };
  }, [handleshort]);

  return null;
}