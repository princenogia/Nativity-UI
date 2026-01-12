"use client";

import Link from "next/link";
import { ArrowRight, Palette, Sun, Moon, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";



export default function ThemingPage() {
    const colorTokens = [
        { name: "primary", light: "#8B5CF6", dark: "#A78BFA", description: "Main brand color" },
        { name: "secondary", light: "#6B7280", dark: "#9CA3AF", description: "Secondary actions" },
        { name: "success", light: "#10B981", dark: "#34D399", description: "Success states" },
        { name: "warning", light: "#F59E0B", dark: "#FBBF24", description: "Warning states" },
        { name: "error", light: "#EF4444", dark: "#F87171", description: "Error states" },
        { name: "background", light: "#FFFFFF", dark: "#0A0A0F", description: "App background" },
        { name: "surface", light: "#F9FAFB", dark: "#1A1A24", description: "Card backgrounds" },
        { name: "text", light: "#111827", dark: "#F9FAFB", description: "Primary text" },
        { name: "textSecondary", light: "#6B7280", dark: "#9CA3AF", description: "Secondary text" },
        { name: "border", light: "#E5E7EB", dark: "#2D2D3A", description: "Borders and dividers" },
    ];

    const spacingTokens = [
        { name: "xs", value: "4", pixels: "4px" },
        { name: "sm", value: "8", pixels: "8px" },
        { name: "md", value: "16", pixels: "16px" },
        { name: "lg", value: "24", pixels: "24px" },
        { name: "xl", value: "32", pixels: "32px" },
        { name: "2xl", value: "48", pixels: "48px" },
        { name: "3xl", value: "64", pixels: "64px" },
    ];

    const radiusTokens = [
        { name: "sm", value: "4" },
        { name: "md", value: "8" },
        { name: "lg", value: "12" },
        { name: "xl", value: "16" },
        { name: "2xl", value: "24" },
        { name: "full", value: "9999" },
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
                <span className="text-foreground">Theming</span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Theming</h1>
                <p className="text-lg text-muted-foreground">
                    Customize Nativity UI to match your brand with design tokens for colors,
                    spacing, typography, and more.
                </p>
            </div>

            {/* Theme Setup */}
            <section className="mb-12">
                <h2 id="theme-configuration" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Palette className="w-6 h-6 text-primary" />
                    Theme Configuration
                </h2>
                <p className="text-muted-foreground mb-6">
                    Create a theme file to centralize your design tokens. This makes it easy
                    to maintain consistent styling across your app.
                </p>

                <div className="space-y-4">
                    <h3 className="font-semibold">1. Create a theme file</h3>
                    <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                        <code className="text-sm font-mono text-gray-300">{`// constants/theme.ts

export const colors = {
  light: {
    primary: '#8B5CF6',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
  },
  dark: {
    primary: '#A78BFA',
    secondary: '#9CA3AF',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    background: '#0A0A0F',
    surface: '#1A1A24',
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    border: '#2D2D3A',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const typography = {
  h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  caption: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  small: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
};`}</code>
                    </pre>
                </div>
            </section>

            {/* Color Tokens */}
            <section className="mb-12">
                <h2 id="color-tokens" className="text-2xl font-bold mb-6">Color Tokens</h2>
                <p className="text-muted-foreground mb-6">
                    Our recommended color palette with light and dark mode variants.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold">Token</th>
                                <th className="text-left py-3 px-4 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4" /> Light
                                    </div>
                                </th>
                                <th className="text-left py-3 px-4 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Moon className="w-4 h-4" /> Dark
                                    </div>
                                </th>
                                <th className="text-left py-3 px-4 font-semibold">Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colorTokens.map((token) => (
                                <tr key={token.name} className="border-b border-border">
                                    <td className="py-3 px-4">
                                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                                            {token.name}
                                        </code>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-6 h-6 rounded border border-border"
                                                style={{ backgroundColor: token.light }}
                                            />
                                            <code className="text-xs font-mono text-muted-foreground">
                                                {token.light}
                                            </code>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-6 h-6 rounded border border-border"
                                                style={{ backgroundColor: token.dark }}
                                            />
                                            <code className="text-xs font-mono text-muted-foreground">
                                                {token.dark}
                                            </code>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">
                                        {token.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Dark Mode */}
            <section className="mb-12">
                <h2 id="dark-mode" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Moon className="w-6 h-6 text-primary" />
                    Dark Mode Implementation
                </h2>
                <p className="text-muted-foreground mb-6">
                    Implement theme switching with React Context and the Appearance API.
                </p>

                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-gray-300">{`// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { colors } from '@/constants/theme';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof colors.light;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('system');

  const isDark = theme === 'dark' || (theme === 'system' && systemColorScheme === 'dark');

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme, 
        colors: isDark ? colors.dark : colors.light,
        isDark 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`}</code>
                </pre>

                <h3 className="font-semibold mb-3">Usage in components</h3>
                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">{`import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { colors, isDark } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>
        Hello World
      </Text>
    </View>
  );
}`}</code>
                </pre>
            </section>

            {/* Spacing */}
            <section className="mb-12">
                <h2 id="spacing" className="text-2xl font-bold mb-6">Spacing Scale</h2>
                <p className="text-muted-foreground mb-6">
                    Consistent spacing tokens for margins, padding, and gaps.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {spacingTokens.map((token) => (
                        <div key={token.name} className="p-4 rounded-xl bg-card border border-border">
                            <div className="flex items-end gap-2 mb-2">
                                <div
                                    className="bg-primary rounded"
                                    style={{ width: `${token.value}px`, height: `${token.value}px` }}
                                />
                            </div>
                            <code className="text-sm font-mono font-semibold">{token.name}</code>
                            <p className="text-xs text-muted-foreground">{token.pixels}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Border Radius */}
            <section className="mb-12">
                <h2 id="border-radius" className="text-2xl font-bold mb-6">Border Radius</h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {radiusTokens.map((token) => (
                        <div key={token.name} className="text-center">
                            <div
                                className="w-16 h-16 bg-primary/20 border-2 border-primary mx-auto mb-2"
                                style={{ borderRadius: `${token.value}px` }}
                            />
                            <code className="text-sm font-mono">{token.name}</code>
                            <p className="text-xs text-muted-foreground">{token.value}px</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
                <h2 id="best-practices" className="text-2xl font-bold mb-6">Best Practices</h2>
                <div className="space-y-4">
                    {[
                        {
                            title: "Use semantic tokens",
                            description: "Prefer 'primary' over '#8B5CF6' for maintainability.",
                        },
                        {
                            title: "Test both themes",
                            description: "Always test your UI in both light and dark mode.",
                        },
                        {
                            title: "Consistent spacing",
                            description: "Use spacing tokens instead of arbitrary values.",
                        },
                        {
                            title: "Accessible contrast",
                            description: "Ensure text has sufficient contrast against backgrounds.",
                        },
                    ].map((practice) => (
                        <div
                            key={practice.title}
                            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                        >
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">{practice.title}</h3>
                                <p className="text-sm text-muted-foreground">{practice.description}</p>
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
                        href="/docs/animations"
                        className={cn(
                            "p-4 rounded-xl bg-card/50 border border-border",
                            "hover:border-primary/50 hover:bg-card transition-all duration-200",
                            "group"
                        )}
                    >
                        <h4 className="font-medium group-hover:text-primary transition-colors mb-1">
                            Animations Guide
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Add smooth animations to your components
                        </p>
                    </Link>
                    <Link
                        href="/docs/components/button"
                        className={cn(
                            "p-4 rounded-xl bg-card/50 border border-border",
                            "hover:border-primary/50 hover:bg-card transition-all duration-200",
                            "group"
                        )}
                    >
                        <h4 className="font-medium group-hover:text-primary transition-colors mb-1">
                            Browse Components
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            See theming in action
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
