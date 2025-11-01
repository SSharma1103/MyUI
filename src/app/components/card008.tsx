'use client';

import React, { FC, useEffect, useRef } from 'react';
import { DiJavascript1 } from "react-icons/di";
import hljs from "highlight.js";
import "highlight.js/styles/base16/zenburn.css"; 

interface NeoCodeSnippetProps {
  initialCode?: string;
}

const NeoCodeSnippet: FC<NeoCodeSnippetProps> = ({ initialCode = `function greet(name) {\n  console.log(\`Hello, \${name}!\`);\n}` }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(initialCode, { language: 'javascript' }).value;
    }
  }, [initialCode]);

  return (
    <div className="w-full max-w-2xl border-4 border-black shadow-[8px_8px_0_#000]">
   
      <div className="bg-yellow-300 h-12 w-full flex items-center px-4 space-x-[6px] border-b-4 border-black">
        <div className="w-3 h-3 bg-red-600 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-600 border-2 border-black"></div>
        <div className="w-3 h-3 bg-green-600 border-2 border-black"></div>
        
        <div className="bg-white h-8 flex items-center px-3 ml-3 border-2 border-black">
          <DiJavascript1 size={18} color="#000" />
          <span className="ml-2 text-black text-sm font-bold uppercase">snippet.js</span>
        </div>
      </div>

      <div className="bg-white w-full p-4 font-mono text-sm text-black overflow-auto border-t-4 border-black">
        <pre className="whitespace-pre-wrap">
          <code ref={codeRef} className="language-javascript"></code>
        </pre>
      </div>
    </div>
  );
};

export default NeoCodeSnippet;

export const neoCodeSnippetCodeString = `
'use client';

import React, { FC, useEffect, useRef } from 'react';
import { DiJavascript1 } from "react-icons/di";
import hljs from "highlight.js";
import "highlight.js/styles/base16/zenburn.css"; 

interface NeoCodeSnippetProps {
  initialCode?: string;
}

const NeoCodeSnippet: FC<NeoCodeSnippetProps> = ({ initialCode = \`function greet(name) {\\n  console.log(\\\`Hello, \\\${name}!\\\`);\\n}\` }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = hljs.highlight(initialCode, { language: 'javascript' }).value;
    }
  }, [initialCode]);

  return (
    <div className="w-full max-w-2xl border-4 border-black shadow-[8px_8px_0_#000]">
      {/* Window Header */}
      <div className="bg-yellow-300 h-12 w-full flex items-center px-4 space-x-[6px] border-b-4 border-black">
        {/* Traffic lights */}
        <div className="w-3 h-3 bg-red-600 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-600 border-2 border-black"></div>
        <div className="w-3 h-3 bg-green-600 border-2 border-black"></div>
        
        {/* File Tab */}
        <div className="bg-white h-8 flex items-center px-3 ml-3 border-2 border-black">
          <DiJavascript1 size={18} color="#000" />
          <span className="ml-2 text-black text-sm font-bold uppercase">snippet.js</span>
        </div>
      </div>

      {/* Code Area */}
      <div className="bg-white w-full p-4 font-mono text-sm text-black overflow-auto border-t-4 border-black">
        <pre className="whitespace-pre-wrap">
          <code ref={codeRef} className="language-javascript"></code>
        </pre>
      </div>
    </div>
  );
};

export default NeoCodeSnippet;
`;