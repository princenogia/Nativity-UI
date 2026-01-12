"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, Copy, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  components,
  categories,
  getComponentsByCategory,
  ComponentMeta,
} from "@/lib/components-data";
import { Header } from "@/components/header";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );

  // Filter components based on active category
  const displayedComponents = React.useMemo(() => {
    if (!activeCategory) {
      return components.slice(0, 9);
    }
    return getComponentsByCategory(activeCategory).slice(0, 9);
  }, [activeCategory]);

  return (
    <div className="relative">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl floating-orb"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl floating-orb"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl floating-orb"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-sm"
            >
              <span className="new-badge">New</span>
              <span className="text-muted-foreground">
                Nativity UI Tools available
              </span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Main Heading - Large and Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="text-foreground">React Native</span>
              <br />
              <span className="text-foreground">Components</span>
              <br />
              <span className="gradient-text">For Creative Developers</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Highly customizable animated components that make your Expo
              projects truly stand out. Open source and free to use.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/docs"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-base",
                  "bg-primary text-primary-foreground",
                  "shadow-lg shadow-primary/25 btn-glow",
                  "hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
                )}
              >
                Browse Components
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-base",
                  "border border-border hover:bg-muted/50",
                  "transition-all duration-200"
                )}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Star on GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-border bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                {components.length}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Components
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                {categories.length}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Categories
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                100%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Open Source
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                Free
              </div>
              <div className="text-sm text-muted-foreground mt-1">Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Index Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Index</h2>
            <p className="text-muted-foreground text-lg">
              Explore all {components.length}+ components available in Nativity
              UI
            </p>
          </motion.div>

          {/* Category Filter Tabs - Now Functional */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              All Components
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Components Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedComponents.map((component, index) => (
              <ComponentCard
                key={component.slug}
                component={component}
                index={index}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              href="/docs/components/button"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium",
                "border border-border hover:bg-muted hover:border-muted-foreground/20",
                "transition-all duration-200"
              )}
            >
              View All Components
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/20 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Nativity UI?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The easiest way to build beautiful React Native apps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Built for Expo",
                description:
                  "Components designed specifically for React Native and Expo SDK.",
              },
              {
                icon: Copy,
                title: "Copy & Paste",
                description:
                  "No npm install needed. Just copy the code and customize.",
              },
              {
                icon: Palette,
                title: "Fully Customizable",
                description:
                  "Make it yours. Every component is open and modifiable.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "relative p-6 rounded-2xl",
                    "bg-card border border-border",
                    "hover:border-primary/30 transition-all duration-300",
                    "group"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start using Nativity UI in your React Native project today.
            </p>
            <Link
              href="/docs"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg",
                "bg-primary text-primary-foreground",
                "shadow-lg shadow-primary/25 btn-glow",
                "hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Component Card with mini preview
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/docs/components/${component.slug}`}
        className={cn(
          "group block rounded-xl overflow-hidden",
          "bg-card border border-border",
          "hover:border-primary/50 transition-all duration-300",
          "hover:shadow-lg hover:shadow-primary/5"
        )}
      >
        {/* Preview Area with actual mini demo */}
        <div className="aspect-[4/3] bg-gradient-to-br from-violet-950/50 via-slate-900/50 to-pink-950/50 p-4 flex items-center justify-center relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Mini Preview based on component type */}
          <div className="relative z-10">
            <MiniPreview slug={component.slug} category={component.category} />
          </div>
        </div>

        {/* Info */}
        <div className="p-4 bg-card">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {component.name}
            </h3>
            {component.isNew && <span className="new-badge">NEW</span>}
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {component.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// Mini preview component based on type
function MiniPreview({ slug, category }: { slug: string; category: string }) {
  // Text Animations
  if (category === "Text Animations") {
    if (slug === "split-text") {
      return (
        <div className="flex gap-0.5">
          {"Hello".split("").map((char, i) => (
            <motion.span
              key={i}
              className="text-2xl font-bold text-violet-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      );
    }
    if (slug === "typewriter") {
      return (
        <div className="flex items-center">
          <span className="text-xl font-semibold text-violet-400">Type...</span>
          <motion.span
            className="text-xl text-primary ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      );
    }
    if (slug === "gradient-text") {
      return (
        <span className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Gradient
        </span>
      );
    }
    if (slug === "blur-text") {
      return (
        <motion.span
          className="text-2xl font-bold text-violet-400"
          initial={{ opacity: 0.5, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Focus
        </motion.span>
      );
    }
  }

  // Animations
  if (category === "Animations") {
    if (slug === "fade-content") {
      return (
        <motion.div
          className="w-24 h-16 bg-violet-500/30 rounded-lg border border-violet-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      );
    }
    if (slug === "scale-content") {
      return (
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl"
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      );
    }
    if (slug === "slide-in") {
      return (
        <motion.div
          className="w-20 h-10 bg-violet-500/30 rounded-lg border border-violet-500/50"
          animate={{ x: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      );
    }
  }

  // Buttons
  if (category === "Buttons") {
    if (slug === "button") {
      return (
        <div className="flex gap-2">
          <div className="px-3 py-1.5 text-xs font-medium bg-violet-500 text-white rounded-lg">
            Button
          </div>
          <div className="px-3 py-1.5 text-xs font-medium bg-zinc-700 text-zinc-300 rounded-lg border border-zinc-600">
            Secondary
          </div>
        </div>
      );
    }
    if (slug === "gradient-button") {
      return (
        <div className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-xl shadow-lg shadow-violet-500/25">
          Gradient
        </div>
      );
    }
    if (slug === "fab") {
      return (
        <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
          <span className="text-xl">+</span>
        </div>
      );
    }
  }

  // Inputs
  if (category === "Inputs") {
    if (slug === "input" || slug === "animated-input") {
      return (
        <div className="w-32 h-9 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center px-3">
          <span className="text-xs text-zinc-500">Enter text...</span>
        </div>
      );
    }
    if (slug === "switch") {
      return (
        <div className="w-12 h-7 bg-violet-500 rounded-full p-1 flex justify-end">
          <div className="w-5 h-5 bg-white rounded-full shadow" />
        </div>
      );
    }
    if (slug === "checkbox") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-violet-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-xs text-zinc-400">Checked</span>
        </div>
      );
    }
    if (slug === "slider") {
      return (
        <div className="w-24 h-2 bg-zinc-700 rounded-full relative">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-violet-500 rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow" />
        </div>
      );
    }
  }

  // Layout
  if (category === "Layout") {
    if (slug === "card") {
      return (
        <div className="w-36 bg-zinc-800/80 rounded-xl border border-zinc-700 p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
            <div>
              <div className="h-2 w-14 bg-zinc-600 rounded mb-1" />
              <div className="h-1.5 w-10 bg-zinc-700 rounded" />
            </div>
          </div>
          <div className="h-2 w-full bg-zinc-700 rounded mb-1.5" />
          <div className="h-2 w-3/4 bg-zinc-700 rounded" />
        </div>
      );
    }
    if (slug === "glass-card") {
      return (
        <div className="w-36 bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 p-4 shadow-lg">
          <div className="h-3 w-20 bg-white/30 rounded mb-2" />
          <div className="h-2 w-full bg-white/20 rounded mb-1.5" />
          <div className="h-2 w-2/3 bg-white/15 rounded" />
          <div className="mt-3 flex gap-2">
            <div className="flex-1 h-6 bg-violet-500/30 rounded-lg" />
            <div className="flex-1 h-6 bg-white/10 rounded-lg" />
          </div>
        </div>
      );
    }
    if (slug === "accordion") {
      return (
        <div className="w-36 space-y-1.5">
          <div className="bg-violet-500/20 border border-violet-500/40 rounded-lg p-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-14 bg-violet-400 rounded" />
              <span className="text-violet-400 text-xs">−</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 w-full bg-violet-400/30 rounded" />
              <div className="h-1.5 w-3/4 bg-violet-400/30 rounded" />
            </div>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-12 bg-zinc-500 rounded" />
              <span className="text-zinc-500 text-xs">+</span>
            </div>
          </div>
        </div>
      );
    }
    if (slug === "tabs") {
      return (
        <div className="w-40">
          <div className="flex gap-0.5 bg-zinc-800 p-1 rounded-lg mb-2">
            <div className="flex-1 px-3 py-1.5 bg-violet-500 rounded text-[10px] text-white text-center font-medium">
              Tab 1
            </div>
            <div className="flex-1 px-3 py-1.5 text-[10px] text-zinc-400 text-center">
              Tab 2
            </div>
            <div className="flex-1 px-3 py-1.5 text-[10px] text-zinc-400 text-center">
              Tab 3
            </div>
          </div>
          <div className="h-12 bg-zinc-800/50 rounded-lg border border-zinc-700 flex items-center justify-center">
            <div className="h-2 w-16 bg-zinc-600 rounded" />
          </div>
        </div>
      );
    }
  }

  // Overlay
  if (category === "Overlay") {
    if (slug === "modal") {
      return (
        <div className="relative w-40 h-24">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg" />
          <div className="absolute inset-3 bg-zinc-800 rounded-xl border border-zinc-600 p-3 shadow-2xl">
            <div className="h-2.5 w-16 bg-zinc-500 rounded mb-2" />
            <div className="h-1.5 w-full bg-zinc-600 rounded mb-1" />
            <div className="h-1.5 w-2/3 bg-zinc-600 rounded" />
            <div className="flex gap-1.5 mt-2">
              <div className="flex-1 h-4 bg-violet-500 rounded" />
              <div className="flex-1 h-4 bg-zinc-700 rounded" />
            </div>
          </div>
        </div>
      );
    }
  }

  // Data Display
  if (category === "Data Display") {
    if (slug === "avatar") {
      return (
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 border-2 border-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            JD
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            AB
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            CD
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-zinc-400 text-xs font-bold shadow-lg">
            +3
          </div>
        </div>
      );
    }
    if (slug === "badge") {
      return (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-violet-500 text-white text-xs font-medium rounded-full shadow">
            New
          </span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
            Active
          </span>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full border border-amber-500/30">
            Pending
          </span>
        </div>
      );
    }
    if (slug === "skeleton") {
      return (
        <div className="w-36 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-700 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 bg-zinc-700 rounded animate-pulse" />
              <div className="h-2 w-2/3 bg-zinc-700 rounded animate-pulse" />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-zinc-700 rounded animate-pulse" />
            <div className="h-2 w-4/5 bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>
      );
    }
    if (slug === "progress") {
      return (
        <div className="w-36 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400">Loading...</span>
            <span className="text-violet-400 font-medium">70%</span>
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
              animate={{ width: ["0%", "70%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      );
    }
  }

  // Feedback
  if (category === "Feedback") {
    if (slug === "alert") {
      return (
        <div className="w-40 bg-violet-500/10 border border-violet-500/30 rounded-xl p-3 flex items-start gap-2">
          <span className="text-base">ℹ️</span>
          <div>
            <div className="text-xs text-violet-300 font-medium mb-0.5">
              Info
            </div>
            <div className="text-[10px] text-violet-400/80">
              Alert message here
            </div>
          </div>
        </div>
      );
    }
    if (slug === "spinner") {
      return (
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-8 h-8 border-3 border-violet-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-xs text-zinc-400">Loading...</span>
        </div>
      );
    }
    if (slug === "toast") {
      return (
        <motion.div
          className="w-40 bg-zinc-800 border border-zinc-600 rounded-xl p-3 flex items-center gap-2.5 shadow-xl"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.5,
          }}
        >
          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
            <span className="text-green-400 text-xs">✓</span>
          </div>
          <div>
            <div className="text-xs text-white font-medium">Success!</div>
            <div className="text-[10px] text-zinc-400">Changes saved</div>
          </div>
        </motion.div>
      );
    }
  }

  // Default preview
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
      <div className="h-3 w-20 bg-white/30 rounded mb-2" />
      <div className="h-2 w-14 bg-white/20 rounded" />
    </div>
  );
}
