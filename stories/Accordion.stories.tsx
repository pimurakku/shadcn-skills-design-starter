import type { Meta, StoryObj } from "@storybook/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/* Shared sample items */
const ITEMS = [
  {
    value: "item-1",
    question: "Is it accessible?",
    answer:
      "Yes. Uses @base-ui/react/accordion — keyboard navigation, aria-expanded, and focus management are built in.",
  },
  {
    value: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. Uses bg-border, text-foreground, and semantic tokens. Both light and dark modes are handled via the .dark class.",
  },
  {
    value: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. data-open:animate-accordion-down / data-closed:animate-accordion-up via tw-animate-css.",
  },
]

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    multiple: false,
    disabled: false,
  },
  argTypes: {
    multiple: {
      control: "boolean",
      description:
        "When true, multiple panels can be open simultaneously. When false (default), opening one panel closes the others.",
      table: {
        category: "Behavior",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables all items in the accordion.",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Vertically stacked disclosure panels. Built on @base-ui/react/accordion — keyboard navigation, aria-expanded, and animation included. Source: [Figma node 73:3341](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3341).",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Playground                                                          */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  name: "⚡ Playground",
  render: (args) => (
    <Accordion {...args}>
      {ITEMS.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

/* ------------------------------------------------------------------ */
/*  Single (default)                                                    */
/* ------------------------------------------------------------------ */

export const Single: Story = {
  name: "Single (default)",
  parameters: {
    docs: { description: { story: "multiple={false} — opening one panel closes the others." } },
  },
  render: () => (
    <Accordion>
      {ITEMS.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

/* ------------------------------------------------------------------ */
/*  Multiple                                                            */
/* ------------------------------------------------------------------ */

export const Multiple: Story = {
  name: "Multiple open",
  parameters: {
    docs: { description: { story: "multiple={true} — panels open/close independently." } },
  },
  render: () => (
    <Accordion multiple>
      {ITEMS.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

/* ------------------------------------------------------------------ */
/*  Default open                                                        */
/* ------------------------------------------------------------------ */

export const DefaultOpen: Story = {
  name: "Default open (first item)",
  parameters: {
    docs: { description: { story: "defaultValue={['item-1']} — first panel expanded on mount." } },
  },
  render: () => (
    <Accordion defaultValue={["item-1"]}>
      {ITEMS.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

/* ------------------------------------------------------------------ */
/*  Disabled                                                            */
/* ------------------------------------------------------------------ */

export const Disabled: Story = {
  name: "Disabled",
  parameters: {
    docs: { description: { story: "disabled on root disables all items. Individual items can also be disabled via <AccordionItem disabled>." } },
  },
  render: () => (
    <Accordion disabled>
      {ITEMS.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

/* ------------------------------------------------------------------ */
/*  Mixed disabled items                                               */
/* ------------------------------------------------------------------ */

export const MixedDisabled: Story = {
  name: "Mixed disabled items",
  parameters: {
    docs: { description: { story: "Individual AccordionItem can be disabled independently." } },
  },
  render: () => (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Active item</AccordionTrigger>
        <AccordionContent>This item can be toggled.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled item</AccordionTrigger>
        <AccordionContent>This content is inaccessible.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another active item</AccordionTrigger>
        <AccordionContent>This item can also be toggled.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
