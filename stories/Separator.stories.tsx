import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Direction of the line. Vertical requires a flex row container with a fixed height.",
      table: {
        category: "Appearance",
        defaultValue: { summary: "horizontal" },
        type: { summary: '"horizontal" | "vertical"' },
      },
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "1px hairline — horizontal (h-px w-full) or vertical (w-px self-stretch). Source: [Figma node 76:10176](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-10176).",
      },
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Playground                                                          */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  name: "⚡ Playground",
  decorators: [
    (Story, { args }) =>
      args.orientation === "vertical" ? (
        <div className="flex h-10 items-center gap-4">
          <span className="text-sm text-foreground">Left</span>
          <Story />
          <span className="text-sm text-foreground">Right</span>
        </div>
      ) : (
        <div className="w-64 space-y-4">
          <p className="text-sm text-muted-foreground">Above</p>
          <Story />
          <p className="text-sm text-muted-foreground">Below</p>
        </div>
      ),
  ],
}

/* ------------------------------------------------------------------ */
/*  Horizontal                                                          */
/* ------------------------------------------------------------------ */

export const Horizontal: Story = {
  name: "Horizontal",
  parameters: {
    docs: { description: { story: "Default — h-px w-full. Divides a vertical content stack." } },
  },
  render: () => (
    <div className="w-72 space-y-4">
      <p className="text-sm text-muted-foreground">Section above</p>
      <Separator />
      <p className="text-sm text-muted-foreground">Section below</p>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Vertical                                                            */
/* ------------------------------------------------------------------ */

export const Vertical: Story = {
  name: "Vertical",
  parameters: {
    docs: { description: { story: "w-px self-stretch — must be inside a flex row with a fixed height." } },
  },
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm text-foreground">Docs</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-foreground">Components</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-foreground">Examples</span>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  In context — settings group                                         */
/* ------------------------------------------------------------------ */

export const InContext: Story = {
  name: "In Context — settings group",
  parameters: {
    docs: { description: { story: "Typical usage: separating named sections in a settings panel." } },
  },
  render: () => (
    <div className="w-72 space-y-4 rounded-lg border border-border p-4">
      <div>
        <p className="text-sm font-medium text-foreground">Account</p>
        <p className="text-xs text-muted-foreground">Manage your account details.</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm font-medium text-foreground">Privacy</p>
        <p className="text-xs text-muted-foreground">Control who can see your data.</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm font-medium text-foreground">Notifications</p>
        <p className="text-xs text-muted-foreground">Configure email and push alerts.</p>
      </div>
    </div>
  ),
}
