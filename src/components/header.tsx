"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Search, Star, Sparkles, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { SearchModal } from "./search-modal";

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export function Header({ className, onMenuClick }: HeaderProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Keyboard shortcut to open search (⌘K or Ctrl+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Announcement Banner */}
      <div className="announcement-banner py-2 px-4 text-center text-sm hidden sm:block">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">
            <span className="text-foreground font-medium">Nativity UI Pro</span>{" "}
            is coming soon with 50+ premium components.
          </span>
          <Link
            href="#"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Join waitlist →
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl",
          className
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          {/* Left side - Mobile menu button */}
          <div className="flex items-center gap-3">
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/docs"
                className="relative px-1 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/docs/components/button"
                className="relative px-1 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                Components
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Search - Center */}
          <div className="flex-1 max-w-sm mx-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/30 hover:bg-muted/50 rounded-lg border border-border hover:border-muted-foreground/20 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
              <span className="flex-1 text-left">Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-background rounded border border-border">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* GitHub Star Button */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium",
                "bg-muted/50 border border-border hover:bg-muted hover:border-muted-foreground/20",
                "transition-all duration-200"
              )}
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span>Star</span>
              <span className="px-1.5 py-0.5 rounded bg-background text-xs font-bold">
                2.1k
              </span>
            </Link>

            {/* GitHub Icon - Mobile */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "sm:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center",
                "hover:bg-accent hover:border-muted-foreground/20 transition-all duration-200"
              )}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
