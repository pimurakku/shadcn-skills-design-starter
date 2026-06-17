# CLAUDE.md — Next.js + shadcn-ui-design

This repository is a **Next.js application** with a built-in Claude Code skill package that bridges Figma design and code through a shared design token system. It provides Claude with persistent rules, design tokens, and workflow guides for building UI consistently across both tools.

**Figma file:** `[TO BE ADDED — paste your Figma file URL here]`

---

## 1. What This Project Is

```
Figma File  ←──────────────────────────────────→  Next.js App
     │          Figma MCP Plugin (bidirectional)        │
     │                                                   │
     ↓                                                   ↓
variables-export.json  →  DESIGN.md  →  globals.css  →  Components
   (1,804 tokens)        (reference)   (CSS vars)      (shadcn/ui)
```

**This repo contains both the Next.js app AND the skill package:**
- Next.js application lives at the **project root**
- `.claude/skills/shadcn-ui-design/` — the Claude Code skill package
  - `SKILL.md` — step-by-step rules Claude follows when building UI
  - `references/DESIGN.md` — complete design token reference (1,804 variables)
  - `scripts/validate-tokens.py` — verify token completeness after token export
  - `assets/` — visual reference assets

---

## 2. Skill Usage

### Entry point: `shadcn-ui-design`

For **any** UI work in this repo, load `/shadcn-ui-design` first — it carries the project-specific contract (Next.js + shadcn + 35 tokens + Figma file) and delegates to specialist skills when the task crosses that scope.

```
/shadcn-ui-design
```

Or in a prompt:
```
Using shadcn-ui-design, build a login page with email + password fields.
```

### Full Skill Catalog (18 skills in `.claude/skills/`)

| Skill | When to use |
|---|---|
| **`shadcn-ui-design`** | **Entry point** — Next.js + shadcn + Tailwind v4 work in this repo |
| `design-code` | Generate code for any framework (Vue, Flutter, SwiftUI, RN, etc.) |
| `design-tokens` | Author/audit DTCG tokens (3-tier architecture) |
| `token-build` | Build pipeline transforming `tokens/*.json` → platform artifacts |
| `figma-integration` | Sync Figma ↔ code (Variables, Code Connect, drift checks) |
| `image-to-code` | Convert a screenshot/mockup to code |
| `design-component` | Spec a component (anatomy, 8 states) before coding |
| `apply-aesthetic` | Apply a visual archetype (editorial, brutalist, soft-SaaS…) |
| `brandkit` | Generate a complete brand from a brief |
| `a11y-audit` | WCAG 2.2 AA/AAA audit with ARIA pattern checks |
| `design-qa` | Set up CI gates (lint, axe, contrast, visual regression) |
| `design-review` | Nielsen 10 heuristics + 6-dimension scoring |
| `performance` | Core Web Vitals audit (LCP/INP/CLS) |
| `prototype` | Fidelity-ladder prototyping with validation |
| `redesign` | Upgrade existing UI without breaking |
| `migrate-design-system` | Map this token system to/from Material 3, Apple HIG, Fluent, etc. |
| `governance` | SemVer, deprecation policy, contribution workflow |
| `ux-writing` | UI copy review (errors, empty states, microcopy) |

### What `shadcn-ui-design` handles in this repo
- UI components with shadcn/ui primitives
- Figma designs → Next.js + Tailwind code (delegating to `figma-integration` for sync)
- Enforcing the 35 semantic tokens from `references/DESIGN.md §2`
- Dark mode via `next-themes`

### What it does NOT handle
- Backend logic, API routes, database queries
- Authentication implementation
- Deployment configuration
- Non-UI business logic

---

## 3. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15+ (App Router) |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | v4 |
| Component library | shadcn/ui | latest |
| Package manager | npm | 10+ |
| Design tool | Figma | — |
| Design bridge | Figma MCP Plugin | figma@claude-plugins-official |
| Form handling | React Hook Form + Zod | latest |
| Toast | Sonner | latest |
| Theming | next-themes | latest |
| Font | Inter (sans) · Geist Mono (mono) | via next/font |

