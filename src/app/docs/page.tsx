import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Package,
  Palette,
  Sparkles,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Introduction - Nativity UI",
  description:
    "Get started with Nativity UI components for your React Native Expo project.",
};

export default function DocsPage() {
  const principles = [
    {
      title: "Free for All",
      description: "You own the code, and it's free to use in your projects",
    },
    {
      title: "Prop-First Approach",
      description: "Easy customization through thoughtfully exposed props",
    },
    {
      title: "Fully Modular",
      description:
        "Install strictly what you need, Nativity UI is not a dependency",
    },
    {
      title: "Free Choice",
      description:
        "JS or TS, plain StyleSheet or NativeWind, the code is all here",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Set up your Expo project",
      description: "Create a new Expo project or use an existing one.",
      code: `npx create-expo-app@latest my-app --template blank-typescript
cd my-app`,
    },
    {
      number: "2",
      title: "Create your components folder",
      description: "Set up a folder structure for your UI components.",
      code: `mkdir -p components/ui`,
    },
    {
      number: "3",
      title: "Set up the design system",
      description: "Follow our guide to set up the theme and animations.",
      link: "/docs/getting-started",
    },
    {
      number: "4",
      title: "Copy and use",
      description:
        "Browse our components and copy the ones you need.",
      link: "/components",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 page-transition">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Introduction</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Introduction</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Nativity UI is an open-source collection of carefully designed UI
          components that aim to enhance your React Native Expo applications.
        </p>
      </div>

      {/* What it is */}
      <section className="mb-12">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          This is not your typical component library, which means you won&apos;t
          find a set of generic buttons, inputs, or other common UI elements
          here.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Basically, these components are here to help you stand out and make a
          statement visually by adding a touch of creativity to your projects.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-12 p-6 rounded-2xl bg-card border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Mission</h2>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The goal of Nativity UI is simple - provide flexible, visually
          stunning and most importantly, free components that take mobile apps
          to the next level.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          To make that happen, the project is committed to the following
          principles:
        </p>
        <ul className="space-y-3">
          {principles.map((principle) => (
            <li
              key={principle.title}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-medium text-foreground">
                  {principle.title}:
                </span>{" "}
                {principle.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative pl-12 pb-6",
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
                  <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">
                      {step.code}
                    </code>
                  </pre>
                )}

                {step.link && (
                  <Link
                    href={step.link}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                      "transition-all duration-200 text-sm font-medium btn-glow"
                    )}
                  >
                    Browse Components
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 border border-primary/10">
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/docs/getting-started"
            className={cn(
              "p-4 rounded-xl bg-card/50 border border-border",
              "hover:border-primary/50 hover:bg-card transition-all duration-200",
              "group"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Package className="w-4 h-4 text-primary" />
              </div>
              <h4 className="font-medium group-hover:text-primary transition-colors">
                Getting Started
              </h4>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Step-by-step setup for your Expo project
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
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <Palette className="w-4 h-4 text-pink-500" />
              </div>
              <h4 className="font-medium group-hover:text-pink-500 transition-colors">
                Theming
              </h4>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Customize colors and design tokens
            </p>
          </Link>
          <Link
            href="/docs/animations"
            className={cn(
              "p-4 rounded-xl bg-card/50 border border-border",
              "hover:border-primary/50 hover:bg-card transition-all duration-200",
              "group"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </div>
              <h4 className="font-medium group-hover:text-yellow-500 transition-colors">
                Animations
              </h4>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Master smooth 60fps animations
            </p>
          </Link>
          <Link
            href="/components"
            className={cn(
              "p-4 rounded-xl bg-card/50 border border-border",
              "hover:border-primary/50 hover:bg-card transition-all duration-200",
              "group"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Terminal className="w-4 h-4 text-blue-500" />
              </div>
              <h4 className="font-medium group-hover:text-blue-500 transition-colors">
                Components
              </h4>
            </div>
            <p className="text-sm text-muted-foreground pl-11">
              Browse the library of 20+ components
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
