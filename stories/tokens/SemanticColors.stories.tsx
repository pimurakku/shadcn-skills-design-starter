import type { Meta, StoryObj } from "@storybook/react"

/* ------------------------------------------------------------------ */
/*  Inline swatch — renders using CSS vars so light/dark responds      */
/* ------------------------------------------------------------------ */

function TokenSwatch({
  name,
  tailwind,
  description,
  lightHex,
  darkHex,
}: {
  name: string
  tailwind: string
  description: string
  lightHex: string
  darkHex: string
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-border last:border-0">
      {/* Swatch box — uses CSS var so it flips with dark mode */}
      <div
        className="size-10 shrink-0 rounded-lg border border-black/10 dark:border-white/10"
        style={{ background: `var(--${name})` }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <code className="text-xs font-mono font-medium text-foreground">
            --{name}
          </code>
          <span className="text-xs text-muted-foreground font-mono">{tailwind}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <div className="shrink-0 text-right space-y-0.5">
        <p className="font-mono text-[10px] text-muted-foreground">
          ☀ {lightHex}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          ☾ {darkHex}
        </p>
      </div>
    </div>
  )
}

function TokenGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="rounded-lg border border-border bg-card px-4">
        {children}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Token data — light hex / dark hex from globals.css                 */
/* ------------------------------------------------------------------ */

const SURFACE = [
  { name: "background",        tailwind: "bg-background",        description: "Page + panel fill",          lightHex: "#FFFFFF", darkHex: "#0A0A0A" },
  { name: "foreground",        tailwind: "text-foreground",       description: "Primary text",               lightHex: "#0A0A0A", darkHex: "#FAFAFA" },
  { name: "card",              tailwind: "bg-card",               description: "Card surface",               lightHex: "#FFFFFF", darkHex: "#171717" },
  { name: "card-foreground",   tailwind: "text-card-foreground",  description: "Text on card",               lightHex: "#0A0A0A", darkHex: "#FAFAFA" },
  { name: "popover",           tailwind: "bg-popover",            description: "Popover / dropdown surface", lightHex: "#FFFFFF", darkHex: "#262626" },
  { name: "popover-foreground",tailwind: "text-popover-foreground",description: "Text on popover",          lightHex: "#0A0A0A", darkHex: "#FAFAFA" },
]

const BRAND = [
  { name: "primary",             tailwind: "bg-primary",             description: "Primary action fill",     lightHex: "#171717", darkHex: "#E5E5E5" },
  { name: "primary-foreground",  tailwind: "text-primary-foreground", description: "Text on primary",        lightHex: "#FAFAFA", darkHex: "#171717" },
  { name: "secondary",           tailwind: "bg-secondary",           description: "Secondary / muted fill",  lightHex: "#F5F5F5", darkHex: "#262626" },
  { name: "secondary-foreground",tailwind: "text-secondary-foreground",description: "Text on secondary",     lightHex: "#0A0A0A", darkHex: "#FAFAFA" },
  { name: "accent",              tailwind: "bg-accent",              description: "Accent / hover surface",  lightHex: "#F5F5F5", darkHex: "#404040" },
  { name: "accent-foreground",   tailwind: "text-accent-foreground", description: "Text on accent",          lightHex: "#171717", darkHex: "#FAFAFA" },
]

const FEEDBACK = [
  { name: "destructive",            tailwind: "bg-destructive",            description: "Error / danger fill",  lightHex: "#DC2626", darkHex: "#F87171" },
  { name: "destructive-foreground", tailwind: "text-destructive-foreground",description: "Text on destructive", lightHex: "#FFFFFF", darkHex: "#0A0A0A" },
]

const MUTED = [
  { name: "muted",            tailwind: "bg-muted",            description: "Subtle background",     lightHex: "#F5F5F5", darkHex: "#262626" },
  { name: "muted-foreground", tailwind: "text-muted-foreground",description: "Subdued / helper text", lightHex: "#737373", darkHex: "#A3A3A3" },
]

const UI = [
  { name: "border", tailwind: "border-border", description: "Default border / divider", lightHex: "#E5E5E5", darkHex: "#404040" },
  { name: "input",  tailwind: "border-input",  description: "Form field border",        lightHex: "#E5E5E5", darkHex: "#171717" },
  { name: "ring",   tailwind: "ring-ring",      description: "Focus ring",              lightHex: "#737373", darkHex: "#737373" },
]

const CHART = [
  { name: "chart-1", tailwind: "bg-chart-1", description: "Series 1", lightHex: "#5EB1EF", darkHex: "#5EB1EF" },
  { name: "chart-2", tailwind: "bg-chart-2", description: "Series 2", lightHex: "#0090FF", darkHex: "#0090FF" },
  { name: "chart-3", tailwind: "bg-chart-3", description: "Series 3", lightHex: "#0588F0", darkHex: "#0588F0" },
  { name: "chart-4", tailwind: "bg-chart-4", description: "Series 4", lightHex: "#0D74CE", darkHex: "#0D74CE" },
  { name: "chart-5", tailwind: "bg-chart-5", description: "Series 5", lightHex: "#113264", darkHex: "#113264" },
]

const SIDEBAR = [
  { name: "sidebar",                   tailwind: "bg-sidebar",                    description: "Sidebar fill",           lightHex: "#FAFAFA", darkHex: "#171717" },
  { name: "sidebar-foreground",        tailwind: "text-sidebar-foreground",       description: "Sidebar text",           lightHex: "#0A0A0A", darkHex: "#FAFAFA" },
  { name: "sidebar-primary",           tailwind: "bg-sidebar-primary",            description: "Sidebar active item",    lightHex: "#171717", darkHex: "#0588F0" },
  { name: "sidebar-primary-foreground",tailwind: "text-sidebar-primary-foreground",description: "Text on sidebar active",lightHex: "#FAFAFA", darkHex: "#FAFAFA" },
  { name: "sidebar-accent",            tailwind: "bg-sidebar-accent",             description: "Sidebar hover",          lightHex: "#F5F5F5", darkHex: "#262626" },
  { name: "sidebar-accent-foreground", tailwind: "text-sidebar-accent-foreground",description: "Text on sidebar hover",  lightHex: "#171717", darkHex: "#FAFAFA" },
  { name: "sidebar-border",            tailwind: "border-sidebar-border",         description: "Sidebar divider",        lightHex: "#D4D4D4", darkHex: "#404040" },
  { name: "sidebar-ring",              tailwind: "ring-sidebar-ring",             description: "Sidebar focus ring",     lightHex: "#737373", darkHex: "#737373" },
]

/* ------------------------------------------------------------------ */
/*  Storybook meta — use a dummy component (div) as the target         */
/* ------------------------------------------------------------------ */

const Wrapper = ({ children }: { children?: React.ReactNode }) => <>{children}</>

const meta = {
  title: "Tokens/Semantic Colors",
  component: Wrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        component:
          "35 semantic CSS variables from the `shadcn/ui` collection in `globals.css`. Each token responds to the Light / Dark toggle in the toolbar. Source: `references/DESIGN.md §2`.",
      },
    },
  },
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  All tokens                                                          */
/* ------------------------------------------------------------------ */

