'use client';

// Import React hooks and types
import React, { useState, FC, useEffect } from 'react';

// Define the structure for a single navigation link
interface SidebarLink {
  href: string;
  text: string;
}

// Define the structure for a category of links
interface LinkCategory {
  title: string;
  links: SidebarLink[];
}

// The main Sidebar component
const Sidebar: FC = () => {
  // State to hold the current path for active link styling
  const [pathname, setPathname] = useState<string>('');

  // useEffect to get the current pathname from the window object on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  // An array of link categories with corrected capitalization for a more professional look.
  const linkCategories: LinkCategory[] = [
    {
      title: 'Getting Started',
      links: [
        { href: '/docs/introduction', text: 'Introduction' },
        { href: '/docs/installation', text: 'Installation' },
        { href: '/docs/compatibility', text: 'Compatibility' },
      ],
    },
    {
      title: 'Components',
      links: [
        { href: '/docs/buttons', text: 'buttons' },
        { href: '/docs/coursor-effect', text: 'coursor-effect' },
        { href: '/docs/dark-mode', text: 'Dark Mode' },
        { href: '/docs/customization', text: 'Customization' },
      ],
    },
    {
      title: 'Community',
      links: [
        { href: '/showcase', text: 'Showcase' },
        { href: '/github', text: 'GitHub' },
        { href: '/discord', text: 'Discord' },
      ],
    },
  ];

  return (
    // The <aside> element is semantically correct for a sidebar.
    // It's fixed to the screen, full height, and has a defined width.
    // 'hidden md:block' makes it disappear on small screens and appear on medium screens and up.
    <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-40">
      {/* Sidebar component container */}
      <div className="flex min-h-0 flex-1 flex-col border-r border-slate-800 bg-[#0B1120]">
        <div className="flex flex-1 flex-col overflow-y-auto pt-16">
          {/* The top padding (pt-16) matches the navbar height to prevent content overlap */}
          <nav className="flex-1 space-y-6 px-4 pb-4">
            {linkCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                {/* Category Title */}
                <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {category.title}
                </h3>
                {/* Links within the category */}
                <div className="space-y-1">
                  {category.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      // 'group' class allows us to style child elements on hover
                      // 'relative' is needed for the absolute positioning of the hover indicator
                      className={`group relative flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-white' // Active link text color
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50' // Inactive link text and hover state
                      }`}
                    >
                      {/* Hover and Active State Indicator Bar */}
                      {/* This span is hidden by default (scale-y-0) and scales into view on hover or when active. */}
                      <span className={`absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-sky-400 transition-transform duration-200 ease-in-out ${
                        pathname === link.href ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                      }`}></span>
                      
                      <span className="ml-3">{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;