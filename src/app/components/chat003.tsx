'use client';

import React, { useState, useRef, useEffect, FormEvent, FC } from "react";
import { Youtube, Sparkles, Code, Mic } from "lucide-react";

// --- 1. Define the component to be previewed ---

const commandList = [
  { command: "@yt", icon: <Youtube size={18} />, label: "YouTube" },
  { command: "@spotify", icon: <Mic size={18} />, label: "Spotify" },
  { command: "@code", icon: <Code size={18} />, label: "Code Block" },
  { command: "@gemini", icon: <Sparkles size={18} />, label: "Ask Gemini" },
];

const modeButtons = [
  { id: "deep-think", label: "Deep Think" },
  { id: "create-image", label: "Create Image" },
  { id: "fast", label: "Fast" },
];

const AICommandInput: FC = () => {
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const detectedCommand = commandList.find((item) =>
    value.includes(item.command)
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    console.log("Submitted value:", value);
    console.log("Detected command was:", detectedCommand?.command);
    console.log("Active mode:", activeMode);
    setValue("");
  };

  const handleCommandSelect = (command: string) => {
    setValue((prev) => `${command} ${prev.replace(/@\w*/, '').trim()}`);
    setIsMenuOpen(false);
    textareaRef.current?.focus();
  };

  const handleModeToggle = (modeId: string) => {
    setActiveMode(activeMode === modeId ? null : modeId);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/50 p-2">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-2">
          <div className="flex w-full items-start">
            <textarea
              ref={textareaRef}
              placeholder="Type your message or a command..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              rows={1}
              className="w-full max-h-48 resize-none bg-transparent px-2 pt-2 text-slate-200 placeholder-slate-400 outline-none"
            />
            <button
              type="submit"
              disabled={!value.trim()}
              className="ml-2 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500 transition-colors hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            </div>
          </div>
          <div className="flex justify-start mt-2 gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-700 hover:text-slate-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            {modeButtons.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleModeToggle(mode.id)}
                className={`h-8 px-3 rounded-lg border transition-all duration-200 text-sm font-medium ${
                  activeMode === mode.id 
                    ? 'border-sky-500 bg-sky-500/20 text-sky-400' 
                    : 'border-slate-600 bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute bottom-full left-0 mb-2 w-full max-w-sm rounded-xl border border-slate-700 bg-slate-800 p-2 shadow-lg"
          >
            <p className="px-2 py-1 text-xs text-slate-400">Commands</p>
            <ul>
              {commandList.map(({ command, icon, label }) => (
                <li key={command}>
                  <button
                    type="button"
                    onClick={() => handleCommandSelect(command)}
                    className="flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    {icon}
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {detectedCommand && (
          <div className="mt-2 flex items-center gap-2 px-2 text-sm text-slate-400">
            <span>
              Using command:{" "}
              <span className="font-semibold text-slate-200">
                {detectedCommand.command}
              </span>
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export const AICommandInputPreview003 = () => (
    <div className="w-full max-w-3xl">
        <AICommandInput />
    </div>
);

// --- 2. Define the code string for the component ---
export const commandInputCodeString003 = `
'use client';

// First, install lucide-react: npm install lucide-react

import React, { useState, useRef, useEffect, FormEvent, FC } from "react";
import { Youtube, Sparkles, Code, Mic } from "lucide-react";

const commandList = [
  { command: "@yt", icon: <Youtube size={18} />, label: "YouTube" },
  { command: "@spotify", icon: <Mic size={18} />, label: "Spotify" },
  { command: "@code", icon: <Code size={18} />, label: "Code Block" },
  { command: "@gemini", icon: <Sparkles size={18} />, label: "Ask Gemini" },
];

const modeButtons = [
  { id: "deep-think", label: "Deep Think" },
  { id: "create-image", label: "Create Image" },
  { id: "fast", label: "Fast" },
];

const AICommandInput: FC = () => {
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = \`\${textareaRef.current.scrollHeight}px\`;
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const detectedCommand = commandList.find((item) =>
    value.includes(item.command)
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    // Your submission logic here
    setValue("");
  };

  const handleCommandSelect = (command: string) => {
    setValue((prev) => \`\${command} \${prev.replace(/@\\w*/, '').trim()}\`);
    setIsMenuOpen(false);
    textareaRef.current?.focus();
  };

  const handleModeToggle = (modeId: string) => {
    setActiveMode(activeMode === modeId ? null : modeId);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        {/* ... (rest of the JSX for the input and menus) */}
      </div>
    </form>
  );
};

export default AICommandInput;
`;
