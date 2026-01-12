"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Menu,
  X,
  Wand2,
  Type,
  Layers,
  LayoutGrid,
  Box,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, getComponentsByCategory } from "@/lib/components-data";

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  Inputs: Type,
  Layout: LayoutGrid,
  Overlay: Layers,
  "Data Display": Box,
  Feedback: Sparkles,
  Actions: Wand2,
  "Text Animations": Type,
  Animations: Palette,
};

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] =
    React.useState<string[]>(categories);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Nativity UI Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
          </div>
          <span className="font-bold text-lg text-foreground">Nativity UI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Get Started Section */}
        <div className="px-3 mb-4">
          <h3 className="px-2 mb-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Get Started
          </h3>
          <div className="space-y-0.5">
            {[
              { href: "/docs", label: "Introduction" },
              { href: "/docs/installation", label: "Installation" },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "relative flex items-center px-2 py-1.5 text-[13px] rounded-md transition-colors",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-full" />
                  )}
                  <span className="ml-1">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Components Sections */}
        {categories.map((category) => {
          const categoryComponents = getComponentsByCategory(category);
          const isExpanded = expandedCategories.includes(category);
          const CategoryIcon = categoryIcons[category] || Box;
          const hasActiveChild = categoryComponents.some(
            (c) => pathname === `/docs/components/${c.slug}`
          );

          return (
            <div key={category} className="px-3 mb-4">
              <h3 className="px-2 mb-2 text-xs font-bold text-violet-400/90 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                {category}
              </h3>
              <div className="space-y-0.5">
                {categoryComponents.map((component) => {
                  const isActive =
                    pathname === `/docs/components/${component.slug}`;
                  return (
                    <Link
                      key={component.slug}
                      href={`/docs/components/${component.slug}`}
                      onClick={onClose}
                      className={cn(
                        "relative flex items-center justify-between px-2 py-1.5 text-[13px] rounded-md transition-colors",
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-full" />
                      )}
                      <span className="ml-1">{component.name}</span>
                      <div className="flex items-center gap-1">
                        {component.isNew && (
                          <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-primary/20 text-primary rounded">
                            New
                          </span>
                        )}
                        {component.isStylish && (
                          <span className="text-[10px]">✨</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Nativity UI is open source</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-sidebar border-r border-sidebar-border z-50 shadow-2xl"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col w-[260px] bg-sidebar border-r border-sidebar-border h-screen sticky top-0",
          className
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
