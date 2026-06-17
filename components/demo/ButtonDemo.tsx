"use client"

import { ChevronRight, ExternalLink, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Variants
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          With Icon
        </h2>
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
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Icon Only
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="icon">
            <ChevronRight />
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLink />
          </Button>
          <Button variant="ghost" size="icon">
            <GitBranch />
          </Button>
          <Button variant="secondary" size="icon-sm">
            <ChevronRight />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Loading
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default" isLoading>
            Please wait
          </Button>
          <Button variant="outline" isLoading>
            Please wait
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Disabled
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default" disabled>Button</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="link" disabled>Link</Button>
        </div>
      </section>
    </div>
  )
}
