"use client";

import { useState } from "react";
import type { FC } from "react";
import { Briefcase } from "lucide-react";
import React from 'react';
import { cn } from './utils';

interface ExperienceItem {
  title: string;
  date: string;
  image: string;
  summaryPoints: string[];
  detailedPoints: string[];
}

const defaultExperienceData: ExperienceItem[] = [
  {
    title: "Senior Developer @ Example Inc.",
    date: "2023 - Present",
    image:
      "https://placehold.co/400x400/0B1120/38BDF8?text=ProjectA",
    summaryPoints: [
      "Led the development of a new web platform.",
      "Mentored junior developers and conducted code reviews.",
    ],
    detailedPoints: [
      "Architected a scalable frontend using Next.js and TypeScript.",
      "Implemented a full CI/CD pipeline for automated testing and deployment.",
      "Reduced API response times by 30% through query optimization.",
    ],
  },
  {
    title: "Mid-Level Engineer @ Tech Solutions",
    date: "2020 - 2023",
    image:
      "https://placehold.co/400x400/0B1120/38BDF8?text=ProjectB",
    summaryPoints: [
      "Contributed to open-source UI component libraries.",
      "Developed and maintained client-facing applications.",
    ],
    detailedPoints: [
      "Refactored a legacy codebase to use modern React hooks and contexts.",
      "Integrated Framer Motion to improve user experience with fluid animations.",
      "Worked closely with designers to ensure pixel-perfect implementation.",
    ],
  },
];

interface ExperienceCardProps {
  item: ExperienceItem;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 transition-all duration-300 ease-in-out hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-800 p-2 rounded-lg">
              <Briefcase className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.date}</p>
            </div>
          </div>
          <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-300 text-sm">
            {item.summaryPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block">
          <img
            src={item.image}
            alt={item.title}
            className="w-28 h-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isHovered
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-5 space-y-2 text-slate-400 border-t border-slate-700 pt-4 text-sm">
            {item.detailedPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface ExperienceSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  data?: ExperienceItem[];
}

export const ExperienceSectionPreview = ({
  title = "Experience",
  data = defaultExperienceData,
  className,
  ...props
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className={cn("w-full max-w-3xl mx-auto", className)} {...props}>
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 gap-6">
        {data.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSectionPreview;