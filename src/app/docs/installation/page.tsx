import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Installation - Nativity UI",
  description:
    "How to install and set up Nativity UI components in your Expo project.",
};

export default function InstallationPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-muted-foreground">
          How to set up your Expo project to use Nativity UI components.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        <div className="p-6 rounded-xl bg-card border border-border">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Node.js 18+ installed</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Expo CLI installed globally or via npx</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>An Expo project (SDK 50+ recommended)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* New Project */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">New Project</h2>
        <p className="text-muted-foreground mb-4">
          If you&apos;re starting fresh, create a new Expo project:
        </p>
        <pre className="p-4 rounded-lg bg-card border border-border overflow-x-auto mb-4">
          <code className="text-sm font-mono">
            {`# Create a new Expo project with TypeScript
npx create-expo-app@latest my-app --template blank-typescript

# Navigate to your project
cd my-app`}
          </code>
        </pre>
      </section>

      {/* Project Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
        <p className="text-muted-foreground mb-4">
          We recommend the following folder structure for your components:
        </p>
        <pre className="p-4 rounded-lg bg-card border border-border overflow-x-auto mb-4">
          <code className="text-sm font-mono">
            {`my-app/
├── app/                    # App Router (if using Expo Router)
├── components/
│   └── ui/                 # Nativity UI components go here
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── lib/
│   └── utils.ts           # Utility functions
├── constants/
│   └── colors.ts          # Theme colors
└── ...`}
          </code>
        </pre>
      </section>

      {/* Utils Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Utility Setup</h2>
        <p className="text-muted-foreground mb-4">
          Create a utility file for common helper functions:
        </p>

        <h3 className="text-lg font-semibold mb-3 mt-6">lib/utils.ts</h3>
        <pre className="p-4 rounded-lg bg-card border border-border overflow-x-auto mb-4">
          <code className="text-sm font-mono">
            {`import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

/**
 * Creates a StyleSheet with type safety
 */
export function createStyles<T extends NamedStyles<T>>(styles: T): T {
  return StyleSheet.create(styles) as T;
}

/**
 * Merges class names or style objects
 */
export function cn(
  ...styles: (ViewStyle | TextStyle | ImageStyle | undefined | null | false)[]
): object {
  return Object.assign({}, ...styles.filter(Boolean));
}`}
          </code>
        </pre>
      </section>

      {/* Colors Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Theme Colors</h2>
        <p className="text-muted-foreground mb-4">
          Set up your color palette. You can customize these to match your
          brand:
        </p>

        <h3 className="text-lg font-semibold mb-3 mt-6">constants/colors.ts</h3>
        <pre className="p-4 rounded-lg bg-card border border-border overflow-x-auto mb-4">
          <code className="text-sm font-mono">
            {`export const colors = {
  // Primary - Violet
  primary: '#8B5CF6',
  primaryForeground: '#FFFFFF',

  // Background
  background: '#FFFFFF',
  foreground: '#0A0A0A',

  // Card
  card: '#FFFFFF',
  cardForeground: '#0A0A0A',

  // Muted
  muted: '#F4F4F5',
  mutedForeground: '#71717A',

  // Border
  border: '#E4E4E7',

  // Destructive
  destructive: '#EF4444',
  destructiveForeground: '#FFFFFF',

  // Success
  success: '#22C55E',
  successForeground: '#FFFFFF',
};

export const darkColors = {
  primary: '#8B5CF6',
  primaryForeground: '#FFFFFF',

  background: '#0A0A0A',
  foreground: '#FAFAFA',

  card: '#18181B',
  cardForeground: '#FAFAFA',

  muted: '#27272A',
  mutedForeground: '#A1A1AA',

  border: '#27272A',

  destructive: '#DC2626',
  destructiveForeground: '#FAFAFA',

  success: '#16A34A',
  successForeground: '#FAFAFA',
};`}
          </code>
        </pre>
      </section>

      {/* Next Steps */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20">
        <h2 className="text-2xl font-bold mb-4">You&apos;re Ready!</h2>
        <p className="text-muted-foreground mb-4">
          Now you can start copying components into your project. Head to the
          components section to browse all available components.
        </p>
        <Link
          href="/docs/components/button"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "transition-colors font-medium"
          )}
        >
          Browse Components
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
