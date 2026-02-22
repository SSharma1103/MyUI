import type { ReactNode } from "react";
import type { MotionValue } from "framer-motion";

// ─── Landing Page ────────────────────────────────────────────

/** Props for the animated call-to-action button on the landing page. */
export interface AnimatedButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
}

/** Props for the spotlight feature card on the landing page. */
export interface SpotlightCardProps {
  title: string;
  description: string;
}

// ─── Component Showcase ──────────────────────────────────────

/** Props for the code block with copy-to-clipboard. */
export interface CodeBlockProps {
  codeString: string;
}

/** Props for the ComponentShowcasePage template. */
export interface ComponentShowcaseProps {
  title: string;
  description: string;
  tags?: string[];
  preview: ReactNode;
  codeString?: string;
}

// ─── Cards ───────────────────────────────────────────────────

/** Props for the GlassmorphismCard component. */
export interface GlassmorphismCardProps {
  isLoggedIn: boolean;
  onButtonClick: () => void;
}

// ─── Effects / Splash ────────────────────────────────────────

/** Props for the SplashScreen wrapper component. */
export interface SplashScreenProps {
  children: ReactNode;
}

// ─── Chat / Input ────────────────────────────────────────────

/** A single slash-command definition for the command input. */
export interface CommandDefinition {
  command: string;
  label: string;
}

/** Props for the CommandInput (chat001) component. */
export interface CommandInputProps {
  commands: CommandDefinition[];
  onSubmit: (value: string, detectedCommand: string | undefined) => void;
}

/** A command list item with an icon (used in chat002). */
export interface CommandListItem {
  command: string;
  icon: ReactNode;
  label: string;
}

// ─── Heatmap ─────────────────────────────────────────────────

/** Dictionary of date strings to contribution counts. */
export type HeatmapData = {
  [date: string]: number;
};

/** Props for the HeatmapGrid component. */
export interface HeatmapGridProps {
  data: HeatmapData;
}

// ─── Timeline ────────────────────────────────────────────────

/** A single experience/phase entry in the timeline. */
export interface ExperienceItem {
  title: string;
  description: string;
}

/** Props for the ExperienceCard component. */
export interface ExperienceCardProps {
  title: string;
  description: string;
  opacity: MotionValue<number>;
  y: MotionValue<string>;
}

/** Props for the Checkpoint dot on the timeline. */
export interface CheckpointProps {
  color: MotionValue<string>;
}

// ─── Reviews Page ────────────────────────────────────────────

/** Props for the StarIcon component. */
export interface StarIconProps {
  isFilled: boolean;
}

/** Props for the StarRating component. */
export interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}
