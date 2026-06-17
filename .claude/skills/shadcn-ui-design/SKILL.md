---
name: shadcn-ui-design
description: Project entry-point skill for this Next.js + shadcn/ui + Tailwind CSS v4 codebase. Enforces the 35 semantic tokens from the Figma export, the install-via-CLI rule for components, and the file/import conventions. Use FIRST for any UI work in this repo; delegate to the ux-ui-kit skills below for framework-agnostic tasks.
---

# Skill: shadcn-ui-design (Project Entry Point)

This is the **first skill to load** when doing UI work in this repository. It carries the project-specific contract (Next.js 16 + shadcn/ui + Tailwind v4 + 35 semantic tokens from the Figma file). For framework-agnostic concerns (generic codegen, token authoring, Figma sync, audits), it **delegates** to skills in `.claude/skills/`.

---

## Related Skills — when to delegate

| Need | Skill | Why delegate |
|---|---|---|
| Generate code for a NON-Next.js stack (Vue, Flutter, SwiftUI, RN…) | `design-code` | This skill is shadcn/Next-specific |
| Author/audit DTCG tokens from scratch | `design-tokens` | Token authoring methodology |
| Build the token pipeline (CSS/SCSS/native artifacts) | `token-build` | Pipeline ops |
| Push/pull design ↔ Figma, Variables, Code Connect | `figma-integration` | Bidirectional sync layer |
| Convert a screenshot/image to code | `image-to-code` | Image→code workflow |
| Spec a new component (anatomy, 8 states) before coding | `design-component` | Spec-first method |
| Apply a visual archetype (editorial, brutalist, soft-SaaS…) | `apply-aesthetic` | Aesthetic system |
| Build a brand from scratch | `brandkit` | Brand generation |
| Audit accessibility (WCAG 2.2) | `a11y-audit` | A11y specialist |
| Set up QA gates (lint, axe, visual regression) | `design-qa` | CI gating |
| Heuristic UI review (Nielsen × 10) | `design-review` | Usability audit |
| Performance audit (LCP/INP/CLS) | `performance` | Perf specialist |
| Prototype at varying fidelity | `prototype` | Fidelity ladder |
| Redesign existing site without breaking | `redesign` | Migration workflow |
| Map this token system to/from Material 3 / Apple HIG / etc. | `migrate-design-system` | Cross-system map |
| Govern SemVer / deprecation policy | `governance` | Design-system ops |
| Write UI copy (errors, empty states, microcopy) | `ux-writing` | Voice & tone |

**Reference material** (read-only, loaded by skills above):
- `.claude/tokens/*.json` — DTCG tokens (13 files: colors, type, spacing, motion…)
- `.claude/components/*.md` — 11 component spec docs (atoms → templates)
- `.claude/frameworks/` — adapter protocol + 3 full + 16 concise adapters
- `.claude/accessibility/` — WCAG checklist + ARIA patterns + cognitive/vision/RTL
- `.claude/design-systems/library/` — 138 design system DESIGN.md files
- `.claude/taste/` — anti-slop doctrine, archetypes, motion choreography
- `.claude/workflows/` — design-review, handoff, prototyping, governance
- `.claude/content/voice-tone.md` — voice & tone system
- `references/DESIGN.md` — **this project's** 1,804 Figma variables (16 collections)

---

## Step 0 — Before writing any UI code

1. Confirm what's already installed in `components/ui/`
2. Confirm the 35 semantic CSS variables are declared in `app/globals.css` (reference `references/DESIGN.md §2`)
3. Confirm `lib/utils.ts` exports `cn()`

---

## Step 1 — Install via CLI, never hand-write shadcn source

```bash
npx shadcn@latest add <component>           # one
npx shadcn@latest add button card input    # many
```

Never modify files inside `components/ui/`. Compose them in `components/<feature>/` or at the top level of `components/`.

---

## Step 2 — Semantic tokens only (this project's 35)

Use Tailwind utilities backed by CSS variables. Never raw hex.

| ✅ Correct | ❌ Wrong |
|---|---|
| `bg-background` | `bg-white` |
| `text-foreground` | `text-gray-900` |
| `text-muted-foreground` | `text-gray-500` |
| `bg-primary text-primary-foreground` | `bg-black text-white` |
| `border-border` | `border-gray-200` |
| `bg-destructive` | `bg-red-500` |

The 35 tokens are listed in `references/DESIGN.md §2`. Both `tw/colors` (244 palette vars) and `rdx/colors` (396 Radix steps) exist for illustration/data-viz/accent uses — never use them as component semantic surfaces.

For a NEW semantic color: add a CSS var under `:root` in `globals.css`, expose via `@theme inline`, then use as a Tailwind class. **Don't** use arbitrary values like `bg-[#abc123]`.

---

## Step 3 — Composition rules

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class", className)} />
```

Use `asChild` for polymorphism:
```tsx
<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>
```

Compose via shadcn sub-components — never raw `<div>` inside a `<Card>`:
```tsx
// ✓
<Card>
  <CardHeader><CardTitle>Title</CardTitle></CardHeader>
  <CardContent>Body</CardContent>
