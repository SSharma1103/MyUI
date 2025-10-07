'use client';

import React, { useState, FC, ReactNode } from 'react';
import { DiJavascript1 } from "react-icons/di";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";


// --- Sub-Component for the Code Snippet Display ---
interface CodeSnippetProps {
  initialCode?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({ initialCode = `function greet(name) {\n  console.log(\`Hello, \${name}!\`);\n}` }) => {
  const codeRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(initialCode, { language: 'javascript' }).value;
    }
  }, [initialCode]);

  return (
    <div className="w-full max-w-2xl">
      {/* macOS-style window frame */}
      <div className="bg-[#353743] h-12 w-full rounded-t-xl flex items-center px-4 space-x-[6px]">
        {/* Traffic lights */}
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        {/* File tab */}
        <div className="bg-[#0d1017] h-8 rounded-t-lg flex items-center px-3 ml-3">
          <DiJavascript1 size={18} color="#f0db4f" />
          <span className="ml-2 text-gray-300 text-sm">snippet.js</span>
        </div>
      </div>
      {/* Code area */}
      <div className="bg-[#0d1017] w-full rounded-b-xl p-4 font-mono text-sm text-gray-200 overflow-auto">
        <pre className="whitespace-pre-wrap">
          <code ref={codeRef} className="language-javascript"></code>
        </pre>
      </div>
    </div>
  );
};

// --- Code String for the component ---
export const codeSnippetCodeString = `
'use client';

import React, { FC, useEffect, useRef } from 'react';
import { DiJavascript1 } from "react-icons/di";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Ensure you have this CSS

interface CodeSnippetProps {
  initialCode?: string;
}

const CodeSnippet: FC<CodeSnippetProps> = ({ initialCode = \`function greet(name) {\\n  console.log(\\\`Hello, \\\${name}!\\\`);\\n}\` }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Use highlight.js to apply syntax highlighting
      codeRef.current.innerHTML = hljs.highlight(initialCode, { language: 'javascript' }).value;
    }
  }, [initialCode]);

  return (
    <div className="w-full max-w-2xl">
      {/* macOS-style window frame */}
      <div className="bg-[#353743] h-12 w-full rounded-t-xl flex items-center px-4 space-x-[6px]">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="bg-[#0d1017] h-8 rounded-t-lg flex items-center px-3 ml-3">
          <DiJavascript1 size={18} color="#f0db4f" />
          <span className="ml-2 text-gray-300 text-sm">snippet.js</span>
        </div>
      </div>
      {/* Code area */}
      <div className="bg-[#0d1017] w-full rounded-b-xl p-4 font-mono text-sm text-gray-200 overflow-auto">
        <pre className="whitespace-pre-wrap">
          <code ref={codeRef} className="language-javascript"></code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
`;