export const AllTokens: Story = {
  name: "All 35 Tokens",
  render: () => (
    <div className="max-w-2xl">
      <TokenGroup title="Surface">
        {SURFACE.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Brand">
        {BRAND.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Feedback">
        {FEEDBACK.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Muted">
        {MUTED.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="UI Controls">
        {UI.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Chart">
        {CHART.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Sidebar">
        {SIDEBAR.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Component tokens only (most-used)                                  */
/* ------------------------------------------------------------------ */

export const ComponentTokens: Story = {
  name: "Component Tokens",
  parameters: {
    docs: { description: { story: "The subset of tokens used directly by shadcn/ui components. These 15 are the ones QA should verify in both themes." } },
  },
  render: () => (
    <div className="max-w-2xl">
      <TokenGroup title="Core">
        {[...SURFACE.slice(0, 2), ...MUTED].map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="Brand + Feedback">
        {[...BRAND.slice(0, 4), ...FEEDBACK].map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
      <TokenGroup title="UI Controls">
        {UI.map((t) => <TokenSwatch key={t.name} {...t} />)}
      </TokenGroup>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  Dark mode comparison                                                */
/* ------------------------------------------------------------------ */

export const DarkModeComparison: Story = {
  name: "Dark Mode — live preview",
  parameters: {
    docs: { description: { story: "Toggle Light / Dark in the toolbar. Swatches use CSS vars directly so they flip immediately." } },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-xl">
      {[...SURFACE.slice(0, 2), ...BRAND.slice(0, 2), ...FEEDBACK, ...MUTED, ...UI].map((t) => (
        <div key={t.name} className="flex items-center gap-3">
          <div
            className="size-8 shrink-0 rounded-md border border-black/10 dark:border-white/10"
            style={{ background: `var(--${t.name})` }}
          />
          <code className="text-xs font-mono text-foreground">--{t.name}</code>
        </div>
      ))}
    </div>
  ),
}
