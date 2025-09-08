'use client';


import React, { FC } from 'react';

// --- 1. Define the component to be previewed ---

// Define the type for the data prop, a dictionary of date strings to numbers.
type HeatmapData = {
    [date: string]: number;
};

interface HeatmapGridProps {
    data: HeatmapData;
}

// Determines the cell color based on the contribution count/level.
const getColor = (level: number) => {
    if (level === 0) return 'bg-slate-800';
    if (level <= 2) return 'bg-sky-900';
    if (level <= 4) return 'bg-sky-700';
    if (level <= 6) return 'bg-sky-500';
    return 'bg-sky-400';
};

export const HeatmapGrid: FC<HeatmapGridProps> = ({ data }) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);
    startDate.setDate(startDate.getDate() + 1);

    const dates = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d));
    }

    const weeks: (Date | null)[][] = [];
    let week: (Date | null)[] = Array(7).fill(null);
    
    const firstDayOfWeek = dates[0].getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
        week[i] = null;
    }

    dates.forEach(date => {
        const dayOfWeek = date.getDay();
        week[dayOfWeek] = date;
        if (dayOfWeek === 6) {
            weeks.push(week);
            week = Array(7).fill(null);
        }
    });

    if (week.some(day => day !== null)) {
        weeks.push(week);
    }
    
    const monthLabels = weeks.reduce((acc, week, i) => {
        const firstDayOfWeek = week.find(day => day);
        if (firstDayOfWeek && firstDayOfWeek.getDate() <= 7) {
            const monthName = firstDayOfWeek.toLocaleString('default', { month: 'short' });
            if (!acc.some(m => m.label === monthName && Math.abs(m.index - i) < 4)) {
                 acc.push({ label: monthName, index: i });
            }
        }
        return acc;
    }, [] as { label: string; index: number }[]);


    return (
        <div className="inline-flex flex-col gap-2 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <div className="grid grid-rows-1 -mb-1" style={{ gridTemplateColumns: `repeat(${weeks.length}, 16px)`, paddingLeft: '36px' }}>
                {monthLabels.map(({ label, index }) => (
                     <div key={`${label}-${index}`} className="text-xs text-slate-500" style={{ gridColumn: `${index + 1} / span 4` }}>
                         {label}
                    </div>
                ))}
            </div>

            <div className="flex gap-3">
                <div className="grid grid-cols-1 grid-rows-7 gap-1 text-xs text-slate-500 mt-[-2px] text-right">
                    <div className="w-6"></div>
                    <div className="w-6">Mon</div>
                    <div className="w-6"></div>
                    <div className="w-6">Wed</div>
                    <div className="w-6"></div>
                    <div className="w-6">Fri</div>
                    <div className="w-6"></div>
                </div>

                <div className="grid grid-flow-col grid-rows-7 gap-1">
                    {weeks.flat().map((date, index) => {
                        if (!date) {
                            return <div key={`pad-${index}`} className="w-3.5 h-3.5" />;
                        }
                        const dateString = date.toISOString().split('T')[0];
                        const level = data[dateString] || 0;
                        return (
                            <div key={dateString} className="group relative">
                                <div className={`w-3.5 h-3.5 ${getColor(level)} rounded-sm`} />
                                <div className="hidden group-hover:flex absolute z-10 -top-9 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-slate-950 text-white text-xs rounded-md shadow-lg border border-slate-700">
                                    {level === 0 ? 'No' : level} contributions on {date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --- Function to generate dummy data ---
export const generateDummyData = (): HeatmapData => {
    const data: HeatmapData = {};
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        // Generate a random contribution level (0-8)
        data[dateString] = Math.floor(Math.random() * 9);
    }
    return data;
};

// --- 2. Define the code string for the component ---
export const heatmapCodeString = `
'use client';

import React, { FC } from 'react';

// Define the type for the data prop
type HeatmapData = {
    [date: string]: number;
};

interface HeatmapGridProps {
    data: HeatmapData;
}

// Determines the cell color based on the contribution count/level.
const getColor = (level: number) => {
    if (level === 0) return 'bg-slate-800';
    if (level <= 2) return 'bg-sky-900';
    if (level <= 4) return 'bg-sky-700';
    if (level <= 6) return 'bg-sky-500';
    return 'bg-sky-400';
};

const HeatmapGrid: FC<HeatmapGridProps> = ({ data }) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);
    startDate.setDate(startDate.getDate() + 1);

    const dates = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d));
    }

    const weeks: (Date | null)[][] = [];
    let week: (Date | null)[] = Array(7).fill(null);
    
    const firstDayOfWeek = dates[0].getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
        week[i] = null;
    }

    dates.forEach(date => {
        const dayOfWeek = date.getDay();
        week[dayOfWeek] = date;
        if (dayOfWeek === 6) {
            weeks.push(week);
            week = Array(7).fill(null);
        }
    });

    if (week.some(day => day !== null)) {
        weeks.push(week);
    }
    
    const monthLabels = weeks.reduce((acc, week, i) => {
        const firstDayOfWeek = week.find(day => day);
        if (firstDayOfWeek && firstDayOfWeek.getDate() <= 7) {
            const monthName = firstDayOfWeek.toLocaleString('default', { month: 'short' });
            if (!acc.some(m => m.label === monthName && Math.abs(m.index - i) < 4)) {
                 acc.push({ label: monthName, index: i });
            }
        }
        return acc;
    }, [] as { label: string; index: number }[]);


    return (
        <div className="inline-flex flex-col gap-2 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <div className="grid grid-rows-1 -mb-1" style={{ gridTemplateColumns: \`repeat(\${weeks.length}, 16px)\`, paddingLeft: '36px' }}>
                {monthLabels.map(({ label, index }) => (
                     <div key={\`\${label}-\${index}\`} className="text-xs text-slate-500" style={{ gridColumn: \`\${index + 1} / span 4\` }}>
                         {label}
                    </div>
                ))}
            </div>

            <div className="flex gap-3">
                <div className="grid grid-cols-1 grid-rows-7 gap-1 text-xs text-slate-500 mt-[-2px] text-right">
                    <div className="w-6"></div>
                    <div className="w-6">Mon</div>
                    <div className="w-6"></div>
                    <div className="w-6">Wed</div>
                    <div className="w-6"></div>
                    <div className="w-6">Fri</div>
                    <div className="w-6"></div>
                </div>

                <div className="grid grid-flow-col grid-rows-7 gap-1">
                    {weeks.flat().map((date, index) => {
                        if (!date) {
                            return <div key={\`pad-\${index}\`} className="w-3.5 h-3.5" />;
                        }
                        const dateString = date.toISOString().split('T')[0];
                        const level = data[dateString] || 0;
                        return (
                            <div key={dateString} className="group relative">
                                <div className={\`w-3.5 h-3.5 \${getColor(level)} rounded-sm\`} />
                                <div className="hidden group-hover:flex absolute z-10 -top-9 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-slate-950 text-white text-xs rounded-md shadow-lg border border-slate-700">
                                    {level === 0 ? 'No' : level} contributions on {date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HeatmapGrid;
`;