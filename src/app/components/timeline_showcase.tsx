'use client';

import React, { FC, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const experiences = [
  {
    title: "Phase One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Phase Two",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Phase Three",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

interface ExperienceCardProps {
  title: string;
  description: string;
  opacity: MotionValue<number>;
  y: MotionValue<string>;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ title, description, opacity, y }) => (
  <motion.div style={{ opacity, y }} className="w-full md:w-1/3 p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </motion.div>
);

interface CheckpointProps {
    color: MotionValue<string>;
}

const Checkpoint: FC<CheckpointProps> = ({ color }) => (
    <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-sky-400"
        style={{ backgroundColor: color }}
    />
);

export const ScrollTimeline: FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const cardOpacities = [card1Opacity, card2Opacity, card3Opacity];
  const cardY = useTransform(scrollYProgress, [0, 1], ['20px', '0px']);

  const checkpoint1Color = useTransform(scrollYProgress, [0, 0.01], ['#1e293b', '#38bdf8']);
  const checkpoint2Color = useTransform(scrollYProgress, [0.49, 0.5], ['#1e293b', '#38bdf8']);
  const checkpoint3Color = useTransform(scrollYProgress, [0.99, 1], ['#1e293b', '#38bdf8']);

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-16 text-center">Project Timeline</h2>
        
        <div className="w-full max-w-4xl relative mb-8 md:mb-16">
            <div className="h-1 bg-slate-800 rounded-full">
                <motion.div style={{ width }} className="h-full bg-sky-400 rounded-full shadow-[0_0_10px_theme(colors.sky.400)]"></motion.div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative w-full h-full">
                    <Checkpoint color={checkpoint1Color} />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full">
                        <Checkpoint color={checkpoint2Color} />
                    </div>
                    <div className="absolute right-0 top-0 h-full">
                        <Checkpoint color={checkpoint3Color} />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={exp.title}
              title={exp.title}
              description={exp.description}
              opacity={cardOpacities[index]}
              y={cardY}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const timelineCodeString = `
'use client';

import React, { FC, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const experiences = [
  {
    title: "Phase One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Phase Two",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Phase Three",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

interface ExperienceCardProps {
  title: string;
  description: string;
  opacity: MotionValue<number>;
  y: MotionValue<string>;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ title, description, opacity, y }) => (
  <motion.div style={{ opacity, y }} className="w-full md:w-1/3 p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </motion.div>
);

interface CheckpointProps {
    color: MotionValue<string>;
}

const Checkpoint: FC<CheckpointProps> = ({ color }) => (
    <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-sky-400"
        style={{ backgroundColor: color }}
    />
);

const ScrollTimeline: FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const cardOpacities = [card1Opacity, card2Opacity, card3Opacity];
  const cardY = useTransform(scrollYProgress, [0, 1], ['20px', '0px']);

  const checkpoint1Color = useTransform(scrollYProgress, [0, 0.01], ['#1e293b', '#38bdf8']);
  const checkpoint2Color = useTransform(scrollYProgress, [0.49, 0.5], ['#1e293b', '#38bdf8']);
  const checkpoint3Color = useTransform(scrollYProgress, [0.99, 1], ['#1e293b', '#38bdf8']);

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-16 text-center">Project Timeline</h2>
        <div className="w-full max-w-4xl relative mb-8 md:mb-16">
            <div className="h-1 bg-slate-800 rounded-full">
                <motion.div style={{ width }} className="h-full bg-sky-400 rounded-full shadow-[0_0_10px_theme(colors.sky.400)]"></motion.div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative w-full h-full">
                    <Checkpoint color={checkpoint1Color} />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full"><Checkpoint color={checkpoint2Color} /></div>
                    <div className="absolute right-0 top-0 h-full"><Checkpoint color={checkpoint3Color} /></div>
                </div>
            </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} title={exp.title} description={exp.description} opacity={cardOpacities[index]} y={cardY} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollTimeline;
`;


