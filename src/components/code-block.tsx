"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { codeToHtml, BundledLanguage } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: BundledLanguage;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const [highlightedCode, setHighlightedCode] = React.useState<string>("");

  React.useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });
        setHighlightedCode(html);
      } catch {
        // Fallback if highlighting fails
        setHighlightedCode(`<pre><code>${escapeHtml(code)}</code></pre>`);
      }
    }
    highlight();
  }, [code, language]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border bg-[#0d1117] transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#161b22]">
          <div className="flex items-center gap-3">
            {/* File type indicator dots */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-sm text-gray-400 font-mono">{filename}</span>
          </div>
          <span className="text-xs text-gray-500 uppercase font-medium tracking-wide">
            {language}
          </span>
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        <div
          className={cn(
            "p-4 overflow-x-auto text-sm font-mono",
            "[&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0",
            "[&_code]:!bg-transparent [&_.line]:min-h-[1.5rem]",
            showLineNumbers &&
              "[&_.line]:pl-12 [&_.line]:relative [&_.line]:before:absolute [&_.line]:before:left-0 [&_.line]:before:w-8 [&_.line]:before:text-right [&_.line]:before:text-gray-600 [&_.line]:before:pr-4"
          )}
          dangerouslySetInnerHTML={{
            __html:
              highlightedCode ||
              `<pre class="text-gray-300"><code>${escapeHtml(
                code
              )}</code></pre>`,
          }}
        />

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className={cn(
            "absolute top-3 right-3 w-9 h-9 rounded-lg",
            "flex items-center justify-center",
            "bg-white/5 hover:bg-white/10 border border-white/10",
            "opacity-0 group-hover:opacity-100",
            "transition-all duration-300 transform group-hover:translate-y-0 translate-y-1",
            copied && "bg-green-500/20 border-green-500/30"
          )}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
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
