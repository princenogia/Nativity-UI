<h1 align="center">Nativity UI</h1>

<p align="center">
  <strong>Beautiful, animated React Native components for Expo</strong>
</p>

<p align="center">
  A modern, open-source UI component library designed specifically for React Native and Expo developers. Copy-paste ready components with smooth animations powered by Reanimated 3.
</p>

<p align="center">
  <a href="https://github.com/princenogia/Nativity-UI/stargazers"><img src="https://img.shields.io/github/stars/princenogia/Nativity-UI?style=flat-square" alt="Stars" /></a>
  <a href="https://github.com/princenogia/Nativity-UI/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" /></a>
  <a href="https://github.com/princenogia/Nativity-UI/issues"><img src="https://img.shields.io/github/issues/princenogia/Nativity-UI?style=flat-square" alt="Issues" /></a>
  <img src="https://img.shields.io/badge/React%20Native-0.74+-blue?style=flat-square" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-SDK%2051+-purple?style=flat-square" alt="Expo SDK" />
</p>

<p align="center">
  <a href="https://nativity-ui.vercel.app">📖 Documentation</a> •
  <a href="https://nativity-ui.vercel.app/components">🧩 Components</a> •
  <a href="https://nativity-ui.vercel.app/examples">💡 Examples</a> •
  <a href="#quick-start">🚀 Quick Start</a>
</p>

---

## ✨ Why Nativity UI?

Unlike traditional component libraries that require complex installation and configuration, Nativity UI follows the **copy-paste philosophy**:

| Traditional Libraries | Nativity UI |
|----------------------|-------------|
| `npm install library` | Just copy the code |
| Import from `node_modules` | Import from your components folder |
| Library updates break your app | You own the code, full control |
| Forced styling decisions | Customize everything |
| Heavy bundle size | Only include what you use |

### Key Benefits

- **🎨 Copy-Paste Simple** — Browse the docs, copy the component code, paste into your project. That's it.
- **📱 Built for Expo** — Every component is tested and optimized for Expo SDK 51+
- **🌗 Dark Mode Ready** — All components automatically adapt to light and dark themes
- **⚡ 60fps Animations** — Powered by React Native Reanimated 3 for buttery-smooth animations
- **🧩 Zero Dependencies** — Components are self-contained with no external package requirements
- **🎯 TypeScript First** — Full type safety with comprehensive TypeScript definitions
- **📖 Extensively Documented** — Every component has live previews, code examples, and props documentation
- **♿ Accessibility Focused** — Components follow accessibility best practices

---

## 🧩 Component Library

### 28+ Production-Ready Components

Organized into 7 categories for easy navigation:

