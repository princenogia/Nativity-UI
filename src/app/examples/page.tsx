"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Github,
    Download,
    Smartphone,
    ShoppingCart,
    MessageCircle,
    Check,
    Wallet,
    ListTodo,
    ExternalLink,
    Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";


// Example templates data
import { examples } from "@/lib/examples-data";

const difficultyColors: Record<string, string> = {
    Beginner: "bg-green-500/10 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function ExamplesPage() {
    return (
        <div className="relative min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-gradient opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="relative container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm">
                            <Smartphone className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Starter Templates</span>
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="gradient-text">Example Projects</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Production-ready templates to kickstart your React Native project.
                            Clone, customize, and ship faster.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#templates"
                                className={cn(
                                    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                                    "bg-primary text-primary-foreground",
                                    "shadow-lg shadow-primary/25 btn-glow",
                                    "hover:bg-primary/90 transition-all duration-200"
                                )}
                            >
                                Browse Templates
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/docs"
                                className={cn(
                                    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                                    "border border-border hover:bg-muted hover:border-muted-foreground/20",
                                    "transition-all duration-200"
                                )}
                            >
                                Read Documentation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Start */}
            <section className="py-12 px-6 border-y border-border bg-muted/20">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-xl font-bold mb-6 text-center">Quick Start</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            {
                                step: "1",
                                title: "Clone Template",
                                code: "git clone template-url",
                            },
                            {
                                step: "2",
                                title: "Install Dependencies",
                                code: "npm install",
                            },
                            {
                                step: "3",
                                title: "Start Development",
                                code: "npx expo start",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative p-4 rounded-xl bg-card border border-border"
                            >
                                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                    {item.step}
                                </div>
                                <h3 className="font-medium mb-2 ml-2">{item.title}</h3>
                                <code className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                                    {item.code}
                                </code>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section id="templates" className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Choose Your Template</h2>
                        <p className="text-muted-foreground">
                            Each template is a complete, working app you can learn from and build upon.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {examples.map((template, index) => (
                            <TemplateCard key={template.id} template={template} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6 border-t border-border bg-muted/20">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        What's Included
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "TypeScript",
                                description: "Full type safety out of the box",
                            },
                            {
                                title: "Expo SDK 52+",
                                description: "Latest Expo features and APIs",
                            },
                            {
                                title: "Expo Router",
                                description: "File-based navigation setup",
                            },
                            {
                                title: "Reanimated 3",
                                description: "Smooth 60fps animations",
                            },
                            {
                                title: "Dark Mode",
                                description: "Theme switching built-in",
                            },
                            {
                                title: "Best Practices",
                                description: "Clean, maintainable code",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-4 rounded-xl bg-card border border-border"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <h3 className="font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Need a Custom Template?</h2>
                    <p className="text-muted-foreground mb-8">
                        Have a specific app idea? Let us know and we might create a template for it!
                    </p>
                    <Link
                        href="https://github.com/princenogia/Nativity-UI/discussions"
                        target="_blank"
                        className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                            "bg-primary text-primary-foreground",
                            "shadow-lg shadow-primary/25 btn-glow",
                            "hover:bg-primary/90 transition-all duration-200"
                        )}
                    >
                        Request a Template
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>


        </div>
    );
}

// Template Card Component
function TemplateCard({
    template,
    index,
}: {
    template: (typeof examples)[0];
    index: number;
}) {
    const icons = {
        "todo-app": ListTodo,
        "ecommerce": ShoppingCart,
        "social-app": MessageCircle,
        "finance-app": Wallet
    };
    const Icon = icons[template.id as keyof typeof icons] || Smartphone;
    // Map colors based on id since we removed them from data to keep it clean
    const colors = {
        "todo-app": "from-green-500 to-emerald-600",
        "ecommerce": "from-violet-500 to-purple-600",
        "social-app": "from-pink-500 to-rose-600",
        "finance-app": "from-blue-500 to-cyan-600"
    };
    const color = colors[template.id as keyof typeof colors] || "from-gray-500 to-zinc-600";


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group rounded-2xl overflow-hidden",
                "bg-card border border-border",
                "hover:border-primary/50 transition-all duration-300"
            )}
        >
            {/* Header with gradient */}
            <div
                className={cn(
                    "relative h-40 bg-gradient-to-br p-6",
                    color
                )}
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span
                        className={cn(
                            "px-3 py-1 text-xs font-medium rounded-full border",
                            difficultyColors[template.difficulty]
                        )}
                    >
                        {template.difficulty}
                    </span>
                </div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {template.name}
                </h3>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-muted-foreground mb-4">{template.description}</p>

                {/* Components Used */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Components Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {template.components.map((comp) => (
                            <span
                                key={comp}
                                className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                            >
                                {comp}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features removed from display to concise card, focusing on code view */}


                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href={`/examples/${template.id}`}
                        className={cn(
                            "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium",
                            "bg-primary text-primary-foreground",
                            "hover:bg-primary/90 transition-all duration-200"
                        )}
                    >
                        <Code className="w-4 h-4" />
                        View Code
                    </Link>
                    <Link
                        href={`/examples/${template.id}`}
                        className={cn(
                            "p-2.5 rounded-lg border border-border",
                            "hover:bg-muted hover:border-muted-foreground/20 transition-all duration-200"
                        )}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
