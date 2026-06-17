import { ChevronRight, ExternalLink, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const tokenRows = [
  { element: "Default fill", figma: "shadcn/ui/primary", cssVar: "--primary", tailwind: "bg-primary" },
  { element: "Default fg", figma: "shadcn/ui/primary-foreground", cssVar: "--primary-foreground", tailwind: "text-primary-foreground" },
  { element: "Secondary fill", figma: "shadcn/ui/secondary", cssVar: "--secondary", tailwind: "bg-secondary" },
  { element: "Destructive fill", figma: "shadcn/ui/destructive", cssVar: "--destructive", tailwind: "bg-destructive" },
  { element: "Destructive fg", figma: "rdx/colors/white/12", cssVar: "--destructive-foreground", tailwind: "text-destructive-foreground" },
  { element: "Outline border", figma: "shadcn/ui/border", cssVar: "--border", tailwind: "border-border" },
  { element: "Focus ring", figma: "shadcn/ui/ring", cssVar: "--ring", tailwind: "focus-visible:ring-ring/50" },
]

const props = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
    default: '"default"',
    description: "Visual style of the button.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg" | "icon" | "icon-sm"',
    default: '"default"',
    description: "Size preset. icon/icon-sm render a square button.",
  },
  {
    name: "isLoading",
    type: "boolean",
    default: "false",
    description: "Shows a spinner and disables the button when true.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables pointer events and reduces opacity.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

export default function ButtonPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Button</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        Displays a button or a component that looks like a button. Supports 6 visual variants,
        5 size presets, loading state, and icon-only layouts.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=402-654"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 402:654
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add button`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Native <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<button>`}</code> wrapping
          an optional leading icon, label, and optional trailing icon. When{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">isLoading</code> is set, a{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">Loader2</code> spinner replaces
          the leading content and the button is disabled.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<button>
  [Loader2 spinner]?      ← when isLoading
  [icon (leading)]?
  label
  [icon (trailing)]?
</button>`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* 2. Props / API */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props / API</h2>
        <PropsTable props={props} />
        <p className="mt-3 text-xs text-muted-foreground">
          All native <code className="rounded bg-muted px-1 py-0.5 font-mono">button</code> HTML attributes are also accepted.
        </p>
      </section>

      <Separator className="mb-10" />

      {/* 3. Variants and States */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Variants</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Six variants mapped directly from the Figma component set.
        </p>
        <Preview
          code={`<Button variant="default">Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        >
          <Button variant="default">Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Sizes</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Three height presets: <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">sm</code> (32px) ·{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">default</code> (36px) ·{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">lg</code> (40px).
        </p>
        <Preview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">With Icon</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Place any Lucide icon inside the button — SVGs without an explicit{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">size-*</code> class default to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">size-4</code>.
        </p>
        <Preview
          code={`import { GitBranch, ExternalLink, ChevronRight } from "lucide-react"

<Button variant="outline" size="sm">
  <GitBranch />
  New Branch
</Button>
<Button variant="default">
  Open
  <ExternalLink />
</Button>
<Button variant="ghost">
  Next
  <ChevronRight />
</Button>`}
        >
          <Button variant="outline" size="sm">
            <GitBranch />
            New Branch
          </Button>
          <Button variant="default">
            Open
            <ExternalLink />
          </Button>
          <Button variant="ghost">
            Next
            <ChevronRight />
          </Button>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Icon Only</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">size="icon"</code> (36px) or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">size="icon-sm"</code> (32px) for square buttons.
          Always add an <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-label</code>.
        </p>
        <Preview
          code={`<Button variant="secondary" size="icon" aria-label="Next">
  <ChevronRight />
</Button>
<Button variant="outline" size="icon" aria-label="Open external">
  <ExternalLink />
</Button>
<Button variant="ghost" size="icon" aria-label="Branch">
  <GitBranch />
</Button>
<Button variant="secondary" size="icon-sm" aria-label="Next">
  <ChevronRight />
</Button>`}
        >
          <Button variant="secondary" size="icon" aria-label="Next">
            <ChevronRight />
          </Button>
          <Button variant="outline" size="icon" aria-label="Open external">
            <ExternalLink />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Branch">
            <GitBranch />
          </Button>
          <Button variant="secondary" size="icon-sm" aria-label="Next">
            <ChevronRight />
          </Button>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Loading</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">isLoading</code> to show a spinner and
          automatically disable the button.
        </p>
        <Preview
          code={`<Button variant="default" isLoading>Please wait</Button>
<Button variant="outline" isLoading>Please wait</Button>`}
        >
          <Button variant="default" isLoading>Please wait</Button>
          <Button variant="outline" isLoading>Please wait</Button>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Disabled</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Disabled buttons reduce opacity to 50% and block pointer events.
        </p>
        <Preview
          code={`<Button variant="default" disabled>Button</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="link" disabled>Link</Button>`}
        >
          <Button variant="default" disabled>Button</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="link" disabled>Link</Button>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          When to reach for Button vs other components.
        </p>
        <DoDont
          do={[
            "Use one default (primary) Button per visible area as the main CTA.",
            "Use destructive for irreversible actions (Delete, Remove) and restate the action in the label.",
            "Use outline / secondary for supporting actions and ghost for tertiary / toolbar actions.",
            "Use link variant only inline within prose where button semantics are needed.",
            "Add aria-label on icon-only buttons (size=icon / icon-sm).",
            "Use isLoading for async submit; the button auto-disables and shows a spinner.",
          ]}
          dont={[
            "Don't use Button for navigation between pages — use <Link> (or <Button asChild><Link/></Button>).",
            "Don't stack multiple primary (default) Buttons next to each other — visual hierarchy collapses.",
            "Don't override the background with a raw color (bg-red-500); use destructive variant or add a semantic token.",
            "Don't use destructive for non-destructive actions just because it's red.",
            "Don't put plain text labels in size=icon — it forces the square to grow and breaks the layout.",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Native semantics:</strong> Renders a native{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<button>`}</code> via{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@base-ui/react/button</code> —
            role, keyboard (Space + Enter), and focus management are built-in.
          </li>
          <li>
            <strong className="text-foreground">Focus visible:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50</code>{" "}
            — meets WCAG 2.4.7 (Focus Visible) and 1.4.11 (UI contrast).
          </li>
          <li>
            <strong className="text-foreground">Disabled:</strong> Uses native{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">disabled</code> attribute (removed from tab order) +{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">opacity-50 pointer-events-none</code>.
          </li>
          <li>
            <strong className="text-foreground">Icon-only:</strong> Always provide{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-label</code> when no
            visible text — see Icon Only examples above.
          </li>
          <li>
            <strong className="text-foreground">Loading:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">isLoading</code> disables interaction —
            recommended to also pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-busy="true"</code>{" "}
            and a screen-reader-only "Loading" announcement for assistive tech.
          </li>
          <li>
            <strong className="text-foreground">Target size:</strong> Default{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">h-9</code> (36px) and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">size=icon</code> (36×36) exceed
            WCAG 2.5.8 minimum 24×24. <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">sm</code> (32×32) and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">icon-sm</code> meet the
            minimum but fall below the enhanced 44×44 (WCAG 2.5.5) — use cautiously on touch surfaces.
          </li>
          <li>
            <strong className="text-foreground">Motion:</strong> Active state applies{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">translate-y-px</code> on press
            — recommended to gate with{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">motion-safe:</code> per WCAG 2.3.3
            (pending).
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
