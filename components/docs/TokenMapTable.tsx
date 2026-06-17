interface TokenRow {
  element: string
  figma: string
  cssVar: string
  tailwind: string
}

export function TokenMapTable({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Element</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Figma alias</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">CSS var</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tailwind</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.element}
              className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              <td className="px-4 py-3 text-foreground">{row.element}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.figma}</td>
              <td className="px-4 py-3 font-mono text-xs">
                <code className="rounded bg-muted px-1.5 py-0.5">{row.cssVar}</code>
              </td>
              <td className="px-4 py-3 font-mono text-xs">
                <code className="rounded bg-muted px-1.5 py-0.5">{row.tailwind}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
