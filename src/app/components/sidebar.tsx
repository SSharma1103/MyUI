"use client";

import React, { FC } from "react";

import { usePathname } from "next/navigation";

interface SidebarLink {
  href: string;
  text: string;
}

interface LinkCategory {
  title: string;
  links: SidebarLink[];
}

const Sidebar: FC = () => {
  const pathname = usePathname();

  const linkCategories: LinkCategory[] = [
    {
      title: "Getting Started",
      links: [
        { href: "/docs/introduction", text: "Introduction" },
        { href: "/docs/installation", text: "Installation" },
        { href: "/docs/compatibility", text: "Compatibility" },
      ],
    },
    {
      title: "Components",
      links: [
        { href: "/docs/buttons", text: "Buttons" },
        { href: "/docs/loaders", text: "Loaders" },
        { href: "/docs/coursor-effect", text: "Coursor-effect" },
        { href: "/docs/cards", text: "Cards" },
        { href: "/docs/effects", text: "Effects" },
        { href: "/docs/scrollanimation", text: "Scroll Animation" },
        { href: "/docs/input", text: "Input" },
        { href: "/docs/agenticUI", text: "Agentic UI" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "https://github.com/SSharma1103/MyUI", text: "GitHub" },
        { href: "/docs/faq", text: "FAQ" },
        { href: "/docs/reviews", text: "Review" },
      ],
    },
  ];

  return (
    <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-40 pt-3">
      <div className="flex min-h-0 flex-1 flex-col border-r border-slate-800 bg-[#0B1120]">
        <div className="flex flex-1 flex-col overflow-y-auto pt-16">
          <nav className="flex-1 space-y-6 px-4 pb-4">
            {linkCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className={`group relative flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-sky-400 transition-transform duration-200 ease-in-out ${
                          pathname === link.href
                            ? "scale-y-100"
                            : "scale-y-0 group-hover:scale-y-100"
                        }`}
                      ></span>

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
