export interface ComponentDocumentation {
  slug: string;
  name: string;
  description: string;
  usage: string;
  code: string;
  props: PropDefinition[];
  preview: PreviewItem[];
}

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface PreviewItem {
  label: string;
  props?: Record<string, unknown>;
}

export const componentDocs: Record<string, ComponentDocumentation> = {
  button: {
    slug: "button",
    name: "Button",
    description:
      "A pressable button component with multiple variants and sizes.",
    usage: `import { Button } from '@/components/ui/button';

export default function Example() {
  return (
    <Button variant="default" onPress={() => console.log('Pressed!')}>
      Click Me
    </Button>
  );
}`,
    code: `import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
}

const colors = {
  primary: '#8B5CF6',
  primaryForeground: '#FFFFFF',
  secondary: '#F4F4F5',
  secondaryForeground: '#18181B',
  destructive: '#EF4444',
  destructiveForeground: '#FFFFFF',
  muted: '#A1A1AA',
  border: '#E4E4E7',
};

export function Button({
  children,
  variant = 'default',
  size = 'md',
  loading = false,
  disabled = false,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: colors.secondary };
      case 'outline':
        return { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.border };
      case 'ghost':
        return { backgroundColor: 'transparent' };
      case 'destructive':
        return { backgroundColor: colors.destructive };
      default:
        return { backgroundColor: colors.primary };
    }
  };

  const getTextColor = (): string => {
    switch (variant) {
      case 'secondary': return colors.secondaryForeground;
      case 'outline':
      case 'ghost': return colors.primary;
      case 'destructive': return colors.destructiveForeground;
      default: return colors.primaryForeground;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getVariantStyles(), isDisabled && styles.disabled, style]}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <Text style={[styles.text, { color: getTextColor() }]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: { fontWeight: '600', fontSize: 16 },
  disabled: { opacity: 0.5 },
});`,
    props: [
      {
        name: "variant",
        type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'",
        default: "'default'",
        description: "The visual style of the button.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "The size of the button.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Shows a loading spinner and disables the button.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the button.",
      },
    ],
    preview: [
      { label: "Default" },
      { label: "Secondary", props: { variant: "secondary" } },
      { label: "Outline", props: { variant: "outline" } },
      { label: "Destructive", props: { variant: "destructive" } },
    ],
  },

  card: {
    slug: "card",
    name: "Card",
    description:
      "A container component for grouping related content with optional header and footer.",
    usage: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Your content here</Text>
      </CardContent>
    </Card>
  );
}`,
    code: `import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

const colors = {
  card: '#FFFFFF',
  cardForeground: '#18181B',
  muted: '#71717A',
  border: '#E4E4E7',
};

export function Card({ children, style, ...props }: ViewProps & { children: React.ReactNode }) {
  return <View style={[styles.card, style]} {...props}>{children}</View>;
}

export function CardHeader({ children, style, ...props }: ViewProps & { children: React.ReactNode }) {
  return <View style={[styles.header, style]} {...props}>{children}</View>;
}

export function CardTitle({ children, style }: { children: React.ReactNode; style?: object }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function CardDescription({ children, style }: { children: React.ReactNode; style?: object }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

export function CardContent({ children, style, ...props }: ViewProps & { children: React.ReactNode }) {
  return <View style={[styles.content, style]} {...props}>{children}</View>;
}

export function CardFooter({ children, style, ...props }: ViewProps & { children: React.ReactNode }) {
  return <View style={[styles.footer, style]} {...props}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  header: { padding: 16, paddingBottom: 8 },
  title: { fontSize: 18, fontWeight: '600', color: colors.cardForeground, marginBottom: 4 },
  description: { fontSize: 14, color: colors.muted },
  content: { padding: 16, paddingTop: 0 },
  footer: { padding: 16, paddingTop: 8, flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border },
});`,
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "The card content.",
      },
      {
        name: "style",
        type: "ViewStyle",
        description: "Additional styles for the card container.",
      },
    ],
    preview: [],
  },

  input: {
    slug: "input",
    name: "Input",
    description: "A text input field with label and error state support.",
    usage: `import { Input } from '@/components/ui/input';

export default function Example() {
  const [value, setValue] = React.useState('');
  
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      value={value}
      onChangeText={setValue}
    />
  );
}`,
    code: `import React, { forwardRef } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

const colors = {
  background: '#FFFFFF',
  foreground: '#18181B',
  muted: '#71717A',
  border: '#E4E4E7',
  destructive: '#EF4444',
};

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, disabled, containerStyle, style, ...props }, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[styles.input, disabled && styles.disabled, error && styles.error, style]}
          placeholderTextColor={colors.muted}
          editable={!disabled}
          {...props}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: { width: '100%' },
  label: { fontSize: 14, fontWeight: '500', color: colors.foreground, marginBottom: 6 },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.foreground,
  },
  disabled: { opacity: 0.5, backgroundColor: '#F4F4F5' },
  error: { borderColor: colors.destructive },
  errorText: { fontSize: 12, color: colors.destructive, marginTop: 4 },
});`,
    props: [
      {
        name: "label",
        type: "string",
        description: "Label text above the input.",
      },
      {
        name: "error",
        type: "string",
        description: "Error message to display below the input.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the input.",
      },
    ],
    preview: [],
  },

  avatar: {
    slug: "avatar",
    name: "Avatar",
    description:
      "An image component for displaying user profile pictures with fallback support.",
    usage: `import { Avatar, AvatarGroup } from '@/components/ui/avatar';

