"use client"

import { useState } from "react"
import { rdxColorsLight, rdxColorsDark } from "@/lib/tokens/colors"
import { Separator } from "@/components/ui/separator"
import { ColorSwatch } from "@/components/docs/ColorSwatch"

const STEP_LABELS: Record<string, string> = {
  "1":  "App bg",
  "2":  "Subtle bg",
  "3":  "Element bg",
  "4":  "Hover bg",
  "5":  "Active bg",
  "6":  "Subtle border",
  "7":  "Border",
  "8":  "Hover border",
  "9":  "Solid bg",
  "10": "Hover solid",
  "11": "Text",
  "12": "High-contrast",
}

const STEPS = ["1","2","3","4","5","6","7","8","9","10","11","12"]

export default function RadixColorsPage() {
  const [mode, setMode] = useState<"light" | "dark">("light")

  const palette = mode === "light" ? rdxColorsLight : rdxColorsDark
  const families = Object.keys(palette)

  return (
    <div className="max-w-5xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Design Tokens
      </div>
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h1 className="mb-1 text-3xl font-semibold tracking-tight text-foreground">
            Radix Colors
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            396 variables from the{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">rdx/colors</code>{" "}
            Figma collection. Each scale has 12 steps with semantic roles — backgrounds, borders,
            solid fills, and accessible text.
          </p>
        </div>
        {/* Mode toggle */}
        <div className="flex shrink-0 overflow-hidden rounded-lg border border-border bg-muted/40 p-0.5">
          {(["light", "dark"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-all ${
                mode === m
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-8 text-sm text-muted-foreground">
        {families.length} scales · 12 steps each · Click any swatch to copy hex
      </p>

      <Separator className="mb-8" />

      {/* Step legend */}
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold text-foreground">Step Reference</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-xs font-semibold text-foreground">
                {step}
              </div>
              <span className="text-xs text-muted-foreground">{STEP_LABELS[step]}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-8" />

      {/* Color scales */}
      <section>
        <h2 className="mb-6 text-sm font-semibold text-foreground">
          All Scales — {mode === "light" ? "Light" : "Dark"} Mode
        </h2>
        <div className="space-y-1">
          {families.map((family) => {
            const scale = palette[family]
            return (
              <div
                key={family}
                className="grid items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted/40 transition-colors"
                style={{ gridTemplateColumns: "6rem repeat(12, 1fr)" }}
              >
                <span className="text-sm font-medium capitalize text-foreground">
                  {family}
                </span>
                {STEPS.map((step) => {
                  const hex = scale[step]
                  if (!hex) return <div key={step} className="size-8" />
                  return (
                    <div key={step} className="flex flex-col items-center gap-0.5">
                      <ColorSwatch hex={hex} size="sm" showHex={false} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Step numbers footer */}
        <div
          className="mt-2 grid px-3"
          style={{ gridTemplateColumns: "6rem repeat(12, 1fr)" }}
        >
          <div />
          {STEPS.map((s) => (
            <div key={s} className="text-center font-mono text-[9px] text-muted-foreground">{s}</div>
          ))}
        </div>
      </section>

      <Separator className="mt-10 mb-8" />

      {/* Per-family detail */}
      <section>
        <h2 className="mb-6 text-sm font-semibold text-foreground">Detailed View</h2>
        <div className="space-y-8">
          {families.map((family) => {
            const scale = palette[family]
            return (
              <div key={family}>
                <h3 className="mb-3 font-medium capitalize text-foreground">{family}</h3>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
                  {STEPS.map((step) => {
                    const hex = scale[step]
                    if (!hex) return null
                    return (
                      <div key={step} className="flex flex-col items-center gap-1">
                        <ColorSwatch hex={hex} size="md" showHex={false} />
                        <span className="font-mono text-[9px] font-medium text-muted-foreground">
                          {step}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground leading-tight">
                          {hex}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
