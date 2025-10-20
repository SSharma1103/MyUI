'use client';

import React, { useState, useRef, useEffect, type FormEvent, FC } from "react";
import { motion, AnimatePresence } from 'framer-motion';


interface CommandInputProps {
    commands: { command: string; label: string }[];
    onSubmit: (value: string, detectedCommand: string | undefined) => void;
}

 const CommandInput: FC<CommandInputProps> = ({ commands, onSubmit }) => {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const detectedCommand = commands.find((item) => value.includes(item.command));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value, detectedCommand?.command);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="flex items-start rounded-xl border border-slate-700 bg-slate-900/50 p-2 focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-300">
                <textarea
                    ref={textareaRef}
                    placeholder="Type your message or a command like '@yt ...'"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    rows={1}
                    className="w-full max-h-48 resize-none bg-transparent px-2 pt-2 text-slate-200 placeholder-slate-500 outline-none"
                />
                <motion.button
                    type="submit"
                    disabled={!value.trim()}
                    className="ml-2 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-600 transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </motion.button>
            </div>
            <AnimatePresence>
                {detectedCommand && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 flex items-center gap-2 px-2 text-sm text-slate-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                        <span>
                            Using command:{" "}
                            <span className="font-semibold text-slate-200">
                                {detectedCommand.label}
                            </span>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

export const CommandInputPreview = () => {
    const commandList = [
        { command: "@yt", label: "YouTube Search" },
        { command: "@spotify", label: "Spotify Search" },
    ];

    const handleFormSubmit = (value: string, detectedCommand: string | undefined) => {
        
        alert(`Submitted: "${value}"\nDetected Command: ${detectedCommand || 'None'}`);
    };

    return <CommandInput commands={commandList} onSubmit={handleFormSubmit} />;
};

export const commandInputCodeString = `
'use client';

import React, { useState, useRef, useEffect, type FormEvent, FC } from "react";
import { motion, AnimatePresence } from 'framer-motion';

interface CommandInputProps {
    commands: { command: string; label: string }[];
    onSubmit: (value: string, detectedCommand: string | undefined) => void;
}

const CommandInput: FC<CommandInputProps> = ({ commands, onSubmit }) => {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = \`\${textareaRef.current.scrollHeight}px\`;
        }
    }, [value]);

    const detectedCommand = commands.find((item) => value.startsWith(item.command));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value, detectedCommand?.command);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="flex items-start rounded-xl border border-slate-700 bg-slate-900/50 p-2 focus-within:ring-2 focus-within:ring-sky-500 transition-all duration-300">
                <textarea
                    ref={textareaRef}
                    placeholder="Type a command like '@yt ...'"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    rows={1}
                    className="w-full max-h-48 resize-none bg-transparent px-2 pt-2 text-slate-200 placeholder-slate-500 outline-none"
                />
                <motion.button
                    type="submit"
                    disabled={!value.trim()}
                    className="ml-2 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-600 transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </motion.button>
            </div>
            <AnimatePresence>
                {detectedCommand && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 flex items-center gap-2 px-2 text-sm text-slate-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                        <span>
                            Using command:{" "}
                            <span className="font-semibold text-slate-200">
                                {detectedCommand.label}
                            </span>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

export default CommandInput;
`;