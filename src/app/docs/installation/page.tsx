"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";

const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children).then(() => {
        setIsCopied(true);

        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  return (
    <div className="relative">
      <pre className="bg-slate-800/80 rounded-lg p-4 my-4 overflow-x-auto pr-12">
        <code className="text-sm text-slate-200 font-mono">{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-4 p-2 rounded-md bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
        aria-label="Copy to clipboard"
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};

export default function InstallationPage() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
      <p className="text-lg text-slate-400 mb-8">
        Follow the steps below to set up your project with the necessary tools.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold border-b border-slate-700 pb-2 mb-4">
            1. Create a Next.js Project
          </h2>
          <p className="text-slate-300 mb-2">
            Start by creating a new Next.js project. We recommend including
            Tailwind CSS during the setup process for the quickest start.
          </p>
          <CodeBlock>
            npx create-next-app@latest my-ui-library --typescript --tailwind
            --eslint
          </CodeBlock>
          <p className="text-slate-300 mt-6">
            If you have an existing project without Tailwind, you can install it
            manually.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Manual Tailwind Installation
          </h3>
          <p className="text-slate-300 mb-2">
            Install Tailwind CSS and its peer dependencies:
          </p>
          <CodeBlock>npm install -D tailwindcss postcss autoprefixer</CodeBlock>
          <p className="text-slate-300 mt-4">
            Next, generate your `tailwind.config.js` and `postcss.config.js`
            files:
          </p>
          <CodeBlock>npx tailwindcss init -p</CodeBlock>
        </div>

        <div>
          <h2 className="text-2xl font-semibold border-b border-slate-700 pb-2 mb-4">
            2. Install Framer Motion
          </h2>
          <p className="text-slate-300 mb-2">
            Framer Motion is a production-ready motion library for React. It
            provides a simple and declarative API to add animations to your
            components.
          </p>
          <CodeBlock>npm install framer-motion</CodeBlock>
        </div>

        <div>
          <h2 className="text-2xl font-semibold border-b border-slate-700 pb-2 mb-4">
            3. Next Steps
          </h2>
          <p className="text-slate-300">
            Once these packages are installed, you re ready to start building
            your components. Remember that any component using Framer Motion s
            interactive features must be a Client Component by adding the use
            client; directive at the top of the file.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <Link
          href="/docs/compatibility"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Compatibility
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
