"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

import { TableOfContents } from "@/components/toc";

export function DocsLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)_220px] lg:gap-10">

        {/* Left Sidebar - Sticky */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8">
            <Sidebar isOpen={true} />
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} isMobile />

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
        </main>

        {/* Right Sidebar (TOC) - Desktop Only */}
        <div className="hidden lg:block xl:hidden">
          {/* Keeping it simple for LG screens, usually TOC is inside layout or separate column, 
                but our grid definition accounts for it. 
                Wait, actually let's just use the grid column defined above for TOC */}
        </div>

        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-l border-border/40 py-6 pl-4 lg:sticky lg:block">
          <TableOfContents />
        </aside>

      </div>
    </>
  );
}
