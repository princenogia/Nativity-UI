"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getComponentBySlug,
  components,
  ComponentMeta,
} from "@/lib/components-data";
import {
  getComponentDoc,
  ComponentDocumentation,
  PropDefinition,
} from "@/lib/component-docs";
import { ComponentPreviewWrapper } from "@/components/component-preview-wrapper";
import { componentPreviews } from "@/components/component-previews";

interface Props {
  params: { slug: string };
}

export default function ComponentPageClient({ slug }: { slug: string }) {
  const component = getComponentBySlug(slug);
  const doc = getComponentDoc(slug);

  // Customize state at page level
  const [customProps, setCustomProps] = useState<
    Record<string, string | boolean>
  >({});

  // Initialize with default values
  useEffect(() => {
    if (doc?.props) {
      const defaults: Record<string, string | boolean> = {};
      doc.props.slice(0, 4).forEach((prop) => {
        if (prop.type === "boolean") {
          defaults[prop.name] = prop.default === "true";
        } else if (prop.default) {
          defaults[prop.name] = prop.default.replace(/'/g, "");
        }
      });
      setCustomProps(defaults);
    }
  }, [doc?.props]);

  if (!component || !doc) {
    return (
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-bold">Component not found</h1>
      </div>
    );
  }

  // Find prev/next components
  const currentIndex = components.findIndex((c) => c.slug === slug);
  const prevComponent = currentIndex > 0 ? components[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;

  const handleCustomPropChange = (name: string, value: string | boolean) => {
    setCustomProps((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 page-transition">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <span>/</span>
        <Link
          href="/docs/components/button"
          className="hover:text-foreground transition-colors"
        >
          Components
        </Link>
        <span>/</span>
        <span className="text-foreground">{component.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold">{component.name}</h1>
          <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
            {component.category}
          </span>
        </div>
        <p className="text-lg text-muted-foreground">{doc.description}</p>
      </div>

      {/* Preview section - now with customProps */}
      <section className="mb-12">
        <ComponentPreviewWrapper
          slug={slug}
          code={doc.code}
          usage={doc.usage}
          customProps={customProps}
        />
      </section>

      {/* Customize Section - controls only */}
      {doc.props.length > 0 && (
        <CustomizeSection
          props={doc.props}
          values={customProps}
          onChange={handleCustomPropChange}
        />
      )}

      {/* Props Table */}
      {doc.props.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Props</h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium">
                    Prop
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium hidden sm:table-cell">
                    Default
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-medium hidden md:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {doc.props.map((prop, index) => (
                  <tr
                    key={prop.name}
                    className={cn(index > 0 && "border-t border-border")}
                  >
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono text-primary">
                        {prop.name}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono text-muted-foreground">
                        {prop.type}
                      </code>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <code className="text-sm font-mono">
                        {prop.default || "-"}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="flex items-center justify-between pt-8 border-t border-border">
        {prevComponent ? (
          <Link
            href={`/docs/components/${prevComponent.slug}`}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "border border-border hover:bg-muted transition-colors"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{prevComponent.name}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextComponent && (
          <Link
            href={`/docs/components/${nextComponent.slug}`}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "border border-border hover:bg-muted transition-colors"
            )}
          >
            <span>{nextComponent.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}

// Customize Section - Controls only (preview is in main ComponentPreviewWrapper)
function CustomizeSection({
  props,
  values,
  onChange,
}: {
  props: PropDefinition[];
  values: Record<string, string | boolean>;
  onChange: (name: string, value: string | boolean) => void;
}) {
  // Generate code preview based on current values
  const generateCodePreview = () => {
    const propsString = Object.entries(values)
      .filter(([_, value]) => value !== "" && value !== false)
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return `${key}`;
        }
        return `${key}="${value}"`;
      })
      .join(" ");
    return propsString ? ` ${propsString}` : "";
  };

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4">Customize</h2>
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        {/* Controls */}
        <div className="grid sm:grid-cols-2 gap-4 p-6 border-b border-border">
          {props.slice(0, 4).map((prop) => (
            <div key={prop.name} className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center justify-between">
                <span>{prop.name}</span>
                {prop.type === "boolean" && (
                  <span className="text-xs text-muted-foreground">
                    {values[prop.name] ? "true" : "false"}
                  </span>
                )}
              </label>
              {prop.type.includes("|") ? (
                <select
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={String(values[prop.name] || "")}
                  onChange={(e) => onChange(prop.name, e.target.value)}
                >
                  {prop.type
                    .replace(/'/g, "")
                    .split(" | ")
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              ) : prop.type === "boolean" ? (
                <button
                  onClick={() => onChange(prop.name, !values[prop.name])}
                  className={cn(
                    "w-12 h-7 rounded-full p-1 transition-colors",
                    values[prop.name] ? "bg-primary" : "bg-muted"
                  )}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white shadow-md"
                    animate={{ x: values[prop.name] ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              ) : prop.type === "number" ? (
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="flex-1 h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    value={Number(values[prop.name]) || 0}
                    onChange={(e) => onChange(prop.name, e.target.value)}
                  />
                  <span className="text-sm font-mono text-muted-foreground w-8">
                    {values[prop.name] || 0}
                  </span>
                </div>
              ) : (
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={String(values[prop.name] || "")}
                  onChange={(e) => onChange(prop.name, e.target.value)}
                  placeholder={prop.type}
                />
              )}
              <p className="text-xs text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live code preview */}
        <div className="p-4 bg-[#0d1117]">
          <p className="text-xs text-gray-500 mb-2">Generated props:</p>
          <code className="text-sm font-mono text-green-400">
            {`<Component${generateCodePreview()} />`}
          </code>
        </div>
      </div>
    </section>
  );
}
