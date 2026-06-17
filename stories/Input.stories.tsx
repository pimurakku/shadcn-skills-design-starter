import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const INPUT_TYPES = [
  "text", "email", "password", "number",
  "search", "tel", "url", "file", "date", "time",
] as const

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "Placeholder text…",
    disabled: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: INPUT_TYPES,
      description: "Native HTML input type.",
      table: {
        category: "Content",
        defaultValue: { summary: "text" },
        type: { summary: INPUT_TYPES.join(" | ") },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder shown when the field is empty.",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      description: "Disables the field — opacity 50% + pointer-events-none.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    "aria-invalid": {
      control: "boolean",
      description: 'Set to true to show the error state (destructive border + ring). Maps to aria-invalid="true".',
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: "text",
      description: "Controlled value.",
      table: { category: "Content" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Text field — h-9 (36px), px-3 py-1, rounded-lg. States via native HTML props: disabled, aria-invalid. Compose with Label via htmlFor/id. Source: [Figma node 76:8518](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-8518).",
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Playground                                                          */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  name: "⚡ Playground",
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
}

/* ------------------------------------------------------------------ */
/*  Default                                                             */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: { description: { story: "border-input default → border-ring on focus. bg-background." } },
  },
  render: () => (
    <div className="w-72 space-y-2">
      <Input type="email" placeholder="you@example.com" />
      <Input type="password" placeholder="Password" />
      <Input type="search" placeholder="Search…" />
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  With Label                                                          */
/* ------------------------------------------------------------------ */

export const WithLabel: Story = {
  name: "With Label",
  parameters: {
    docs: { description: { story: "Standard form field — grid gap-2, htmlFor/id linking." } },
  },
  render: () => (
    <div className="w-72 grid gap-2">
      <Label htmlFor="email-story">Email address</Label>
      <Input id="email-story" type="email" placeholder="you@example.com" />
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  File                                                                */
/* ------------------------------------------------------------------ */

export const FileInput: Story = {
  name: "File",
  parameters: {
    docs: { description: { story: 'type="file" — file: pseudo-class styles the native "Choose File" button.' } },
  },
  render: () => (
    <div className="w-72 grid gap-2">
      <Label htmlFor="file-story">Upload file</Label>
      <Input id="file-story" type="file" />
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Disabled                                                            */
/* ------------------------------------------------------------------ */

export const Disabled: Story = {
  name: "Disabled",
  parameters: {
    docs: { description: { story: "opacity-50 + bg-muted/50 tint. Label dims via peer-disabled." } },
  },
  render: () => (
    <div className="w-72 grid gap-2">
      <Label htmlFor="disabled-story">Username</Label>
      <Input id="disabled-story" disabled placeholder="Unavailable" />
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Error                                                               */
/* ------------------------------------------------------------------ */

export const Error: Story = {
  name: "Error (aria-invalid)",
  parameters: {
    docs: { description: { story: 'aria-invalid triggers destructive border + ring. Pair with a visible error message for WCAG 3.3.1.' } },
  },
  render: () => (
    <div className="w-72 space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="error-story">Email address</Label>
        <Input
          id="error-story"
          type="email"
          defaultValue="not-an-email"
          aria-invalid
          aria-describedby="error-msg"
        />
        <p id="error-msg" className="text-xs text-destructive">Enter a valid email address.</p>
      </div>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  With Button (subscribe / send pattern)                              */
/* ------------------------------------------------------------------ */

export const WithButton: Story = {
  name: "With Button",
  parameters: {
    docs: { description: { story: "flex gap-2 wrapper — subscribe / send / copy pattern." } },
  },
  render: () => (
    <div className="w-80 space-y-3">
      <div className="flex gap-2">
        <Input type="email" placeholder="you@example.com" />
        <Button>Subscribe</Button>
      </div>
      <div className="flex gap-2">
        <Input type="url" defaultValue="https://example.com/share/abc123" readOnly />
        <Button variant="outline">Copy</Button>
      </div>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  All states — QA matrix                                             */
/* ------------------------------------------------------------------ */

export const AllStates: Story = {
  name: "All States — QA matrix",
  parameters: {
    layout: "padded",
    docs: { description: { story: "Default → Focus → Disabled → Error. Verify in Light + Dark." } },
  },
  render: () => (
    <div className="w-80 space-y-4">
      {[
        { label: "Default", props: { placeholder: "Empty field" } },
        { label: "With value", props: { defaultValue: "Filled value" } },
        { label: "Disabled", props: { disabled: true, placeholder: "Disabled" } },
        { label: "Error", props: { "aria-invalid": true, defaultValue: "bad-value", className: "border-destructive" } },
      ].map(({ label, props }) => (
        <div key={label} className="grid gap-1.5">
          <Label className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            {label}
          </Label>
          <Input {...props} />
        </div>
      ))}
    </div>
  ),
}