**Color space:** sRGB hex for reference · OKLCH for Tailwind v4 custom tokens

---

## 4. Repository & Project Structure

### Full project structure
```
create-skill-design/                   ← project root
├── CLAUDE.md                          ← you are here
├── AGENTS.md                          ← agent persona (ux-ui-kit master instructions)
├── AUDIT.md                           ← component audit reports
├── VARIANTS.md                        ← per-component variant matrix
├── README.md
├── .mcp.json                          ← Figma SSE + shadcn MCP servers
├── app/                               ← Next.js App Router
│   ├── globals.css                    ← 35 semantic CSS variables (references/DESIGN.md §2)
│   ├── layout.tsx                     ← ThemeProvider + font setup
│   └── docs/                          ← in-repo docs site
├── components/
│   ├── ui/                            ← shadcn/ui generated — never edit
│   ├── docs/                          ← docs UI (Sidebar, Preview, PropsTable, ColorSwatch)
│   ├── demo/                          ← component demos
│   ├── theme-provider.tsx             ← next-themes wrapper
│   ├── theme-toggle.tsx               ← dark/light toggle
│   └── faq-accordion.tsx              ← composed accordion
├── hooks/
│   └── use-mobile.ts                  ← media-query mobile detection
├── lib/
│   ├── utils.ts                       ← cn() helper
│   └── tokens/colors.ts               ← 1,804 Figma color tokens (auto-generated)
├── scripts/                           ← token validators + a11y/contrast/render scripts
├── public/
└── .claude/
    ├── settings.local.json
    ├── skills/                        ← 18 skills (see catalog above)
    │   ├── shadcn-ui-design/          ← project entry point
    │   │   ├── SKILL.md
    │   │   ├── references/DESIGN.md   ← 1,804 design tokens (source of truth)
    │   │   ├── scripts/validate-tokens.py
    │   │   └── assets/
    │   └── {design-code, design-tokens, figma-integration, a11y-audit, ...}/
    ├── tokens/                        ← 13 DTCG token JSON files
    ├── components/                    ← 11 component spec docs (atoms → templates)
    ├── frameworks/                    ← adapter protocol + 3 full + 16 concise adapters
    ├── accessibility/                 ← WCAG checklist + ARIA + cognitive/vision/RTL
    ├── design-systems/                ← 138 design system DESIGN.md files
    ├── taste/                         ← anti-slop, aesthetic archetypes, motion
    ├── workflows/                     ← design-review, prototyping, governance, etc.
    └── content/                       ← voice & tone system
```

---

## 5. Next.js Project Setup (First Time)

Run these steps in order when setting up a new Next.js project that uses this skill.

### Step 1 — Create Next.js app
```bash
npx create-next-app@latest my-app \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"
cd my-app
```

### Step 2 — Initialize shadcn/ui with Tailwind v4
```bash
npx shadcn@latest init
# Select: Default style, Neutral base color, CSS variables: yes
```

Or use the template flag:
```bash
npx shadcn@latest init -t next
```

### Step 3 — Add core dependencies
```bash
npm install next-themes sonner
npm install react-hook-form zod @hookform/resolvers
```

### Step 4 — Set up globals.css

Replace the generated `app/globals.css` with the CSS variables from `references/DESIGN.md §2`.
The file must declare all 35 semantic tokens from the `shadcn/ui` collection:

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... all 35 tokens, see references/DESIGN.md §2 */
}

:root {
  --radius: 0.625rem;
  --background: #FFFFFF;
  --foreground: #0A0A0A;
  /* ... all light mode values */
}

