"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ColorSwatchProps {
  hex: string
  label?: string
  size?: "xs" | "sm" | "md" | "lg"
  showHex?: boolean
  className?: string
}

export function ColorSwatch({ hex, label, size = "md", showHex = true, className }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  const sizes = {
    xs: "size-5 rounded",
    sm: "size-8 rounded-md",
    md: "size-10 rounded-lg",
    lg: "size-14 rounded-xl",
  }

  return (
    <button
      onClick={copy}
      title={copied ? "Copied!" : hex}
      className={cn("group flex flex-col items-center gap-1 outline-none", className)}
    >
      <div
        className={cn(
          sizes[size],
          "border border-black/[0.08] transition-transform group-hover:scale-105 group-active:scale-95 dark:border-white/[0.08]"
        )}
        style={{ backgroundColor: hex }}
      />
      {showHex && (
        <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground">
          {copied ? "Copied!" : hex}
        </span>
      )}
      {label && !showHex && (
        <span className="text-[10px] text-muted-foreground">{label}</span>
      )}
    </button>
  )
}

interface ColorRowProps {
  family: string
  scale: Record<string, string>
}

export function ColorRow({ family, scale }: ColorRowProps) {
  const steps = Object.keys(scale)
  return (
    <div className="flex items-start gap-4">
      <div className="w-20 shrink-0 pt-1.5">
        <span className="text-sm font-medium capitalize text-foreground">{family}</span>
      </div>
      <div className="flex flex-1 flex-wrap gap-1.5">
        {steps.map((step) => (
          <div key={step} className="flex flex-col items-center gap-1">
            <ColorSwatch hex={scale[step]} size="sm" showHex={false} />
            <span className="font-mono text-[9px] text-muted-foreground">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
