/**
 * @file utils.ts
 * @description Shared utility functions for the Nativity UI documentation site.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes intelligently.
 * @param inputs - Class values to combine (strings, arrays, objects, etc.)
 * @returns Merged class string with Tailwind conflicts resolved.
 * @example cn("px-4", "px-6") // "px-6" - later value wins
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
