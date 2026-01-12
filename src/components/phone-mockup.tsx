"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn("phone-mockup", className)}>
      <div className="phone-screen">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-2 bg-black text-white text-xs">
          <span>9:41</span>
          <div className="w-24 h-7 bg-gray-900 rounded-full" />
          <span>100%</span>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-950 p-4">{children}</div>

        {/* Home indicator */}
        <div className="py-2 bg-black flex justify-center">
          <div className="w-32 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
