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

  // An array of link categories. You can customize this to fit your site's structure.
  const linkCategories: LinkCategory[] = [
    {
      title: 'Getting Started',
      links: [
        { href: '/docs/installation', text: 'Installation' },
        { href: '/docs/editor-setup', text: 'Editor Setup' },
        { href: '/docs/theming', text: 'Theming' },
      ],
    },
    {
      title: 'Core Concepts',
      links: [
        { href: '/docs/utility-first', text: 'Utility-First' },
        { href: '/docs/responsive-design', text: 'Responsive Design' },
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
    <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-40 mt-5">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col border-r border-slate-300/10 bg-[#0B1120]">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          {/* The top padding here (pt-5) should roughly match the height of your top navbar to avoid content overlap */}
          <nav className="mt-5 flex-1 space-y-6 px-2">
            {linkCategories.map((category) => (
              <div key={category.title} className="space-y-1">
                {/* Category Title */}
                <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {category.title}
                </h3>
                {/* Links within the category */}
                <div className="space-y-1">
                  {category.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? 'bg-slate-800/50 text-sky-400'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {link.text}
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