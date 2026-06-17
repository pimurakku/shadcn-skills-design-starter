import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, ExternalLink, GitBranch, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Visual style — maps 1:1 to Figma node 402:654 variants.",
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm"],
      description: "Height preset. icon/icon-sm render a square button.",
      table: { defaultValue: { summary: "default" } },
    },
    isLoading: {
      control: "boolean",
      description: "Shows Loader2 spinner and disables the button.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Native disabled — removes from tab order, reduces opacity.",
      table: { defaultValue: { summary: "false" } },
    },
    children: {
      control: "text",
      description: "Button label (or icon children for size=icon).",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Triggers actions or navigates. Supports 6 variants × 5 sizes, loading state, and icon-only layouts. Source: [Figma node 402:654](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=402-654).",
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/* -------------------------------------------------------------------------- */
/*  Playground (all controls active)                                           */
/* -------------------------------------------------------------------------- */

export const Playground: Story = {
  name: "⚡ Playground",
  args: { children: "Click me" },
}

/* -------------------------------------------------------------------------- */
/*  Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const Variants: Story = {
  name: "Variants — all 6",
  parameters: {
    docs: {
      description: { story: "Six variants mapped from Figma. One primary per page area." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  Sizes                                                                      */
/* -------------------------------------------------------------------------- */

export const Sizes: Story = {
  name: "Sizes — sm / default / lg",
  parameters: {
    docs: {
      description: { story: "Three height presets: 32px · 36px · 40px." },
    },
  },
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  With Icon                                                                  */
/* -------------------------------------------------------------------------- */

export const WithIcon: Story = {
  name: "With Icon",
  parameters: {
    docs: {
      description: { story: "Lucide icons placed as children. SVGs without a size-* class default to size-4 via the [&_svg] selector." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" size="sm">
        <GitBranch />
        New Branch
      </Button>
      <Button variant="default">
        Open
        <ExternalLink />
      </Button>
      <Button variant="ghost">
        Next
        <ChevronRight />
      </Button>
      <Button variant="destructive">
        <Trash2 />
        Delete
      </Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  Icon Only                                                                  */
/* -------------------------------------------------------------------------- */

export const IconOnly: Story = {
  name: "Icon Only",
  parameters: {
    docs: {
      description: { story: "size=icon (36px) and size=icon-sm (32px). Always add aria-label for screen readers." },
    },
  },
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="secondary" size="icon" aria-label="Next">
        <ChevronRight />
      </Button>
      <Button variant="outline" size="icon" aria-label="Open external">
        <ExternalLink />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Branch">
        <GitBranch />
      </Button>
      <Button variant="destructive" size="icon" aria-label="Delete">
        <Trash2 />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Next small">
        <ChevronRight />
      </Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  Loading                                                                    */
/* -------------------------------------------------------------------------- */

export const Loading: Story = {
  name: "Loading",
  parameters: {
    docs: {
      description: { story: "isLoading renders a Loader2 spinner and disables the button automatically. Pair with aria-busy='true' for full a11y." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" isLoading>Saving…</Button>
      <Button variant="outline" isLoading>Uploading…</Button>
      <Button variant="secondary" isLoading>Processing…</Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const Disabled: Story = {
  name: "Disabled",
  parameters: {
    docs: {
      description: { story: "opacity-50 + pointer-events-none. Applies to all variants." },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="link" disabled>Link</Button>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/*  Full matrix (QA reference)                                                 */
/* -------------------------------------------------------------------------- */

export const AllStates: Story = {
  name: "All States — QA matrix",
  parameters: {
    layout: "padded",
    docs: {
      description: { story: "Full variant × state grid for QA sign-off. Verify in both Light and Dark modes using the toolbar toggle." },
    },
  },
  render: () => (
    <div className="space-y-6">
      {(["default", "secondary", "destructive", "outline", "ghost", "link"] as const).map(
        (variant) => (
          <div key={variant} className="space-y-1">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
              {variant}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant={variant}>Default</Button>
              <Button variant={variant} isLoading>Loading</Button>
              <Button variant={variant} disabled>Disabled</Button>
            </div>
          </div>
        )
      )}
    </div>
  ),
}
