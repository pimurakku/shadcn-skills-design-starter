import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqAccordion } from "@/components/faq-accordion"
import { Badge } from "@/components/ui/badge"
import { Preview } from "@/components/docs/Preview"
import { PropsTable } from "@/components/docs/PropsTable"
import { Separator } from "@/components/ui/separator"

const accordionProps = [
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "When true, allows multiple panels to be open simultaneously.",
  },
  {
    name: "defaultValue",
    type: "string[]",
    description: "Initially open item value(s). Always an array, even for single-open mode.",
  },
  {
    name: "value",
    type: "string[]",
    description: "Controlled open value(s).",
  },
  {
    name: "onValueChange",
    type: "(value: string[]) => void",
    description: "Callback when an item opens or closes.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional Tailwind classes merged via cn().",
  },
]

const itemProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "Unique identifier for this item (used in value/defaultValue arrays).",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, the item cannot be opened or closed.",
  },
]

const faqProps = [
  {
    name: "items",
    type: "{ question: string; answer: string }[]",
    description: "List of Q&A pairs. Defaults to 4 sample items if omitted.",
  },
  {
    name: "defaultValue",
    type: "string[]",
    description: 'Pre-open one or more items by value (e.g. ["item-0"]).',
  },
]

export default function AccordionPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </div>
      <div className="mb-3 flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Accordion</h1>
        <Badge variant="secondary">Figma ↗</Badge>
      </div>
      <p className="mb-2 text-base leading-7 text-muted-foreground">
        A vertically stacked set of interactive headings that each reveal a section of content.
        Built on <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@base-ui/react/accordion</code> —
        keyboard accessible, ARIA-driven, with smooth height animations.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Source:{" "}
        <a
          href="https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3341"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono underline underline-offset-2 hover:text-foreground"
        >
          Figma node 73:3341
        </a>
      </p>

      {/* Installation */}
      <div className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Installation</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`npx shadcn@latest add accordion`}</code>
        </pre>
      </div>

      <Separator className="mb-10" />

      {/* Basic example */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Basic</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Single-open mode (default). One item open at a time; click an open item to collapse.
        </p>
        <Preview
          code={`<Accordion className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent>
      Our flagship product combines cutting-edge technology with sleek design.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      We offer worldwide shipping with tracking. Orders ship within 1–2 business days.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent>
      30-day return policy. Items must be in original condition with all packaging.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <div className="w-full max-w-md">
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent>
                  Our flagship product combines cutting-edge technology with sleek design.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent>
                  We offer worldwide shipping with tracking. Orders ship within 1–2 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  30-day return policy. Items must be in original condition with all packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
      </section>

      {/* Multiple open */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Multiple Open</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">multiple</code> to
          allow more than one panel open at the same time.
        </p>
        <Preview
          code={`<Accordion multiple className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First section</AccordionTrigger>
    <AccordionContent>Both can be open at once.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second section</AccordionTrigger>
    <AccordionContent>This stays open even when the first is open.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <div className="w-full max-w-md">
            <Accordion multiple className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First section</AccordionTrigger>
                <AccordionContent>Both can be open at once.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second section</AccordionTrigger>
                <AccordionContent>
                  This stays open even when the first is open.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
      </section>

      {/* Pre-opened */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Default Open</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">defaultValue</code> (array) to
          pre-open one or more items on mount.
        </p>
        <Preview
          code={`<Accordion defaultValue={["item-1"]} className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Already open on mount</AccordionTrigger>
    <AccordionContent>This panel starts open because its value is in defaultValue.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Closed by default</AccordionTrigger>
    <AccordionContent>Click to expand.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <div className="w-full max-w-md">
            <Accordion defaultValue={["item-1"]} className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Already open on mount</AccordionTrigger>
                <AccordionContent>
                  This panel starts open because its value is in defaultValue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Closed by default</AccordionTrigger>
                <AccordionContent>Click to expand.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
      </section>

      {/* Disabled item */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">Disabled Item</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">disabled</code> on an
          individual <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">AccordionItem</code>.
        </p>
        <Preview
          code={`<Accordion className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Active</AccordionTrigger>
    <AccordionContent>Click to expand.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" disabled>
    <AccordionTrigger>Disabled</AccordionTrigger>
    <AccordionContent>Cannot be opened.</AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <div className="w-full max-w-md">
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Active</AccordionTrigger>
                <AccordionContent>Click to expand.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" disabled>
                <AccordionTrigger>Disabled</AccordionTrigger>
                <AccordionContent>Cannot be opened.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
      </section>

      {/* FaqAccordion composed */}
      <section className="mb-10">
        <h2 className="mb-1 text-base font-semibold text-foreground">FaqAccordion (Composed)</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A pre-composed FAQ pattern at{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">components/faq-accordion.tsx</code>.
          Pass an array of <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{`{ question, answer }`}</code> pairs.
        </p>
        <Preview
          code={`import { FaqAccordion } from "@/components/faq-accordion"

const items = [
  { question: "What is shadcn/ui?",       answer: "A collection of accessible React components built on Radix UI / base-ui." },
  { question: "Does it support dark mode?", answer: "Yes — via next-themes. The 35 semantic tokens carry light + dark values." },
  { question: "How do I add components?",  answer: "Run npx shadcn@latest add <name> to install primitives into components/ui/." },
]

<FaqAccordion items={items} />`}
        >
          <div className="w-full max-w-md">
            <FaqAccordion
              items={[
                {
                  question: "What is shadcn/ui?",
                  answer:
                    "A collection of accessible React components built on Radix UI / base-ui.",
                },
                {
                  question: "Does it support dark mode?",
                  answer:
                    "Yes — via next-themes. The 35 semantic tokens carry light + dark values.",
                },
                {
                  question: "How do I add components?",
                  answer:
                    "Run npx shadcn@latest add <name> to install primitives into components/ui/.",
                },
              ]}
            />
          </div>
        </Preview>
      </section>

      <Separator className="mb-10" />

      {/* Anatomy */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Anatomy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Compose four sub-components. Each Item needs a unique{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">value</code>.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
          <code>{`<Accordion>            // root container
  <AccordionItem>      // one section (needs unique value)
    <AccordionTrigger> // clickable header (auto-toggles aria-expanded)
    <AccordionContent> // collapsible panel
  </AccordionItem>
</Accordion>`}</code>
        </pre>
      </section>

      <Separator className="mb-10" />

      {/* Token mapping */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Token Mapping (Figma → Code)</h2>
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
              {[
                ["Section title", "shadcn/ui/foreground", "--foreground", "text-foreground"],
                ["Chevron icon", "shadcn/ui/foreground", "--foreground", "text-foreground"],
                ["Panel content", "shadcn/ui/foreground", "--foreground", "text-foreground"],
                ["Item border", "shadcn/ui/border", "--border", "border-b"],
                ["Focus ring", "shadcn/ui/ring", "--ring", "focus-visible:ring-ring/50"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-3 text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    <code className="rounded bg-muted px-1.5 py-0.5">{row[2]}</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">
                    <code className="rounded bg-muted px-1.5 py-0.5">{row[3]}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Props */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">Accordion (root)</h2>
        <PropsTable props={accordionProps} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">AccordionItem</h2>
        <PropsTable props={itemProps} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base font-semibold text-foreground">FaqAccordion (composed)</h2>
        <PropsTable props={faqProps} />
      </section>

      {/* Accessibility */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-semibold text-foreground">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Keyboard:</strong> <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">Space</code> /{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">Enter</code> toggles the focused trigger.
            Arrow keys move focus between triggers.
          </li>
          <li>
            <strong className="text-foreground">ARIA:</strong> Trigger has{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-expanded</code> and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-controls</code> wired by base-ui.
            Chevron icon swaps based on <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-expanded</code>.
          </li>
          <li>
            <strong className="text-foreground">Focus:</strong> Visible focus ring via{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">focus-visible:ring-3 ring-ring/50</code>.
          </li>
          <li>
            <strong className="text-foreground">Disabled:</strong> Items with{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">disabled</code> get{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-disabled</code> and reduced opacity.
          </li>
        </ul>
      </section>
    </div>
  )
}