export default function Example() {
  return (
    <AvatarGroup>
      <Avatar src="https://example.com/user1.jpg" fallback="JD" />
      <Avatar src="https://example.com/user2.jpg" fallback="AS" />
    </AvatarGroup>
  );
}`,
    code: `import React from 'react';
import { View, Image, Text, StyleSheet, ViewStyle } from 'react-native';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  fallback?: string;
  size?: AvatarSize;
  style?: ViewStyle;
}

const sizeMap: Record<AvatarSize, number> = { sm: 32, md: 40, lg: 56, xl: 80 };

export function Avatar({ src, fallback, size = 'md', style }: AvatarProps) {
  const dimension = sizeMap[size];
  const [error, setError] = React.useState(false);

  return (
    <View style={[styles.container, { width: dimension, height: dimension, borderRadius: dimension / 2 }, style]}>
      {!src || error ? (
        <View style={[styles.fallback, { borderRadius: dimension / 2 }]}>
          <Text style={styles.fallbackText}>{fallback?.slice(0, 2).toUpperCase() || '?'}</Text>
        </View>
      ) : (
        <Image source={{ uri: src }} style={[styles.image, { width: dimension, height: dimension, borderRadius: dimension / 2 }]} onError={() => setError(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: 'hidden', borderWidth: 2, borderColor: '#E4E4E7' },
  image: { resizeMode: 'cover' },
  fallback: { flex: 1, backgroundColor: '#F4F4F5', alignItems: 'center', justifyContent: 'center' },
  fallbackText: { color: '#71717A', fontWeight: '600' },
});`,
    props: [
      { name: "src", type: "string", description: "URL of the avatar image." },
      {
        name: "fallback",
        type: "string",
        description:
          "Text to display when image fails to load (first 2 chars used).",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "The size of the avatar.",
      },
    ],
    preview: [],
  },

  badge: {
    slug: "badge",
    name: "Badge",
    description: "A small label for status or count indicators.",
    usage: `import { Badge } from '@/components/ui/badge';

export default function Example() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge variant="default">New</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
    </View>
  );
}`,
    code: `import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; border?: string }> = {
  default: { bg: '#8B5CF6', text: '#FFFFFF' },
  secondary: { bg: '#F4F4F5', text: '#18181B' },
  success: { bg: '#DCFCE7', text: '#166534' },
  warning: { bg: '#FEF3C7', text: '#92400E' },
  destructive: { bg: '#FEE2E2', text: '#DC2626' },
  outline: { bg: 'transparent', text: '#18181B', border: '#E4E4E7' },
};

export function Badge({ children, variant = 'default', style }: BadgeProps) {
  const v = variantStyles[variant];
  return (
    <View style={[styles.badge, { backgroundColor: v.bg, borderWidth: v.border ? 1 : 0, borderColor: v.border }, style]}>
      <Text style={[styles.text, { color: v.text }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 9999, alignSelf: 'flex-start' },
  text: { fontSize: 12, fontWeight: '600' },
});`,
    props: [
      {
        name: "variant",
        type: "'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'",
        default: "'default'",
        description: "The visual style of the badge.",
      },
    ],
    preview: [
      { label: "Default" },
      { label: "Success", props: { variant: "success" } },
      { label: "Warning", props: { variant: "warning" } },
      { label: "Destructive", props: { variant: "destructive" } },
    ],
  },

  alert: {
    slug: "alert",
    name: "Alert",
    description: "A component for displaying important messages to users.",
    usage: `import { Alert } from '@/components/ui/alert';

export default function Example() {
  return (
    <Alert variant="success" title="Success!">
      Your changes have been saved.
    </Alert>
  );
}`,
    code: `import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type AlertVariant = 'default' | 'success' | 'warning' | 'destructive';

interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; title: string; text: string }> = {
  default: { bg: '#F4F4F5', border: '#E4E4E7', title: '#18181B', text: '#52525B' },
  success: { bg: '#DCFCE7', border: '#86EFAC', title: '#166534', text: '#15803D' },
  warning: { bg: '#FEF3C7', border: '#FDE68A', title: '#92400E', text: '#A16207' },
  destructive: { bg: '#FEE2E2', border: '#FECACA', title: '#DC2626', text: '#B91C1C' },
};

