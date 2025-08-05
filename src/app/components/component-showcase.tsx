'use client';

import React, { useState, FC, ReactNode } from 'react';


const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

// A checkmark icon to show after copying
const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// The CodeBlock component with a copy button
const CodeBlock = ({ codeString }: { codeString: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-slate-900/70 rounded-lg p-4 my-4 overflow-x-auto">
        <code className="text-sm text-slate-200 font-mono">
          {codeString}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-7 right-4 p-2 rounded-md bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
        aria-label="Copy to clipboard"
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};

// --- Main Showcase Page Template ---

// Define the props the showcase page will accept
interface ComponentShowcaseProps {
  title: string;
  description: string;
  tags?: string[]; // Made tags optional
  preview: ReactNode; // The component to be previewed
  codeString: string; // The code for the component as a string
}

const ComponentShowcasePage: FC<ComponentShowcaseProps> = ({
  title,
  description,
  tags = ["buton"], // THE FIX: Provide a default empty array for tags
  preview,
  codeString,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="text-white w-full">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-lg text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'preview'
              ? 'border-b-2 border-sky-400 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'code'
              ? 'border-b-2 border-sky-400 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Code
        </button>
      </div>

      {/* Content Section (Preview or Code) */}
      <div className="mt-6">
        {activeTab === 'preview' ? (
          <div className="flex justify-center items-center bg-black min-h-[300px] w-full p-8 rounded-lg border border-slate-800">
            {preview}
          </div>
        ) : (
          <CodeBlock codeString={codeString} />
        )}
      </div>
    </div>
  );
};

export default ComponentShowcasePage;
