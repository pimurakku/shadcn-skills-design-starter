<div align="center">

# shadcn-skills-design-starter

**A Next.js starter that bridges Figma design and code through 1,804 design tokens — with a Claude Code skill kit (18 skills), a live documentation site, and a Storybook QA workbench.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000?style=flat-square)](https://ui.shadcn.com)
[![Storybook 10](https://img.shields.io/badge/Storybook-10.4-FF4785?style=flat-square&logo=storybook)](https://storybook.js.org)
[![Vitest 4](https://img.shields.io/badge/Vitest-4.1-6E9F18?style=flat-square&logo=vitest)](https://vitest.dev)
[![Chromatic](https://img.shields.io/badge/Chromatic-visual_regression-FC521F?style=flat-square)](https://www.chromatic.com)
[![Claude Skills](https://img.shields.io/badge/Claude_Code-18_skills-D97706?style=flat-square)](#claude-code-skill-catalog)
[![Design Tokens](https://img.shields.io/badge/Figma_tokens-1%2C804-A855F7?style=flat-square&logo=figma)](#design-token-system)

</div>

---

## What This Is

```
                    ┌─────────────────────────────────────────┐
                    │     Figma File (1,804 variables)        │
                    │   shadcn/ui · tw/colors · rdx/colors    │
                    └────────────────┬────────────────────────┘
                                     │ lazyyysync export
                                     ▼
                       variables-export.json (16 collections)
                                     │
                ┌────────────────────┼─────────────────────┐
                ▼                    ▼                     ▼
       references/DESIGN.md   app/globals.css      lib/tokens/colors.ts
        (1,804 token ref)    (35 CSS variables)    (auto-generated TS)
                                     │
                                     ▼
                          Tailwind utilities + components
                          (bg-primary, text-foreground, ...)
                                     │
                       ┌─────────────┴─────────────┐
                       ▼                           ▼
              Next.js Docs Site             Storybook Workbench
                  at /docs                    at :6006
            (designers + consumers)        (devs + QA + interaction tests)
```

**This repo is four things in one:**

1. **A Next.js application** — with a built-in component documentation site at `/docs`
2. **A Storybook workbench** — 50 stories + 12 interaction tests (`play` functions) running in headless Chromium via Vitest + Chromatic visual regression
3. **A Claude Code skill kit** — 18 skills covering design tokens, components, accessibility, Figma sync, and more
4. **A design token bridge** — 1,804 Figma variables → CSS custom properties → Tailwind utilities, with zero drift

---

## Quick Start

```bash
# 1. Install
npm install

# 2. Configure Figma access (optional — only for MCP / REST API)
echo "FIGMA_API_KEY=figd_…" > .env.local

# 3. Pick your surface
npm run dev                 # Next.js + docs site → http://localhost:3000
npm run storybook           # Storybook workbench → http://localhost:6006
npm run test:storybook:ci   # Run 50 interaction tests headlessly
```

Open [http://localhost:3000](http://localhost:3000) — root redirects to `/docs` with the live component library.

---

## Stack

| Layer | Tech | Notes |
|---|---|---|
| Framework | **Next.js 16.2** | App Router, Turbopack |
| Language | **TypeScript 5** | Strict mode |
| Styling | **Tailwind CSS v4** | `@theme inline`, no `tailwind.config.js` |
| Components | **shadcn/ui** | Installed via CLI, never hand-written |
| Component primitive | **@base-ui/react** | Shadcn's newer base layer |
| Forms | **React Hook Form + Zod** | Standard `<Form>` pattern |
| Theming | **next-themes** | System / light / dark via `.dark` class |
| Notifications | **Sonner** | Toast layer |
| Icons | **lucide-react** | inline SVG with `currentColor` |
| Fonts | **Inter + Geist Mono** | via `next/font` |
| **Workbench** | **Storybook 10.4 (`@storybook/nextjs-vite`)** | Vite-based, fast HMR |
| **Test runner** | **Vitest 4.1 + `@storybook/addon-vitest`** | Browser-mode interaction tests |
| **Browser provider** | **`@vitest/browser-playwright`** | Headless Chromium |
| **Visual regression** | **Chromatic (`@chromatic-com/storybook`)** | Story snapshots + UI Review |
| Design bridge | **Figma MCP + REST API** | Bidirectional sync |
| Color space | hex (CSS vars) · OKLCH (custom) | Hex preserves Figma exports |

---

## Project Structure

```
create-skill-design/
│
├─ Documentation files (root)
│   ├── README.md              ← you are here
│   ├── CLAUDE.md              ← system guide for Claude Code (full)
│   ├── AGENTS.md              ← ux-ui-kit agent persona + Request Router
│   ├── AUDIT.md               ← component audit matrix (Figma ↔ code parity)
│   └── VARIANTS.md            ← per-component variant reference
│
├─ Next.js application
│   ├── app/
│   │   ├── globals.css        ← 35 semantic CSS variables (light + dark)
│   │   ├── layout.tsx         ← ThemeProvider + fonts + Toaster
│   │   ├── page.tsx           ← redirects to /docs
│   │   └── docs/              ← in-repo documentation site
│   │       ├── layout.tsx     ← sidebar + header + theme toggle
│   │       ├── page.tsx       ← introduction
│   │       ├── installation/  · theming/
│   │       ├── components/    ← 7 component docs (Button, Badge, Separator,
│   │       │                    Accordion, Dialog, Input, Label)
│   │       └── tokens/        ← Semantic (35) · Tailwind (244) · Radix (396)
│   │
│   ├── components/
│   │   ├── ui/                ← shadcn primitives — never edit
│   │   │   ├── accordion.tsx  · badge.tsx  · button.tsx  · dialog.tsx
│   │   │   ├── input.tsx  · label.tsx  · separator.tsx
│   │   ├── docs/              ← docs UI (Sidebar, Preview, PropsTable, ColorSwatch,
│   │   │                        TokenMapTable, DoDont)
│   │   ├── demo/              ← component demos
│   │   ├── theme-provider.tsx ← next-themes wrapper
│   │   ├── theme-toggle.tsx   ← dark/light toggle
│   │   └── faq-accordion.tsx  ← composed accordion example
│   │
│   ├── hooks/use-mobile.ts    ← media-query mobile detection
│   ├── lib/utils.ts           ← cn() helper
│   ├── lib/tokens/colors.ts   ← 1,804 Figma color tokens (auto-generated)
│   └── public/
│
├─ Storybook workbench
│   ├── .storybook/
│   │   ├── main.ts            ← framework: nextjs-vite + Tailwind v4 viteFinal
│   │   │                        + addons: docs · a11y · themes · vitest · chromatic
│   │   └── preview.ts         ← imports globals.css + dark mode decorator
│   ├── stories/
│   │   ├── Introduction.mdx   ← Storybook home page (QA workflow guide)
│   │   ├── Accordion.stories.tsx   · Badge.stories.tsx
│   │   ├── Button.stories.tsx      · Dialog.stories.tsx
│   │   ├── Input.stories.tsx       · Label.stories.tsx
│   │   ├── Separator.stories.tsx
│   │   └── tokens/
│   │       └── SemanticColors.stories.tsx   ← 35 semantic tokens grouped × dark mode
│   └── vitest.config.ts       ← Vitest browser mode + playwright provider
│
├─ Scripts (root, mixed project + ux-ui-kit)
│   ├── validate-tokens.py     ← verify Figma export = 1,804 vars
│   ├── contrast.py            ← WCAG contrast checker
│   ├── lint_hardcodes.py      ← block raw hex/px in components
│   ├── lint_taste.py          ← anti-slop heuristic checks
│   ├── scaffold_component.py  ← generate component skeleton
│   └── verify_*.mjs           ← state / focus-trap / RTL / responsive verifiers
│
├─ Configuration
│   ├── .mcp.json              ← Figma SSE + shadcn MCP servers
│   ├── .env.local             ← FIGMA_API_KEY (gitignored)
│   ├── components.json        ← shadcn config
│   ├── next.config.ts  · tsconfig.json  · postcss.config.mjs
│   └── eslint.config.mjs
│
└─ .claude/                    ← Claude Code skill package + reference material
    ├── settings.local.json    ← per-project permissions
    ├── skills/                ← 18 invocable skills
    │   ├── shadcn-ui-design/  ← project entry point (this codebase)
    │   │   ├── SKILL.md       ← Next.js + shadcn-specific rules
    │   │   ├── references/DESIGN.md   ← 1,804 token reference (16 collections)
    │   │   └── scripts/validate-tokens.py
    │   ├── design-code/       · design-tokens/      · figma-integration/
    │   ├── image-to-code/     · design-component/   · apply-aesthetic/
    │   ├── a11y-audit/        · design-qa/          · design-review/
    │   ├── token-build/       · performance/        · brandkit/
    │   ├── prototype/         · redesign/           · ux-writing/
    │   ├── migrate-design-system/   · governance/
    │
    └── Reference material (read-only, consumed by skills above)
        ├── tokens/            ← 13 DTCG JSON files (colors, type, motion…)
        ├── components/        ← 11 component specs (atoms → templates)
        ├── frameworks/        ← adapter protocol + 3 full + 16 concise adapters
        ├── accessibility/     ← WCAG · ARIA · cognitive · vision · i18n/RTL
        ├── design-systems/    ← 138 design system references + crosswalk
        ├── taste/             ← anti-slop · aesthetic archetypes · motion
        ├── workflows/         ← design-review · prototyping · governance · etc.
        └── content/           ← voice & tone system
```

---

## Design Token System

### Source of Truth
[Figma file](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop) → export via lazyyysync → `variables-export.json` → flows into the three layers below.

### Token Inventory (1,804 variables)

| Collection | Vars | Layer | Tailwind utility example |
|---|---:|---|---|
| `shadcn/ui` | 35 | **Semantic** (light + dark) | `bg-background`, `text-primary`, `border-border` |
| `tw/colors` | 244 | Tailwind palette | `text-slate-500`, `bg-red-100` |
| `rdx/colors` | 396 | Radix 12-step accent scales | brand / illustration |
| `font` | 45 | Typography | `text-sm`, `leading-7`, `font-sans` |
| `padding` | 245 | Spacing | `p-4`, `px-6` |
| `margin` | 245 | Spacing | `m-2`, `mt-6` |
| `gap` | 102 | Spacing | `gap-4`, `gap-x-2` |
| `space` | 68 | Spacing | `space-y-4` |
| `border-radius` | 150 | Shape | `rounded-md`, `rounded-full` |
| `border-width` | 45 | Shape | `border`, `border-2` |
| `height` · `max-height` · `max-width` | 110 | Sizing | `h-8`, `max-w-xl` |
| `tokens` · `stroke-width` · `opacity` | 119 | Base scale · SVG · opacity | `opacity-50` |
| **Total** | **1,804** | | |

### Token Validation

```bash
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py \
  /path/to/variables-export.json
```

Exit `0` = all 1,804 vars match DESIGN.md · Exit `1` = drift detected.

---

## Component Library

**7 components shipped**, each with: shadcn primitive · Next.js docs page · Storybook stories (with rich controls + interaction tests).

| Component | Code | Docs page | Stories | Play tests |
|---|---|---|---|---|
| Accordion | `components/ui/accordion.tsx` | `/docs/components/accordion` | `stories/Accordion.stories.tsx` | ✓ aria-expanded toggle, keyboard nav |
| Badge | `components/ui/badge.tsx` | `/docs/components/badge` | `stories/Badge.stories.tsx` | — |
| Button | `components/ui/button.tsx` | `/docs/components/button` | `stories/Button.stories.tsx` | ✓ click fires onClick, disabled blocks, Space/Enter activation |
| Dialog | `components/ui/dialog.tsx` | `/docs/components/dialog` | `stories/Dialog.stories.tsx` | ✓ open/close, focus trap, ESC dismiss |
| Input | `components/ui/input.tsx` | `/docs/components/input` | `stories/Input.stories.tsx` | ✓ type/clear, disabled blocks, Tab focus |
| Label | `components/ui/label.tsx` | `/docs/components/label` | `stories/Label.stories.tsx` | — |
| Separator | `components/ui/separator.tsx` | `/docs/components/separator` | `stories/Separator.stories.tsx` | — |

**Total stories:** ~50 across the 7 components + 3 token stories (Semantic colors group, component tokens, dark mode comparison).

---

## Documentation Surfaces

### 1. Next.js Docs Site (`/docs`)

Designer-facing reference with live previews and copyable code.

| Path | What's there |
|---|---|
| `/docs` | Introduction + stack overview |
| `/docs/installation` | 4-step setup guide |
| `/docs/theming` | 9 core tokens with color swatches (light + dark) |
| `/docs/tokens/semantic` | **35 semantic tokens** — full table with Figma aliases |
| `/docs/tokens/colors` | **244 Tailwind colors** — overview grid + full palette |
| `/docs/tokens/radix` | **396 Radix scales** — 33 scales × 12 steps × light/dark toggle |
| `/docs/components/<name>` | One page per shadcn component (7 total) — Anatomy, Props, Examples, Do/Don't, A11y, Token mapping |

Every preview block has a **Preview / Code tab** with copy-to-clipboard.

### 2. Storybook Workbench (`:6006`)

Developer + QA-facing workbench for isolated component states.

| Sidebar group | What's there |
|---|---|
| **Overview / Introduction** | MDX home page — QA workflow guide, sidebar map, toolbar reference |
| **Components/Button** | Playground · Variants · Sizes · Loading · WithIcon · Disabled · **+ 3 play tests** |
| **Components/Badge** | Playground · 8 variants · WithIcon · NumberVariants · AsLink · AllVariants matrix |
| **Components/Input** | Playground · Types · States · Aria-invalid · **+ 3 play tests** |
| **Components/Label** | Playground · WithIcon · PairedWithInput · DisabledPeer |
| **Components/Separator** | Playground · Horizontal · Vertical · InContext |
| **Components/Accordion** | Playground · Single · Multiple · DefaultOpen · **+ 1 play test** |
| **Components/Dialog** | FormDialog (**+ play test**) · ShareLink · NoCloseButton · DestructiveConfirm |
| **Tokens/SemanticColors** | AllTokens (35) · ComponentTokens (15 most used) · DarkModeComparison |

**Built-in addons:** `addon-docs` (autogenerated API) · `addon-a11y` (axe scan) · `addon-themes` (light/dark toggle) · `addon-vitest` (interaction test runner) · `@chromatic-com/storybook` (visual regression).

---

## Storybook & Interaction Testing

The Storybook setup is wired for both **manual QA** and **automated interaction testing** via Vitest browser mode.

### Architecture

```
.storybook/main.ts          @storybook/nextjs-vite framework
                            + viteFinal injects @tailwindcss/vite plugin
                            + @ → repo root alias
                            + addons: docs · a11y · themes · vitest · chromatic

.storybook/preview.ts       imports ../app/globals.css
                            + withThemeByClassName decorator (Light/Dark)
                            + nextjs.appDirectory = true

vitest.config.ts            storybookTest plugin
                            + browser: { provider: playwright() } (chromium, headless)
                            + NO setupFiles — Storybook 10.3+ auto-provisions
                              preview annotations via @storybook/addon-vitest
```

> **Note:** No `vitest-setup.ts` needed. Since Storybook 10.3, `@storybook/addon-vitest` automatically provisions preview annotations. Adding a setup file (even empty) suppresses auto-provisioning and breaks CLI tests.

### Writing a story with rich controls

```tsx
// stories/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "storybook/test"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },                        // ← auto-mock callback
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "destructive", "link", "secondary"],
      table: { category: "Appearance" },
    },
    size: { control: "inline-radio", options: ["sm", "default", "lg", "icon"] },
    disabled: { control: "boolean", table: { category: "State" } },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { children: "Click me", variant: "default" },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button"))
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}
```

### Running tests

```bash
npm run test:storybook         # watch mode (re-runs on change)
npm run test:storybook:watch   # same — explicit
npm run test:storybook:ci      # one-shot, headless, CI-friendly
```

**Current status:** 50 / 50 tests pass in ~5 s (transform 0 ms · setup 11 s · tests 7 s).

### Notes for base-ui Dialog play tests

base-ui renders dialogs **in a portal** outside `canvasElement`. Two gotchas:

1. Use `screen.findByRole("dialog")` — not `canvas.findByRole(...)` — to reach the portal.
2. Assert `data-open` attribute (not `toBeVisible()`) — animations start at `opacity: 0` in headless mode.
3. Wrap close assertions in `waitFor(...)` — base-ui keeps the element mounted during exit animation (`data-closed=""`).

Example pattern in `stories/Dialog.stories.tsx:80-104`.

---

## Claude Code Skill Catalog

`.claude/skills/` ships **18 invocable skills**. Always load `/shadcn-ui-design` first — it's the project entry point and delegates to specialists when needed.

### Entry point
| Skill | Purpose |
|---|---|
| `/shadcn-ui-design` | **Start here.** Next.js + shadcn + Tailwind v4 in this repo. Carries the 35-token contract and delegates to skills below for cross-cutting tasks. |

### Code generation
| Skill | Use when |
|---|---|
| `/design-code` | Generate code for a NON-Next.js framework (Vue, Flutter, SwiftUI, Compose, RN…) |
| `/image-to-code` | Convert a screenshot or mockup to code |
| `/design-component` | Spec a component (anatomy, 8 states) before coding |

### Design tokens
| Skill | Use when |
|---|---|
| `/design-tokens` | Author/audit DTCG tokens (3-tier: primitive → semantic → component) |
| `/token-build` | Build pipeline transforming `tokens/*.json` → CSS / SCSS / Swift / Kotlin artifacts |

### Figma & Design Systems
| Skill | Use when |
|---|---|
| `/figma-integration` | Sync Figma ↔ code, Variables, Code Connect, drift checks |
| `/apply-aesthetic` | Apply a visual archetype (editorial, brutalist, soft-SaaS, dark-tech…) |
| `/brandkit` | Generate a complete brand from a brief |
| `/migrate-design-system` | Map tokens to/from Material 3, Apple HIG, Fluent, Carbon, etc. |

### Quality & Review
| Skill | Use when |
|---|---|
| `/a11y-audit` | WCAG 2.2 AA/AAA audit with ARIA pattern checks |
| `/design-qa` | Set up CI gates — lint, axe, contrast, visual regression |
| `/design-review` | Nielsen 10 heuristics + 6-dimension scoring |
| `/performance` | Core Web Vitals (LCP / INP / CLS) optimization |

### Workflow
| Skill | Use when |
|---|---|
| `/prototype` | Move ideas up the fidelity ladder with a validation plan |
| `/redesign` | Upgrade existing UI without breaking |
| `/governance` | SemVer, deprecation policy, contribution workflow |
| `/ux-writing` | UI copy review (errors, empty states, microcopy) |

---

## Workflows in Detail

### Workflow 1 — Figma → Code

Translate a Figma frame into a Next.js component with token-driven Tailwind classes.

```
1. Get Figma frame URL with node-id (?node-id=402-654)
2. Prompt Claude:
   "Using shadcn-ui-design, implement this Figma frame as a Next.js component:
    https://figma.com/design/[fileKey]/[name]?node-id=[X-Y]"
3. Claude:
   a. Loads /shadcn-ui-design
   b. Calls Figma MCP get_design_context (or REST API fallback)
   c. Maps Figma layers → shadcn primitives
   d. Resolves all values to tokens from references/DESIGN.md §2
   e. Generates the React/TypeScript file
4. Verify:
   a. Visit the docs site to preview
   b. Open Storybook to QA in isolation
   c. Run npm run lint
```

**Example:** Our Button (`components/ui/button.tsx`) came from Figma node `402:654` — see `AUDIT.md → Button` for the full mapping.

### Workflow 2 — Code → Figma

Push an existing component into Figma as a frame with bound Variables.

```
1. Have a component file ready (e.g., components/ui/card.tsx)
2. Prompt Claude:
   "Push CardContent to my Figma file [URL] using shadcn-ui-design"
3. Claude delegates to /figma-integration:
   a. Loads /figma-use (mandatory MCP prerequisite)
   b. Analyzes component structure + token usage
   c. Calls use_figma → creates frame
   d. Binds Figma Variables to the semantic tokens
```

### Workflow 3 — Token Sync (Figma update → Code)

When the Figma design team adds or changes variables.

```
1. Export new variables-export.json from Figma (Plugins → lazyyysync)
2. Validate:
   python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py \
       variables-export.json
3. If drift detected, prompt Claude:
   "Update references/DESIGN.md from the new variables-export.json.
    Verify exactly N variables — no more, no less."
4. Update app/globals.css with new shadcn/ui collection values
5. Regenerate lib/tokens/colors.ts (script in conversation history)
6. Re-run validate-tokens.py — should exit 0
7. Open the Tokens/SemanticColors story in Storybook to visually verify
```

### Workflow 4 — Build a New Component

```
1. Find or design the Figma component
2. Install the shadcn primitive (if needed):
   npx shadcn@latest add card

3. Prompt Claude:
   "Using shadcn-ui-design, create a StatsCard with metric value,
    label, and trend indicator. Follow SKILL.md conventions."

4. Claude:
   a. Reads components/ui/card.tsx (won't edit)
   b. Composes in components/stats-card.tsx
   c. Uses semantic tokens only (bg-card, text-foreground, ...)
   d. Adds proper aria-* attributes

5. Document it:
   a. Add page at app/docs/components/stats-card/page.tsx
   b. Add a Storybook file at stories/StatsCard.stories.tsx
      (Playground + variant matrix + at least one play test for interactivity)
   c. Add row to AUDIT.md
   d. Add variant matrix to VARIANTS.md
   e. Add to components/docs/Sidebar.tsx navigation
```

### Workflow 5 — QA a Component (Storybook + interaction tests)

```
1. Open Storybook locally:
   npm run storybook

2. Pick the component → toggle Light / Dark via toolbar
3. Open Controls panel — exercise every argType
4. Open A11y panel — fix any axe violations
5. Open Interactions panel — verify play function steps pass

6. From CLI, run the full test suite headlessly:
   npm run test:storybook:ci

7. Wire into CI:
   - name: Storybook interaction tests
     run: npm run test:storybook:ci
```

### Workflow 6 — Visual Regression with Chromatic

Catch unintended UI changes before they reach production by comparing story snapshots.

```
1. Connect repo to Chromatic (one-time):
   a. Go to chromatic.com → create project → copy project token
   b. Save token: echo "CHROMATIC_PROJECT_TOKEN=chpt_…" >> .env.local

2. Publish a baseline (first time):
   npx chromatic --project-token=<token>

3. On every PR, run:
   npx chromatic --project-token=<token> --exit-zero-on-changes

4. Review UI diffs at chromatic.com:
   - Green  → no visual change
   - Yellow → change detected, needs approval
   - Red    → build failed

5. Wire into GitHub Actions:
   - name: Chromatic
     uses: chromaui/action@latest
     with:
       projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

**What Chromatic captures:** every story across all components in Light + Dark mode — 50 snapshots per run. Token changes (e.g. updating `--primary` in globals.css) will flag every affected story automatically.

---

### Workflow 7 — Restyle to a Different Aesthetic

```
1. Prompt Claude:
   "Using /apply-aesthetic, restyle this docs site to the
    'editorial' archetype with serif typography and earth tones."

2. Claude reads .claude/taste/aesthetic-systems.md, picks tokens
   from .claude/design-systems/library/editorial/DESIGN.md
3. Generates a token overlay (new globals.css :root values)
4. Components automatically inherit — no component file edits needed
5. Open Tokens/SemanticColors story — visually verify dark + light
```

### Workflow 8 — Accessibility Audit

```
1. Prompt Claude:
   "Run /a11y-audit on components/ui/button.tsx"

2. Claude:
   a. Reads .claude/accessibility/wcag-checklist.md
   b. Reads .claude/accessibility/aria-patterns.md
   c. Runs scripts/contrast.py against the color pairs used
   d. Returns findings table with P0/P1/P2 severity

3. In parallel, run automated gates:
   - Storybook addon-a11y panel (per story, in-browser)
   - node scripts/axe_audit.mjs
   - node scripts/verify_focustrap.mjs
   - node scripts/verify_states.mjs --dark
```

---

## Figma + MCP Setup

### `.mcp.json` (already configured)

```json
{
  "mcpServers": {
    "figma":  { "command": "npx", "args": ["-y", "@figma/mcp-server-figma", "--figma-api-key", "${FIGMA_API_KEY}"] },
    "shadcn": { "command": "npx", "args": ["-y", "shadcn@latest", "mcp"] }
  }
}
```

### Required env var

```bash
# .env.local (gitignored)
FIGMA_API_KEY=figd_...
```

Generate at: [Figma → Settings → Security → Personal access tokens](https://www.figma.com/settings)

### Fallback when MCP fails

If the Figma plugin OAuth expires, use the REST API directly:

```bash
curl -H "X-Figma-Token: $FIGMA_API_KEY" \
  "https://api.figma.com/v1/files/<fileKey>/nodes?ids=<node-id>"
```

This is what we used to build the Button — see commit history.

---

## Component Tracking

| File | Tracks |
|---|---|
| `AUDIT.md` | Figma ↔ code parity per component, missing variants, action items |
| `VARIANTS.md` | Per-component variant matrix (Button: 6 × 5 × loading × disabled = 120 combinations) |

When you add a component:
1. Add a row to `AUDIT.md` (Figma node + code path + parity)
2. Add a section to `VARIANTS.md` (variants × sizes × props)
3. Add a `/docs/components/<name>` page
4. Add a `stories/<Name>.stories.tsx` file (Playground + matrix + at least one play test if interactive)

---

## Available Scripts

### Project
```bash
npm run dev          # development server (Turbopack)
npm run build        # production build
npm run start        # production server
npm run lint         # ESLint
```

### Storybook
```bash
npm run storybook              # dev workbench at :6006
npm run build-storybook        # static site to storybook-static/
npm run test:storybook         # vitest watch (browser mode)
npm run test:storybook:watch   # same — explicit
npm run test:storybook:ci      # headless one-shot, CI-friendly
```

### Chromatic (visual regression)
```bash
npx chromatic --project-token=<token>                         # publish baseline
npx chromatic --project-token=<token> --exit-zero-on-changes  # PR check
```

### shadcn/ui components
```bash
npx shadcn@latest add button                    # one component
npx shadcn@latest add card input label form     # many at once
npx shadcn@latest mcp                           # start shadcn MCP server
```

### Design token validation
```bash
python3 .claude/skills/shadcn-ui-design/scripts/validate-tokens.py \
  /path/to/variables-export.json

python3 scripts/validate_tokens.py             # DTCG token validation (ux-ui-kit)
python3 scripts/contrast.py                    # WCAG contrast pairs
python3 scripts/lint_hardcodes.py              # find raw hex / px / Tailwind palette
```

### Aesthetic / Quality checks
```bash
node scripts/taste_audit.mjs <file.html>       # 12-point aesthetic check
node scripts/verify_states.mjs <file.html>     # 8-state coverage
node scripts/verify_states.mjs <file.html> --dark
node scripts/verify_focustrap.mjs              # modal focus trap
node scripts/verify_rtl.mjs                    # RTL layout
node scripts/verify_responsive.mjs             # breakpoint behavior
node scripts/axe_audit.mjs                     # automated a11y
node scripts/accuracy_report.mjs               # consolidate gate output
```

### Component scaffolding
```bash
python3 scripts/scaffold_component.py <name>   # generate skeleton from spec
```

---

## Common Claude Prompts

```
Using shadcn-ui-design, implement this Figma frame as a Next.js component:
[paste Figma URL with ?node-id=…]
```

```
Using shadcn-ui-design, create a [ComponentName] with [requirements].
Follow SKILL.md conventions. Add a Storybook story with a play test.
```

```
Update references/DESIGN.md from variables-export.json at [path].
Verify exactly 1,804 variables.
```

```
Audit components/ui/<file>.tsx with /a11y-audit and /design-qa.
```

```
Using /apply-aesthetic, restyle the docs site to the [archetype] aesthetic.
```

```
Using /image-to-code, convert this screenshot to a Next.js page:
[paste image]
```

---

## Setup from Scratch

If you want to recreate this in a fresh repo:

```bash
# 1. Next.js + Tailwind v4 + TypeScript
npx create-next-app@latest my-app \
  --typescript --tailwind --app --import-alias "@/*"
cd my-app

# 2. Initialize shadcn/ui (Default · Neutral · CSS variables)
npx shadcn@latest init -d

# 3. Core dependencies
npm install next-themes sonner react-hook-form zod @hookform/resolvers

# 4. Storybook + Vitest browser-mode interaction tests + Chromatic
npx storybook@latest init
npm install -D @storybook/addon-a11y @storybook/addon-themes \
               @storybook/addon-vitest @tailwindcss/vite \
               vitest @vitest/browser @vitest/browser-playwright \
               @vitest/coverage-v8 playwright \
               @chromatic-com/storybook

# No vitest-setup.ts needed — Storybook 10.3+ auto-provisions annotations

# 5. ux-ui-kit (optional, full skill catalog)
npx ux-ui-skills init

# 6. Copy the project's skill package
mkdir -p .claude/skills
cp -r /path/to/this/repo/.claude/skills/shadcn-ui-design .claude/skills/

# 7. Set Figma access (optional)
echo "FIGMA_API_KEY=figd_…" > .env.local

# 8. Run
npm run dev          # Next.js
npm run storybook    # Workbench
```

---

## Documentation Map

| File | What it covers |
|---|---|
| **README.md** | This file — public-facing overview |
| **CLAUDE.md** | Full system guide Claude reads automatically (14 sections) |
| **AGENTS.md** | ux-ui-kit agent persona + Request Router (master instructions) |
| **AUDIT.md** | Component audit matrix — Figma source, parity, missing variants |
| **VARIANTS.md** | Per-component variant matrix and prop reference |
| `.storybook/main.ts` | Storybook framework config (nextjs-vite + Tailwind v4 + 5 addons) |
| `vitest.config.ts` | Vitest browser-mode config (`playwright()` provider, no setupFiles) |
| `stories/Introduction.mdx` | Storybook home page — QA workflow guide |
| `.claude/skills/shadcn-ui-design/SKILL.md` | Project's UI rules (semantic tokens, install via CLI, Tailwind v4) |
| `.claude/skills/shadcn-ui-design/references/DESIGN.md` | 1,804-variable Figma token reference (16 sections) |
| `.claude/skills/*/SKILL.md` | One file per ux-ui-kit skill |

---

## License

MIT — see source for details.

## Credits

- [shadcn/ui](https://ui.shadcn.com) — component distribution model
- [Radix UI](https://www.radix-ui.com) + [base-ui](https://base-ui.com) — primitives
- [Storybook](https://storybook.js.org) + [Vitest](https://vitest.dev) — workbench + interaction tests
- [Chromatic](https://www.chromatic.com) — visual regression testing + UI review
- [ux-ui-agent-skills](https://www.npmjs.com/package/ux-ui-agent-skills) — 17 skills + 138 design system references
- [Figma](https://figma.com) + [lazyyysync](https://www.figma.com/community/plugin/lazyyysync) — design token pipeline
- [Anthropic Claude Code](https://claude.com/code) — the agent layer
