import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Getting Started
      </div>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
        Introduction
      </h1>
      <p className="mb-6 text-base leading-7 text-muted-foreground">
        A component library built from Figma design tokens — 1,804 variables, zero drift. Components
        are generated using shadcn/ui primitives and Tailwind CSS v4, with semantic tokens from the
        design system applied throughout.
      </p>

      <Separator className="my-8" />

      <div className="space-y-6">
        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">Design Token System</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            All colors, spacing, and typography values come from Figma variables exported via lazyyysync.
            The token pipeline runs: Figma → <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">variables-export.json</code> →{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">DESIGN.md</code> →{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">globals.css</code> → Tailwind utilities.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">Skill Package</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Invoke <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">/shadcn-ui-design</code> in any
            Claude Code prompt to activate the skill. Claude will follow SKILL.md conventions — semantic tokens
            only, install via CLI, maintain dark mode consistency.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">Stack</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {[
              ["Framework", "Next.js 16 (App Router, Turbopack)"],
              ["Styling", "Tailwind CSS v4"],
              ["Components", "shadcn/ui"],
              ["Forms", "React Hook Form + Zod"],
              ["Theming", "next-themes"],
            ].map(([label, value]) => (
              <li key={label} className="flex gap-2">
                <span className="w-24 shrink-0 font-medium text-foreground">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