export function Alert({ title, children, variant = 'default', icon, style }: AlertProps) {
  const v = variantStyles[variant];
  return (
    <View style={[styles.alert, { backgroundColor: v.bg, borderColor: v.border }, style]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.content}>
        {title && <Text style={[styles.title, { color: v.title }]}>{title}</Text>}
        <Text style={[styles.description, { color: v.text }]}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: { flexDirection: 'row', borderRadius: 12, borderWidth: 1, padding: 16 },
  iconContainer: { marginRight: 12 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  description: { fontSize: 14, lineHeight: 20 },
});`,
    props: [
      {
        name: "variant",
        type: "'default' | 'success' | 'warning' | 'destructive'",
        default: "'default'",
        description: "The visual style of the alert.",
      },
      { name: "title", type: "string", description: "The alert title." },
      {
        name: "icon",
        type: "React.ReactNode",
        description: "Optional icon to display.",
      },
    ],
    preview: [],
  },

  switch: {
    slug: "switch",
    name: "Switch",
    description: "A toggle switch for boolean settings.",
    usage: `import { Switch } from '@/components/ui/switch';

export default function Example() {
  const [enabled, setEnabled] = React.useState(false);
  
  return (
    <Switch
      label="Enable notifications"
      value={enabled}
      onValueChange={setEnabled}
    />
  );
}`,
    code: `import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: ViewStyle;
}

export function Switch({ value, onValueChange, disabled, label, style }: SwitchProps) {
  const translateX = React.useRef(new Animated.Value(value ? 20 : 0)).current;

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 20 : 0,
      useNativeDriver: true,
      tension: 100,
      friction: 10,
    }).start();
  }, [value]);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={() => !disabled && onValueChange(!value)} activeOpacity={0.8}>
      {label && <Text style={[styles.label, disabled && styles.disabledText]}>{label}</Text>}
      <View style={[styles.track, { backgroundColor: value ? '#8B5CF6' : '#E4E4E7' }, disabled && styles.disabled]}>
        <Animated.View style={[styles.thumb, { transform: [{ translateX }] }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { fontSize: 16, color: '#18181B', flex: 1 },
  track: { width: 48, height: 28, borderRadius: 14, padding: 2, justifyContent: 'center' },
  thumb: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  disabled: { opacity: 0.5 },
  disabledText: { opacity: 0.5 },
});`,
    props: [
      {
        name: "value",
        type: "boolean",
        description: "The current value of the switch.",
      },
      {
        name: "onValueChange",
        type: "(value: boolean) => void",
        description: "Callback when value changes.",
      },
      {
        name: "label",
        type: "string",
        description: "Label text displayed next to the switch.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the switch.",
      },
    ],
    preview: [],
  },

  modal: {
    slug: "modal",
    name: "Modal",
    description: "A dialog overlay for focused interactions.",
    usage: `import { Modal, ModalFooter } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

export default function Example() {
  const [visible, setVisible] = React.useState(false);
  
  return (
    <>
      <Button onPress={() => setVisible(true)}>Open Modal</Button>
      <Modal visible={visible} onClose={() => setVisible(false)} title="Confirm Action">
        <Text>Are you sure you want to continue?</Text>
        <ModalFooter>
          <Button variant="outline" onPress={() => setVisible(false)}>Cancel</Button>
          <Button onPress={() => setVisible(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}`,
    code: `import React from 'react';
import { Modal as RNModal, View, Text, TouchableOpacity, StyleSheet, Pressable, ViewStyle } from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  style?: ViewStyle;
}

export function Modal({ visible, onClose, children, title, style }: ModalProps) {
  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={[styles.content, style]} onPress={(e) => e.stopPropagation()}>
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.body}>{children}</View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

export function ModalFooter({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  content: { backgroundColor: '#FFFFFF', borderRadius: 16, width: '100%', maxWidth: 400, overflow: 'hidden' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: '#E4E4E7' },
  title: { fontSize: 18, fontWeight: '600', color: '#18181B' },
  closeButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F4F4F5', alignItems: 'center', justifyContent: 'center' },
  closeText: { fontSize: 16, color: '#71717A' },
  body: { padding: 16 },
  footer: { flexDirection: 'row', justifyContent: 'flex-end', gap: 8, padding: 16, borderTopWidth: 1, borderTopColor: '#E4E4E7' },
});`,
    props: [
      {
        name: "visible",
        type: "boolean",
        description: "Controls the visibility of the modal.",
      },
      {
        name: "onClose",
        type: "() => void",
        description: "Callback when the modal should close.",
      },
      {
        name: "title",
        type: "string",
        description: "Optional title for the modal header.",
      },
    ],
    preview: [],
  },

  // ===== NEW COMPONENTS =====

  spinner: {
    slug: "spinner",
    name: "Spinner",
    description: "Animated loading spinner with customizable size and color.",
    usage: `import { Spinner } from '@/components/ui/spinner';

export default function Example() {
  return <Spinner size="md" color="#8B5CF6" />;
}`,
    code: `import React from 'react';
import { View, Animated, StyleSheet, Easing, ViewStyle } from 'react-native';

type SpinnerSize = 'sm' | 'md' | 'lg';

interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
  style?: ViewStyle;
}

const sizeMap: Record<SpinnerSize, number> = { sm: 20, md: 32, lg: 48 };

export function Spinner({ size = 'md', color = '#8B5CF6', style }: SpinnerProps) {
  const spinValue = React.useRef(new Animated.Value(0)).current;
  const dimension = sizeMap[size];

  React.useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { width: dimension, height: dimension }, style]}>
      <Animated.View
        style={[styles.spinner, {
          width: dimension,
          height: dimension,
          borderWidth: dimension / 8,
          borderColor: color,
          borderTopColor: 'transparent',
          transform: [{ rotate }],
        }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  spinner: { borderRadius: 9999 },
});`,
    props: [
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Size of the spinner.",
      },
      {
        name: "color",
        type: "string",
        default: "'#8B5CF6'",
        description: "Color of the spinner.",
      },
    ],
    preview: [],
  },

  progress: {
    slug: "progress",
    name: "Progress",
    description: "Animated progress bar with spring animation.",
    usage: `import { Progress } from '@/components/ui/progress';

