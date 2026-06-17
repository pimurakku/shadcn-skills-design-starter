# create-skill-design

A Next.js application with a built-in Claude Code skill package that bridges **Figma design** and **code** through a shared design token system — 1,804 variables, zero drift.

---

## Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui |
| **Forms** | React Hook Form + Zod |
| **Theming** | next-themes (system / light / dark) |
| **Notifications** | Sonner |
| **Fonts** | Inter · Geist Mono |
| **Design bridge** | Figma MCP Plugin |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
create-skill-design/
├── app/
│   ├── globals.css        # 35 semantic CSS variables (light + dark)
│   ├── layout.tsx         # ThemeProvider · Inter · Geist Mono · Sonner
│   └── page.tsx
├── components/
│   ├── ui/                # shadcn/ui — do not edit manually
│   └── [feature]/         # composed feature components
├── lib/
│   └── utils.ts           # cn() helper
├── public/
├── CLAUDE.md              # system guide for Claude Code
└── .claude/
    └── skills/
        └── shadcn-ui-design/
            ├── SKILL.md               # UI building rules
            ├── references/
            │   └── DESIGN.md          # 1,804 design tokens
            └── scripts/
                └── validate-tokens.py # token completeness checker
```

---

## Design Token System

Design tokens are exported from **Figma** (lazyyysync format) and documented in `.claude/skills/shadcn-ui-design/references/DESIGN.md`.

| Collection | Variables | Used as |
|---|---|---|
| `shadcn/ui` | 35 | `bg-background`, `text-primary`, … |
| `tw/colors` | 244 | `text-slate-500`, `bg-red-100`, … |
| `rdx/colors` | 396 | Radix 12-step accent scales |
| `font` | 45 | `text-sm`, `leading-7`, `font-sans`, … |
| `padding` | 245 | `p-4`, `px-6`, … |
| `margin` | 245 | `m-2`, `mt-6`, … |
| `gap` | 102 | `gap-4`, `gap-x-2`, … |
| `space` | 68 | `space-y-4`, … |
| `border-radius` | 150 | `rounded-md`, `rounded-full`, … |
| `border-width` | 45 | `border`, `border-2`, … |
| `height` · `max-height` · `max-width` | 110 | `h-8`, `max-w-xl`, … |
| `tokens` · `stroke-width` · `opacity` | 119 | base scale · SVG · opacity |
| **Total** | **1,804** | |

### Validate tokens after Figma export

```bash
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py variables-export.json
```

---

## Claude Code Skill

This project includes the `shadcn-ui-design` skill for Claude Code.  
Invoke it in any prompt:

```
/shadcn-ui-design
```

The skill covers:

- Generating UI components using shadcn/ui primitives
- Translating Figma designs into Next.js + Tailwind code
- Enforcing design token usage — no hardcoded colors or spacing
- Maintaining dark mode consistency across all components

Full rules: `.claude/skills/shadcn-ui-design/SKILL.md`  
Full system guide: `CLAUDE.md`

---

## Figma Integration

Requires the **Figma MCP Plugin** (`figma@claude-plugins-official`) enabled in Claude Code.

| Workflow | How |
|---|---|
| Figma → Code | Share a Figma frame URL in the Claude prompt |
| Code → Figma | Ask Claude to push a component using `/figma-use` |
| Token sync | Export from Figma → run `validate-tokens.py` → update `globals.css` |

---

## Commands

```bash
npm run dev          # development server (Turbopack)
npm run build        # production build
npm run start        # production server
npm run lint         # ESLint

# Add shadcn/ui components
npx shadcn@latest add button
npx shadcn@latest add card input label form select dialog

# Validate design tokens
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py <path/to/variables-export.json>
```
# shadcn-skills-design-starter
