"use client";

import Link from "next/link";
import { ArrowRight, Zap, Play, Pause, Settings2, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";



export default function AnimationsPage() {
    const animationTypes = [
        {
            name: "Spring",
            description: "Natural, physics-based animations with bounce",
            config: "{ damping: 15, stiffness: 150 }",
            useCase: "Buttons, cards, modals",
        },
        {
            name: "Timing",
            description: "Duration-based animations with easing",
            config: "{ duration: 300, easing: Easing.ease }",
            useCase: "Fades, slides, opacity changes",
        },
        {
            name: "Decay",
            description: "Momentum-based animations that slow down",
            config: "{ velocity: 1, deceleration: 0.998 }",
            useCase: "Scroll momentum, flick gestures",
        },
    ];

    const presets = [
        { name: "fadeIn", description: "Fade from transparent to opaque" },
        { name: "fadeOut", description: "Fade from opaque to transparent" },
        { name: "slideInRight", description: "Slide in from the right" },
        { name: "slideInLeft", description: "Slide in from the left" },
        { name: "slideInUp", description: "Slide in from below" },
        { name: "slideInDown", description: "Slide in from above" },
        { name: "scaleIn", description: "Scale up from small" },
        { name: "scaleOut", description: "Scale down to small" },
        { name: "bounce", description: "Bouncy entrance effect" },
        { name: "shake", description: "Horizontal shake for errors" },
        { name: "pulse", description: "Subtle pulsing effect" },
        { name: "spin", description: "Continuous rotation" },
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
                <span className="text-foreground">Animations</span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Animations</h1>
                <p className="text-lg text-muted-foreground">
                    Create smooth, 60fps animations using Reanimated 3 in your React Native apps.
                </p>
            </div>

            {/* Why Reanimated */}
            <section className="mb-12 p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h2 id="why-reanimated" className="text-2xl font-bold">Why Reanimated?</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    React Native Reanimated runs animations on the UI thread, delivering smooth
                    60fps performance even during JavaScript execution. All Nativity UI animated
                    components use Reanimated under the hood.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    {[
                        { label: "60 FPS", description: "Smooth animations always" },
                        { label: "UI Thread", description: "No JS thread blocking" },
                        { label: "Gesture Support", description: "Works with gestures" },
                    ].map((item) => (
                        <div key={item.label} className="p-3 rounded-lg bg-muted/50">
                            <div className="font-bold text-primary">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Setup */}
            <section className="mb-12">
                <h2 id="setup" className="text-2xl font-bold mb-6">Setup</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">1. Install dependencies</h3>
                        <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                            <code className="text-sm font-mono text-gray-300">
                                npx expo install react-native-reanimated react-native-gesture-handler
                            </code>
                        </pre>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">2. Configure Babel</h3>
                        <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                            <code className="text-sm font-mono text-gray-300">{`// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], // Must be last
  };
};`}</code>
                        </pre>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">3. Wrap with GestureHandlerRootView</h3>
                        <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                            <code className="text-sm font-mono text-gray-300">{`// app/_layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack />
    </GestureHandlerRootView>
  );
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Animation Types */}
            <section className="mb-12">
                <h2 id="animation-types" className="text-2xl font-bold mb-6">Animation Types</h2>
                <div className="space-y-4">
                    {animationTypes.map((type) => (
                        <div
                            key={type.name}
                            className="p-4 rounded-xl bg-card border border-border"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-lg">{type.name}</h3>
                                <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                    with{type.name}
                                </code>
                            </div>
                            <p className="text-muted-foreground mb-2">{type.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div>
                                    <span className="text-muted-foreground">Config: </span>
                                    <code className="font-mono text-xs bg-muted/50 px-1 rounded">
                                        {type.config}
                                    </code>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Best for: </span>
                                    <span>{type.useCase}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Basic Example */}
            <section className="mb-12">
                <h2 id="basic-example" className="text-2xl font-bold mb-6">Basic Example</h2>
                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">{`import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';
import { Pressable } from 'react-native';

function AnimatedButton() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text>Press Me</Text>
      </Animated.View>
    </Pressable>
  );
}`}</code>
                </pre>
            </section>

            {/* Entering/Exiting Animations */}
            <section className="mb-12">
                <h2 id="entering-exiting" className="text-2xl font-bold mb-6">Entering & Exiting Animations</h2>
                <p className="text-muted-foreground mb-4">
                    Reanimated provides built-in entering and exiting animations for components.
                </p>
                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">{`import Animated, { FadeIn, FadeOut, SlideInRight } from 'react-native-reanimated';

function AnimatedCard({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <Animated.View
      entering={FadeIn.duration(300).springify()}
      exiting={FadeOut.duration(200)}
    >
      <Card>
        <Text>I animate in and out!</Text>
      </Card>
    </Animated.View>
  );
}

// Or use SlideIn variants
<Animated.View entering={SlideInRight.delay(100).springify()}>
  <Text>Slides in from right</Text>
</Animated.View>`}</code>
                </pre>
            </section>

            {/* Animation Presets */}
            <section className="mb-12">
                <h2 id="presets" className="text-2xl font-bold mb-6">Animation Presets</h2>
                <p className="text-muted-foreground mb-4">
                    Common animation patterns you can copy and use in your projects.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {presets.map((preset) => (
                        <div
                            key={preset.name}
                            className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                        >
                            <code className="text-sm font-mono font-semibold text-primary">
                                {preset.name}
                            </code>
                            <p className="text-xs text-muted-foreground mt-1">
                                {preset.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gesture Integration */}
            <section className="mb-12">
                <h2 id="gesture-integration" className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Settings2 className="w-6 h-6 text-primary" />
                    Gesture Integration
                </h2>
                <p className="text-muted-foreground mb-4">
                    Combine Reanimated with Gesture Handler for interactive animations.
                </p>
                <pre className="p-4 rounded-lg bg-[#0d1117] border border-border overflow-x-auto">
                    <code className="text-sm font-mono text-gray-300">{`import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

function DraggableCard() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text>Drag me!</Text>
      </Animated.View>
    </GestureDetector>
  );
}`}</code>
                </pre>
            </section>

            {/* Performance Tips */}
            <section className="mb-12">
                <h2 id="performance" className="text-2xl font-bold mb-6">Performance Tips</h2>
                <div className="space-y-3">
                    {[
                        {
                            title: "Use withSpring for natural feel",
                            description: "Spring animations feel more natural than timing animations.",
                        },
                        {
                            title: "Avoid animating layout properties",
                            description: "Prefer transform over width/height for better performance.",
                        },
                        {
                            title: "Use useAnimatedStyle, not inline styles",
                            description: "Inline animated styles cause unnecessary re-renders.",
                        },
                        {
                            title: "Memoize complex calculations",
                            description: "Use useDerivedValue for computed animated values.",
                        },
                        {
                            title: "Test on real devices",
                            description: "Simulators don't accurately represent animation performance.",
                        },
                    ].map((tip) => (
                        <div
                            key={tip.title}
                            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                        >
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">{tip.title}</h3>
                                <p className="text-sm text-muted-foreground">{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Steps */}
            <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 border border-primary/10">
                <h2 className="text-2xl font-bold mb-4">Explore Animated Components</h2>
                <p className="text-muted-foreground mb-6">
                    See animations in action with our pre-built components.
                </p>
                <div className="flex flex-wrap gap-3">
                    {[
                        { name: "Fade Content", href: "/docs/components/fade-content" },
                        { name: "Scale Content", href: "/docs/components/scale-content" },
                        { name: "Slide In", href: "/docs/components/slide-in" },
                        { name: "Split Text", href: "/docs/components/split-text" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
                                "bg-card border border-border",
                                "hover:border-primary/50 hover:text-primary transition-all duration-200"
                            )}
                        >
                            {item.name}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
