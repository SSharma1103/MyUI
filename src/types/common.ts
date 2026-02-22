import type { MotionValue } from "framer-motion";

/** Represents an x/y coordinate, used across cursor & spotlight components. */
export interface MousePosition {
  x: number;
  y: number;
}

/** Spring physics config reused in many motion components. */
export interface SpringConfig {
  damping: number;
  stiffness: number;
  mass: number;
}

/** Framer Motion animation variant map (named states → target values). */
export type AnimationVariants = Record<
  string,
  Record<string, string | number | number[]>
>;

/** Generic wrapper for a framer-motion MotionValue prop. */
export type MotionValueProp<T> = MotionValue<T>;
