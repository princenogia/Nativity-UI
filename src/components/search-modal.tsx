"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { components, ComponentMeta } from "@/lib/components-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter components based on search query
  const filteredComponents = React.useMemo(() => {
    if (!query.trim()) return components;

    const lowerQuery = query.toLowerCase();
    return components.filter(
      (component) =>
        component.name.toLowerCase().includes(lowerQuery) ||
        component.description.toLowerCase().includes(lowerQuery) ||
        component.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  // Reset selected index when results change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredComponents]);

  // Focus input when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredComponents.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredComponents[selectedIndex]) {
            navigateToComponent(filteredComponents[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredComponents, onClose]);

  const navigateToComponent = (component: ComponentMeta) => {
    router.push(`/docs/components/${component.slug}`);
    onClose();
  };

  // Group components by category
  const groupedComponents = React.useMemo(() => {
    const groups: Record<string, ComponentMeta[]> = {};
    filteredComponents.forEach((component) => {
      if (!groups[component.category]) {
        groups[component.category] = [];
      }
      groups[component.category].push(component);
    });
    return groups;
  }, [filteredComponents]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 hover:bg-muted rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-mono bg-muted rounded border border-border text-muted-foreground">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredComponents.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground text-sm">
                    No components found for &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(groupedComponents).map(
                      ([category, items]) => (
                        <div key={category}>
                          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {category}
                          </div>
                          <div className="mt-1 space-y-0.5">
                            {items.map((component) => {
                              const globalIndex =
                                filteredComponents.indexOf(component);
                              const isSelected = globalIndex === selectedIndex;

                              return (
                                <button
                                  key={component.slug}
                                  onClick={() => navigateToComponent(component)}
                                  onMouseEnter={() =>
                                    setSelectedIndex(globalIndex)
                                  }
                                  className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                                    isSelected
                                      ? "bg-primary text-primary-foreground"
                                      : "hover:bg-muted"
                                  )}
                                >
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={cn(
                                          "font-medium text-sm",
                                          isSelected
                                            ? "text-primary-foreground"
                                            : "text-foreground"
                                        )}
                                      >
                                        {component.name}
                                      </span>
                                      {component.isNew && (
                                        <span
                                          className={cn(
                                            "px-1.5 py-0.5 text-[10px] font-semibold rounded",
                                            isSelected
                                              ? "bg-primary-foreground/20 text-primary-foreground"
                                              : "bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400"
                                          )}
                                        >
                                          NEW
                                        </span>
                                      )}
                                    </div>
                                    <p
                                      className={cn(
                                        "text-xs truncate mt-0.5",
                                        isSelected
                                          ? "text-primary-foreground/80"
                                          : "text-muted-foreground"
                                      )}
                                    >
                                      {component.description}
                                    </p>
                                  </div>
                                  <span
                                    className={cn(
                                      "text-xs flex-shrink-0",
                                      isSelected
                                        ? "text-primary-foreground/60"
                                        : "text-muted-foreground"
                                    )}
                                  >
                                    ↵
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border text-xs text-muted-foreground bg-muted/30">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">
                    ↑
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">
                    ↓
                  </kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">
                    ↵
                  </kbd>
                  to select
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
