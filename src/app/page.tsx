"use client";

import React, { FC, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CrosshairPreview from "@/app/components/cursor002";

const AnimatedButton: FC<{
  href: string;
  text: string;
  variant?: "primary" | "secondary";
}> = ({ href, text, variant = "primary" }) => {
  const textVariants = { initial: { x: 0 }, hover: { x: "-125%" } };
  const arrowVariants = { initial: { x: "125%" }, hover: { x: 0 } };
  const ArrowRightIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.43 5.92999L20.5 12L14.43 18.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const primaryClasses = "bg-sky-500 hover:bg-sky-600 text-white";
  const secondaryClasses = "bg-slate-800 hover:bg-slate-700 text-slate-300";

  return (
    <motion.a
      href={href}
      className={`relative flex items-center justify-center w-48 h-12 px-8 py-3 overflow-hidden font-semibold transition-all duration-200 rounded-lg shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        variants={textVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute ml-15"
        variants={arrowVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ArrowRightIcon />
      </motion.span>
    </motion.a>
  );
};

const SpotlightCard: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
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
            ([x, y]) =>
              `radial-gradient(circle 200px at ${x}px ${y}px, rgba(14, 165, 233, 0.15), transparent 80%)`
          ),
        }}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-slate-200 mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const HeroSection = () => (
  <section className="relative text-center py-20 md:py-32">
    <motion.div
      className="inline-block mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-sky-400">
        Version 1.0 is here!
      </span>
    </motion.div>
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      Build Your UI, Your Way.
    </motion.h1>
    <motion.p
      className="max-w-2xl mx-auto mt-6 text-lg text-slate-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      MyUI is a collection of beautifully designed, animated, and accessible
      components. Copy and paste them directly into your apps and customize to
      your heart&apos;s content.
    </motion.p>
    <motion.div
      className="mt-8 flex justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <AnimatedButton
        href="/docs/introduction"
        text="Get Started"
        variant="primary"
      />
      <AnimatedButton
        href="https://github.com/SSharma1103/MyUI"
        text="GitHub"
        variant="secondary"
      />
    </motion.div>
  </section>
);

const FeaturesSection = () => (
  <section className="p-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight">Why MyUI?</h2>
      <p className="max-w-xl mx-auto mt-2 text-slate-400">
        Our philosophy is simple: give developers control.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SpotlightCard
        title="Open Code"
        description="You get the full source code. No black boxes, no dependencies to fight. Just pure, adaptable code."
      />
      <SpotlightCard
        title="Natively Animated"
        description="Motion is a core feature. Every component is brought to life with Framer Motion for a fluid user experience."
      />
      <SpotlightCard
        title="Styled for Impact"
        description="Leveraging Tailwind CSS for a clean, modern aesthetic that you can instantly customize and theme."
      />
    </div>
  </section>
);

const ShowcaseSection = () => (
  <section className="py-16 flex flex-col items-center">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight">See it in Action</h2>
      <p className="max-w-xl mx-auto mt-2 text-slate-400">
        Experience the interactivity of our components firsthand.
      </p>
    </div>
    <div className="w-190">
      <CrosshairPreview />
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <div className="relative text-white w-full overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 h-full w-full bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#0ea5e9_100%)]"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
      </div>
    </div>
  );
}
