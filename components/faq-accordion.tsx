"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items?: FaqItem[]
  defaultValue?: string[]
}

const defaultItems: FaqItem[] = [
  {
    question: "What is this component library?",
    answer:
      "A Next.js + shadcn/ui starter with a Claude Code skill package that bridges Figma design tokens and React components.",
  },
  {
    question: "How do design tokens flow into components?",
    answer:
      "Figma variables export to variables-export.json, which is documented in DESIGN.md and applied as CSS custom properties in app/globals.css. Tailwind utilities consume these via @theme inline.",
  },
  {
    question: "Can I add my own components?",
    answer:
      "Yes — install primitives via npx shadcn@latest add <name>, compose them in components/[feature]/, and follow the rules in .claude/skills/shadcn-ui-design/SKILL.md.",
  },
  {
    question: "Does it support dark mode?",
    answer:
      "Yes. The 35 semantic tokens each have light + dark values. next-themes handles the toggle via a .dark class on <html>. Use the ThemeToggle component to switch.",
  },
]

export function FaqAccordion({ items = defaultItems, defaultValue }: FaqAccordionProps) {
  return (
    <Accordion defaultValue={defaultValue} className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