export default function Example() {
  return <Progress value={75} />;
}`,
    code: `import React from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';

interface ProgressProps {
  value: number; // 0-100
  height?: number;
  color?: string;
  backgroundColor?: string;
  animated?: boolean;
  style?: ViewStyle;
}

export function Progress({ value, height = 8, color = '#8B5CF6', backgroundColor = '#E4E4E7', animated = true, style }: ProgressProps) {
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const clampedValue = Math.min(100, Math.max(0, value));

  React.useEffect(() => {
    if (animated) {
      Animated.spring(animatedWidth, {
        toValue: clampedValue,
        useNativeDriver: false,
        tension: 40,
        friction: 10,
      }).start();
    } else {
      animatedWidth.setValue(clampedValue);
    }
  }, [clampedValue, animated, animatedWidth]);

  const width = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.track, { height, backgroundColor, borderRadius: height / 2 }, style]}>
      <Animated.View style={[styles.fill, { width, height, backgroundColor: color, borderRadius: height / 2 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { overflow: 'hidden', width: '100%' },
  fill: { position: 'absolute', left: 0, top: 0 },
});`,
    props: [
      {
        name: "value",
        type: "number",
        description: "Progress value from 0 to 100.",
      },
      {
        name: "height",
        type: "number",
        default: "8",
        description: "Height of the progress bar.",
      },
      {
        name: "color",
        type: "string",
        default: "'#8B5CF6'",
        description: "Fill color.",
      },
      {
        name: "animated",
        type: "boolean",
        default: "true",
        description: "Enable spring animation.",
      },
    ],
    preview: [],
  },

  checkbox: {
    slug: "checkbox",
    name: "Checkbox",
    description: "Animated checkbox with spring animation.",
    usage: `import { Checkbox } from '@/components/ui/checkbox';

export default function Example() {
  const [checked, setChecked] = React.useState(false);
  return <Checkbox checked={checked} onCheckedChange={setChecked} label="Accept terms" />;
}`,
    code: `import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Checkbox({ checked, onCheckedChange, label, disabled, style }: CheckboxProps) {
  const scale = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(scale, {
      toValue: checked ? 1 : 0,
      useNativeDriver: true,
      tension: 300,
      friction: 20,
    }).start();
  }, [checked, scale]);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={() => !disabled && onCheckedChange(!checked)} activeOpacity={0.8}>
      <View style={[styles.checkbox, checked && styles.checked, disabled && styles.disabled]}>
        <Animated.View style={[styles.checkmark, { opacity: scale, transform: [{ scale }] }]}>
          <Text style={styles.checkmarkText}>✓</Text>
        </Animated.View>
      </View>
      {label && <Text style={[styles.label, disabled && styles.disabledLabel]}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: '#E4E4E7', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' },
  checked: { backgroundColor: '#8B5CF6', borderColor: '#8B5CF6' },
  checkmark: { justifyContent: 'center', alignItems: 'center' },
  checkmarkText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  label: { marginLeft: 10, fontSize: 16, color: '#18181B' },
  disabled: { opacity: 0.5 },
  disabledLabel: { opacity: 0.5 },
});`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Whether the checkbox is checked.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback when state changes.",
      },
      {
        name: "label",
        type: "string",
        description: "Label text next to checkbox.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the checkbox.",
      },
    ],
    preview: [],
  },

  skeleton: {
    slug: "skeleton",
    name: "Skeleton",
    description: "Loading placeholder with shimmer animation.",
    usage: `import { Skeleton, SkeletonCard } from '@/components/ui/skeleton';

export default function Example() {
  return (
    <View>
      <Skeleton width={200} height={20} />
      <SkeletonCard />
    </View>
  );
}`,
    code: `import React from 'react';
import { View, Animated, StyleSheet, ViewStyle, Easing } from 'react-native';

interface SkeletonProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

