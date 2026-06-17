import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const inputProps = [
  {
    name: "type",
    type: '"text" | "email" | "password" | "number" | "search" | "tel" | "url" | "file" | "date" | "time" | "datetime-local"',
    default: '"text"',
    description: "HTML input type. Triggers native validation + keyboard behavior.",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Hint shown when the input is empty. Renders in text-muted-foreground.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interaction; reduces opacity + sets pointer-events: none.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    description: 'Pass true to render the error border + ring (works with React Hook Form via {...register} or aria-invalid={!!error}).',
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

const labelProps = [
  {
    name: "htmlFor",
    type: "string",
    description: "ID of the form control this label is bound to.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

const tokenRows = [
  { element: "Background", figma: "shadcn/ui/background", cssVar: "--background", tailwind: "bg-background" },
  { element: "Border (default)", figma: "shadcn/ui/border", cssVar: "--input", tailwind: "border-input" },
  { element: "Border (focus)", figma: "shadcn/ui/ring", cssVar: "--ring", tailwind: "focus-visible:border-ring" },
  { element: "Placeholder text", figma: "shadcn/ui/muted-foreground", cssVar: "--muted-foreground", tailwind: "placeholder:text-muted-foreground" },
  { element: "Input text", figma: "shadcn/ui/foreground", cssVar: "--foreground", tailwind: "text-foreground" },
  { element: "Error border", figma: "shadcn/ui/destructive", cssVar: "--destructive", tailwind: "aria-invalid:border-destructive" },
  { element: "Focus ring (50%)", figma: "shadcn/ui/ring", cssVar: "--ring", tailwind: "focus-visible:ring-ring/50" },
]

export default function InputPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Input</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        Displays a form input field or a component that looks like an input field.
        Built on <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@base-ui/react/input</code> —
        native HTML semantics with token-driven styling for focus, disabled, file, and error states.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-8518"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 76:8518
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add input label`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Native HTML <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<input>`}</code> —
          all anatomy variations (file, with label, with button) compose around the same primitive.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<input type="text" placeholder="…" />

// With Label (compose with Label primitive)
<grid gap-2>
  <Label htmlFor="x">Label</Label>
  <Input id="x" />
</grid>

// File (type="file") — file: pseudo-class styles the picker button
<Input type="file" />

// With Button (compose in flex row)
<flex gap-2>
  <Input />
  <Button>Submit</Button>
</flex>`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* 2. Props / API */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Input Props</h2>
        <PropsTable props={inputProps} />
        <p className="mt-3 text-xs text-muted-foreground">
          All native HTML <code className="rounded bg-muted px-1 py-0.5 font-mono">{`<input>`}</code> attributes are accepted.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Label Props</h2>
        <PropsTable props={labelProps} />
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Sizing</h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Property</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Figma</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Code</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Height", "36px", "h-9"],
                ["Horizontal padding", "12px", "px-3"],
                ["Vertical padding", "4px", "py-1"],
                ["Border radius", "8px", "rounded-lg"],
                ["Border width", "1px", "border"],
                ["Font size", "16px (mobile) / 14px (md+)", "text-base md:text-sm"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-3 text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    <code className="rounded bg-muted px-1.5 py-0.5">{row[2]}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          16px on mobile prevents iOS Safari from auto-zooming on focus.
        </p>
      </section>

      <Separator className="mb-10" />

      {/* 3. Variants and States */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Default</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A standard text input. Border switches to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">border-ring</code> on focus —
          matches Figma <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">State=Active</code>.
        </p>
        <Preview
          code={`<Input type="email" placeholder="Email" />`}
        >
          <div className="w-full max-w-sm">
            <Input type="email" placeholder="Email" />
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">With Label</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pair with <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<Label htmlFor>`}</code>
          {" "} for accessible labeling. Matches Figma{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">With Label</code> variant.
        </p>
        <Preview
          code={`<div className="grid w-full max-w-sm items-center gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
        >
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email-demo">Email</Label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">File</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">type="file"</code> — the
          built-in <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">file:</code> pseudo-class
          styles the "Choose File" button to match Figma's spec.
        </p>
        <Preview
          code={`<div className="grid w-full max-w-sm items-center gap-2">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
        >
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="picture-demo">Picture</Label>
            <Input id="picture-demo" type="file" />
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Disabled</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">disabled</code> reduces opacity,
          blocks pointer events, and tints background to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">bg-input/50</code>.
        </p>
        <Preview
          code={`<Input type="email" placeholder="Email" disabled />`}
        >
          <div className="w-full max-w-sm">
            <Input type="email" placeholder="Email" disabled />
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">With Button</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Compose Input + Button in a flex row for subscribe/send patterns. Matches Figma{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">With Button</code> variant.
        </p>
        <Preview
          code={`<div className="flex w-full max-w-sm items-center gap-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}
        >
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Error State</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-invalid</code> to show
          the destructive border + ring. Works with React Hook Form via{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-invalid={"{!!errors.email}"}</code>.
        </p>
        <Preview
          code={`<div className="grid w-full max-w-sm gap-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    aria-invalid
    defaultValue="not-an-email"
  />
  <p className="text-xs text-destructive">Please enter a valid email address.</p>
</div>`}
        >
          <div className="grid w-full max-w-sm gap-2">
            <Label htmlFor="email-err">Email</Label>
            <Input
              id="email-err"
              type="email"
              placeholder="you@example.com"
              aria-invalid
              defaultValue="not-an-email"
            />
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
          </div>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <DoDont
          do={[
            "Always pair with <Label htmlFor='x'> + <Input id='x'> for accessible labeling (WCAG 1.3.1).",
            "Use the proper type attribute (email, tel, url, number, search) for native validation + correct mobile keyboard.",
            "Use aria-invalid + aria-describedby pointing to error text — works automatically with React Hook Form.",
            "Use required attribute for required fields, not just an asterisk in the label.",
            "Disable + show inline message rather than removing the field on error — preserves layout.",
            "Use placeholder for example formatting only, never as a replacement for a label.",
          ]}
          dont={[
            "Don't override text-base on mobile — 16px prevents iOS Safari from auto-zooming on focus.",
            "Don't put label text inside placeholder; it disappears as soon as the user types.",
            "Don't use Input for multi-line text — use Textarea instead.",
            "Don't disable the field when the user simply hasn't filled prerequisites — show why or guide them.",
            "Don't validate on every keystroke; validate on blur or submit (per Nielsen heuristic 5).",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Labeling:</strong> Always pair with{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<Label htmlFor>`}</code> or
            wrap the input. WCAG 1.3.1 / 3.3.2.
          </li>
          <li>
            <strong className="text-foreground">Focus visible:</strong> Border switches to{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">--ring</code> + 3px ring at 50% opacity.
            Meets WCAG 2.4.7.
          </li>
          <li>
            <strong className="text-foreground">Error announcement:</strong> Use{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-invalid</code> +{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-describedby</code> pointing
            to the error message. WCAG 3.3.1.
          </li>
          <li>
            <strong className="text-foreground">Required:</strong> Use native{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">required</code> attribute, NOT
            asterisk in label text alone (screen readers).
          </li>
          <li>
            <strong className="text-foreground">Mobile zoom:</strong> 16px base font prevents iOS Safari
            auto-zoom on focus.
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
