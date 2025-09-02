import ComponentShowcasePage from "@/app/components/component-showcase";
import { timelineCodeString } from "@/app/components/timeline_showcase";
import { ScrollTimeline } from "@/app/components/timeline_showcase";
import { ArrowRightIcon } from "@/app/components/icons";
import Link from "next/link";


export default function TimelinePage() {
  return (
    <div>
    <ComponentShowcasePage
      title="Scroll-Driven Timeline"
      description="An animated timeline that reveals stages of a journey as the user scrolls down the page."
      tags={['Animation', 'Scroll', 'Interactive']}
      preview={
        <ScrollTimeline/>
      }
      codeString={timelineCodeString}
    />
    <div className="flex justify-end mt-12">
        <Link 
          href="/docs/input" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Input
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}