export function Skeleton({ width = '100%', height = 20, borderRadius = 8, style }: SkeletonProps) {
  const shimmerValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const shimmer = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, { toValue: 1, duration: 1000, easing: Easing.ease, useNativeDriver: true }),
        Animated.timing(shimmerValue, { toValue: 0, duration: 1000, easing: Easing.ease, useNativeDriver: true }),
      ])
    );
    shimmer.start();
    return () => shimmer.stop();
  }, [shimmerValue]);

  const opacity = shimmerValue.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.7] });

  return <Animated.View style={[styles.skeleton, { width, height, borderRadius, opacity }, style]} />;
}

const styles = StyleSheet.create({
  skeleton: { backgroundColor: '#E4E4E7' },
});`,
    props: [
      {
        name: "width",
        type: "number | string",
        default: "'100%'",
        description: "Width of the skeleton.",
      },
      {
        name: "height",
        type: "number",
        default: "20",
        description: "Height of the skeleton.",
      },
      {
        name: "borderRadius",
        type: "number",
        default: "8",
        description: "Border radius.",
      },
    ],
    preview: [],
  },

  tabs: {
    slug: "tabs",
    name: "Tabs",
    description: "Animated tab navigation with sliding indicator.",
    usage: `import { Tabs } from '@/components/ui/tabs';

