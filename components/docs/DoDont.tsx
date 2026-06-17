import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DoDontProps {
  do: string[]
  dont: string[]
  className?: string
}

export function DoDont({ do: dos, dont: donts, className }: DoDontProps) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500/15">
            <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
          </div>
          <span className="text-sm font-semibold text-foreground">Do</span>
        </div>
        <ul className="space-y-2">
          {dos.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-emerald-500/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex size-5 items-center justify-center rounded-full bg-destructive/15">
            <X className="size-3 text-destructive" />
          </div>
          <span className="text-sm font-semibold text-foreground">Don&rsquo;t</span>
        </div>
        <ul className="space-y-2">
          {donts.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-destructive/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
