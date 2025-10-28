"use client";

import React, { useState, useRef, useEffect, FormEvent, FC } from "react";
import { Youtube, Sparkles, Code, Mic, File, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- The Reusable Component ---
interface CommandOption {
  command: string;
  icon: React.ReactNode;
  label: string;
}

interface ModeOption {
  id: string;
  label: string;
}

interface AICommandInputProps {
    initialCommands?: CommandOption[];
    initialModes?: ModeOption[];
    onSubmit: (value: string, command?: string, mode?: string | null, files?: { id: number }[]) => void;
    placeholder?: string;
}

const AICommandInput: FC<AICommandInputProps> = ({
    initialCommands = [
        { command: "@yt", icon: <Youtube size={18} />, label: "YouTube" },
        { command: "@spotify", icon: <Mic size={18} />, label: "Spotify" },
        { command: "@code", icon: <Code size={18} />, label: "Code Block" },
        { command: "@gemini", icon: <Sparkles size={18} />, label: "Ask Gemini" },
        { command: "@addfile", icon: <File size={18} />, label: "Add File" },
    ],
    initialModes = [
        { id: "deep-think", label: "Deep Think" },
        { id: "create-image", label: "Create Image" },
        { id: "fast", label: "Fast" },
    ],
    onSubmit,
    placeholder = "Type your message or a command...",
}) => {
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [files, setFiles] = useState<{ id: number }[]>([]);
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

  const detectedCommand = initialCommands.find((item) =>
    value.includes(item.command)
  );

  const handleSubmitInternal = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim() && files.length === 0) return;
    onSubmit(value, detectedCommand?.command, activeMode, files);
    setValue("");
    setActiveMode(null);
    setFiles([]);
  };

  const handleCommandSelect = (command: string) => {
    if (command === "@addfile") {
      setFiles((prev) => [...prev, { id: Date.now() }]);
      setIsMenuOpen(false);
    } else {
      setValue((prev) => `${command} ${prev.startsWith('@') ? prev.substring(prev.indexOf(' ') + 1) : prev}`);
      setIsMenuOpen(false);
      textareaRef.current?.focus();
    }
  };

  const handleModeToggle = (modeId: string) => {
    setActiveMode(activeMode === modeId ? null : modeId);
  };

  const removeFile = (id: number) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const renderFiles = () => (
    <div className="flex flex-wrap gap-2 mb-2 px-1">
      {files.map((file, index) => (
        <motion.div
          key={file.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          layout
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-600 bg-slate-700/50 text-slate-300 shadow-sm text-xs font-medium"
        >
          <File size={14} className="text-sky-400 flex-shrink-0" />
          <span className="truncate max-w-[100px]">File {index + 1}</span>
          <button
            type="button"
            onClick={() => removeFile(file.id)}
            className="ml-1 rounded-full p-0.5 text-slate-400 hover:bg-slate-600 hover:text-red-400 transition-colors"
            aria-label={`Remove File ${index + 1}`}
          >
            <X size={12} />
          </button>
        </motion.div>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmitInternal} className="w-full">
      <div className="relative">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-2">
          {files.length > 0 && renderFiles()}
          <div className="flex flex-col rounded-md border border-slate-700 bg-slate-800/50 p-2 focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-300">
            <div className="flex w-full items-start">
              <textarea
                ref={textareaRef}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitInternal(e);
                  }
                }}
                rows={1}
                className="w-full max-h-48 resize-none bg-transparent px-2 pt-2 text-slate-200 placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                disabled={!value.trim() && files.length === 0}
                className="ml-2 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-600 transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:opacity-50"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="flex justify-start items-center mt-2 gap-2 pl-1">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setIsMenuOpen((prev) => !prev); }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-700 hover:text-slate-200 transition-colors"
                aria-label="Open command menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              {initialModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => handleModeToggle(mode.id)}
                  className={`h-8 px-3 rounded-lg border transition-all duration-200 text-xs font-medium ${
                    activeMode === mode.id
                      ? 'border-sky-500 bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/50'
                      : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute bottom-full left-0 mb-2 w-full max-w-xs rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-lg z-10"
              >
                <p className="px-2 py-1 text-xs text-slate-500">Commands</p>
                <ul>
                  {initialCommands.map(({ command, icon, label }) => (
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {detectedCommand && !isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 flex items-center gap-2 px-2 text-sm text-slate-400"
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 flex-shrink-0"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            <span>
              Using command:{" "}
              <span className="font-semibold text-slate-200">
                {detectedCommand.command}
              </span>
            </span>
          </motion.div>
        )}
      </div>
    </form>
  );
};

// --- Preview Component ---
export const AICommandInputPreview = () => {
    const handleSubmit = (value: string, command?: string, mode?: string | null, files?: {id: number}[]) => {
        alert(`Submitted: ${value}\nCommand: ${command || 'None'}\nMode: ${mode || 'None'}\nFiles: ${files?.length || 0}`);
    }
    return (
        <div className="w-full max-w-3xl p-4">
            <AICommandInput onSubmit={handleSubmit} />
        </div>
    );
}

// --- Code String ---
export const aiCommandInputCodeString = `
'use client';

import React, { useState, useRef, useEffect, FormEvent, FC } from "react";
import { Youtube, Sparkles, Code, Mic, File, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Interface definitions... (CommandOption, ModeOption, AICommandInputProps)

const AICommandInput: FC<AICommandInputProps> = ({ /* Props... */ }) => {
  // State and Refs...
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [files, setFiles] = useState<{ id: number }[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Effects... (useEffect hooks)

  // Handlers... (handleSubmitInternal, handleCommandSelect, handleModeToggle, removeFile)

  // Render function for files
  const renderFiles = () => (
    // JSX for file list
    <div className="flex flex-wrap gap-2 mb-2 px-1">
      {/* ... mapping over files ... */}
    </div>
  );

  return (
    <form onSubmit={handleSubmitInternal} className="w-full">
      <div className="relative">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-2">
          {files.length > 0 && renderFiles()}
          <div className="flex flex-col rounded-md border border-slate-700 bg-slate-800/50 p-2 focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-300">
             {/* Textarea and Send Button */}
            <div className="flex w-full items-start">
               {/* ... textarea ... */}
               {/* ... send button ... */}
            </div>
             {/* Action Buttons (Add Command, Modes) */}
            <div className="flex justify-start items-center mt-2 gap-2 pl-1">
               {/* ... add command button ... */}
               {/* ... mode buttons ... */}
            </div>
          </div>

          {/* Command Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div /* ... menu attributes ... */ >
                 {/* ... menu content ... */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detected Command Hint */}
        {detectedCommand && !isMenuOpen && (
          <motion.div /* ... hint attributes ... */ >
             {/* ... hint content ... */}
          </motion.div>
        )}
      </div>
    </form>
  );
};

export default AICommandInput;
`;



