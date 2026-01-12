"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Copy, Check, Terminal, ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { examples } from "@/lib/examples-data";
import { Header } from "@/components/header";

export default function ExamplePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const example = examples.find((e) => e.id === slug);
    const [copied, setCopied] = React.useState(false);

    if (!example) {
        notFound();
    }

    const copyCode = () => {
        navigator.clipboard.writeText(example.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-6 py-12 max-w-6xl">
                <Link
                    href="/examples"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Examples
                </Link>

                <div className="grid lg:grid-cols-[1fr_400px] gap-10">
                    {/* Left Column: Code */}
                    <div className="space-y-6 min-w-0">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold">{example.name}</h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={copyCode}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    {copied ? "Copied!" : "Copy Code"}
                                </button>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border overflow-hidden bg-[#0d1117]">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <span className="ml-2 text-xs text-muted-foreground font-mono">App.tsx</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-sm font-mono text-gray-300">
                                    <code>{example.code}</code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h2 className="text-lg font-semibold mb-4">About this Template</h2>
                            <p className="text-muted-foreground mb-6">
                                {example.description}
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Difficulty</h3>
                                    <span className={cn(
                                        "px-3 py-1 text-xs font-medium rounded-full border inline-block",
                                        example.difficulty === "Beginner" && "bg-green-500/10 text-green-400 border-green-500/30",
                                        example.difficulty === "Intermediate" && "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
                                        example.difficulty === "Advanced" && "bg-red-500/10 text-red-400 border-red-500/30",
                                    )}>
                                        {example.difficulty}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium mb-3">Components Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {example.components.map(comp => (
                                            <span key={comp} className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                                                {comp}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 border border-primary/10">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-primary" />
                                Quick Setup
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Copy the code into your App.tsx file. Make sure you have installed the required dependencies.
                            </p>
                            <div className="bg-background/50 rounded-lg p-3 border border-border">
                                <code className="text-xs font-mono text-muted-foreground">
                                    npx expo install react-native-reanimated
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
