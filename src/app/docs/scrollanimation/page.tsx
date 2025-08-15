import ComponentShowcasePage from "@/app/components/component-showcase";
import { timelineCodeString } from "@/app/components/timeline_showcase";
import { ScrollTimeline } from "@/app/components/timeline_showcase";


export default function TimelinePage() {
  return (
    <ComponentShowcasePage
      title="Scroll-Driven Timeline"
      description="An animated timeline that reveals stages of a journey as the user scrolls down the page."
      tags={['Animation', 'Scroll', 'Interactive']}
      preview={
        <ScrollTimeline/>
      }
      codeString={timelineCodeString}
    />
  );
}