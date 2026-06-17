import { Separator } from "@/components/ui/separator"

const tokens = [
  { name: "--background", light: "#FFFFFF", dark: "#0A0A0A", usage: "bg-background" },
  { name: "--foreground", light: "#0A0A0A", dark: "#FAFAFA", usage: "text-foreground" },
  { name: "--primary", light: "#171717", dark: "#E5E5E5", usage: "bg-primary" },
  { name: "--primary-foreground", light: "#FAFAFA", dark: "#171717", usage: "text-primary-foreground" },
  { name: "--secondary", light: "#F5F5F5", dark: "#262626", usage: "bg-secondary" },
  { name: "--muted", light: "#F5F5F5", dark: "#262626", usage: "bg-muted" },
  { name: "--muted-foreground", light: "#737373", dark: "#A3A3A3", usage: "text-muted-foreground" },
  { name: "--border", light: "#E5E5E5", dark: "#404040", usage: "border-border" },
  { name: "--destructive", light: "#DC2626", dark: "#F87171", usage: "bg-destructive" },
]

export default function ThemingPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Getting Started
      </div>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">Theming</h1>
      <p className="mb-8 text-base leading-7 text-muted-foreground">
        Semantic CSS custom properties from the{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">shadcn/ui</code> Figma collection.
        All 35 tokens are declared in{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">app/globals.css</code> and mapped
        to Tailwind utilities via <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@theme inline</code>.
      </p>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Core Tokens</h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Light</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Dark</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Utility</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((t) => (
                <tr key={t.name} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs text-foreground">{t.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="size-4 rounded border border-border"
                        style={{ background: t.light }}
                      />
                      <code className="font-mono text-xs text-muted-foreground">{t.light}</code>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="size-4 rounded border border-border"
                        style={{ background: t.dark }}
                      />
                      <code className="font-mono text-xs text-muted-foreground">{t.dark}</code>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {t.usage}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Full 35-token reference in{" "}
          <code className="font-mono">.claude/skills/shadcn-ui-design/references/DESIGN.md §2</code>
        </p>
      </section>
    </div>
  )
}