export default function Example() {
  return (
    <Tabs tabs={[
      { key: 'tab1', label: 'Tab 1', content: <Text>Content 1</Text> },
      { key: 'tab2', label: 'Tab 2', content: <Text>Content 2</Text> },
    ]} />
  );
}`,
    code: `// See full implementation in registry/components/tabs.tsx`,
    props: [
      {
        name: "tabs",
        type: "Tab[]",
        description: "Array of tab objects with key, label, and content.",
      },
      {
        name: "defaultTab",
        type: "string",
        description: "Key of the initially active tab.",
      },
      {
        name: "onChange",
        type: "(key: string) => void",
        description: "Callback when tab changes.",
      },
    ],
    preview: [],
  },

  accordion: {
    slug: "accordion",
    name: "Accordion",
    description: "Collapsible content sections with smooth animations.",
    usage: `import { Accordion } from '@/components/ui/accordion';

export default function Example() {
  return (
    <Accordion items={[
      { id: '1', title: 'Section 1', content: <Text>Content 1</Text> },
      { id: '2', title: 'Section 2', content: <Text>Content 2</Text> },
    ]} />
  );
}`,
    code: `// See full implementation in registry/components/accordion.tsx`,
    props: [
      {
        name: "items",
        type: "AccordionItem[]",
        description: "Array of items with id, title, and content.",
      },
      {
        name: "allowMultiple",
        type: "boolean",
        default: "false",
        description: "Allow multiple sections open.",
      },
    ],
    preview: [],
  },

  slider: {
    slug: "slider",
    name: "Slider",
    description: "Customizable slider for selecting values.",
    usage: `import { Slider } from '@/components/ui/slider';

export default function Example() {
  const [value, setValue] = React.useState(50);
  return <Slider value={value} onValueChange={setValue} min={0} max={100} />;
}`,
    code: `// See full implementation in registry/components/slider.tsx`,
    props: [
      { name: "value", type: "number", description: "Current value." },
      {
        name: "onValueChange",
        type: "(value: number) => void",
        description: "Callback when value changes.",
      },
      {
        name: "min",
        type: "number",
        default: "0",
        description: "Minimum value.",
      },
      {
        name: "max",
        type: "number",
        default: "100",
        description: "Maximum value.",
      },
      {
        name: "step",
        type: "number",
        default: "1",
        description: "Step increment.",
      },
    ],
    preview: [],
  },

  toast: {
    slug: "toast",
    name: "Toast",
    description: "Toast notification system with animations.",
    usage: `import { ToastProvider, useToast } from '@/components/ui/toast';

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const { toast } = useToast();
  return <Button onPress={() => toast('Success!', 'success')}>Show Toast</Button>;
}`,
    code: `// See full implementation in registry/components/toast.tsx`,
    props: [
      {
        name: "toast()",
        type: "(message, type?, duration?) => void",
        description: "Show a toast notification.",
      },
    ],
    preview: [],
  },

  "gradient-button": {
    slug: "gradient-button",
    name: "Gradient Button",
    description: "Stylish button with gradient backgrounds and glow effect.",
    usage: `import { GradientButton } from '@/components/ui/gradient-button';

export default function Example() {
  return (
    <GradientButton gradient="sunset" onPress={() => console.log('Pressed!')}>
      Get Started
    </GradientButton>
  );
}`,
    code: `// See full implementation in registry/components/gradient-button.tsx
// Requires: expo-linear-gradient`,
    props: [
      {
        name: "gradient",
        type: "'purple' | 'sunset' | 'ocean' | 'fire' | 'neon'",
        default: "'purple'",
        description: "Gradient preset.",
      },
      {
        name: "colors",
        type: "string[]",
        description: "Custom gradient colors (overrides preset).",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Button size.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Show loading state.",
      },
    ],
    preview: [
      { label: "Purple" },
      { label: "Sunset", props: { gradient: "sunset" } },
      { label: "Ocean", props: { gradient: "ocean" } },
      { label: "Fire", props: { gradient: "fire" } },
    ],
  },

  "glass-card": {
    slug: "glass-card",
    name: "Glass Card",
    description: "Modern glassmorphism card with blur effect.",
    usage: `import { GlassCard } from '@/components/ui/glass-card';

export default function Example() {
  return (
    <GlassCard intensity={50}>
      <Text>Your content here</Text>
    </GlassCard>
  );
}`,
    code: `// See full implementation in registry/components/glass-card.tsx
// Requires: expo-blur`,
    props: [
      {
        name: "intensity",
        type: "number",
        default: "50",
        description: "Blur intensity (0-100).",
      },
      {
        name: "tint",
        type: "'light' | 'dark' | 'default'",
        default: "'dark'",
        description: "Blur tint color.",
      },
    ],
    preview: [],
  },

  "animated-input": {
    slug: "animated-input",
    name: "Animated Input",
    description: "Material Design style input with floating label animation.",
    usage: `import { AnimatedInput } from '@/components/ui/animated-input';

export default function Example() {
  const [value, setValue] = React.useState('');
  return <AnimatedInput label="Email" value={value} onChangeText={setValue} />;
}`,
    code: `// See full implementation in registry/components/animated-input.tsx`,
    props: [
      { name: "label", type: "string", description: "Floating label text." },
      {
        name: "error",
        type: "string",
        description: "Error message to display.",
      },
      { name: "value", type: "string", description: "Input value." },
      {
        name: "onChangeText",
        type: "(text: string) => void",
        description: "Text change callback.",
      },
    ],
    preview: [],
  },

  fab: {
    slug: "fab",
    name: "FAB",
    description: "Floating Action Button with expandable menu.",
    usage: `import { FAB } from '@/components/ui/fab';

export default function Example() {
  return (
    <FAB
      actions={[
        { icon: '📷', label: 'Camera', onPress: () => {} },
        { icon: '📁', label: 'Gallery', onPress: () => {} },
      ]}
    />
  );
}`,
    code: `// See full implementation in registry/components/fab.tsx`,
    props: [
      {
        name: "icon",
        type: "string",
        default: "'+'",
        description: "Main FAB icon.",
      },
      {
        name: "actions",
        type: "FABAction[]",
        description: "Array of expandable actions.",
      },
      {
        name: "color",
        type: "string",
        default: "'#8B5CF6'",
        description: "Background color.",
      },
      {
        name: "position",
        type: "'bottom-right' | 'bottom-left' | 'bottom-center'",
        default: "'bottom-right'",
        description: "Position on screen.",
      },
    ],
    preview: [],
  },

  // ===== TEXT ANIMATIONS =====

  "split-text": {
    slug: "split-text",
    name: "Split Text",
    description:
      "Animated text that reveals character by character with stagger effect.",
    usage: `import { SplitText } from '@/components/ui/split-text';

export default function Example() {
  return (
    <SplitText 
      text="Hello, World!"
      delay={50}
      onAnimationComplete={() => console.log('Animation finished!')}
    />
  );
}`,
    code: `import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  onAnimationComplete?: () => void;
}

export function SplitText({
  text,
  delay = 50,
  duration = 300,
  style,
  containerStyle,
  onAnimationComplete,
}: SplitTextProps) {
  const characters = text.split('');
  const animations = useRef(characters.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const staggerAnimations = characters.map((_, index) =>
      Animated.timing(animations[index], {
        toValue: 1,
        duration,
        delay: index * delay,
        useNativeDriver: true,
      })
    );

    Animated.stagger(delay, staggerAnimations).start(() => {
      onAnimationComplete?.();
    });
  }, [text]);

  return (
    <View style={[styles.container, containerStyle]}>
      {characters.map((char, index) => (
        <Animated.Text
          key={\`\${char}-\${index}\`}
          style={[
            styles.character,
            style,
            {
              opacity: animations[index],
              transform: [
                {
                  translateY: animations[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {char === ' ' ? '\\u00A0' : char}
        </Animated.Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  character: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});`,
    props: [
      { name: "text", type: "string", description: "The text to animate." },
      {
        name: "delay",
        type: "number",
        default: "50",
        description: "Delay between each character in ms.",
      },
      {
        name: "duration",
        type: "number",
        default: "300",
        description: "Duration of each character animation.",
      },
      {
        name: "onAnimationComplete",
        type: "() => void",
        description: "Callback when animation completes.",
      },
    ],
    preview: [],
  },

  "blur-text": {
    slug: "blur-text",
    name: "Blur Text",
    description: "Text with a blur-in animation effect that comes into focus.",
    usage: `import { BlurText } from '@/components/ui/blur-text';

export default function Example() {
  return (
    <BlurText 
      text="Welcome!"
      duration={800}
    />
  );
}`,
    code: `import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet, TextStyle } from 'react-native';

interface BlurTextProps {
  text: string;
  duration?: number;
  style?: TextStyle;
  onAnimationComplete?: () => void;
}

export function BlurText({
  text,
  duration = 800,
  style,
  onAnimationComplete,
}: BlurTextProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1.2)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(onAnimationComplete);
  }, [text]);

  return (
    <Animated.Text
      style={[
        styles.text,
        style,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      {text}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});`,
    props: [
      { name: "text", type: "string", description: "The text to display." },
      {
        name: "duration",
        type: "number",
        default: "800",
        description: "Animation duration in ms.",
      },
      {
        name: "onAnimationComplete",
        type: "() => void",
        description: "Callback when animation completes.",
      },
    ],
    preview: [],
  },

  "gradient-text": {
    slug: "gradient-text",
    name: "Gradient Text",
    description:
      "Animated gradient text with smooth color transitions using masked view.",
    usage: `import { GradientText } from '@/components/ui/gradient-text';

export default function Example() {
  return (
    <GradientText 
      text="Gradient Magic"
      colors={['#8B5CF6', '#EC4899', '#F97316']}
    />
  );
}`,
    code: `import React from 'react';
import { Text, View, StyleSheet, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps {
  text: string;
  colors?: string[];
  style?: TextStyle;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export function GradientText({
  text,
  colors = ['#8B5CF6', '#EC4899', '#F97316'],
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style]}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
      >
        <Text style={[styles.text, style, { opacity: 0 }]}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
});`,
    props: [
      { name: "text", type: "string", description: "The text to display." },
      {
        name: "colors",
        type: "string[]",
        default: "['#8B5CF6', '#EC4899', '#F97316']",
        description: "Gradient colors array.",
      },
      {
        name: "start",
        type: "{ x: number; y: number }",
        default: "{ x: 0, y: 0 }",
        description: "Gradient start point.",
      },
      {
        name: "end",
        type: "{ x: number; y: number }",
        default: "{ x: 1, y: 0 }",
        description: "Gradient end point.",
      },
    ],
    preview: [],
  },

  typewriter: {
    slug: "typewriter",
    name: "Typewriter",
    description: "Classic typewriter text animation with cursor blinking.",
    usage: `import { Typewriter } from '@/components/ui/typewriter';

export default function Example() {
  return (
    <Typewriter 
      text="Hello, I'm typing..."
      speed={100}
      cursor="|"
    />
  );
}`,
    code: `import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, TextStyle } from 'react-native';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: string;
  cursorBlinkSpeed?: number;
  style?: TextStyle;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speed = 100,
  cursor = '|',
  cursorBlinkSpeed = 500,
  style,
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const cursorOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, {
          toValue: 0,
          duration: cursorBlinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(cursorOpacity, {
          toValue: 1,
          duration: cursorBlinkSpeed,
          useNativeDriver: true,
        }),
      ])
    );
    blink.start();
    return () => blink.stop();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{displayedText}</Text>
      <Animated.Text style={[styles.cursor, style, { opacity: cursorOpacity }]}>
        {cursor}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cursor: {
    fontSize: 24,
    fontWeight: '600',
    color: '#8B5CF6',
  },
});`,
    props: [
      { name: "text", type: "string", description: "The text to type." },
      {
        name: "speed",
        type: "number",
        default: "100",
        description: "Typing speed in ms per character.",
      },
      {
        name: "cursor",
        type: "string",
        default: "'|'",
        description: "Cursor character.",
      },
      {
        name: "cursorBlinkSpeed",
        type: "number",
        default: "500",
        description: "Cursor blink speed in ms.",
      },
      {
        name: "onComplete",
        type: "() => void",
        description: "Callback when typing completes.",
      },
    ],
    preview: [],
  },

  // ===== ANIMATIONS =====

  "fade-content": {
    slug: "fade-content",
    name: "Fade Content",
    description: "Fade in animation wrapper for content sections.",
    usage: `import { FadeContent } from '@/components/ui/fade-content';

export default function Example() {
  return (
    <FadeContent delay={200}>
      <Text>This content fades in!</Text>
    </FadeContent>
  );
}`,
    code: `import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface FadeContentProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  style?: ViewStyle;
}

export function FadeContent({
  children,
  duration = 400,
  delay = 0,
  style,
}: FadeContentProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}`,
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "Content to animate.",
      },
      {
        name: "duration",
        type: "number",
        default: "400",
        description: "Animation duration in ms.",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Animation delay in ms.",
      },
    ],
    preview: [],
  },

  "scale-content": {
    slug: "scale-content",
    name: "Scale Content",
    description: "Scale animation with spring physics for content.",
    usage: `import { ScaleContent } from '@/components/ui/scale-content';

export default function Example() {
  return (
    <ScaleContent initialScale={0.8}>
      <View style={{ padding: 20, backgroundColor: '#8B5CF6' }}>
        <Text>Scaled content!</Text>
      </View>
    </ScaleContent>
  );
}`,
    code: `import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface ScaleContentProps {
  children: React.ReactNode;
  initialScale?: number;
  delay?: number;
  style?: ViewStyle;
}

export function ScaleContent({
  children,
  initialScale = 0.8,
  delay = 0,
  style,
}: ScaleContentProps) {
  const scale = useRef(new Animated.Value(initialScale)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 8,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}`,
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "Content to animate.",
      },
      {
        name: "initialScale",
        type: "number",
        default: "0.8",
        description: "Initial scale value.",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Animation delay in ms.",
      },
    ],
    preview: [],
  },

  "slide-in": {
    slug: "slide-in",
    name: "Slide In",
    description: "Slide in animation from any direction.",
    usage: `import { SlideIn } from '@/components/ui/slide-in';

export default function Example() {
  return (
    <SlideIn direction="left" duration={400}>
      <View style={{ padding: 20, backgroundColor: '#8B5CF6' }}>
        <Text>Slides in from left!</Text>
      </View>
    </SlideIn>
  );
}`,
    code: `import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, ViewStyle } from 'react-native';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface SlideInProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  distance?: number;
  style?: ViewStyle;
}

const { width, height } = Dimensions.get('window');

export function SlideIn({
  children,
  direction = 'left',
  duration = 400,
  delay = 0,
  distance,
  style,
}: SlideInProps) {
  const getInitialValue = () => {
    const d = distance || (direction === 'left' || direction === 'right' ? width / 4 : height / 4);
    switch (direction) {
      case 'left': return -d;
      case 'right': return d;
      case 'top': return -d;
      case 'bottom': return d;
    }
  };

  const translateValue = useRef(new Animated.Value(getInitialValue())).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const isHorizontal = direction === 'left' || direction === 'right';

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateValue, {
        toValue: 0,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: duration / 2,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [
            isHorizontal ? { translateX: translateValue } : { translateY: translateValue },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}`,
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "Content to animate.",
      },
      {
        name: "direction",
        type: "'left' | 'right' | 'top' | 'bottom'",
        default: "'left'",
        description: "Direction to slide from.",
      },
      {
        name: "duration",
        type: "number",
        default: "400",
        description: "Animation duration in ms.",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Animation delay in ms.",
      },
      {
        name: "distance",
        type: "number",
        description: "Custom slide distance in pixels.",
      },
    ],
    preview: [],
  },
  "otp-input": {
    slug: "otp-input",
    name: "OTP Input",
    description:
      "A 6-digit verification code input with auto-focus and completion detection.",
    usage: `import { OtpInput } from '@/components/ui/otp-input';

export default function Example() {
  const handleComplete = (code: string) => {
    console.log('OTP:', code);
  };

  return <OtpInput length={6} onComplete={handleComplete} />;
}`,
    code: `import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from 'react-native-reanimated';

interface OtpInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  onChangeCode?: (code: string) => void;
  autoFocus?: boolean;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export function OtpInput({
  length = 6,
  onComplete,
  onChangeCode,
  autoFocus = true,
}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<TextInput[]>([]);
  const scales = Array(length).fill(0).map(() => useSharedValue(1));

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    const code = newOtp.join('');
    onChangeCode?.(code);

    // Animate on input
    scales[index].value = withSequence(
      withSpring(1.1),
      withSpring(1)
    );

    // Auto focus next
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check completion
    if (newOtp.every((digit) => digit !== '')) {
      onComplete?.(code);
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scales[index].value }],
        }));

        return (
          <AnimatedTextInput
            key={index}
            ref={(ref) => {
              if (ref) inputRefs.current[index] = ref;
            }}
            value={digit}
            onChangeText={(v) => handleChange(index, v.replace(/\\D/g, ''))}
            onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={autoFocus && index === 0}
            style={[
              styles.input,
              digit ? styles.inputFilled : styles.inputEmpty,
              animatedStyle,
            ]}
            selectionColor="#8B5CF6"
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  input: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(39, 39, 42, 0.5)',
  },
  inputEmpty: {
    borderColor: '#3F3F46',
    color: '#A1A1AA',
  },
  inputFilled: {
    borderColor: '#8B5CF6',
    color: '#FAFAFA',
  },
});`,
    props: [
      {
        name: "length",
        type: "number",
        default: "6",
        description: "Number of OTP digits.",
      },
      {
        name: "onComplete",
        type: "(code: string) => void",
        description: "Called when all digits are entered.",
      },
      {
        name: "onChangeCode",
        type: "(code: string) => void",
        description: "Called when code changes.",
      },
      {
        name: "autoFocus",
        type: "boolean",
        default: "true",
        description: "Auto-focus first input on mount.",
      },
    ],
    preview: [],
  },
};

export function getComponentDoc(
  slug: string
): ComponentDocumentation | undefined {
  return componentDocs[slug];
}
