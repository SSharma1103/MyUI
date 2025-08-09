"use client"

import ComponentShowcasePage from "@/app/components/component-showcase";
import { RevealEffectCard } from "@/app/components/reveal001";
import { revealCardCodeString } from "@/app/components/reveal001";
import { TextRevealEffect } from "@/app/components/text001";
import { textRevealCodeString } from "@/app/components/text001";
import { SpotlightCard } from "@/app/components/SpotlightCard";
import { spotlightCardCodeString } from "@/app/components/SpotlightCard";
import Link from "next/link";
import { ArrowRightIcon } from '@/app/components/icons';



export default function RevealEffectPage() {
  return (
    <div>
    <ComponentShowcasePage
      title="Text Reveal Effect"
      description="An interactive effect where a colorful gradient text is revealed by a spotlight that follows the cursor."
      tags={['Effect', 'Animation', 'Hover', 'Text']}
      preview={<TextRevealEffect />}
      codeString={textRevealCodeString}
    />
    <div className="h-5"></div>
    <ComponentShowcasePage
      title="Spotlight Card"
      description="An interactive card with a spotlight effect that follows the user's cursor, illuminating the content."
      tags={['Effect', 'Animation', 'Hover', 'Interactive']}
      preview={<SpotlightCard />}
      codeString={spotlightCardCodeString}
    />
    <div className="h-5"></div>
    <ComponentShowcasePage
      title="Slide to Reveal Effect"
      description="A card with a starry background where a panel slides in on hover to reveal hidden content."
      tags={['Effect', 'Animation', 'Hover']}
      preview={<RevealEffectCard />}
      codeString={revealCardCodeString}
    />
    <div className="flex justify-end mt-12">
        <Link 
          href="/docs/faq" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Faq
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
    
  );
}
