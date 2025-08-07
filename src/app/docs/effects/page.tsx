"use client"

import ComponentShowcasePage from "@/app/components/component-showcase";
import { RevealEffectCard } from "@/app/components/reval001";
import { revealCardCodeString } from "@/app/components/reval001";
import { TextRevealEffect } from "@/app/components/text001";
import { textRevealCodeString } from "@/app/components/text001";
import { SpotlightCard } from "@/app/components/SpotlightCard";
import { spotlightCardCodeString } from "@/app/components/SpotlightCard";



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
    <ComponentShowcasePage
      title="Slide to Reveal Effect"
      description="A card with a starry background where a panel slides in on hover to reveal hidden content."
      tags={['Effect', 'Animation', 'Hover']}
      preview={<RevealEffectCard />}
      codeString={revealCardCodeString}
    />
    <div className="h-5"></div>
    </div>
  );
}