### Text Animations
Create stunning text effects that capture attention.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Split Text** | Animated text that reveals character by character with customizable stagger effect | [View →](https://nativity-ui.vercel.app/docs/components/split-text) |
| **Blur Text** | Text with smooth blur-in animation, perfect for hero sections | [View →](https://nativity-ui.vercel.app/docs/components/blur-text) |
| **Gradient Text** | Animated gradient text with smooth color transitions | [View →](https://nativity-ui.vercel.app/docs/components/gradient-text) |
| **Typewriter** | Classic typewriter effect with cursor animation | [View →](https://nativity-ui.vercel.app/docs/components/typewriter) |

### Content Animations
Bring your content to life with entrance animations.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Fade Content** | Smooth fade-in with optional direction (up, down, left, right) | [View →](https://nativity-ui.vercel.app/docs/components/fade-content) |
| **Scale Content** | Scale animation with spring physics for natural motion | [View →](https://nativity-ui.vercel.app/docs/components/scale-content) |
| **Slide In** | Slide in from any direction with customizable timing | [View →](https://nativity-ui.vercel.app/docs/components/slide-in) |

### Buttons
Interactive buttons with multiple variants and animations.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Button** | Pressable button with variants: default, outline, ghost, destructive | [View →](https://nativity-ui.vercel.app/docs/components/button) |
| **Gradient Button** | Eye-catching button with gradient background and glow effect | [View →](https://nativity-ui.vercel.app/docs/components/gradient-button) |
| **FAB** | Floating Action Button with expandable menu for quick actions | [View →](https://nativity-ui.vercel.app/docs/components/fab) |

### Form Inputs
Complete set of input components for building forms.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Input** | Text input with variants and validation states | [View →](https://nativity-ui.vercel.app/docs/components/input) |
| **Animated Input** | Material Design-style input with floating label | [View →](https://nativity-ui.vercel.app/docs/components/animated-input) |
| **Switch** | Toggle switch with smooth animation | [View →](https://nativity-ui.vercel.app/docs/components/switch) |
| **Checkbox** | Checkbox with spring animation and custom icons | [View →](https://nativity-ui.vercel.app/docs/components/checkbox) |
| **Slider** | Range slider with customizable track and thumb | [View →](https://nativity-ui.vercel.app/docs/components/slider) |
| **OTP Input** | 6-digit verification code input with auto-focus | [View →](https://nativity-ui.vercel.app/docs/components/otp-input) |

### Layout
Container and layout components for structuring content.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Card** | Flexible container with header, content, and footer slots | [View →](https://nativity-ui.vercel.app/docs/components/card) |
| **Glass Card** | Modern glassmorphism card with blur backdrop | [View →](https://nativity-ui.vercel.app/docs/components/glass-card) |
| **Accordion** | Collapsible sections with smooth expand/collapse animation | [View →](https://nativity-ui.vercel.app/docs/components/accordion) |
| **Tabs** | Tab navigation with animated sliding indicator | [View →](https://nativity-ui.vercel.app/docs/components/tabs) |
| **Modal** | Dialog overlay for focused user interactions | [View →](https://nativity-ui.vercel.app/docs/components/modal) |

### Data Display
Components for presenting information beautifully.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Avatar** | User profile image with fallback initials | [View →](https://nativity-ui.vercel.app/docs/components/avatar) |
| **Badge** | Small labels for status, counts, or categories | [View →](https://nativity-ui.vercel.app/docs/components/badge) |
| **Skeleton** | Loading placeholder with shimmer animation | [View →](https://nativity-ui.vercel.app/docs/components/skeleton) |
| **Progress** | Animated progress bar with spring physics | [View →](https://nativity-ui.vercel.app/docs/components/progress) |

### Feedback
User feedback and notification components.

| Component | Description | Preview |
|-----------|-------------|---------|
| **Alert** | Contextual messages for success, warning, error states | [View →](https://nativity-ui.vercel.app/docs/components/alert) |
| **Spinner** | Multiple spinner styles for loading states | [View →](https://nativity-ui.vercel.app/docs/components/spinner) |
| **Toast** | Non-blocking notifications with auto-dismiss | [View →](https://nativity-ui.vercel.app/docs/components/toast) |

---

## 📦 Installation & Setup

### Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** — [Download](https://nodejs.org/)
- **Expo CLI** — `npm install -g expo-cli`
- **Expo Go App** — Available on [iOS](https://apps.apple.com/app/expo-go/id982107779) and [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Step 1: Create a New Expo Project

```bash
# Create a new Expo project with TypeScript
npx create-expo-app@latest my-app --template blank-typescript
cd my-app
```

### Step 2: Install Required Dependencies

```bash
# React Native Reanimated (required for all animations)
npx expo install react-native-reanimated

# Optional: For blur effects (Glass Card, etc.)
npx expo install expo-blur

# Optional: For gesture-based components
npx expo install react-native-gesture-handler

# Optional: For linear gradients
npx expo install expo-linear-gradient
```

### Step 3: Configure Babel

Add the Reanimated plugin to your `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // Must be last
    ],
  };
};
```

### Step 4: Create Component Structure

```bash
# Create the components directory
mkdir -p components/ui
```

### Step 5: Copy Components

1. Visit [nativity-ui.vercel.app/components](https://nativity-ui.vercel.app/components)
2. Find the component you need
3. Click "Copy" to copy the source code
4. Create a new file in `components/ui/` (e.g., `components/ui/button.tsx`)
5. Paste the code

---

## 🚀 Quick Start

### Example: Using the Split Text Component

**1. Copy the component code from the docs**

Create `components/ui/split-text.tsx`:

```tsx
// Paste the Split Text component code here
// Available at: https://nativity-ui.vercel.app/docs/components/split-text
```

**2. Import and use in your app**

```tsx
import { View, StyleSheet } from 'react-native';
import { SplitText } from '@/components/ui/split-text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SplitText
        text="Welcome to Nativity UI"
        delay={50}
        style={styles.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0f',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
```

**3. Run your app**

```bash
npx expo start
```

---

## 💡 Example Templates

Get started faster with our pre-built templates:

| Template | Description | Components Used |
|----------|-------------|-----------------|
| **Todo App** | Task management with animations | Checkbox, Button, Input, Card |
| **E-commerce** | Product catalog with cart | Card, Badge, Button, Modal |
| **Finance Dashboard** | Analytics and data visualization | Progress, Card, Tabs |
| **Social Media** | Feed and profile layouts | Avatar, Card, Button, Toast |

View all templates at [nativity-ui.vercel.app/examples](https://nativity-ui.vercel.app/examples)

---

## 🎨 Theming & Customization

### Design Tokens

Nativity UI uses a simple design token system. Create a `theme.ts` file:

```ts
export const colors = {
  // Primary colors
  primary: '#8b5cf6',
  primaryForeground: '#ffffff',
  
  // Background colors
  background: '#0a0a0f',
  card: '#111116',
  
  // Text colors
  foreground: '#ffffff',
  muted: '#71717a',
  
  // Semantic colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Border colors
  border: '#27272a',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
};
```

### Dark Mode Support

```tsx
import { useColorScheme } from 'react-native';

export function useTheme() {
  const colorScheme = useColorScheme();
  
  return {
    isDark: colorScheme === 'dark',
    colors: colorScheme === 'dark' ? darkColors : lightColors,
  };
}
```

---

## 🛠️ Project Structure

```
nativity-ui/
├── src/
│   ├── app/                      # Next.js pages (documentation site)
│   │   ├── docs/
│   │   │   ├── components/       # Component documentation pages
│   │   │   │   └── [slug]/       # Dynamic component pages
│   │   │   ├── getting-started/  # Setup guide
│   │   │   ├── theming/          # Theme customization
│   │   │   └── animations/       # Animation guide
│   │   ├── components/           # Components gallery
│   │   └── examples/             # Example templates
│   ├── components/               # Site UI components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   ├── search-dialog.tsx     # Global search (⌘K)
│   │   └── component-previews.tsx
│   └── lib/                      # Utilities and data
│       ├── components-data.ts    # Component metadata (28 components)
│       ├── component-docs.ts     # Component documentation
│       ├── examples-data.ts      # Example template code
│       ├── search-data.ts        # Search index with synonyms
│       └── utils.ts              # Helper functions
├── public/
│   ├── logo.png
│   └── preview.gif
└── package.json
```

---

## 🔍 Search & Discovery

The documentation site includes a powerful search feature:

- **Keyboard Shortcut**: Press `⌘K` (Mac) or `Ctrl+K` (Windows) to open search
- **Instant Results**: Real-time filtering as you type
- **Synonym Support**: Search "toggle" to find "Switch", "install" to find "Getting Started"
- **Categorized Results**: Results grouped by Documentation, Components, Examples

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

```bash
# Clone the repository
git clone https://github.com/princenogia/Nativity-UI.git
cd Nativity-UI

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Contribution Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow the code style** — We use ESLint and Prettier
3. **Add documentation** — Every component needs docs and examples
4. **Test your changes** — Ensure builds pass with `npm run build`
5. **Submit a PR** — Include a clear description of changes

### Adding a New Component

1. Add component metadata to `src/lib/components-data.ts`
2. Add documentation to `src/lib/component-docs.ts`
3. Create preview in `src/components/component-previews.tsx`
4. Update search index in `src/lib/search-data.ts`

---

## 📄 License

MIT License — free for personal and commercial use.

See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

Built with these amazing technologies:

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) — Animation library
- [Expo](https://expo.dev) — Development platform
- [Next.js](https://nextjs.org) — Documentation site framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Lucide Icons](https://lucide.dev) — Icon library
- [cmdk](https://cmdk.paco.me) — Command palette

---

## 📬 Contact & Support

- **GitHub Issues** — [Report bugs or request features](https://github.com/princenogia/Nativity-UI/issues)
- **Discussions** — [Ask questions and share ideas](https://github.com/princenogia/Nativity-UI/discussions)
- **Twitter** — Follow for updates

---

<p align="center">
  <strong>Built with ❤️ for the React Native community</strong>
</p>

<p align="center">
  If Nativity UI helps your project, consider giving it a ⭐ on GitHub!
</p>