</Card>
```

---

## Step 4 — Typography

Apply Tailwind classes directly to HTML — no `<Typography>` wrapper. Fonts via `next/font` in `app/layout.tsx` (Inter = `--font-sans`, Geist Mono = `--font-geist-mono`). Full scale: `references/DESIGN.md §5`.

| Role | Classes |
|---|---|
| H1 | `scroll-m-20 text-4xl font-extrabold tracking-tight text-balance` |
| H2 | `scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight` |
| H3 | `scroll-m-20 text-2xl font-semibold tracking-tight` |
| Body | `leading-7 [&:not(:first-child)]:mt-6` |
| Muted | `text-sm text-muted-foreground` |
| Mono | `font-mono text-sm` |

---

## Step 5 — Forms (React Hook Form + Zod)

```bash
npm install react-hook-form zod @hookform/resolvers
npx shadcn@latest add form input label
```

Use the standard `<Form>` + `<FormField>` + `<FormItem>` + `<FormLabel>` + `<FormControl>` + `<FormMessage>` pattern. For deeper guidance on forms in arbitrary frameworks → delegate to `design-code`.

---

## Step 6 — Feedback states

```bash
npx shadcn@latest add skeleton spinner sonner
```

- Skeleton for placeholders: `<Skeleton className="h-4 w-[250px]" />`
- Spinner inside Button: pass `isLoading` prop (already supported in our Button)
- Toast via Sonner: `import { toast } from "sonner"` → `toast.success(...)`

---

## Step 7 — Dialogs

- `<Dialog>` — modal confirmations
- `<Sheet>` — side panel
- `<Drawer>` — mobile-optimized
- `<AlertDialog>` — destructive confirmations (Delete/Remove)

**Destructive confirm UX rule** — confirm button text must restate the action ("Delete account", not "OK"). For high-stakes, type-to-confirm. See `.claude/content/voice-tone.md`.

---

## Step 8 — Dark mode

The 35 semantic tokens have light + dark values built in — `next-themes` swaps a `.dark` class on `<html>`. Never use `dark:bg-white`-style overrides for theming. Only `dark:` for structural differences (border visibility, shadow intensity).

ThemeProvider wrapper is at `components/theme-provider.tsx`. Toggle at `components/theme-toggle.tsx`.

---

## Step 9 — Tailwind v4 specifics

- Use `size-*` not `w-* h-*` for squares: `size-4`
- Spacing/sizing from token scale (`references/DESIGN.md §6–10`): `p-4`, `gap-2`, `mt-6` — not `p-[14px]`
- Radius scale: `references/DESIGN.md §11`
- Border width: `references/DESIGN.md §12`
- Animations: `tw-animate-css` (NOT `tailwindcss-animate`)
- No `tailwind.config.js` — all config lives in `globals.css` via `@theme inline`

To add a custom theme color:
```css
:root { --brand: oklch(0.6 0.2 250); }
@theme inline { --color-brand: var(--brand); }
/* use: className="bg-brand" */
```

---

## Step 10 — Quality checklist (before declaring done)

- [ ] All shadcn components installed via CLI (no hand-written source)
- [ ] Only semantic tokens used (no raw hex/rgb, no `bg-gray-500` palette utilities)
- [ ] `cn()` for conditional classNames
- [ ] No hardcoded pixel values (`p-[14px]` forbidden)
- [ ] Dark mode works without overrides
- [ ] Interactive elements keyboard accessible (Radix handles this)
- [ ] Loading + error states present
- [ ] No `any` types
- [ ] `"use client"` only where required (hooks / event handlers / browser APIs)
- [ ] No emoji as icons — use lucide-react SVGs with `currentColor`

For deeper audits → delegate to `a11y-audit` / `design-qa` / `design-review`.

---

## Common patterns quick reference

| Need | Component(s) |
|---|---|
| Primary action | `<Button>` |
| Link as button | `<Button asChild><Link href="…">` |
| Info container | `<Card>` + `<CardHeader>` + `<CardContent>` |
| Form field | `<FormField>` + `<FormItem>` + `<FormLabel>` + `<FormControl>` + `<FormMessage>` |
| Select | `<Select>` + `<SelectTrigger>` + `<SelectContent>` + `<SelectItem>` |
| Confirm modal | `<AlertDialog>` |
| Side panel | `<Sheet>` |
| Toast | `toast()` from sonner + `<Toaster>` in layout |
| Skeleton | `<Skeleton>` |
| FAQ | `<FaqAccordion>` (composed, `components/faq-accordion.tsx`) |
| Tabbed content | `<Tabs>` + `<TabsList>` + `<TabsTrigger>` + `<TabsContent>` |
| Collapsible | `<Accordion>` |
| Date picker | `<DatePicker>` (Calendar + Popover) |
| Command palette | `<Command>` |

---

## Project file structure

```
app/                          → Next.js App Router
components/
├── ui/                       → shadcn primitives (don't edit)
├── docs/                     → docs-specific UI (Sidebar, Preview, PropsTable, ColorSwatch)
├── demo/                     → component demos
├── theme-provider.tsx        → next-themes wrapper
├── theme-toggle.tsx          → dark/light toggle
└── faq-accordion.tsx         → composed FAQ component
hooks/use-mobile.ts           → media-query mobile detection
lib/utils.ts                  → cn() helper
lib/tokens/colors.ts          → 1,804 Figma color tokens (auto-generated)
scripts/                      → token validators + a11y audits
.claude/skills/               → 18 skills (this is one of them)
.claude/{tokens,components,frameworks,accessibility,taste,workflows,design-systems,content}/
                              → ux-ui-kit reference material
```

---

## Common Claude prompts for this project

```
Using shadcn-ui-design, implement [Figma URL] as a Next.js component.
Apply tokens from references/DESIGN.md §2. Install required shadcn components first.
```

```
Using shadcn-ui-design, add a StatsCard with metric + label + trend indicator.
Follow this skill's conventions.
```

```
Audit components/<file>.tsx with a11y-audit and design-qa.
```

```
Update DESIGN.md from variables-export.json — verify exactly 1,804 variables.
```
