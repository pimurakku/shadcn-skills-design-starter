"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"
import { TokenMapTable } from "@/components/docs/TokenMapTable"
import { DoDont } from "@/components/docs/DoDont"

const rootProps = [
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state. Pair with onOpenChange.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Initial open state for uncontrolled usage.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback fired when the dialog opens or closes.",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "When true (default), background is inert and Escape closes.",
  },
]

const contentProps = [
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Renders the X button in the top-right corner.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes — useful for max-w-* overrides.",
  },
]

const tokenRows = [
  { element: "Panel background", figma: "shadcn/ui/background", cssVar: "--background", tailwind: "bg-background" },
  { element: "Panel border", figma: "shadcn/ui/border", cssVar: "--border", tailwind: "border border-border" },
  { element: "Title text", figma: "shadcn/ui/foreground", cssVar: "--foreground", tailwind: "text-foreground" },
  { element: "Description text", figma: "shadcn/ui/muted-foreground", cssVar: "--muted-foreground", tailwind: "text-muted-foreground" },
  { element: "Overlay backdrop", figma: "—", cssVar: "—", tailwind: "bg-black/30" },
  { element: "Drop shadow", figma: "2-stop shadow (10% opacity)", cssVar: "—", tailwind: "shadow-lg" },
]

export default function DialogPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Dialog</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        A window overlaid on either the primary window or another dialog window, rendering the
        content underneath inert. Built on{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@base-ui/react/dialog</code> —
        focus trap, Escape to close, backdrop click, ARIA <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">role="dialog"</code>{" "}
        and <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-modal</code> wired by default.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=74-7828"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 74:7828
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add dialog`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* 1. Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<Dialog>                  // root — controls open state
  <DialogTrigger>         // element that opens the dialog (pass render prop)
  <DialogContent>         // popup with backdrop + portal
    <DialogHeader>
      <DialogTitle>       // required for a11y (aria-labelledby)
      <DialogDescription> // optional (aria-describedby)
    </DialogHeader>
    {/* body content */}
    <DialogFooter>
      <DialogClose>       // any close trigger (X, Cancel, etc.)
    </DialogFooter>
  </DialogContent>
</Dialog>`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* 2. Props / API */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Dialog (root)</h2>
        <PropsTable props={rootProps} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">DialogContent</h2>
        <PropsTable props={contentProps} />
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
                ["Padding", "24px (uniform)", "p-6"],
                ["Border radius", "10px", "rounded-lg"],
                ["Border width", "1px", "border"],
                ["Title font size", "18px Semi Bold", "text-lg font-semibold"],
                ["Description font size", "14px Regular", "text-sm"],
                ["Header→body→footer gap", "24px", "gap-6"],
                ["Default max width", "—", "sm:max-w-md (28rem / 448px)"],
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
      </section>

      <Separator className="mb-10" />

      {/* 3. Variants and States */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Edit Profile</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Matches Figma <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">State=Open</code>{" "}
          variant — title, description, two form fields, and Cancel/Save buttons in the footer.
        </p>
        <Preview
          code={`<Dialog>
  <DialogTrigger render={<Button>Open Dialog</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger render={<Button>Open Dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dialog-username">Username</Label>
                  <Input id="dialog-username" defaultValue="@peduarte" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Share Link</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Matches Figma <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">Custom_close_button</code>{" "}
          variant — copy-to-clipboard pattern with single primary action.
        </p>
        <Preview
          code={`<Dialog>
  <DialogTrigger render={<Button variant="outline">Share</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center gap-2">
      <Input
        defaultValue="https://ui.shadcn.com/docs/installation"
        readOnly
      />
      <Button type="submit" variant="secondary">Copy</Button>
    </div>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger render={<Button variant="outline">Share</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <Input
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
                <Button type="submit" variant="secondary">Copy</Button>
              </div>
            </DialogContent>
          </Dialog>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Destructive Confirmation</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          The destructive confirm button must <strong className="text-foreground">restate the action</strong>{" "}
          (per WCAG 3.3.4). For irreversible actions, prefer <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">AlertDialog</code>.
        </p>
        <Preview
          code={`<Dialog>
  <DialogTrigger render={<Button variant="destructive">Delete</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete account?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account and remove all data.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button variant="destructive">Delete account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger render={<Button variant="destructive">Delete</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete account?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove all data.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button variant="destructive">Delete account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Without Close Button</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">showCloseButton={"{false}"}</code>{" "}
          to hide the X button. Escape and backdrop click still close — DO NOT remove all close
          affordances.
        </p>
        <Preview
          code={`<Dialog>
  <DialogTrigger render={<Button>Open</Button>} />
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>No close button</DialogTitle>
      <DialogDescription>
        Press Escape or click outside to close.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button>OK</Button>} />
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger render={<Button>Open</Button>} />
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>No close button</DialogTitle>
                <DialogDescription>
                  Press Escape or click outside to close.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button>OK</Button>} />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* 4. Usage Do / Don't */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Usage Do / Don&rsquo;t</h2>
        <DoDont
          do={[
            "Use Dialog for focused tasks that benefit from blocking the rest of the page (edit a record, share a link, confirm an action).",
            "Always include a DialogTitle — it's required for aria-labelledby; if visually hidden, wrap in sr-only.",
            "Keep dialogs short (one task per dialog) — long forms belong on a page.",
            "For destructive actions, make the confirm button restate the action (e.g. 'Delete account', not 'OK').",
            "Use AlertDialog instead of Dialog for irreversible high-stakes confirmations (drops backdrop dismissal).",
            "Provide a clear Cancel + primary action pair in the footer; align right (sm:justify-end).",
          ]}
          dont={[
            "Don't open a Dialog for casual/secondary info — use Popover, Tooltip, or inline disclosure instead.",
            "Don't nest Dialog inside Dialog — confusing for keyboard + screen readers.",
            "Don't show a Dialog without user intent (no auto-open on page load unless onboarding).",
            "Don't remove all close affordances (Escape, backdrop click, X). If you must, leave at least one path out.",
            "Don't put marketing or upsell prompts in a Dialog — perceived as interruptive.",
            "Don't use Dialog for navigation; pages are for navigation.",
          ]}
        />
      </section>

      <Separator className="mb-10" />

      {/* 5. Accessibility notes */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Role / ARIA:</strong> Popup gets{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">role="dialog"</code> +{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-modal="true"</code>.
            DialogTitle wires <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-labelledby</code>,
            DialogDescription wires <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-describedby</code>.
          </li>
          <li>
            <strong className="text-foreground">Focus management:</strong> Focus moves to the dialog
            on open, traps inside while open, and returns to the trigger on close. WCAG 2.4.3 / 2.1.2.
          </li>
          <li>
            <strong className="text-foreground">Escape to close:</strong> Native — works without
            additional wiring.
          </li>
          <li>
            <strong className="text-foreground">Backdrop click:</strong> Closes by default. Override via{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">onOpenChange</code>.
          </li>
          <li>
            <strong className="text-foreground">Title is required:</strong> Always include{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">DialogTitle</code>. If
            visually hidden, wrap in <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">sr-only</code>.
          </li>
          <li>
            <strong className="text-foreground">Destructive actions:</strong> The confirm button must
            restate the action (e.g., "Delete account" not "OK"). For high-stakes, add
            type-to-confirm and prefer{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">AlertDialog</code>.
            WCAG 3.3.4 / 3.3.6.
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
