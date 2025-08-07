import React from 'react';

// Reusable component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4 border-b border-slate-700 pb-2">{children}</h2>
);

// Reusable component for section descriptions
const SectionDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-slate-400 mb-6">{children}</p>
);

// Reusable component for list items
const ListItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <li className="mb-4">
    <strong className="text-white">{title}:</strong>
    <span className="text-slate-300 ml-2">{children}</span>
  </li>
);

// A simple right arrow icon for the button
const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.78125 3.125L14.375 8L8.78125 12.875" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.625 8H14.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export default function IntroductionPage() {
  return (
    <div className="text-white max-w-4xl">
      <h1 className="text-5xl font-extrabold tracking-tighter mb-4">Rethinking UI Development</h1>
      <SectionDescription>
        MyUI provides a curated collection of beautifully animated components, built with Framer Motion and styled with Tailwind CSS. It's designed for you to own and adapt.
      </SectionDescription>

      <div className="text-lg text-slate-300 leading-relaxed">
        <p className="mb-6">
          This is not a component library in the traditional sense. It s a starting point for your own.
        </p>
        <p>
          Think about the limitations of typical UI libraries. You install a package, and you're bound by its styles and APIs. Customizing a component often means fighting against its design, leading to complex overrides and workarounds. MyUI solves this by giving you the code directly.
        </p>
      </div>

      <SectionTitle>Our Philosophy</SectionTitle>
      <ul className="list-none p-0 mt-6">
        <ListItem title="Transparent by Design">
          You get the full source code for every component. No black boxes.
        </ListItem>
        <ListItem title="Built for Integration">
          Components are designed to be composed and easily integrated with your existing projects.
        </ListItem>
        <ListItem title="Natively Animated">
          Motion is a core feature, not an afterthought. Every component is brought to life with Framer Motion.
        </ListItem>
        <ListItem title="Styled for Impact">
          Leveraging Tailwind CSS for a clean, modern aesthetic that you can instantly customize.
        </ListItem>
      </ul>

      <SectionTitle>Transparent by Design</SectionTitle>
      <SectionDescription>
        With MyUI, the component code lives in your project. This gives you complete control to modify and extend it to meet your exact needs.
      </SectionDescription>
      <ul className="list-disc pl-5 space-y-2 text-slate-300">
        <li><strong>Total Control:</strong> See exactly how each component is structured and styled, from the React code to the utility classes.</li>
        <li><strong>Limitless Customization:</strong> Directly edit any part of a component to match your unique design system.</li>
        <li><strong>Master the Animation:</strong> Fine-tune the Framer Motion props to create the perfect interaction and feel.</li>
      </ul>

      <SectionTitle>Built for Integration</SectionTitle>
      <SectionDescription>
        Each component in MyUI is a self-contained, composable unit. They are built with standard web technologies, making them predictable and easy to combine with other UI elements. You're not locked into a rigid system.
      </SectionDescription>
      
      <SectionTitle>Styled for Impact</SectionTitle>
      <SectionDescription>
        MyUI components are designed to be visually appealing right out of the box. The use of Tailwind CSS ensures a consistent and modern design system that you can easily adapt.
      </SectionDescription>
      <ul className="list-disc pl-5 space-y-2 text-slate-300">
        <li><strong>Instant Polish:</strong> Your UI will have a clean, professional look with minimal effort.</li>
        <li><strong>Cohesive System:</strong> All components are designed to work together seamlessly.</li>
        <li><strong>Effortless Theming:</strong> Customizing colors, fonts, and spacing is as simple as editing your Tailwind configuration.</li>
      </ul>

      <div className="mt-16 flex justify-end">
        <a href="/docs/installation" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors">
          Installation
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}