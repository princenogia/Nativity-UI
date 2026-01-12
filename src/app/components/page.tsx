"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Grid3X3, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    components,
    categories,
    getComponentsByCategory,
    ComponentMeta,
} from "@/lib/components-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ComponentsPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

    // Filter components based on search and category
    const filteredComponents = React.useMemo(() => {
        let filtered = components;

        if (activeCategory) {
            filtered = getComponentsByCategory(activeCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(
                (c) =>
                    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    // Group by category for list view
    const groupedComponents = React.useMemo(() => {
        if (activeCategory) {
            return { [activeCategory]: filteredComponents };
        }

        const grouped: Record<string, ComponentMeta[]> = {};
        filteredComponents.forEach((c) => {
            if (!grouped[c.category]) {
                grouped[c.category] = [];
            }
            grouped[c.category].push(c);
        });
        return grouped;
    }, [filteredComponents, activeCategory]);

    return (
        <div className="relative min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative py-16 px-6 border-b border-border overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 hero-gradient opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="relative container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="gradient-text">Component Gallery</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Explore our collection of {components.length}+ beautifully crafted React Native
                            components. Copy, customize, and ship faster.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={cn(
                                        "w-full pl-12 pr-4 py-3.5 rounded-xl",
                                        "bg-card/80 backdrop-blur-sm border border-border",
                                        "text-foreground placeholder:text-muted-foreground",
                                        "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                                        "transition-all duration-200"
                                    )}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Controls */}
            <section className="sticky top-14 z-30 py-4 px-6 border-b border-border bg-background/80 backdrop-blur-xl">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={cn(
                                    "px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
                                    activeCategory === null
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                All ({components.length})
                            </button>
                            {categories.map((category) => {
                                const count = getComponentsByCategory(category).length;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={cn(
                                            "px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
                                            activeCategory === category
                                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {category} ({count})
                                    </button>
                                );
                            })}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={cn(
                                    "p-2 rounded-md transition-colors",
                                    viewMode === "grid"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={cn(
                                    "p-2 rounded-md transition-colors",
                                    viewMode === "list"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <LayoutList className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Grid/List */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    {filteredComponents.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No components found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter criteria
                            </p>
                        </motion.div>
                    ) : viewMode === "grid" ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredComponents.map((component, index) => (
                                <ComponentCard key={component.slug} component={component} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {Object.entries(groupedComponents).map(([category, comps]) => (
                                <div key={category}>
                                    <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {category}
                                    </h2>
                                    <div className="space-y-2">
                                        {comps.map((component) => (
                                            <ComponentListItem key={component.slug} component={component} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-8 px-6 border-t border-border bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-foreground">{components.length}+</div>
                            <div className="text-sm text-muted-foreground">Components</div>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div>
                            <div className="text-2xl font-bold text-foreground">{categories.length}</div>
                            <div className="text-sm text-muted-foreground">Categories</div>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div>
                            <div className="text-2xl font-bold text-foreground">100%</div>
                            <div className="text-sm text-muted-foreground">Open Source</div>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div>
                            <div className="text-2xl font-bold text-foreground">0</div>
                            <div className="text-sm text-muted-foreground">Dependencies</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Component Card for Grid View
function ComponentCard({
    component,
    index,
}: {
    component: ComponentMeta;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
        >
            <Link
                href={`/docs/components/${component.slug}`}
                className={cn(
                    "group block rounded-xl overflow-hidden",
                    "bg-card border border-border",
                    "hover:border-primary/50 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                )}
            >
                {/* Preview Area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-950/50 via-slate-900/50 to-pink-950/50 p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-medium bg-black/40 backdrop-blur-sm rounded-md text-white/80">
                        {component.category}
                    </div>

                    {/* Component Name Preview */}
                    <div className="relative z-10 text-center">
                        <div className="text-2xl font-bold text-white/90 mb-1">{component.name}</div>
                        <div className="text-xs text-white/50">Click to view</div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-card">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {component.name}
                        </h3>
                        <div className="flex items-center gap-1">
                            {component.isNew && <span className="new-badge">NEW</span>}
                            {component.isStylish && <span className="text-sm">✨</span>}
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {component.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}

// Component List Item for List View
function ComponentListItem({ component }: { component: ComponentMeta }) {
    return (
        <Link
            href={`/docs/components/${component.slug}`}
            className={cn(
                "group flex items-center justify-between p-4 rounded-xl",
                "bg-card border border-border",
                "hover:border-primary/50 hover:bg-card/80 transition-all duration-200"
            )}
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-lg font-bold text-primary">
                        {component.name.charAt(0)}
                    </span>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {component.name}
                        </h3>
                        {component.isNew && <span className="new-badge">NEW</span>}
                        {component.isStylish && <span className="text-sm">✨</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </Link>
    );
}
