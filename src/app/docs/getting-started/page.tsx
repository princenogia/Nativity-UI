"use client";

import Link from "next/link";
import {
    ArrowRight,
    Terminal,
    Smartphone,
    Check,
    Copy,
    Zap,
    Layers,
    Code,
} from "lucide-react";
import { cn } from "@/lib/utils";



export default function GettingStartedPage() {
    const prerequisites = [
        { name: "Node.js 18+", description: "JavaScript runtime" },
        { name: "Expo CLI", description: "Install via npm install -g expo-cli" },
        { name: "iOS Simulator / Android Emulator", description: "Or physical device with Expo Go" },
        { name: "Code Editor", description: "VS Code recommended" },
    ];

    const steps = [
        {
            number: "1",
            title: "Create a new Expo project",
            description: "Start with a fresh TypeScript template for the best experience.",
            code: `npx create-expo-app@latest my-app --template blank-typescript
cd my-app`,
        },
        {
            number: "2",
            title: "Install required dependencies",
            description: "Add Reanimated for smooth animations (required for animated components).",
            code: `npx expo install react-native-reanimated react-native-gesture-handler`,
        },
        {
            number: "3",
            title: "Configure Babel",
            description: "Add the Reanimated plugin to your babel.config.js.",
            code: `module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};`,
        },
        {
            number: "4",
            title: "Create your components folder",
            description: "Set up a folder structure for organizing UI components.",
            code: `mkdir -p components/ui`,
        },
        {
            number: "5",
            title: "Copy a component",
            description: "Browse our components and copy the code you need.",
            note: "Each component is self-contained with no external dependencies.",
        },
        {
            number: "6",
            title: "Use in your app",
            description: "Import and use the component in your screens.",
            code: `import { Button } from '@/components/ui/button';

export default function HomeScreen() {
  return (
    <Button 
      onPress={() => console.log('Pressed!')}
      variant="primary"
    >
      Get Started
    </Button>
  );
}`,
        },
    ];

    return (
        <div className="container mx-auto max-w-4xl px-6 py-12 page-transition">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                </Link>
                <span>/</span>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                    Docs
                </Link>
                <span>/</span>
                <span className="text-foreground">Getting Started</span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Getting Started</h1>
                <p className="text-lg text-muted-foreground">
                    Set up Nativity UI in your React Native Expo project in under 5 minutes.
                </p>
            </div>

            {/* Prerequisites */}
            <section className="mb-12">
                <h2 id="prerequisites" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-500" />
                    Prerequisites
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {prerequisites.map((item) => (
                        <div
                            key={item.name}
                            className="p-4 rounded-xl bg-card border border-border"
                        >
                            <h3 className="font-semibold mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Installation Steps */}
            <section className="mb-12">
                <h2 id="installation" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-primary" />
                    Installation
                </h2>
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={cn(
                                "relative pl-12 pb-8",
                                index !== steps.length - 1 && "border-l-2 border-border ml-4"
                            )}
                        >
                            {/* Step number */}
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm -translate-x-1/2 shadow-lg shadow-primary/25">
                                {step.number}
                            </div>

                            <div className="ml-4">
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground mb-4">{step.description}</p>

                                {step.code && (
                                    <div className="relative group">
                                        <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                                            <code className="text-sm font-mono text-gray-300">
                                                {step.code}
                                            </code>
                                        </pre>
                                        <button
                                            className="absolute top-2 right-2 p-2 rounded-md bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => navigator.clipboard.writeText(step.code!)}
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}

                                {step.note && (
                                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-sm text-muted-foreground">
                                        💡 {step.note}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project Structure */}
            <section className="mb-12">
                <h2 id="project-structure" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-primary" />
                    Recommended Project Structure
                </h2>
                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">{`my-app/
├── app/                    # Expo Router screens
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   └── settings.tsx
│   └── _layout.tsx
├── components/
│   ├── ui/                 # Nativity UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── ...                 # Your custom components
├── constants/
│   └── colors.ts           # Theme colors
├── hooks/
├── utils/
└── app.json`}</code>
                </pre>
            </section>

            {/* Tips */}
            <section className="mb-12">
                <h2 id="pro-tips" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Pro Tips
                </h2>
                <div className="space-y-4">
                    {[
                        {
                            title: "Use path aliases",
                            description:
                                "Configure @/ alias in tsconfig.json for cleaner imports like @/components/ui/button.",
                        },
                        {
                            title: "Create a theme file",
                            description:
                                "Centralize your colors, spacing, and typography for consistent styling.",
                        },
                        {
                            title: "Start with Button",
                            description:
                                "The Button component is the simplest - perfect for verifying your setup works.",
                        },
                        {
                            title: "Check Expo SDK compatibility",
                            description:
                                "Our components are tested with Expo SDK 52+. Check your app.json for version.",
                        },
                    ].map((tip) => (
                        <div
                            key={tip.title}
                            className="p-4 rounded-xl bg-card border border-border"
                        >
                            <h3 className="font-semibold mb-1">{tip.title}</h3>
                            <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Steps */}
            <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 border border-primary/10">
                <h2 id="next-steps" className="text-2xl font-bold mb-4">Next Steps</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                        href="/docs/components/button"
                        className={cn(
                            "p-4 rounded-xl bg-card/50 border border-border",
                            "hover:border-primary/50 hover:bg-card transition-all duration-200",
                            "group"
                        )}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Code className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                                Browse Components
                            </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-11">
                            Explore our component library
                        </p>
                    </Link>
                    <Link
                        href="/docs/theming"
                        className={cn(
                            "p-4 rounded-xl bg-card/50 border border-border",
                            "hover:border-primary/50 hover:bg-card transition-all duration-200",
                            "group"
                        )}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Smartphone className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                                Theming Guide
                            </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-11">
                            Customize colors and styles
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
