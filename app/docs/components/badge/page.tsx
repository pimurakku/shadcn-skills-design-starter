import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const tokenRows = [
  { element: "Default fill", figma: "shadcn/ui/primary", cssVar: "--primary", tailwind: "bg-primary" },
  { element: "Default fg", figma: "shadcn/ui/primary-foreground", cssVar: "--primary-foreground", tailwind: "text-primary-foreground" },
  { element: "Secondary fill", figma: "shadcn/ui/secondary", cssVar: "--secondary", tailwind: "bg-secondary" },
  { element: "Destructive fill", figma: "shadcn/ui/destructive", cssVar: "--destructive", tailwind: "bg-destructive" },
  { element: "Destructive fg", figma: "rdx/colors/white/12", cssVar: "--destructive-foreground", tailwind: "text-destructive-foreground" },
  { element: "Outline border", figma: "shadcn/ui/border", cssVar: "--border", tailwind: "border-border" },
  { element: "Outline fg", figma: "shadcn/ui/foreground", cssVar: "--foreground", tailwind: "text-foreground" },
]

const props = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "secondary-icon" | "default-number" | "destructive-number" | "secondary-number"',
    default: '"default"',
    description: "Visual style. *-number variants are pill-shaped (rounded-full) for numeric counts.",
  },
  {
    name: "render",
    type: "ReactElement | function",
    description: "Polymorphic render — useRender from base-ui. Pass a custom element (e.g. <a>) to change the rendered tag.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

export default function BadgePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Badge</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        Displays a small status descriptor for UI elements — labels, tags, and counts.
        Eight variants mirror the Figma component (text-style × 4 + number-style × 3 + icon variant).
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3479"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 73:3479
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add badge`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Polymorphic via <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">useRender</code>{" "}
          — defaults to <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<span>`}</code> but
          accepts <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">render={`<a>`}</code> for
          link badges.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<span> (or <a>, <button> via render prop)
  [icon (leading)]?
  label / number
  [icon (trailing)]?
</span>`}</code>
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
        <h2 className="mb-1 text-base font-semibold text-foreground">Text Variants</h2>
        <p className="mb-4 text-sm text-muted-foreground">Four rounded-rectangle variants (radius 8px, height 22px) — matches Figma Type=Default/Secondary/Destructive/Outline.</p>
        <Preview
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        >
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">With Icon</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">secondary-icon</code> variant —
          matches Figma Type=Secondary_icon.
        </p>
        <Preview
          code={`import { CheckCircle2 } from "lucide-react"

<Badge variant="secondary-icon">
  <CheckCircle2 />
  Verified
</Badge>`}
        >
          <Badge variant="secondary-icon">
            <CheckCircle2 />
            Verified
          </Badge>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Number Variants</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pill-shaped numeric badges (radius 9999px) — matches Figma Type=*_number.
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono ml-1">secondary-number</code> uses Geist Mono.
        </p>
        <Preview
          code={`<Badge variant="default-number">8</Badge>
<Badge variant="destructive-number">99</Badge>
<Badge variant="secondary-number">20+</Badge>`}
        >
          <Badge variant="default-number">8</Badge>
          <Badge variant="destructive-number">99</Badge>
          <Badge variant="secondary-number">20+</Badge>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          When to reach for Badge vs other components.
        </p>
        <DoDont
          do={[
            "Use Badge to label status, category, or count adjacent to other content.",
            "Use *-number variants (pill shape) for numeric notification counts (e.g., 8, 99, 20+).",
            "Use secondary-icon to combine a small icon with a short label (e.g. ✓ Verified).",
            "Compose link badges via render={<a href='…' />} — hover styles activate automatically.",
            "Provide context for screen readers when a number badge stands alone (aria-label='3 new messages').",
          ]}
          dont={[
            "Don't use Badge for clickable primary actions — use a Button instead.",
            "Don't pack long sentences inside a Badge; it's designed for short labels.",
            "Don't use the destructive variant for non-warning content just because it's red.",
            "Don't recreate the removed ghost / link variants — those don't exist in Figma; use a Button variant=link instead.",
            "Don't override the h-6 (24px) height — it's tuned for WCAG 2.5.8 when polymorphed to <a>.",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Default tag:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<span>`}</code> — non-interactive.
            For link badges pass{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`render={<a href="…">}`}</code>.
          </li>
          <li>
            <strong className="text-foreground">Context for numbers:</strong> A bare{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<Badge>8</Badge>`}</code> reads
            as "8" — add{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-label="8 unread"</code>{" "}
            or include surrounding visible context.
          </li>
          <li>
            <strong className="text-foreground">Color is not the only signal:</strong> Destructive variant should
            be paired with text/icon explaining the meaning (WCAG 1.4.1).
          </li>
          <li>
            <strong className="text-foreground">Focus visible:</strong> When polymorphed to an interactive
            element (a, button), focus ring{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">focus-visible:ring-3 ring-ring/50</code>{" "}
            is applied automatically.
          </li>
          <li>
            <strong className="text-foreground">Target size:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">h-6</code> (24px) meets WCAG
            2.5.8 minimum when the badge is interactive.
          </li>
        </ul>
      </section>

      <Separator className="mb-10" />

      {/* 6. Token mapping */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Token Mapping (Figma → Code)</h2>
        <TokenMapTable rows={tokenRows} />
      </section>
    </div>
  )
}
