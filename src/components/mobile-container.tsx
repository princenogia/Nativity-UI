"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
  showStatusBar?: boolean;
  showHomeIndicator?: boolean;
}

/**
 * A minimal mobile-sized container for previewing components
 * that need mobile context (navbar, sidebar, bottom navigation, etc.)
 *
 * Width: 375px (iPhone-like)
 * Height: Flexible with min-height
 */
export function MobileContainer({
  children,
  className,
  showStatusBar = true,
  showHomeIndicator = true,
}: MobileContainerProps) {
  return (
    <div className="relative">
      {/* Subtle glow behind container */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-pink-500/20 blur-xl scale-105 rounded-2xl" />

      {/* Mobile-sized container */}
      <div
        className={cn(
          "relative bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl",
          className
        )}
        style={{ width: "375px", minHeight: "667px" }}
      >
        {/* Minimal status bar */}
        {showStatusBar && (
          <div className="flex justify-between items-center px-6 py-2 bg-zinc-100 dark:bg-zinc-900 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              {/* WiFi icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.33 4.67A10.9 10.9 0 0 1 22 8.33l-1.78 1.78A8.5 8.5 0 0 0 12.33 7v-2.33z" />
                <path d="M12.33 9.33a6.5 6.5 0 0 1 5.89 3.78l-1.78 1.78a4.1 4.1 0 0 0-4.11-3.23V9.33z" />
                <path d="M13.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              {/* Battery icon */}
              <svg className="w-5 h-3" fill="currentColor" viewBox="0 0 24 14">
                <rect
                  x="1"
                  y="1"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <rect
                  x="20"
                  y="4"
                  width="3"
                  height="6"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="3"
                  y="3"
                  width="14"
                  height="8"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Component content */}
        <div className="flex-1 relative">{children}</div>

        {/* Home indicator */}
        {showHomeIndicator && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <div className="w-28 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}
