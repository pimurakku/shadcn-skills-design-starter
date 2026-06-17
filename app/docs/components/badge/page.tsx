import { Badge } from "@/components/ui/badge"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"

const props = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline"',
    default: '"default"',
    description: "Visual style of the badge.",
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
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Badge</h1>
      <p className="mb-8 text-base leading-7 text-muted-foreground">
        Displays a small status descriptor for UI elements — labels, tags, and counts.
      </p>

      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add badge`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Variants</h2>
        <p className="mb-4 text-sm text-muted-foreground">Four variants for different semantic uses.</p>
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

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  )
}
