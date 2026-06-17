import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const props = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the separator line.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "false",
    description: 'When true, role="presentation" — hidden from accessibility tree. Use for purely visual dividers.',
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

const tokenRows = [
  { element: "Line color", figma: "shadcn/ui/border", cssVar: "--border", tailwind: "bg-border" },
]

export default function SeparatorPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Separator</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        Visually or semantically separates content. Renders a horizontal hairline by default; can be flipped
        vertical for inline flex rows.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-10176"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 76:10176
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add separator`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A 1px line — its tag is decided by the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">decorative</code> prop.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<hr role="separator" />            ← decorative={false} (default) — exposed to AT
<div role="presentation" />        ← decorative={true} — hidden from AT

orientation="horizontal" → h-px w-full
orientation="vertical"   → w-px self-stretch`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* 2. Props / API */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props / API</h2>
        <PropsTable props={props} />
      </section>

      <Separator className="mb-10" />

      {/* 3. Variants and States */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Horizontal</h2>
        <p className="mb-4 text-sm text-muted-foreground">Default orientation.</p>
        <Preview
          code={`<div className="w-full space-y-4">
  <p className="text-sm text-muted-foreground">Above</p>
  <Separator />
  <p className="text-sm text-muted-foreground">Below</p>
</div>`}
        >
          <div className="w-full max-w-xs space-y-4">
            <p className="text-sm text-muted-foreground">Above</p>
            <Separator />
            <p className="text-sm text-muted-foreground">Below</p>
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Vertical</h2>
        <p className="mb-4 text-sm text-muted-foreground">Use inside a flex row container.</p>
        <Preview
          code={`<div className="flex h-8 items-center gap-4">
  <span className="text-sm">Docs</span>
  <Separator orientation="vertical" />
  <span className="text-sm">Components</span>
  <Separator orientation="vertical" />
  <span className="text-sm">Examples</span>
</div>`}
        >
          <div className="flex h-8 items-center gap-4">
            <span className="text-sm text-foreground">Docs</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Components</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-foreground">Examples</span>
          </div>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <DoDont
          do={[
            "Use horizontal Separator to break a vertical stack into logical sections (form sections, settings groups).",
            "Use vertical Separator inside flex rows for nav, breadcrumb, or toolbar dividers — wrap in a flex h-* container.",
            "Set decorative={true} for purely visual dividers inside a card to avoid screen-reader noise.",
            "Set decorative={false} when the separator marks a genuine semantic boundary screen readers should announce.",
            "Pair with consistent vertical rhythm (e.g., my-6 or my-10) for predictable spacing.",
          ]}
          dont={[
            "Don't use Separator for layout decoration — use border utilities (border-b) on the parent instead.",
            "Don't put a vertical Separator inside a block container without a fixed height; it will collapse to 0.",
            "Don't override bg-border with raw colors; if you need a stronger line, swap the --border token in globals.css.",
            "Don't use 2 Separators in a row — if you need extra space, add margin, not stacked lines.",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">decorative={`{false}`}</strong> (default) →{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">role="separator"</code> +{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-orientation</code>{" "}
            exposed to AT.
          </li>
          <li>
            <strong className="text-foreground">decorative={`{true}`}</strong> →{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">role="presentation"</code>{" "}
            — invisible to screen readers (use for purely visual lines inside a card).
          </li>
          <li>
            <strong className="text-foreground">Non-interactive:</strong> Separator does not receive
            focus — no keyboard handling needed.
          </li>
          <li>
            <strong className="text-foreground">Contrast:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">--border</code> = 1.26:1 in
            light mode falls below WCAG 1.4.11 (3:1). Acceptable when decorative; consider strengthening
            when used as a meaningful boundary.
          </li>
        </ul>
      </section>

      <Separator className="mb-10" />

      {/* 6. Token mapping */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Token Mapping (Figma → Code)</h2>
        <TokenMapTable rows={tokenRows} />
        <p className="mt-3 text-xs text-muted-foreground">
          Light <code className="font-mono">#E5E5E5</code> on <code className="font-mono">#FFFFFF</code>{" "}
          = 1.26:1. Below WCAG 1.4.11 UI 3:1 — only matters when{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">decorative={`{false}`}</code> and the
          separator carries meaning. If you need a stronger line, swap{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">--border</code> in{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">globals.css</code>.
        </p>
      </section>
    </div>
  )
}
