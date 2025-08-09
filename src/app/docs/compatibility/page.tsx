import Link from "next/link";
import { ArrowRightIcon } from "../buttons/page";


const InfoSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl font-semibold border-b border-slate-700 pb-2 mb-4">
      {title}
    </h2>
    <div className="space-y-4 text-slate-300">
      {children}
    </div>
  </div>
);

// A simple component for displaying a list item with a status indicator.
const CompatibilityItem = ({ name, status }: { name: string, status: 'Supported' | 'Partial' | 'Not Supported' }) => {
  const statusStyles = {
    Supported: 'bg-green-500/20 text-green-400',
    Partial: 'bg-yellow-500/20 text-yellow-400',
    'Not Supported': 'bg-red-500/20 text-red-400',
  };

  return (
    <li className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
      <span className="font-medium">{name}</span>
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
        {status}
      </span>
    </li>
  );
};

export default function CompatibilityPage() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Compatibility</h1>
      <p className="text-lg text-slate-400 mb-8">
        MyUI Library is designed to work seamlessly across modern web platforms. Here’s a detailed breakdown of our compatibility targets and support levels.
      </p>

      <div className="space-y-12">
        <InfoSection title="Browser Support">
          <p>
            We support the latest stable versions of all major browsers. We do not support Internet Explorer 11. Our components rely on modern CSS features like Flexbox and Grid, which are well-supported in the browsers listed below.
          </p>
          <ul className="space-y-3">
            <CompatibilityItem name="Google Chrome (v127+)" status="Supported" />
            <CompatibilityItem name="Mozilla Firefox (v128+)" status="Supported" />
            <CompatibilityItem name="Microsoft Edge (v127+)" status="Supported" />
            <CompatibilityItem name="Safari (v18+)" status="Supported" />
          </ul>
        </InfoSection>

        <InfoSection title="Framework Versions">
          <p>
            Our library is built on top of specific versions of Next.js and React. While it may work with older versions, we only guarantee full functionality and support for the following:
          </p>
          <ul className="space-y-3">
            <CompatibilityItem name="Next.js (v14+ App Router)" status="Supported" />
            <CompatibilityItem name="Next.js (Pages Router)" status="Partial" />
            <CompatibilityItem name="React (v18.2+)" status="Supported" />
            <CompatibilityItem name="React 17" status="Not Supported" />
          </ul>
           <p className="text-sm text-slate-400 mt-4">
            <strong>Note on Pages Router:</strong> While most components are compatible, some hooks optimized for the App Router (like `usePathname`) may need to be replaced with equivalents from `next/router`.
          </p>
        </InfoSection>

        <InfoSection title="Styling Engine">
          <p>
            The styling is deeply integrated with Tailwind CSS. Using this library without Tailwind is not a supported use case.
          </p>
           <ul className="space-y-3">
            <CompatibilityItem name="Tailwind CSS (v3.4+)" status="Supported" />
          </ul>
        </InfoSection>
      </div>
      <div className="flex justify-end mt-12">
        <Link 
          href="/docs/buttons" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: buttons
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}