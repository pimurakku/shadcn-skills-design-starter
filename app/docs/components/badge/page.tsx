import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"

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

      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add badge`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

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

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  )
}
