"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Design Tokens",
    items: [
      { title: "Semantic Colors", href: "/docs/tokens/semantic" },
      { title: "Tailwind Colors", href: "/docs/tokens/colors" },
      { title: "Radix Colors", href: "/docs/tokens/radix" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Separator", href: "/docs/components/separator" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-60 flex flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 border-b border-border px-5">
        <div className="size-6 rounded-md bg-primary" />
        <span className="font-semibold text-sm text-foreground">UI Components</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border px-5 py-4">
        <p className="text-xs text-muted-foreground">
          shadcn/ui · Tailwind CSS v4
        </p>
      </div>
    </aside>
  )
}
