"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface PreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function Preview({ children, code, className }: PreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-1">
        <div className="flex">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2 text-xs font-medium capitalize transition-colors",
                tab === t
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "code" && (
          <button
            onClick={copyCode}
            className="mr-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>

      {/* Preview */}
      {tab === "preview" && (
        <div className="flex min-h-[140px] flex-wrap items-center justify-center gap-3 bg-background p-8">
          {children}
        </div>
      )}

      {/* Code */}
      {tab === "code" && (
        <pre className="overflow-x-auto bg-zinc-950 p-5 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
