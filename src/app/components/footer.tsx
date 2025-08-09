"use client";

import React, { FC } from "react";

const HeartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-red-500 mx-1"
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/docs/introduction", text: "Docs" },
    { href: "https://github.com/SSharma1103/MyUI", text: "GitHub" },
    { href: "/docs/faq", text: "FAQ" },
  ];

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0B1120]">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-sm text-slate-400">
            <span>Created with</span>
            <HeartIcon />
            <span>by Shivam Sharma</span>
          </div>

          <nav className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="text-sm text-slate-500">
            &copy; {currentYear} MyUI. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
