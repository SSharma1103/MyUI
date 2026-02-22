"use client";

import React from "react";
import { cn } from "./utils";

interface Card001Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const StandardCard = ({
  title = "Standard Card",
  description = "This is a simple and clean card for displaying static content. Its perfect for articles, profiles, or information blocks.",
  className,
  ...props
}: Card001Props) => {
  return (
    <div
      className={cn(
        "w-full max-w-sm p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg",
        className
      )}
      {...props}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default StandardCard;
