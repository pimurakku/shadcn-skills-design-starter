import type { Meta, StoryObj } from "@storybook/react"
import { CheckCircle2, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "secondary-icon",
  "default-number",
  "destructive-number",
  "secondary-number",
] as const

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
      description: "Visual style — maps 1:1 to Figma node 73:3479 (8 variants).",
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
        type: { summary: VARIANTS.join(" | ") },
      },
    },
    children: {
      control: "text",
      description: "Label text, number, or icon + text.",
      table: { category: "Content" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Small status descriptor for UI elements — labels, tags, counts. 8 variants from Figma: 4 text-shaped (rounded-lg) + 1 icon + 3 number-shaped (rounded-full). Source: [Figma node 73:3479](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3479).",
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Playground                                                          */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  name: "⚡ Playground",
  args: { children: "Label" },
}

/* ------------------------------------------------------------------ */
/*  Text variants                                                       */
/* ------------------------------------------------------------------ */

export const TextVariants: Story = {
  name: "Text Variants — 4",
  parameters: {
    docs: {
      description: { story: "Rounded rectangle (rounded-lg, h-6, 24px). Four semantic tones." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  With icon                                                           */
/* ------------------------------------------------------------------ */

export const WithIcon: Story = {
  name: "With Icon (secondary-icon)",
  parameters: {
    docs: {
      description: { story: "Matches Figma Type=Secondary_icon. SVG children auto-size to 12px via [&>svg]." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="secondary-icon">
        <CheckCircle2 />
        Verified
      </Badge>
      <Badge variant="secondary-icon">
        <Star />
        Featured
      </Badge>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Number variants                                                     */
/* ------------------------------------------------------------------ */

export const NumberVariants: Story = {
  name: "Number Variants — 3",
  parameters: {
    docs: {
      description: { story: "Pill-shaped (rounded-full, min-w-5) for numeric counts. secondary-number uses Geist Mono font." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default-number">8</Badge>
      <Badge variant="default-number">99</Badge>
      <Badge variant="destructive-number">3</Badge>
      <Badge variant="destructive-number">99+</Badge>
      <Badge variant="secondary-number">20+</Badge>
      <Badge variant="secondary-number">0</Badge>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  As link (polymorphic)                                               */
/* ------------------------------------------------------------------ */

export const AsLink: Story = {
  name: "As Link (polymorphic render)",
  parameters: {
    docs: {
      description: { story: "Pass render={<a>} to change the rendered tag. Hover + focus-visible ring activate automatically." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default" render={<a href="#" />}>Clickable</Badge>
      <Badge variant="outline" render={<a href="#" />}>Open docs</Badge>
      <Badge variant="secondary" render={<a href="#" />}>Learn more</Badge>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  All variants reference                                              */
/* ------------------------------------------------------------------ */

export const AllVariants: Story = {
  name: "All Variants — QA reference",
  parameters: {
    layout: "padded",
    docs: {
      description: { story: "Full 8-variant grid. Toggle Light/Dark in toolbar to verify token application." },
    },
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">Text shapes</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">Icon</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary-icon"><CheckCircle2 />Verified</Badge>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">Number shapes</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default-number">8</Badge>
          <Badge variant="destructive-number">99</Badge>
          <Badge variant="secondary-number">20+</Badge>
        </div>
      </div>
    </div>
  ),
}
