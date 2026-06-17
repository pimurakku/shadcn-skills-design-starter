import { Separator } from "@/components/ui/separator"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"

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
    description: "When true, hides from accessibility tree.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

export default function SeparatorPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Separator</h1>
      <p className="mb-8 text-base leading-7 text-muted-foreground">
        Visually or semantically separates content. Renders a horizontal line by default.
      </p>

      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add separator`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

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

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  )
}
