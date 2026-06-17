import { twColors } from "@/lib/tokens/colors"
import { Separator } from "@/components/ui/separator"
import { ColorSwatch, ColorRow } from "@/components/docs/ColorSwatch"

const STEP_ORDER = ["50","100","200","300","400","500","600","700","800","900","950","DEFAULT"]

export default function TwColorsPage() {
  const families = Object.keys(twColors)

  return (
    <div className="max-w-5xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Design Tokens
      </div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
        Tailwind Colors
      </h1>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        244 variables from the{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">tw/colors</code> Figma
        collection — the full Tailwind v3/v4 palette. Use these for illustrations, data
        visualization, and decorative elements. For UI surfaces always prefer semantic tokens.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        {families.length} families · Click any swatch to copy hex
      </p>

      <Separator className="mb-8" />

      {/* Quick overview grid */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold text-foreground">Overview</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(36px,1fr))] gap-1.5">
          {families.map((family) => {
            const scale = twColors[family]
            const midStep = scale["500"] || scale["DEFAULT"] || Object.values(scale)[Math.floor(Object.values(scale).length / 2)]
            return (
              <ColorSwatch
                key={family}
                hex={midStep}
                label={family}
                size="sm"
                showHex={false}
                className="w-full"
              />
            )
          })}
        </div>
      </section>

      <Separator className="mb-8" />

      {/* Full palette */}
      <section>
        <h2 className="mb-6 text-sm font-semibold text-foreground">Full Palette</h2>
        <div className="space-y-6">
          {families.map((family) => {
            const rawScale = twColors[family]
            const orderedScale: Record<string, string> = {}
            STEP_ORDER.forEach((s) => { if (rawScale[s]) orderedScale[s] = rawScale[s] })
            Object.keys(rawScale).forEach((s) => {
              if (!orderedScale[s]) orderedScale[s] = rawScale[s]
            })
            return (
              <div key={family}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm font-semibold capitalize text-foreground">
                    {family}
                  </span>
                  <div className="flex flex-1 flex-wrap gap-1">
                    {Object.entries(orderedScale).map(([step, hex]) => (
                      <div key={step} className="flex flex-col items-center gap-0.5">
                        <ColorSwatch hex={hex} size="sm" showHex={false} />
                        <span className="font-mono text-[9px] text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Hex values row */}
                <div className="ml-24 flex flex-wrap gap-1 pb-4">
                  {Object.entries(orderedScale).map(([step, hex]) => (
                    <code key={step} className="rounded bg-muted px-1 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {hex}
                    </code>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
