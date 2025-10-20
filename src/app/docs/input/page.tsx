'use client';
'use client';

import ComponentShowcasePage from "@/app/components/component-showcase";
import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";

// --- Reusable MultiSelectOption Sub-Component ---
interface MultiSelectOptionProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const MultiSelectOption: FC<MultiSelectOptionProps> = ({ id, label, isSelected, onSelect }) => {
  return (
    <motion.div
      className="w-full"
      animate={{ scale: isSelected ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <label
        htmlFor={id}
        className={`
          flex items-center w-full p-4 rounded-lg border transition-colors duration-200 cursor-pointer
          ${isSelected
            ? 'bg-sky-500/10 border-sky-500 text-white'
            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600'
          }
        `}
      >
        <input
          type="checkbox"
          id={id}
          checked={isSelected}
          onChange={() => onSelect(id)}
          className="hidden"
        />
        <div className={`
          w-5 h-5 mr-4 rounded border-2 flex-shrink-0 flex items-center justify-center
          ${isSelected ? 'bg-sky-500 border-sky-400' : 'border-slate-600'}
        `}>
          {isSelected && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span className="font-medium">{label}</span>
      </label>
    </motion.div>
  );
};


// --- Preview Component to manage state ---
const MultiSelectPreview = () => {
    const optionsData = [
        { id: 'frontend', label: 'Frontend Development' },
        { id: 'backend', label: 'Backend Development' },
        { id: 'both', label: 'Both' },
        { id: 'none', label: 'None' },
    ];

    const [selectedOptions, setSelectedOptions] = useState(['both']);

    const handleSelect = (optionId: string) => {
        setSelectedOptions(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    return (
        <div className="w-full max-w-md space-y-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-white">Which areas of development have you worked on?*</h2>
                <p className="text-sm text-slate-400">(Select all that apply)</p>
            </div>
            {optionsData.map(option => (
                <MultiSelectOption
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    isSelected={selectedOptions.includes(option.id)}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
};

// --- Code String for the Component ---
const multiSelectCodeString = `
'use client';

import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';

interface MultiSelectOptionProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const MultiSelectOption: FC<MultiSelectOptionProps> = ({ id, label, isSelected, onSelect }) => {
  return (
    <motion.div
      className="w-full"
      animate={{ scale: isSelected ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <label
        htmlFor={id}
        className={\`
          flex items-center w-full p-4 rounded-lg border transition-colors duration-200 cursor-pointer
          \${isSelected
            ? 'bg-sky-500/10 border-sky-500 text-white'
            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600'
          }
        \`}
      >
        <input
          type="checkbox"
          id={id}
          checked={isSelected}
          onChange={() => onSelect(id)}
          className="hidden"
        />
        <div className={\`
          w-5 h-5 mr-4 rounded border-2 flex-shrink-0 flex items-center justify-center
          \${isSelected ? 'bg-sky-500 border-sky-400' : 'border-slate-600'}
        \`}>
          {isSelected && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span className="font-medium">{label}</span>
      </label>
    </motion.div>
  );
};

// Example of how to use the component
export default function YourMultiSelectComponent() {
    const optionsData = [
        { id: 'frontend', label: 'Frontend Development' },
        { id: 'backend', label: 'Backend Development' },
        { id: 'both', label: 'Both' },
        { id: 'none', label: 'None' },
    ];

    const [selectedOptions, setSelectedOptions] = useState(['both']);

    const handleSelect = (optionId: string) => {
        setSelectedOptions(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    return (
        <div className="w-full max-w-md space-y-4">
            {optionsData.map(option => (
                <MultiSelectOption
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    isSelected={selectedOptions.includes(option.id)}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
}
`; // <-- THE FIX: Properly closed the template literal here

// --- Final Page Component ---
export default function MultiSelectComponentPage() {
  return (
    <div>
    <ComponentShowcasePage
      title="Multi-Select"
      description="An accessible, animated multi-select component. Selected options enlarge slightly for better visual feedback."
      tags={['Form', 'Interactive', 'Animation']}
      preview={<MultiSelectPreview />}
      codeString={multiSelectCodeString}
    />
    <div className="flex justify-end mt-12">
        <Link
          href="/docs/agenticUI"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: AgenticUI
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
