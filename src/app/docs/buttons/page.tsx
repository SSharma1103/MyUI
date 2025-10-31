"use client";

import ComponentShowcasePage from "@/app/components/component-showcase";
import React from "react";
import Link from "next/link";
import ButtonPreview from "@/app/components/button001";
import { buttonCodeString } from "@/app/components/button001";
import { buttonCodeString2 } from "@/app/components/button002";
import AnimatedButton from "@/app/components/button002";
import AnimatedButton3 from "@/app/components/button003";
import { buttonCodeString3 } from "@/app/components/button003";
import { ArrowRightIcon } from "@/app/components/icons";
import { NeoButtonPreview } from "@/app/components/button004";
import { neoButtonCodeString } from "@/app/components/button004";

export default function ButtonComponentPage() {
  return (
    <div>
      <ComponentShowcasePage
        title="Animated Button"
        description="A button with a swipe animation on hover, providing a modern and interactive feel."
        tags={["Core", "Interactive", "Animation"]}
        preview={<ButtonPreview />}
        codeString={buttonCodeString}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Animated Booking Button"
        description="A button with a fade transition on hover, revealing an emoji."
        tags={["Core", "Interactive", "Animation"]}
        preview={<AnimatedButton />}
        codeString={buttonCodeString2}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Delete Button"
        description="A confirmation button with a swipe-to-reveal icon, ideal for destructive actions."
        tags={["Destructive", "Interactive", "Animation"]}
        preview={<AnimatedButton3 />}
        codeString={buttonCodeString3}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Neobrutalism Buttons"
        description="A set of high-contrast, neobrutalist-style buttons with thick borders, sharp shadows, and a 'press' animation on click."
        tags={["Neobrutalism", "Interactive", "Animation", "Button"]}
        preview={<NeoButtonPreview />}
        codeString={neoButtonCodeString}
      />

      <div className="flex justify-end mt-12">
        <Link
          href="/docs/loaders"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Loaders
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
