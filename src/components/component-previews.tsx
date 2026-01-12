"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ===== BUTTON PREVIEW =====
const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
] as const;

interface CustomProps {
  variant?: string;
  size?: string;
  loading?: boolean;
  disabled?: boolean;
  [key: string]: unknown;
}

function SingleButton({
  variant,
  size = "md",
  loading = false,
  disabled = false,
}: {
  variant: (typeof buttonVariants)[number];
  size?: string;
  loading?: boolean;
  disabled?: boolean;
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100";
      case "outline":
        return "bg-transparent border-2 border-zinc-300 dark:border-zinc-600 text-violet-500";
      case "ghost":
        return "bg-transparent text-violet-500 hover:bg-violet-500/10";
      case "destructive":
        return "bg-red-500 text-white";
      default:
        return "bg-violet-500 text-white";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-xs";
      case "lg":
        return "px-6 py-3.5 text-base";
      default:
        return "px-4 py-2.5 text-sm";
    }
  };

  return (
    <motion.button
      className={cn(
        "rounded-xl font-semibold transition-all whitespace-nowrap",
        getVariantStyles(),
        getSizeStyles(),
        disabled && "opacity-50 cursor-not-allowed"
      )}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <motion.span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Loading...
        </span>
      ) : (
        variant.charAt(0).toUpperCase() + variant.slice(1)
      )}
    </motion.button>
  );
}

export function ButtonPreview({ customProps }: { customProps?: CustomProps }) {
  // If customProps are provided, show single customizable button
  if (customProps && Object.keys(customProps).length > 0) {
    const variant =
      (customProps.variant as (typeof buttonVariants)[number]) || "default";
    const size = (customProps.size as string) || "md";
    const loading = customProps.loading === true;
    const disabled = customProps.disabled === true;

    return (
      <div className="flex flex-col items-center gap-4">
        <SingleButton
          variant={variant}
          size={size}
          loading={loading}
          disabled={disabled}
        />
        <p className="text-xs text-zinc-500">
          variant: {variant} | size: {size} | loading: {String(loading)} |
          disabled: {String(disabled)}
        </p>
      </div>
    );
  }

  // Default preview showing all variants
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* All variants */}
      <div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 font-medium">
          Variants
        </p>
        <div className="flex flex-wrap gap-2">
          {buttonVariants.map((variant) => (
            <SingleButton key={variant} variant={variant} />
          ))}
        </div>
      </div>

      {/* Button group */}
      <div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 font-medium">
          Button Group
        </p>
        <div className="inline-flex rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
          <button className="px-4 py-2.5 text-xs font-medium bg-violet-500 text-white">
            Left
          </button>
          <button className="px-4 py-2.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-l border-zinc-200 dark:border-zinc-700">
            Center
          </button>
          <button className="px-4 py-2.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-l border-zinc-200 dark:border-zinc-700">
            Right
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== BADGE PREVIEW =====
const badgeVariants = [
  "default",
  "secondary",
  "success",
  "warning",
  "destructive",
  "outline",
] as const;

function SingleBadge({ variant }: { variant: (typeof badgeVariants)[number] }) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100";
      case "success":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "warning":
        return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400";
      case "destructive":
        return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400";
      case "outline":
        return "bg-transparent border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100";
      default:
        return "bg-violet-500 text-white";
    }
  };

  const getLabel = () => {
    switch (variant) {
      case "success":
        return "Active";
      case "warning":
        return "Pending";
      case "destructive":
        return "Error";
      case "outline":
        return "Outline";
      case "secondary":
        return "Secondary";
      default:
        return "Default";
    }
  };

  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-semibold inline-block",
        getVariantStyles()
      )}
    >
      {getLabel()}
    </span>
  );
}

export function BadgePreview({ customProps }: { customProps?: CustomProps }) {
  // If customProps are provided, show single customizable badge
  if (customProps && customProps.variant) {
    const variant = customProps.variant as (typeof badgeVariants)[number];

    const getVariantStyles = () => {
      switch (variant) {
        case "secondary":
          return "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100";
        case "success":
          return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
        case "warning":
          return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400";
        case "destructive":
          return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400";
        case "outline":
          return "bg-transparent border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100";
        default:
          return "bg-violet-500 text-white";
      }
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold inline-block",
            getVariantStyles()
          )}
        >
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </span>
        <p className="text-xs text-zinc-500">variant: {variant}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 font-medium">
        All Variants
      </p>
      <div className="flex flex-wrap gap-2">
        {badgeVariants.map((variant) => (
          <SingleBadge key={variant} variant={variant} />
        ))}
      </div>
    </div>
  );
}

