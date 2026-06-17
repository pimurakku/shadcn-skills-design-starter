import { semanticTokens } from "@/lib/tokens/colors"
import { Separator } from "@/components/ui/separator"
import { ColorSwatch } from "@/components/docs/ColorSwatch"

function tokenToClass(name: string) {
  if (name.includes("foreground")) return `text-${name}`
  if (name.startsWith("ring")) return `ring-${name}`
  if (name.startsWith("border") || name === "input") return `border-${name}`
  return `bg-${name}`
}

export default function SemanticPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Design Tokens
      </div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
        Semantic Tokens
      </h1>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        35 semantic CSS custom properties from the{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">shadcn/ui</code> Figma
        collection. These are the only color values you should use in components — never raw hex.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Click any swatch to copy the hex value.
      </p>

      <Separator className="mb-8" />

      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Token</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">CSS Variable</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Light</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Dark</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Alias (Figma)</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tailwind</th>
            </tr>
          </thead>
          <tbody>
            {semanticTokens.map((token, i) => (
              <tr
                key={token.name}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-foreground">
                    {token.name}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                    --{token.name}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <ColorSwatch hex={token.light} size="xs" showHex={false} />
                    <code className="font-mono text-xs text-muted-foreground">{token.light}</code>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <ColorSwatch hex={token.dark} size="xs" showHex={false} />
                    <code className="font-mono text-xs text-muted-foreground">{token.dark}</code>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    {token.lightAlias && (
                      <span className="text-xs text-muted-foreground">
                        ☀ {token.lightAlias}
                      </span>
                    )}
                    {token.darkAlias && (
                      <span className="text-xs text-muted-foreground">
                        ☾ {token.darkAlias}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    {tokenToClass(token.name)}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Source:{" "}
        <code className="font-mono">
          app/globals.css · .claude/skills/shadcn-ui-design/references/DESIGN.md §2
        </code>
      </p>
    </div>
  )
}
