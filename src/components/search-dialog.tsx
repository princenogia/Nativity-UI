"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Zap, Palette, Smartphone, Layers, X, Box, Type, MousePointer2, FormInput, Component, FileText, Code2, Sparkles, ArrowUp, ArrowDown, CornerDownLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { searchItems, getGroupedItems, filterSearchItems, SearchItem } from "@/lib/search-data";

interface SearchDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const router = useRouter();
    const [query, setQuery] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Focus input when dialog opens
    React.useEffect(() => {
        if (open) {
            setQuery("");
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                onOpenChange(!open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open, onOpenChange]);

    const runCommand = React.useCallback(
        (command: () => unknown) => {
            onOpenChange(false);
            command();
        },
        [onOpenChange]
    );

    // Get filtered results using our custom filter
    const filteredItems = React.useMemo(() => {
        if (!query.trim()) {
            return getGroupedItems();
        }
        const results = filterSearchItems(query);
        return {
            docs: results.filter(i => i.type === 'doc'),
            components: results.filter(i => i.type === 'component'),
            examples: results.filter(i => i.type === 'example'),
            features: results.filter(i => i.type === 'feature'),
        };
    }, [query]);

    const hasResults =
        filteredItems.docs.length > 0 ||
        filteredItems.components.length > 0 ||
        filteredItems.examples.length > 0 ||
        filteredItems.features.length > 0;

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] sm:pt-[15vh]">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => onOpenChange(false)}
            />

            {/* Dialog */}
            <div className="relative w-full max-w-lg mx-4 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl p-0 animate-in fade-in zoom-in-95 duration-200">
                <Command className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-popover text-popover-foreground" shouldFilter={false}>
                    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
                        <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
                        <Command.Input
                            ref={inputRef}
                            value={query}
                            onValueChange={setQuery}
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Search components, docs, examples..."
                        />
                        <button
                            onClick={() => onOpenChange(false)}
                            className="ml-2 p-1 rounded-sm opacity-50 hover:opacity-100 hover:bg-muted"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        {!hasResults && (
                            <div className="py-6 text-center text-sm text-muted-foreground">
                                No results found for "{query}"
                            </div>
                        )}

                        {filteredItems.docs.length > 0 && (
                            <Command.Group heading="Documentation" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                                {filteredItems.docs.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                    >
                                        <item.icon className="mr-2 h-4 w-4 text-primary" />
                                        <span className="font-medium">{item.title}</span>
                                        {item.description && <span className="ml-2 text-xs text-muted-foreground hidden sm:inline-block truncate">- {item.description}</span>}
                                    </CommandItem>
                                ))}
                            </Command.Group>
                        )}

                        {filteredItems.components.length > 0 && (
                            <Command.Group heading="Components" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                                {filteredItems.components.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                    >
                                        <item.icon className="mr-2 h-4 w-4 opacity-70" />
                                        <span>{item.title}</span>
                                        {item.category && (
                                            <span className="ml-auto text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                                                {item.category}
                                            </span>
                                        )}
                                    </CommandItem>
                                ))}
                            </Command.Group>
                        )}

                        {filteredItems.examples.length > 0 && (
                            <Command.Group heading="Examples" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                                {filteredItems.examples.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                    >
                                        <item.icon className="mr-2 h-4 w-4" />
                                        <span>{item.title}</span>
                                        {item.description && <span className="ml-2 text-xs text-muted-foreground hidden sm:inline-block truncate">- {item.description}</span>}
                                    </CommandItem>
                                ))}
                            </Command.Group>
                        )}

                        {filteredItems.features.length > 0 && (
                            <Command.Group heading="Quick Links" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                                {filteredItems.features.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                    >
                                        <item.icon className="mr-2 h-4 w-4 text-primary" />
                                        <span>{item.title}</span>
                                        <span className="ml-auto text-xs text-muted-foreground">{item.description}</span>
                                    </CommandItem>
                                ))}
                            </Command.Group>
                        )}
                    </Command.List>

                    {/* Keyboard Hints Footer */}
                    <div className="flex items-center justify-between border-t border-border px-3 py-2 text-[11px] text-muted-foreground">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]"><ArrowUp className="w-2.5 h-2.5 inline" /></kbd>
                                <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]"><ArrowDown className="w-2.5 h-2.5 inline" /></kbd>
                                <span>Navigate</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]"><CornerDownLeft className="w-2.5 h-2.5 inline" /></kbd>
                                <span>Select</span>
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Esc</kbd>
                            <span>Close</span>
                        </span>
                    </div>
                </Command>
            </div>
        </div>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
        >
            {children}
        </Command.Item>
    );
}