// ===== ALERT PREVIEW =====
const alertVariants = ["default", "success", "warning", "destructive"] as const;

function SingleAlert({ variant }: { variant: (typeof alertVariants)[number] }) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200";
      case "warning":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200";
      case "destructive":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200";
      default:
        return "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200";
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "destructive":
        return "✕";
      default:
        return "ℹ";
    }
  };

  const getTitle = () => {
    switch (variant) {
      case "success":
        return "Success!";
      case "warning":
        return "Warning";
      case "destructive":
        return "Error";
      default:
        return "Info";
    }
  };

  return (
    <div className={cn("flex gap-3 p-3 rounded-xl border", getVariantStyles())}>
      <span className="text-base">{getIcon()}</span>
      <div>
        <p className="font-semibold text-xs">{getTitle()}</p>
        <p className="text-xs opacity-80 mt-0.5">Alert message here.</p>
      </div>
    </div>
  );
}

export function AlertPreview() {
  return (
    <div className="w-full space-y-3">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        All Variants
      </p>
      {alertVariants.map((variant) => (
        <SingleAlert key={variant} variant={variant} />
      ))}
    </div>
  );
}

// ===== SWITCH PREVIEW =====
export function SwitchPreview() {
  const [enabled1, setEnabled1] = React.useState(false);
  const [enabled2, setEnabled2] = React.useState(true);

  const SwitchButton = ({
    enabled,
    setEnabled,
    label,
  }: {
    enabled: boolean;
    setEnabled: (v: boolean) => void;
    label: string;
  }) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className="flex items-center gap-3"
    >
      <div
        className={cn(
          "w-12 h-7 rounded-full p-1 transition-colors duration-300",
          enabled ? "bg-violet-500" : "bg-zinc-300 dark:bg-zinc-600"
        )}
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-white shadow-md"
          animate={{ x: enabled ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        Toggle States
      </p>
      <SwitchButton
        enabled={enabled1}
        setEnabled={setEnabled1}
        label="Off State"
      />
      <SwitchButton
        enabled={enabled2}
        setEnabled={setEnabled2}
        label="On State"
      />
    </div>
  );
}

// ===== SPINNER PREVIEW =====
const spinnerSizes = ["sm", "md", "lg"] as const;

function SingleSpinner({ size }: { size: (typeof spinnerSizes)[number] }) {
  const sizeMap = { sm: 20, md: 32, lg: 48 };
  const dimension = sizeMap[size];
  const borderWidth = dimension / 8;

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className="rounded-full border-violet-500"
        style={{
          width: dimension,
          height: dimension,
          borderWidth: borderWidth,
          borderTopColor: "transparent",
          borderRightColor: "rgb(139, 92, 246)",
          borderBottomColor: "rgb(139, 92, 246)",
          borderLeftColor: "rgb(139, 92, 246)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {size.toUpperCase()}
      </span>
    </div>
  );
}

export function SpinnerPreview() {
  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Sizes
      </p>
      <div className="flex items-end justify-center gap-8">
        {spinnerSizes.map((size) => (
          <SingleSpinner key={size} size={size} />
        ))}
      </div>
    </div>
  );
}

// ===== PROGRESS PREVIEW =====
const progressValues = [25, 50, 75, 100];

export function ProgressPreview() {
  return (
    <div className="w-full space-y-4">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        Progress Values
      </p>
      {progressValues.map((value) => (
        <div key={value} className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 w-8">{value}%</span>
          <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${value}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: value * 0.01 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ===== SLIDER PREVIEW =====
export function SliderPreview() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Interactive Slider
      </p>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-violet-500
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110"
        />
        <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>0</span>
          <span className="font-semibold text-violet-500">{value}</span>
          <span>100</span>
        </div>
      </div>
    </div>
  );
}

// ===== INPUT PREVIEW =====
export function InputPreview() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const isValidEmail = email.includes("@") && email.includes(".");

  return (
    <div className="w-full space-y-5">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        Interactive Inputs
      </p>

      {/* Email with icon and validation */}
      <div>
        <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">
          Email Address
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            ✉️
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            placeholder="you@example.com"
            className={cn(
              "w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm bg-white dark:bg-zinc-900 transition-all duration-200",
              "placeholder:text-zinc-400 dark:placeholder:text-zinc-500",
              "text-zinc-900 dark:text-zinc-100",
              emailFocused
                ? "border-violet-500 ring-2 ring-violet-500/20"
                : "border-zinc-300 dark:border-zinc-600"
            )}
          />
          {email.length > 0 && (
            <span
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-sm",
                isValidEmail ? "text-green-500" : "text-red-400"
              )}
            >
              {isValidEmail ? "✓" : "✕"}
            </span>
          )}
        </div>
        {email.length > 0 && !isValidEmail && (
          <p className="text-xs text-red-400 mt-1">
            Please enter a valid email
          </p>
        )}
      </div>

      {/* Password with show/hide toggle */}
      <div>
        <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">
          Password
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            🔒
          </span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            placeholder="Enter password"
            className={cn(
              "w-full pl-10 pr-12 py-2.5 rounded-xl border text-sm bg-white dark:bg-zinc-900 transition-all duration-200",
              "placeholder:text-zinc-400 dark:placeholder:text-zinc-500",
              "text-zinc-900 dark:text-zinc-100",
              passwordFocused
                ? "border-violet-500 ring-2 ring-violet-500/20"
                : "border-zinc-300 dark:border-zinc-600"
            )}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {password.length > 0 && (
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  password.length >= i * 3
                    ? password.length >= 12
                      ? "bg-green-500"
                      : password.length >= 8
                      ? "bg-yellow-500"
                      : "bg-red-400"
                    : "bg-zinc-200 dark:bg-zinc-700"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ===== AVATAR PREVIEW =====
const avatarSizes = ["sm", "md", "lg", "xl"] as const;

function SingleAvatar({ size }: { size: (typeof avatarSizes)[number] }) {
  const sizeMap = { sm: 32, md: 40, lg: 56, xl: 80 };
  const dimension = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-white font-semibold border-2 border-white dark:border-zinc-800 shadow-lg"
        style={{ width: dimension, height: dimension, fontSize: dimension / 3 }}
      >
        JD
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {size.toUpperCase()}
      </span>
    </div>
  );
}

export function AvatarPreview() {
  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Sizes
      </p>
      <div className="flex items-end justify-center gap-6">
        {avatarSizes.map((size) => (
          <SingleAvatar key={size} size={size} />
        ))}
      </div>
    </div>
  );
}

// ===== CARD PREVIEW =====
export function CardPreview() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Card Design - No hover effects on card */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden w-full max-w-sm">
        {/* Content area */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-zinc-100 mb-2">
            Explore the wilderness
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 mb-5">
            Discover serene forest trails and reconnect with nature's
            tranquility
          </p>

          {/* Forest Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
              alt="Forest trail"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Action buttons - with effects */}
          <div className="flex items-center justify-between">
            <motion.button
              className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more →
            </motion.button>
            <motion.button
              className="px-5 py-2.5 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full hover:bg-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== CHECKBOX PREVIEW =====
export function CheckboxPreview() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);

  const CheckboxItem = ({
    checked,
    setChecked,
    label,
  }: {
    checked: boolean;
    setChecked: (v: boolean) => void;
    label: string;
  }) => (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-3"
    >
      <motion.div
        className={cn(
          "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors",
          checked
            ? "bg-violet-500 border-violet-500"
            : "bg-transparent border-zinc-400 dark:border-zinc-500"
        )}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence>
          {checked && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-white text-xs"
            >
              ✓
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        Checkbox States
      </p>
      <CheckboxItem
        checked={checked1}
        setChecked={setChecked1}
        label="Unchecked"
      />
      <CheckboxItem
        checked={checked2}
        setChecked={setChecked2}
        label="Checked"
      />
    </div>
  );
}

// ===== TOAST PREVIEW =====
export function ToastPreview() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => !v);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Animated Toast
      </p>
      <div className="relative h-16 w-full">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl p-3 flex items-center gap-3 shadow-xl"
            >
              <span className="text-green-400 dark:text-green-600">✓</span>
              <span className="text-sm font-medium">
                Changes saved successfully!
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===== SKELETON PREVIEW =====
export function SkeletonPreview() {
  return (
    <div className="w-full space-y-4">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        Loading States
      </p>

      {/* Card skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
          <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3 animate-pulse" />
        </div>
      </div>

      {/* Text skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-4/6 animate-pulse" />
      </div>
    </div>
  );
}

// ===== MODAL PREVIEW =====
export function ModalPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <p className="text-xs text-zinc-400 mb-4 font-medium">
        Interactive Modal
      </p>
      <motion.button
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-violet-500/25"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Open Modal
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-zinc-800"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-violet-500/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(167, 139, 250)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>

              <h3 className="font-bold text-zinc-100 text-xl mb-2 text-center">
                Confirm Action
              </h3>
              <p className="text-sm text-zinc-400 mb-6 text-center leading-relaxed">
                Are you sure you want to continue with this action? This cannot
                be undone.
              </p>

              <div className="flex gap-3">
                <motion.button
                  onClick={() => setOpen(false)}
                  className="flex-1 px-4 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-zinc-300 font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="flex-1 px-4 py-3 text-sm bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Confirm
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===== TABS PREVIEW =====
export function TabsPreview() {
  const [active, setActive] = React.useState(0);

  const tabs = [
    {
      name: "Home",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Search",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      name: "Favorites",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-xs text-zinc-400 mb-6 font-medium">
        Floating Dock Navigation
      </p>

      {/* Content area */}
      <div className="w-full mb-8 p-6 bg-zinc-800/30 rounded-2xl border border-zinc-700/50 min-h-[120px] flex items-center justify-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center"
        >
          <div className="text-zinc-400 mb-2">{tabs[active].icon}</div>
          <p className="text-lg font-semibold text-zinc-200">
            {tabs[active].name}
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            Tap icons below to switch
          </p>
        </motion.div>
      </div>

      {/* Floating Dock */}
      <div className="relative">
        <div className="flex items-center gap-1 px-3 py-2.5 bg-zinc-800/90 backdrop-blur-xl rounded-2xl border border-zinc-700/50 shadow-2xl shadow-black/50">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              onClick={() => setActive(index)}
              className={cn(
                "relative p-3 rounded-xl transition-colors",
                active === index
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {active === index && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute inset-0 bg-zinc-700 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.icon}</span>
            </motion.button>
          ))}
        </div>

        {/* Dock glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-zinc-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10" />
      </div>

      <p className="text-xs text-zinc-500 mt-4">
        Active: <span className="text-zinc-300">{tabs[active].name}</span>
      </p>
    </div>
  );
}

// ===== ACCORDION PREVIEW =====
export function AccordionPreview() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const items = [
    {
      title: "What is Nativity UI?",
      content:
        "Nativity UI is a premium component library designed for React Native and Expo. It provides beautiful, animated, and customizable UI components.",
    },
    {
      title: "Is it free to use?",
      content:
        "Yes! Nativity UI is completely free and open source under the MIT license. Use it in personal and commercial projects.",
    },
    {
      title: "How do I get started?",
      content:
        "Browse our components, copy the code you need, and paste it into your project. Each component is self-contained.",
    },
  ];

  return (
    <div className="w-96">
      <p className="text-xs text-zinc-400 mb-4 font-medium">
        Expandable Sections
      </p>
      <div className="rounded-xl border border-zinc-700 overflow-hidden">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              className={!isLast ? "border-b border-zinc-700" : ""}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-200",
                  isOpen ? "bg-zinc-800" : "bg-zinc-800/50 hover:bg-zinc-800"
                )}
              >
                <span
                  className={cn(
                    "font-medium text-sm transition-colors",
                    isOpen ? "text-zinc-100" : "text-zinc-300"
                  )}
                >
                  {item.title}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={cn(
                    "flex-shrink-0 transition-colors",
                    isOpen ? "text-zinc-300" : "text-zinc-500"
                  )}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-2 text-sm text-zinc-400 leading-relaxed bg-zinc-800/50">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-zinc-500 mt-3">
        Click headers to expand/collapse
      </p>
    </div>
  );
}

// ===== FAB PREVIEW =====
export function FabPreview() {
  const [expanded, setExpanded] = React.useState(false);

  const actions = [
    { icon: "📝", label: "Edit" },
    { icon: "📤", label: "Share" },
    { icon: "🗑️", label: "Delete" },
  ];

  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Expandable FAB
      </p>
      {/* Container with fixed height to prevent overflow */}
      <div className="relative h-52 flex items-end justify-center pb-4">
        {/* FAB actions - positioned relative to the bottom */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="flex flex-col-reverse gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {actions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-800 rounded-full shadow-lg text-sm whitespace-nowrap"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <span>{action.icon}</span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FAB Button - centered icon with proper flexbox */}
        <motion.button
          className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/30 flex items-center justify-center"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpanded(!expanded)}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}

// ===== GLASS CARD PREVIEW =====
export function GlassCardPreview() {
  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Glassmorphism Effect
      </p>
      <div className="relative p-6 rounded-2xl overflow-hidden">
        {/* Colorful background to show glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500" />
        <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-400 rounded-full blur-xl opacity-60" />

        {/* Glass card */}
        <div className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
          <h3 className="font-semibold text-white text-base">Glass Card</h3>
          <p className="text-sm text-white/80 mt-1">
            Beautiful blur effect with transparency
          </p>
          <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== GRADIENT BUTTON PREVIEW =====
export function GradientButtonPreview() {
  return (
    <div className="w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Gradient Variants
      </p>
      <div className="flex flex-wrap gap-3">
        <motion.button
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sunset
        </motion.button>
        <motion.button
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Ocean
        </motion.button>
        <motion.button
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-green-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Forest
        </motion.button>
        <motion.button
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-rose-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Rose
        </motion.button>
      </div>
    </div>
  );
}

// ===== ANIMATED INPUT PREVIEW =====
export function AnimatedInputPreview() {
  const [value, setValue] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const hasValue = value.length > 0;
  const isFloating = focused || hasValue;

  return (
    <div className="w-full max-w-sm">
      <p className="text-xs text-zinc-400 mb-4 font-medium">
        Floating Label Input
      </p>
      <div className="relative">
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full px-4 py-4 rounded-xl border text-sm bg-transparent transition-all duration-200 outline-none",
            "text-zinc-100",
            focused ? "border-zinc-400" : "border-zinc-600"
          )}
          placeholder=""
        />
        <motion.label
          className={cn(
            "absolute left-3 px-1 text-sm pointer-events-none origin-left",
            isFloating ? "bg-[#0a0a0f]" : "bg-transparent"
          )}
          animate={{
            top: isFloating ? -8 : 16,
            scale: isFloating ? 0.85 : 1,
            color: focused ? "rgb(161, 161, 170)" : "rgb(113, 113, 122)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          Email Address
        </motion.label>
      </div>
      <p className="text-xs text-zinc-500 mt-2">
        Click to see the floating label animation
      </p>
    </div>
  );
}

// ===== SPLIT TEXT PREVIEW =====
export function SplitTextPreview() {
  const [key, setKey] = React.useState(0);
  const text = "Hello, you!";

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-center" key={key}>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Character Animation
      </p>
      <div className="flex justify-center gap-0.5">
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}-${key}`}
            className="text-3xl font-bold text-violet-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <p className="text-xs text-zinc-400 mt-4">
        Animation restarts every 4 seconds
      </p>
    </div>
  );
}

// ===== BLUR TEXT PREVIEW =====
export function BlurTextPreview() {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-center" key={key}>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Blur In Effect
      </p>
      <motion.div
        className="text-3xl font-bold text-violet-400"
        initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome!
      </motion.div>
      <p className="text-xs text-zinc-400 mt-4">Text comes into focus</p>
    </div>
  );
}

// ===== GRADIENT TEXT PREVIEW =====
export function GradientTextPreview() {
  return (
    <div className="w-full text-center">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Gradient Effect
      </p>
      <div
        className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        style={{
          backgroundSize: "200% auto",
          animation: "gradient 3s linear infinite",
        }}
      >
        Gradient Magic
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
      <p className="text-xs text-zinc-400 mt-4">Animated color transition</p>
    </div>
  );
}

// ===== TYPEWRITER PREVIEW =====
export function TypewriterPreview() {
  const text = "Hello, I'm typing...";
  const [displayedText, setDisplayedText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setDisplayedText("");
          index = 0;
        }, 2000);
      }
    }, 100);

    const cursor = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursor);
    };
  }, [displayedText === ""]);

  return (
    <div className="w-full text-center">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Typewriter Effect
      </p>
      <div className="flex items-center justify-center text-2xl font-semibold">
        <span className="text-violet-400">{displayedText}</span>
        <span
          className={cn(
            "text-violet-500 ml-0.5",
            showCursor ? "opacity-100" : "opacity-0"
          )}
        >
          |
        </span>
      </div>
      <p className="text-xs text-zinc-400 mt-4">Classic typing animation</p>
    </div>
  );
}

// ===== FADE CONTENT PREVIEW =====
export function FadeContentPreview() {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full" key={key}>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Fade In Animation
      </p>
      <div className="space-y-3">
        {[0, 100, 200].map((delay, i) => (
          <motion.div
            key={`${i}-${key}`}
            className="bg-violet-500/20 border border-violet-500/30 rounded-lg p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay / 1000 }}
          >
            <div className="h-3 bg-violet-500/50 rounded w-3/4" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ===== SCALE CONTENT PREVIEW =====
export function ScaleContentPreview() {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-center" key={key}>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Scale Animation
      </p>
      <motion.div
        className="inline-block bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <span className="text-white font-bold text-lg">Spring Scale</span>
      </motion.div>
    </div>
  );
}

// ===== SLIDE IN PREVIEW =====
export function SlideInPreview() {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const directions = ["left", "right", "top", "bottom"] as const;

  return (
    <div className="w-full" key={key}>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
        Slide Directions
      </p>
      <div className="grid grid-cols-2 gap-3">
        {directions.map((dir, i) => (
          <motion.div
            key={`${dir}-${key}`}
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-center"
            initial={{
              opacity: 0,
              x: dir === "left" ? -50 : dir === "right" ? 50 : 0,
              y: dir === "top" ? -50 : dir === "bottom" ? 50 : 0,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="text-xs text-zinc-400 capitalize">{dir}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ===== COMPONENT PREVIEW MAP =====
export const componentPreviews: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  button: ButtonPreview,
  badge: BadgePreview,
  alert: AlertPreview,
  switch: SwitchPreview,
  spinner: SpinnerPreview,
  progress: ProgressPreview,
  slider: SliderPreview,
  input: InputPreview,
  avatar: AvatarPreview,
  card: CardPreview,
  checkbox: CheckboxPreview,
  toast: ToastPreview,
  skeleton: SkeletonPreview,
  modal: ModalPreview,
  tabs: TabsPreview,
  accordion: AccordionPreview,
  fab: FabPreview,
  "glass-card": GlassCardPreview,
  "gradient-button": GradientButtonPreview,
  "animated-input": AnimatedInputPreview,
  // Text Animations
  "split-text": SplitTextPreview,
  "blur-text": BlurTextPreview,
  "gradient-text": GradientTextPreview,
  typewriter: TypewriterPreview,
  // Animations
  "fade-content": FadeContentPreview,
  "scale-content": ScaleContentPreview,
  "slide-in": SlideInPreview,
};

// ===== OTP INPUT PREVIEW =====
export function OtpInputPreview() {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);

  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }

    // Check if complete
    if (newOtp.every((digit) => digit !== "")) {
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 2000);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    }
  };

  const handleFocus = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-xs text-zinc-400 mb-6 font-medium">OTP Verification</p>

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-zinc-100 mb-1">Enter Code</h3>
        <p className="text-xs text-zinc-500">
          We sent a 6-digit code to your phone
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        {otp.map((digit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(index, e.target.value.replace(/\D/g, ""))
              }
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => handleFocus(index)}
              className={cn(
                "w-12 h-14 text-center text-xl font-bold rounded-xl border-2 bg-zinc-800/50 transition-all duration-200 outline-none",
                activeIndex === index
                  ? "border-violet-500 text-zinc-100"
                  : digit
                  ? "border-zinc-600 text-zinc-100"
                  : "border-zinc-700 text-zinc-400",
                isComplete && digit && "border-green-500 bg-green-500/10"
              )}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2 text-green-400 mb-4"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm font-medium">Verified!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-zinc-500">
        Didn&apos;t receive code?{" "}
        <span className="text-violet-400 cursor-pointer hover:underline">
          Resend
        </span>
      </p>
    </div>
  );
}

// Update component map to include OTP input
componentPreviews["otp-input"] = OtpInputPreview;
