import { Separator } from "@/components/ui/separator"

export default function InstallationPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Getting Started
      </div>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">Installation</h1>
      <p className="mb-8 text-base leading-7 text-muted-foreground">
        Set up a new Next.js project with shadcn/ui and this component library.
      </p>

      <Separator className="mb-10" />

      <div className="space-y-8">
        {[
          {
            step: "1",
            title: "Create Next.js app",
            code: `npx create-next-app@latest my-app \\
  --typescript --tailwind --app`,
          },
          {
            step: "2",
            title: "Initialize shadcn/ui",
            code: `npx shadcn@latest init`,
          },
          {
            step: "3",
            title: "Install dependencies",
            code: `npm install next-themes sonner react-hook-form zod @hookform/resolvers`,
          },
          {
            step: "4",
            title: "Add components",
            code: `npx shadcn@latest add button badge separator`,
          },
        ].map(({ step, title, code }) => (
          <div key={step} className="flex gap-5">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {step}
            </div>
            <div className="flex-1">
              <h2 className="mb-3 font-medium text-foreground">{title}</h2>
              <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
