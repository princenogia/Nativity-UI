"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Code,
  Heart,
  Lightbulb,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { componentPreviews } from "./component-previews";
import { codeToHtml } from "shiki";

// Components that need mobile-sized container (375px width)
const mobileComponents = [
  "navbar",
  "sidebar",
  "menu-toggle",
  "bottom-navigation",
];

interface ComponentPreviewWrapperProps {
  slug: string;
  code?: string;
  usage?: string;
  customProps?: Record<string, string | boolean>;
}

type TabType = "preview" | "code";

export function ComponentPreviewWrapper({
  slug,
  code = "",
  usage = "",
  customProps = {},
}: ComponentPreviewWrapperProps) {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);
  const [highlightedUsage, setHighlightedUsage] = useState<string>("");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [refreshKey, setRefreshKey] = useState(0);

  const PreviewComponent = componentPreviews[slug];
  const needsMobileContainer = mobileComponents.includes(slug);

  // Syntax highlighting for code
  useEffect(() => {
    async function highlight() {
      try {
        if (usage) {
          const usageHtml = await codeToHtml(usage, {
            lang: "tsx",
            theme: "github-dark",
          });
          setHighlightedUsage(usageHtml);
        }
        if (code) {
          const codeHtml = await codeToHtml(code, {
            lang: "tsx",
            theme: "github-dark",
          });
          setHighlightedCode(codeHtml);
        }
      } catch (e) {
        console.error("Syntax highlighting error:", e);
      }
    }
    highlight();
  }, [usage, code]);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!PreviewComponent) {
    return (
      <div className="flex items-center justify-center py-12 rounded-xl bg-muted/30 border border-border">
        <p className="text-sm text-muted-foreground">
          Preview not available for this component
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      {/* Tab Header */}
      <div className="flex items-center justify-between px-1 py-1 border-b border-border bg-[#0d1117]">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md",
              activeTab === "preview"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md",
              activeTab === "code"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <Code className="w-4 h-4" />
            Code
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 pr-2">
          {activeTab === "preview" && (
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
            <Heart className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contribute</span>
          </button>
        </div>
      </div>

      {/* Preview Content */}
      {activeTab === "preview" && (
        <div className="relative overflow-hidden bg-[#0a0a0f] min-h-[350px]">
          {/* Content container */}
          <div
            className="relative z-10 flex flex-col items-center justify-center py-12 px-6 min-h-[350px]"
            key={refreshKey}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              {needsMobileContainer ? (
                <div className="relative">
                  <div
                    className="relative bg-transparent rounded-2xl overflow-hidden border border-white/20"
                    style={{ width: "375px", minHeight: "280px" }}
                  >
                    <div className="flex justify-between items-center px-6 py-2 bg-zinc-900/50 text-xs font-medium text-zinc-400">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-current opacity-60" />
                      </div>
                    </div>
                    <div className="p-4">
                      <PreviewComponent customProps={customProps} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 min-w-[280px] max-w-full">
                  <PreviewComponent customProps={customProps} />
                </div>
              )}
            </motion.div>

            {/* Animation finished indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-green-400">Interactive</span>
            </motion.div>
          </div>
        </div>
      )}

      {/* Code Tab */}
      {activeTab === "code" && (
        <div className="bg-[#0d1117] min-h-[350px] overflow-auto">
          {/* Usage Section */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Usage</h3>
              <button
                onClick={() => copyToClipboard(usage)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-colors",
                  "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
                )}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div
              className={cn(
                "overflow-x-auto text-sm font-mono rounded-lg bg-[#161b22] p-4",
                "[&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0",
                "[&_code]:!bg-transparent"
              )}
              dangerouslySetInnerHTML={{
                __html:
                  highlightedUsage ||
                  `<pre class="text-gray-300"><code>${escapeHtml(
                    usage
                  )}</code></pre>`,
              }}
            />
          </div>

          {/* Source Code Section */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">
                Source Code{" "}
                <span className="text-gray-500 font-normal">({slug}.tsx)</span>
              </h3>
              <button
                onClick={() => copyToClipboard(code)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-colors",
                  "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
                )}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>
            <div
              className={cn(
                "overflow-x-auto text-sm font-mono rounded-lg bg-[#161b22] p-4 max-h-[400px]",
                "[&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0",
                "[&_code]:!bg-transparent"
              )}
              dangerouslySetInnerHTML={{
                __html:
                  highlightedCode ||
                  `<pre class="text-gray-300"><code>${escapeHtml(
                    code
                  )}</code></pre>`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
