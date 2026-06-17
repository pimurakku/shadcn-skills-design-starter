import { ChevronRight, ExternalLink, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"

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

      {/* Import */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add button`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* Variants */}
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

      {/* Sizes */}
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

      {/* With Icon */}
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

      {/* Icon Only */}
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

      {/* Loading */}
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

      {/* Disabled */}
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

      {/* Props */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props</h2>
        <PropsTable props={props} />
        <p className="mt-3 text-xs text-muted-foreground">
          All native <code className="rounded bg-muted px-1 py-0.5 font-mono">button</code> HTML attributes are also accepted.
        </p>
      </section>
    </div>
  )
}
