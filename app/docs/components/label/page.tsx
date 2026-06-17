import { User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const props = [
  {
    name: "htmlFor",
    type: "string",
    description: 'Links the label to a form control by matching the control\'s id. Required for accessibility when not wrapping the control.',
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

const tokenRows = [
  { element: "Label text", figma: "shadcn/ui/foreground (inherited)", cssVar: "--foreground", tailwind: "text-foreground (inherited)" },
  { element: "Disabled opacity", figma: "—", cssVar: "—", tailwind: "peer-disabled:opacity-50" },
]

export default function LabelPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Label</h1>
        <Badge variant="secondary">Primitive</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        Renders an accessible label for a form control. Pairs with Input, Select, Checkbox, and
        any other form element via <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">htmlFor</code>{" "}
        + <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">id</code> — or by wrapping the control directly.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        No dedicated Figma node — see{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-8518"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Input node 76:8518
        </a>{" "}
        for the With Label composition pattern.
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add label`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A thin wrapper around the native{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<label>`}</code> element.
          Adds <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">flex items-center gap-2</code>{" "}
          so a leading icon can be placed alongside text without extra markup.
          Disabled state is communicated via the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">peer-disabled</code> CSS pattern —
          place Label before a disabled Input in the DOM and the styles activate automatically.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<label htmlFor="id">          ← links via htmlFor / id
  [icon]?                       ← optional leading icon (flex gap-2)
  label text
</label>
<input id="id" />              ← control receives the binding`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* 2. Props / API */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Props / API</h2>
        <PropsTable props={props} />
        <p className="mt-3 text-xs text-muted-foreground">
          All native <code className="rounded bg-muted px-1 py-0.5 font-mono">label</code> HTML attributes are also accepted.
        </p>
      </section>

      <Separator className="mb-10" />

      {/* 3. Variants and States */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Default</h2>
        <p className="mb-4 text-sm text-muted-foreground">Renders as a plain text label.</p>
        <Preview
          code={`<Label>First name</Label>`}
        >
          <Label>First name</Label>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">With Icon</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          The <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">flex items-center gap-2</code>{" "}
          base makes adding a leading icon straightforward.
        </p>
        <Preview
          code={`import { User } from "lucide-react"

<Label>
  <User className="size-3.5" />
  Email address
</Label>`}
        >
          <Label>
            <User className="size-3.5" />
            Email address
          </Label>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Paired with Input</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Use a{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">grid gap-2</code> wrapper and
          link via <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">htmlFor</code> /{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">id</code>.
        </p>
        <Preview
          code={`<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-xs">
            <Label htmlFor="email-demo">Email</Label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Paired with Input + Button</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Label above an Input + Button row (subscribe / send pattern).
        </p>
        <Preview
          code={`<div className="grid gap-2">
  <Label htmlFor="subscribe">Newsletter</Label>
  <div className="flex gap-2">
    <Input id="subscribe" type="email" placeholder="you@example.com" />
    <Button>Subscribe</Button>
  </div>
</div>`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="subscribe-demo">Newsletter</Label>
            <div className="flex gap-2">
              <Input id="subscribe-demo" type="email" placeholder="you@example.com" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Disabled state</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          When the paired Input is disabled, the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">peer-disabled</code> CSS
          pattern automatically dims the Label and changes its cursor — no extra props needed on Label.
        </p>
        <Preview
          code={`<div className="grid gap-2">
  <Label htmlFor="disabled-field">Username</Label>
  <Input id="disabled-field" disabled placeholder="Unavailable" />
</div>`}
        >
          <div className="grid gap-2 w-full max-w-xs">
            <Label htmlFor="disabled-field-demo">Username</Label>
            <Input id="disabled-field-demo" disabled placeholder="Unavailable" />
          </div>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <DoDont
          do={[
            "Always pair Label with a form control — either via htmlFor/id or by wrapping the control.",
            "Use a grid gap-2 wrapper to stack Label above Input for the standard form field pattern.",
            "Use the peer-disabled pattern: render Label before the Input so peer-disabled styles apply automatically when the input is disabled.",
            "Place a Lucide icon inside Label using size-3.5 for visual cues (e.g. <User /> before 'Email address').",
            "Keep label text short and descriptive — it announces to screen readers as the accessible name of the control.",
          ]}
          dont={[
            "Don't use a <p> or <span> as a visual label — they break the screen reader association.",
            "Don't set color directly on Label; it inherits from --foreground. Use peer-disabled for disabled dimming.",
            "Don't skip the htmlFor/id link when Label and Input are not in a parent/child relationship.",
            "Don't put long instructions inside Label — use a <p> with aria-describedby on the input instead.",
            "Don't suppress the label for aesthetic reasons; placeholder text alone does not meet WCAG 1.3.1.",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Accessible name:</strong> A{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`<label htmlFor="id">`}</code>{" "}
            provides the accessible name for its associated control, announced by screen readers on focus.
            This satisfies WCAG 1.3.1 (Info and Relationships) and 4.1.2 (Name, Role, Value).
          </li>
          <li>
            <strong className="text-foreground">Click target:</strong> Clicking the label focuses and
            activates its linked control — expands the tap/click target for touch users (WCAG 2.5.3).
          </li>
          <li>
            <strong className="text-foreground">Disabled pattern:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">peer-disabled:opacity-50</code>{" "}
            reduces label opacity when the paired input has{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">disabled</code> — the label must appear
            immediately before the input in the DOM for the CSS{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">peer</code> selector to work.
          </li>
          <li>
            <strong className="text-foreground">select-none:</strong> Prevents accidental text selection
            when double-clicking a form field, which improves usability without affecting assistive tech.
          </li>
          <li>
            <strong className="text-foreground">Placeholder is not a substitute:</strong> Placeholder
            text disappears on input and has insufficient contrast in most browsers — always show a visible
            Label in addition to placeholder (WCAG 1.4.3, 3.3.2).
          </li>
        </ul>
      </section>

      <Separator className="mb-10" />

      {/* 6. Token mapping */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Token Mapping (Figma → Code)</h2>
        <TokenMapTable rows={tokenRows} />
        <p className="mt-3 text-xs text-muted-foreground">
          Label has no explicit color — it inherits{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">text-foreground</code> from the
          document or form container. Override with a utility class only when needed (e.g.{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono">text-muted-foreground</code> for
          optional field labels).
        </p>
      </section>
    </div>
  )
}
