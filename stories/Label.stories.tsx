import type { Meta, StoryObj } from "@storybook/react"
import { Mail, Lock, User } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Label text",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Label text — announced as accessible name of its linked control.",
      table: { category: "Content" },
    },
    htmlFor: {
      control: "text",
      description: "Links label to a form control by matching the control's id.",
      table: {
        category: "A11y",
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible label for form controls. Thin wrapper around `<label>` — adds flex + gap-2 for optional leading icon. Peer-disabled pattern dims label when paired input is disabled.",
      },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Playground                                                          */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  name: "⚡ Playground",
  args: { children: "Full name" },
}

/* ------------------------------------------------------------------ */
/*  Default                                                             */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="flex flex-col gap-3">
      <Label>First name</Label>
      <Label>Email address</Label>
      <Label>Password</Label>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  With icon                                                           */
/* ------------------------------------------------------------------ */

export const WithIcon: Story = {
  name: "With Icon",
  parameters: {
    docs: { description: { story: "flex items-center gap-2 base makes leading icon placement zero-effort." } },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Label><User className="size-3.5" />Full name</Label>
      <Label><Mail className="size-3.5" />Email address</Label>
      <Label><Lock className="size-3.5" />Password</Label>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Paired with Input                                                   */
/* ------------------------------------------------------------------ */

export const PairedWithInput: Story = {
  name: "Paired with Input",
  parameters: {
    docs: { description: { story: "Standard form field — grid gap-2 wrapper, htmlFor/id linking." } },
  },
  render: () => (
    <div className="w-72 space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="label-name">Full name</Label>
        <Input id="label-name" placeholder="Jane Smith" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-email">
          <Mail className="size-3.5" />
          Email address
        </Label>
        <Input id="label-email" type="email" placeholder="you@example.com" />
      </div>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Disabled (peer pattern)                                             */
/* ------------------------------------------------------------------ */

export const DisabledPeer: Story = {
  name: "Disabled (peer pattern)",
  parameters: {
    docs: {
      description: {
        story:
          "peer-disabled:opacity-50 + peer-disabled:cursor-not-allowed apply automatically when Input has disabled. Label must be immediately before Input in the DOM.",
      },
    },
  },
  render: () => (
    <div className="w-72 space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="peer-enabled">Enabled field</Label>
        <Input id="peer-enabled" placeholder="You can type here" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="peer-disabled">Disabled field</Label>
        <Input id="peer-disabled" disabled placeholder="Not editable" />
      </div>
    </div>
  ),
}
