'use client';

import React, { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skillsData = [
  {
    category: "Category One",
    technologies: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing"],
  },
  {
    category: "Category Two",
    technologies: ["Elit", "Sed", "Do", "Eiusmod", "Tempor", "Incididunt", "Labore"],
  },
  {
    category: "Category Three",
    technologies: ["Dolore", "Magna", "Aliqua", "Ut", "Enim", "Minim", "Veniam"],
  },
];

const SkillCard: FC<{title: string, technologies: string[]}> = ({ title, technologies }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        }
    };
    return (
        <motion.div
            ref={cardRef}
            className="group relative w-full p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: useTransform(
                        [smoothMouseX, smoothMouseY],
                        ([x, y]) => `radial-gradient(circle 200px at ${x}px ${y}px, rgba(14, 165, 233, 0.15), transparent 80%)`
                    ),
                }}
            />
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const SkillsSection: FC = () => {
  return (
    <section className="w-full py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Technologies We Use</h2>
            <p className="mt-2 text-slate-400">A look at the modern stack that powers our components.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory) => (
            <SkillCard 
              key={skillCategory.category} 
              title={skillCategory.category}
              technologies={skillCategory.technologies}
            />
          ))}
        </div>
    </section>
  );
};

export const skillsCodeString = `
'use client';

import React, { FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skillsData = [
  {
    category: "Category One",
    technologies: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing"],
  },
  {
    category: "Category Two",
    technologies: ["Elit", "Sed", "Do", "Eiusmod", "Tempor", "Incididunt", "Labore"],
  },
  {
    category: "Category Three",
    technologies: ["Dolore", "Magna", "Aliqua", "Ut", "Enim", "Minim", "Veniam"],
  },
];

const SkillCard: FC<{title: string, technologies: string[]}> = ({ title, technologies }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        }
    };
    return (
        <motion.div
            ref={cardRef}
            className="group relative w-full p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: useTransform(
                        [smoothMouseX, smoothMouseY],
                        ([x, y]) => \`radial-gradient(circle 200px at \${x}px \${y}px, rgba(14, 165, 233, 0.15), transparent 80%)\`
                    ),
                }}
            />
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const SkillsSection: FC = () => {
  return (
    <section className="w-full py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Technologies We Use</h2>
            <p className="mt-2 text-slate-400">A look at the modern stack that powers our components.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory) => (
            <SkillCard 
              key={skillCategory.category} 
              title={skillCategory.category}
              technologies={skillCategory.technologies}
            />
          ))}
        </div>
    </section>
  );
};

export default SkillsSection;
`;