import { cn } from "@/lib/utils"

interface Prop {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={cn(
                "border-b border-border last:border-0 transition-colors hover:bg-muted/30",
              )}
            >
              <td className="px-4 py-3 font-mono text-xs">
                <span className="font-medium text-foreground">{prop.name}</span>
                {prop.required && (
                  <span className="ml-1 text-destructive">*</span>
                )}
              </td>
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {prop.default ? (
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