.dark {
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  /* ... all dark mode values */
}
```

### Step 5 — Set up layout.tsx with fonts and ThemeProvider

```tsx
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = { title: "App", description: "" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Step 6 — Copy skill package into project
```bash
cp -r /path/to/create-skill-design/.claude ./
```

### Step 7 — Verify tokens
```bash
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py \
  /path/to/variables-export.json
```

---

## 6. Design Token Workflow

### Token source of truth
```
Figma Variables Panel  →  Export (lazyyysync format)  →  variables-export.json
```

### Token flow
```
variables-export.json
  └─ validate-tokens.py         (confirm 1,804 vars)
  └─ references/DESIGN.md       (human-readable reference, 16 sections)
  └─ app/globals.css            (CSS custom properties, applied to UI)
  └─ Tailwind utilities         (bg-background, text-foreground, p-4, gap-2…)
```

### When Figma variables change

1. Export new `variables-export.json` from Figma (Plugins → lazyyysync)
2. Run validation:
   ```bash
   python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py variables-export.json
   ```
3. If tokens changed, ask Claude to update `references/DESIGN.md`:
   ```
   Update references/DESIGN.md from the new variables-export.json file.
   Verify exactly 1,804 variables — no more, no less.
   ```
4. Update `app/globals.css` to match new `shadcn/ui` collection values (35 tokens)

### Token collections in DESIGN.md

| Section | Collection | Variables | Used in code as |
|---------|-----------|-----------|-----------------|
| §1 | `tokens` | 87 | base px scale (internal alias) |
| §2 | `shadcn/ui` | 35 | `bg-background`, `text-primary`, etc. |
| §3 | `tw/colors` | 244 | `text-slate-500`, `bg-red-100` (palette only) |
| §4 | `rdx/colors` | 396 | Radix accent scales (brand/illustration) |
| §5 | `font` | 45 | `font-sans`, `text-sm`, `leading-7`, etc. |
| §6–9 | spacing | 660 | `p-4`, `m-2`, `gap-6`, `space-y-4` |
| §10a–c | sizing | 110 | `h-8`, `max-w-xl`, `max-h-96` |
| §11 | `border-radius` | 150 | `rounded-md`, `rounded-full` |
| §12 | `border-width` | 45 | `border`, `border-2` |
| §13 | `stroke-width` | 11 | SVG stroke utilities |
| §14 | `opacity` | 21 | `opacity-50` |

---

## 7. Figma ↔ Code Workflow

### Authorization (required before any Figma MCP call)
The Figma MCP plugin token expires periodically. If you see a re-authorization error:
```
! figma login
```
Or go to Claude Code → Settings → Plugins → Figma → Re-authorize.

### Workflow A: Figma → Code (design-to-code)

```
1. Get a Figma frame/component URL from the design file
2. Ask Claude:
   "Using the shadcn-ui-design skill, implement this Figma design as a Next.js component:
    https://figma.com/design/[fileKey]/[fileName]?node-id=[nodeId]"
3. Claude will:
   a. Call get_design_context or get_screenshot to read the design
   b. Map Figma layers to shadcn/ui components
   c. Apply design tokens from references/DESIGN.md
   d. Generate the React/TypeScript component
```

### Workflow B: Code → Figma (code-to-design)

```
1. Have an existing component or page in Next.js
2. Ask Claude:
   "Push this component to my Figma file [URL] using the shadcn-ui-design skill"
3. Claude will:
   a. Load /figma-use skill (mandatory prerequisite)
   b. Analyze the component structure and tokens
   c. Call use_figma to create the design in Figma
   d. Apply design system variables and auto-layout
```

### Workflow C: Generate new design + code together

```
1. Describe the UI you need:
   "Create a user profile card with avatar, name, role badge, and edit button.
    Build it in both Figma and as a Next.js component."
2. Claude will:
   a. Generate the Next.js component using shadcn/ui primitives
   b. Use /figma-generate-design to create the Figma frame
   c. Bind Figma variables to the design tokens
```

---

## 8. Figma MCP Tool Guide

| Tool | When to use |
|------|-------------|
| `get_design_context` | Read a Figma frame/component for design-to-code |
| `get_screenshot` | Get visual preview of a Figma node |
| `get_metadata` | Get file/component metadata and structure |
| `use_figma` | Write/modify nodes in Figma (MUST load `/figma-use` skill first) |
| `generate_figma_design` | Create a full page layout in Figma from description/code |
| `search_design_system` | Find existing components in connected Figma libraries |
| `get_libraries` | List design libraries connected to a Figma file |
| `get_code_connect_map` | Get existing Code Connect mappings for a file/node |
| `get_code_connect_suggestions` | Get suggestions for mapping components |
| `send_code_connect_mappings` | Push Code Connect mappings to Figma |
| `download_assets` | Download exported images/icons from Figma |
| `upload_assets` | Upload images to Figma for use in designs |
| `generate_diagram` | Create flowcharts/architecture diagrams in FigJam |
| `whoami` | Check Figma authentication status |

**Mandatory prerequisite:** Always invoke `/figma-use` skill BEFORE calling `use_figma`.  
**Never** call `use_figma` or `generate_diagram` directly without loading the appropriate skill first.

---

## 9. Code Connect (Figma ↔ Component Mapping)

Code Connect creates a persistent link between Figma components and code components.  
Files are named `[ComponentName].figma.ts` and live next to the component file.

### Setup
```bash
npm install --save-dev @figma/code-connect
```

### Example Code Connect file
```typescript
// components/ui/button.figma.ts
import figma from "@figma/code-connect"
import { Button } from "./button"

figma.connect(Button, "https://figma.com/design/[fileKey]/...?node-id=[nodeId]", {
  props: {
    variant: figma.enum("Variant", {
      Default: "default",
      Outline: "outline",
      Ghost: "ghost",
      Destructive: "destructive",
    }),
    size: figma.enum("Size", {
      Small: "sm",
      Default: "default",
      Large: "lg",
    }),
    label: figma.string("Label"),
  },
  example: ({ variant, size, label }) => (
    <Button variant={variant} size={size}>{label}</Button>
  ),
})
```

### Publish mappings to Figma
```bash
npx figma connect publish --token $FIGMA_ACCESS_TOKEN
```

### Ask Claude to create Code Connect
```
Create a Code Connect file for the Button component at [Figma URL].
Use the shadcn-ui-design skill to map the variants correctly.
```

---

## 10. Development Commands

### Next.js app
```bash
npm run dev          # start dev server (http://localhost:3000)
npm run build        # production build
npm run start        # start production server
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
```

### shadcn/ui components
```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card input label form select dialog

# Add in monorepo
npx shadcn@latest add button -c apps/web

# List installed components
ls components/ui/
```

### Design tokens
```bash
# Validate tokens after Figma export
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py variables-export.json

# Update DESIGN.md (ask Claude)
# "Update references/DESIGN.md from variables-export.json — must be exactly 1,804 variables"
```

### Code Connect
```bash
npx figma connect publish --token $FIGMA_ACCESS_TOKEN
npx figma connect unpublish --token $FIGMA_ACCESS_TOKEN
```

---

## 11. Coding Conventions

Full rules are in `.claude/skills/shadcn-ui-design/SKILL.md`.  
Key rules Claude must always follow:

### Colors — always semantic, never raw
```tsx
// ✓ correct
<div className="bg-background text-foreground border-border" />
<p className="text-muted-foreground" />

// ✗ wrong
<div className="bg-white text-gray-900 border-gray-200" />
<p className="text-gray-500" />
```

### Spacing — always from token scale
```tsx
// ✓ correct — from references/DESIGN.md §6-9
<div className="p-4 gap-2 mt-6 mx-auto" />

// ✗ wrong — arbitrary values
<div className="p-[14px] gap-[10px]" />
```

### Components — install, never hand-write shadcn source
```bash
# ✓ correct
npx shadcn@latest add card

# ✗ wrong — never copy-paste shadcn component source manually
```

### Tailwind v4 specifics
```tsx
// ✓ correct
<div className="size-10" />          // square element
<div className="rounded-md" />       // from border-radius §11

// ✗ wrong
<div className="w-10 h-10" />        // use size-* instead
<div className="rounded-[6px]" />    // use token class instead
```

### Component file structure
```tsx
// components/[feature]/FeatureName.tsx
"use client"  // only if using hooks or browser APIs

import { cn } from "@/lib/utils"

interface FeatureNameProps {
  className?: string
}

export function FeatureName({ className }: FeatureNameProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* composition of components/ui/ primitives */}
    </div>
  )
}
```

---

## 12. Key Files Map

### Project files
| File | Location | Purpose |
|---|---|---|
| `CLAUDE.md` | root | This file — system overview |
| `AGENTS.md` | root | ux-ui-kit agent persona + Request Router |
| `AUDIT.md` | root | Component audit reports (templates + filled audits) |
| `VARIANTS.md` | root | Per-component variant matrix |
| `.mcp.json` | root | Figma SSE + shadcn MCP server config |
| `globals.css` | `app/` | 35 semantic CSS variables (light + dark) |
| `layout.tsx` | `app/` | ThemeProvider + font setup |
| `utils.ts` | `lib/` | `cn()` class merging helper |
| `colors.ts` | `lib/tokens/` | 1,804 Figma color tokens (auto-generated TS) |
| `use-mobile.ts` | `hooks/` | Mobile breakpoint detection |
| `theme-provider.tsx` | `components/` | next-themes wrapper |
| `theme-toggle.tsx` | `components/` | Dark/light toggle button |
| `components/ui/` | root | shadcn primitives (read-only) |

### Skill package (`.claude/skills/shadcn-ui-design/`)
| File | Purpose |
|---|---|
| `SKILL.md` | Project entry-point skill — delegates to ux-ui-kit |
| `references/DESIGN.md` | 1,804 Figma variable reference (16 collections) |
| `scripts/validate-tokens.py` | Token completeness verifier |

### ux-ui-kit reference (`.claude/`)
| Folder | Purpose |
|---|---|
| `.claude/tokens/` | 13 DTCG JSON files (colors, type, spacing, motion…) |
| `.claude/components/` | 11 component spec docs (atoms → templates) |
| `.claude/frameworks/` | Adapter protocol + React/Next/SwiftUI + 16 concise adapters |
| `.claude/accessibility/` | WCAG 2.2 checklist + ARIA + cognitive/vision/RTL/i18n |
| `.claude/design-systems/` | 138 design system DESIGN.md files + crosswalk + interop |
| `.claude/taste/` | Anti-slop doctrine + aesthetic archetypes + motion |
| `.claude/workflows/` | Design review, prototyping, governance, perf, redesign-audit |
| `.claude/content/voice-tone.md` | Voice & tone system |

### External
| File | Location | Purpose |
|---|---|---|
| `variables-export.json` | `~/PEA/Course/AI Design System Bootcamp/` | Figma export (lazyyysync) |
| `.figma.ts` files | next to component files | Code Connect mappings (when set up) |

---

## 13. Environment Variables

```bash
# .env.local
FIGMA_ACCESS_TOKEN=figd_...    # Personal access token from Figma settings
                               # Required for Code Connect publish
                               # NOT required for Figma MCP Plugin (uses OAuth)
```

The **Figma MCP Plugin** (`figma@claude-plugins-official`) uses OAuth — no token needed in `.env`.  
The **Code Connect CLI** uses `FIGMA_ACCESS_TOKEN` — generate at figma.com → Settings → Personal access tokens.

---

## 14. Common Claude Prompts for This Project

### Design-to-code
```
Using the shadcn-ui-design skill, implement this Figma screen as a Next.js page:
[paste Figma URL]
Apply tokens from references/DESIGN.md. Install required shadcn components first.
```

### Code-to-design
```
Push the LoginForm component to my Figma file [URL].
Load /figma-use first. Use design tokens from references/DESIGN.md §2.
```

### New component from scratch
```
Using the shadcn-ui-design skill, create a StatsCard component showing
a metric value, label, and trend indicator. Follow SKILL.md conventions.
```

### Token update after Figma export
```
Update references/DESIGN.md from variables-export.json at [path].
Verify exactly 1,804 variables — no more, no less. Run validate-tokens.py to confirm.
```

### Code Connect setup
```
Create Code Connect mappings for all components in components/ui/
using the Figma file at [URL]. Follow the shadcn-ui-design skill.
```
