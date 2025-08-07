'use client';

// This is your main page file, e.g., /app/docs/faq/page.tsx

import React, { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable FAQ Item Component ---
interface FaqItemProps {
    question: string;
    children: React.ReactNode;
}

const FaqItem: FC<FaqItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const chevronVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    };

    return (
        <div className="border-b border-slate-800 py-4">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-slate-200 hover:text-white transition-colors"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <motion.div
                    variants={chevronVariants}
                    animate={isOpen ? 'open' : 'closed'}
                    transition={{ duration: 0.2 }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.div>
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 text-slate-400">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// --- The Final FAQ Page Component ---
export default function FaqPage() {
  const faqs = [
    {
        question: "Is this a component library?",
        answer: "Not in the traditional sense. MyUI is a collection of reusable, open-code components that you copy and paste directly into your projects. You have full ownership and control over the code, allowing for limitless customization."
    },
    {
        question: "What frameworks is this built on?",
        answer: "MyUI is built with the latest web technologies. We use Next.js for the framework, Tailwind CSS for styling, and Framer Motion for all animations to ensure a modern, performant, and beautiful result."
    },
    {
        question: "Can I use these components in a non-React project?",
        answer: "No. These components are specifically designed for the React ecosystem and leverage hooks and JSX. However, the styling principles and animation concepts can be adapted to other frameworks."
    },
    {
        question: "How do I customize a component?",
        answer: "Since you have the full source code, customization is straightforward. You can directly edit the Tailwind CSS classes, modify the Framer Motion animation props, or change the JSX structure to fit your exact needs without fighting overrides."
    }
  ];

  return (
    <div className="text-white max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold tracking-tighter mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-400 mb-8">
            Have a question? Find your answer below. If you can't find what you're looking for, feel free to reach out to our community.
        </p>

        <div className="w-full">
            {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question}>
                    <p>{faq.answer}</p>
                </FaqItem>
            ))}
        </div>
    </div>
  );
}
