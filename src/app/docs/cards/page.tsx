"use client";

import ComponentShowcasePage from "@/app/components/component-showcase";
import { StandardCard } from "@/app/components/card001";
import { cardCodeString } from "@/app/components/card001";
import { InteractiveCard } from "@/app/components/card002";
import { CardCodeString2 } from "@/app/components/card002";
import { ProfileCard } from "@/app/components/card003";
import { profilecardcode } from "@/app/components/card003";
import { ProductSaleCard } from "@/app/components/card004";
import { productCardCodeString } from "@/app/components/card004";
import { SkillsSection } from "@/app/components/card005";
import { skillsCodeString } from "@/app/components/card005";
import { HeatmapGrid } from "@/app/components/heatmap";
import { heatmapCodeString } from "@/app/components/heatmap";
import { CodeSnippet } from "@/app/components/card006";
import { codeSnippetCodeString } from "@/app/components/card006";
import { ExperienceSectionPreview } from "@/app/components/card007";
import { experienceCodeString } from "@/app/components/card007";
import NeoCodeSnippet from "@/app/components/card008";
import {neoCodeSnippetCodeString} from "@/app/components/card008";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";

type HeatmapData = {
    [date: string]: number;
};

const generateDummyData = (): HeatmapData => {
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

export default function CardComponentPage() {
  const dummyData = generateDummyData();
  return (
    <div>
      <ComponentShowcasePage
      title="Hover-Reveal Experience Card"
      description="A section to display professional experience. Cards reveal more details on hover with a smooth grid-based animation."
      tags={['Section', 'Card', 'Hover Effect', 'Layout']}
      preview={<ExperienceSectionPreview />}
      codeString={experienceCodeString}
    />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Card"
        description="Versatile card components for displaying content. Includes a standard static card and an interactive card with hover effects."
        tags={["Layout", "Content"]}
        preview={
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <StandardCard />
          </div>
        }
        codeString={cardCodeString}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="InteractiveCard"
        description="Versatile card components for displaying content. Includes a standard static card and an interactive card with hover effects."
        tags={["Layout", "Content", "Interactive"]}
        preview={
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <InteractiveCard></InteractiveCard>
          </div>
        }
        codeString={CardCodeString2}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
      title="Contribution Heatmap card"
      description="A component to visualize data over the past year, similar to a GitHub contribution graph."
      tags={['Data Viz', 'Chart', 'Calendar']}
      preview={<HeatmapGrid data={dummyData} />}
      codeString={heatmapCodeString}
    />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Profile Card"
        description="Versatile card components for displaying content. Includes a standard static card and an interactive card with hover effects."
        tags={["Layout", "Content", "Interactive"]}
        preview={
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <ProfileCard />
          </div>
        }
        codeString={profilecardcode}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Product Sale Card"
        description="An animated card for showcasing products on sale, with a hover effect and interactive 'Add to Cart' button."
        tags={["eCommerce", "Card", "Animation"]}
        preview={<ProductSaleCard />}
        codeString={productCardCodeString}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
      title="Skills Section"
      description="A section to display skills or technologies, categorized into interactive spotlight cards."
      tags={['Section', 'Layout', 'Interactive']}
      preview={<SkillsSection />}
      codeString={skillsCodeString}
    />
    <div className="h-5"></div>
    <ComponentShowcasePage
      title="Code Snippet"
      description="A read-only component for displaying formatted and highlighted code blocks, styled like a macOS window."
      tags={['Display', 'Utility', 'Code']}
      preview={<CodeSnippet />}
      codeString={codeSnippetCodeString}
    />
    <div className="h-5"></div>
    <ComponentShowcasePage
      title="Neobrutalism Code Snippet"
      description="A retro, neobrutalist-style component for displaying highlighted code blocks with a sharp, chunky border."
      tags={['Display', 'Utility', 'Code', 'Neobrutalism']}
      preview={<NeoCodeSnippet />}
      codeString={neoCodeSnippetCodeString}/>

      <div className="flex justify-end mt-12">
        <Link
          href="/docs/effects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Effects
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
