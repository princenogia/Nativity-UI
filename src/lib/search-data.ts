/**
 * @file search-data.ts
 * @description Unified search index for the global search dialog.
 * Aggregates components, examples, documentation, and features with
 * metadata for fuzzy matching, synonyms, and priority ranking.
 */

import { components } from "./components-data";
import { examples } from "./examples-data";
import {
    Layout,
    Zap,
    Palette,
    Layers,
    Smartphone,
    Type,
    Box,
    MousePointer2,
    FormInput,
    Component,
    FileText,
    Code2,
    Sparkles,
} from "lucide-react";

/**
 * Searchable item for the global search index.
 */
export type SearchItem = {
    /** Unique identifier */
    id: string;
    /** Display title */
    title: string;
    /** Item category: component, example, doc, or feature */
    type: 'component' | 'example' | 'doc' | 'feature';
    /** Navigation URL */
    href: string;
    /** Short description for display */
    description?: string;
    /** Keywords for search matching */
    keywords?: string[];
    /** Alternative terms (e.g., "toggle" for Switch) */
    synonyms?: string[];
    /** Icon component for display */
    icon: any;
    /** Component category for grouping */
    category?: string;
    /** Search ranking priority (1-10, higher = more relevant) */
    priority?: number;
    /** Target framework */
    framework?: 'react-native' | 'flutter' | 'both';
};


// Map component categories to icons
const categoryIcons: Record<string, any> = {
    "Text Animations": Type,
    "Animations": Layers,
    "Buttons": MousePointer2,
    "Inputs": FormInput,
    "Layout": Layout,
    "Overlay": Box,
    "Data Display": Component,
    "Feedback": Zap,
};

// Synonym mappings for common developer terms
const componentSynonyms: Record<string, string[]> = {
    "button": ["click", "action", "submit", "press", "tap", "cta"],
    "input": ["text field", "form", "textbox", "entry"],
    "switch": ["toggle", "on off", "boolean"],
    "checkbox": ["check", "tick", "select"],
    "slider": ["range", "volume", "seek"],
    "modal": ["dialog", "popup", "overlay", "sheet"],
    "card": ["container", "box", "panel"],
    "avatar": ["profile", "user image", "photo"],
    "badge": ["tag", "label", "chip", "pill"],
    "skeleton": ["loading", "placeholder", "shimmer"],
    "progress": ["loading bar", "percentage", "status"],
    "alert": ["notification", "message", "warning"],
    "spinner": ["loader", "loading", "indicator"],
    "toast": ["snackbar", "notification", "message"],
    "tabs": ["navigation", "segmented", "sections"],
    "accordion": ["collapse", "expandable", "dropdown"],
    "fab": ["floating button", "action button", "plus button"],
    "otp-input": ["verification", "code input", "pin"],
    "typewriter": ["typing", "text animation", "reveal"],
    "blur-text": ["blur animation", "fade text"],
    "split-text": ["character animation", "letter animation"],
    "gradient-text": ["colorful text", "animated text"],
};

// 1. Components - with enhanced metadata
const componentItems: SearchItem[] = components.map(c => {
    const slugKey = c.slug.toLowerCase();
    return {
        id: `component-${c.slug}`,
        title: c.name,
        type: 'component',
        href: `/docs/components/${c.slug}`,
        description: c.description,
        keywords: [c.category, 'ui', 'component', c.slug, ...(c.isNew ? ['new', 'latest'] : [])],
        synonyms: componentSynonyms[slugKey] || [],
        icon: categoryIcons[c.category] || Box,
        category: c.category,
        priority: c.isNew ? 8 : 5,
        framework: 'react-native',
    };
});

// 2. Examples - with enhanced metadata
const exampleItems: SearchItem[] = examples.map(e => ({
    id: `example-${e.id}`,
    title: e.name,
    type: 'example',
    href: `/examples/${e.id}`,
    description: e.description,
    keywords: ['template', 'starter', 'app', 'code', 'example', e.difficulty, ...e.components],
    synonyms: ['sample', 'demo', 'project', 'boilerplate'],
    icon: Smartphone,
    priority: 6,
    framework: 'react-native',
}));

