export interface ComponentMeta {
  name: string;
  description: string;
  slug: string;
  category: string;
  isNew?: boolean;
  isStylish?: boolean;
}

export const components: ComponentMeta[] = [
  // ===== TEXT ANIMATIONS =====
  {
    name: "Split Text",
    description: "Animated text that reveals character by character.",
    slug: "split-text",
    category: "Text Animations",
    isNew: true,
    isStylish: true,
  },
  {
    name: "Blur Text",
    description: "Text with blur-in animation effect.",
    slug: "blur-text",
    category: "Text Animations",
    isNew: true,
    isStylish: true,
  },
  {
    name: "Gradient Text",
    description: "Animated gradient text with smooth color transitions.",
    slug: "gradient-text",
    category: "Text Animations",
    isNew: true,
    isStylish: true,
  },
  {
    name: "Typewriter",
    description: "Classic typewriter text animation effect.",
    slug: "typewriter",
    category: "Text Animations",
    isNew: true,
    isStylish: true,
  },

  // ===== ANIMATIONS =====
  {
    name: "Fade Content",
    description: "Fade in animation for content sections.",
    slug: "fade-content",
    category: "Animations",
    isNew: true,
  },
  {
    name: "Scale Content",
    description: "Scale animation with spring physics.",
    slug: "scale-content",
    category: "Animations",
    isNew: true,
  },
  {
    name: "Slide In",
    description: "Slide in animation from any direction.",
    slug: "slide-in",
    category: "Animations",
    isNew: true,
  },

  // ===== BUTTONS =====
  {
    name: "Button",
    description: "A pressable button component with multiple variants.",
    slug: "button",
    category: "Buttons",
  },
  {
    name: "Gradient Button",
    description: "A stylish button with gradient backgrounds and glow effect.",
    slug: "gradient-button",
    category: "Buttons",
    isNew: true,
    isStylish: true,
  },
  {
    name: "FAB",
    description: "Floating Action Button with expandable menu.",
    slug: "fab",
    category: "Buttons",
    isNew: true,
    isStylish: true,
  },

  // ===== INPUTS =====
  {
    name: "Input",
    description: "A text input field for user data entry.",
    slug: "input",
    category: "Inputs",
  },
  {
    name: "Animated Input",
    description: "Material-style input with floating label animation.",
    slug: "animated-input",
    category: "Inputs",
    isNew: true,
    isStylish: true,
  },
  {
    name: "Switch",
    description: "A toggle switch for boolean settings.",
    slug: "switch",
    category: "Inputs",
  },
  {
    name: "Checkbox",
    description: "A check box with spring animation.",
    slug: "checkbox",
    category: "Inputs",
    isNew: true,
  },
  {
    name: "Slider",
    description: "A customizable slider for selecting values.",
    slug: "slider",
    category: "Inputs",
    isNew: true,
  },
  {
    name: "OTP Input",
    description: "6-digit verification code input with auto-focus.",
    slug: "otp-input",
    category: "Inputs",
    isNew: true,
    isStylish: true,
  },

  // ===== LAYOUT =====
  {
    name: "Card",
    description: "A container component for grouping related content.",
    slug: "card",
    category: "Layout",
  },
  {
    name: "Glass Card",
    description: "A modern glassmorphism card with blur effect.",
    slug: "glass-card",
    category: "Layout",
    isNew: true,
    isStylish: true,
  },
  {
    name: "Accordion",
    description: "Collapsible content sections with smooth animations.",
    slug: "accordion",
    category: "Layout",
    isNew: true,
  },
  {
    name: "Tabs",
    description: "Animated tab navigation with sliding indicator.",
    slug: "tabs",
    category: "Layout",
    isNew: true,
  },

  // ===== OVERLAY =====
  {
    name: "Modal",
    description: "A dialog overlay for focused interactions.",
    slug: "modal",
    category: "Overlay",
  },

  // ===== DATA DISPLAY =====
  {
    name: "Avatar",
    description: "An image component for displaying user profile pictures.",
    slug: "avatar",
    category: "Data Display",
  },
  {
    name: "Badge",
    description: "A small label for status or count indicators.",
    slug: "badge",
    category: "Data Display",
  },
  {
    name: "Skeleton",
    description: "Loading placeholder with shimmer animation.",
    slug: "skeleton",
    category: "Data Display",
    isNew: true,
  },
  {
    name: "Progress",
    description: "Animated progress bar with spring animation.",
    slug: "progress",
    category: "Data Display",
    isNew: true,
  },

  // ===== FEEDBACK =====
  {
    name: "Alert",
    description: "A component for displaying important messages.",
    slug: "alert",
    category: "Feedback",
  },
  {
    name: "Spinner",
    description: "Animated loading spinner.",
    slug: "spinner",
    category: "Feedback",
    isNew: true,
  },
  {
    name: "Toast",
    description: "Toast notifications with animations.",
    slug: "toast",
    category: "Feedback",
    isNew: true,
  },
];

export const categories = [...new Set(components.map((c) => c.category))];

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentMeta[] {
  return components.filter((c) => c.category === category);
}