// 3. Documentation - with enhanced metadata
const docItems: SearchItem[] = [
    {
        id: 'doc-intro',
        title: 'Introduction',
        type: 'doc',
        href: '/docs',
        description: 'Overview of Nativity UI',
        keywords: ['intro', 'overview', 'about', 'welcome', 'home'],
        synonyms: ['start', 'begin', 'what is'],
        icon: FileText,
        priority: 10,
    },
    {
        id: 'doc-getting-started',
        title: 'Getting Started',
        type: 'doc',
        href: '/docs/getting-started',
        description: 'Installation and setup guide',
        keywords: ['install', 'setup', 'usage', 'npm', 'yarn', 'cli', 'expo', 'create'],
        synonyms: ['how to install', 'quick start', 'begin', 'tutorial'],
        icon: Zap,
        priority: 9,
    },
    {
        id: 'doc-theming',
        title: 'Theming',
        type: 'doc',
        href: '/docs/theming',
        description: 'Colors, dark mode, and design tokens',
        keywords: ['colors', 'dark mode', 'light mode', 'design system', 'tokens', 'css', 'styles', 'theme'],
        synonyms: ['styling', 'customization', 'branding', 'appearance', 'look'],
        icon: Palette,
        priority: 8,
    },
    {
        id: 'doc-animations',
        title: 'Animations',
        type: 'doc',
        href: '/docs/animations',
        description: 'Guide to using Reanimated with Nativity UI',
        keywords: ['reanimated', 'motion', 'gestures', 'shared values', 'spring', 'timing'],
        synonyms: ['movement', 'transitions', 'effects', 'animate'],
        icon: Layers,
        priority: 8,
    },
];

// 4. Features (Shortcuts to specific concepts)
const featureItems: SearchItem[] = [
    {
        id: 'feat-dark-mode',
        title: 'Dark Mode',
        type: 'feature',
        href: '/docs/theming#dark-mode',
        description: 'Enable dark theme',
        keywords: ['theme', 'night', 'color scheme', 'dark'],
        synonyms: ['night mode', 'dark theme', 'black mode'],
        icon: Palette,
        priority: 7,
    },
    {
        id: 'feat-installation',
        title: 'Installation',
        type: 'feature',
        href: '/docs/getting-started#installation',
        description: 'npm install nativity-ui',
        keywords: ['npm', 'yarn', 'install', 'add', 'package'],
        synonyms: ['how to install', 'setup'],
        icon: Code2,
        priority: 9,
    },
    {
        id: 'feat-components-gallery',
        title: 'Components Gallery',
        type: 'feature',
        href: '/components',
        description: 'Browse all UI components',
        keywords: ['all', 'list', 'browse', 'gallery'],
        synonyms: ['component list', 'ui library', 'all components'],
        icon: Sparkles,
        priority: 8,
    },
];

/**
 * Aggregated search items sorted by priority.
 */
export const searchItems: SearchItem[] = [
    ...docItems,
    ...componentItems,
    ...exampleItems,
    ...featureItems,
].sort((a, b) => (b.priority || 5) - (a.priority || 5));

/**
 * Groups search items by type for categorized display.
 * @returns Object with docs, components, examples, and features arrays.
 */
export const getGroupedItems = () => {
    return {
        docs: searchItems.filter(i => i.type === 'doc'),
        components: searchItems.filter(i => i.type === 'component'),
        examples: searchItems.filter(i => i.type === 'example'),
        features: searchItems.filter(i => i.type === 'feature'),
    };
};


/**
 * Filters search items by query, matching title, description, keywords, synonyms, and category.
 * Results are sorted by title match, then priority.
 * @param query - Search query string
 * @returns Filtered and sorted array of matching items
 */
export function filterSearchItems(query: string): SearchItem[] {
    if (!query.trim()) return searchItems;

    const q = query.toLowerCase().trim();

    return searchItems.filter(item => {
        const title = item.title.toLowerCase();
        const desc = (item.description || '').toLowerCase();
        const keywords = (item.keywords || []).join(' ').toLowerCase();
        const synonyms = (item.synonyms || []).join(' ').toLowerCase();
        const category = (item.category || '').toLowerCase();

        return (
            title.includes(q) ||
            desc.includes(q) ||
            keywords.includes(q) ||
            synonyms.includes(q) ||
            category.includes(q)
        );
    }).sort((a, b) => {
        // Prioritize title matches
        const aTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
        const bTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
        if (aTitle !== bTitle) return bTitle - aTitle;

        // Then by priority
        return (b.priority || 5) - (a.priority || 5);
    });
}

