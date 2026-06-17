# Component Audit

Tracks parity between **Figma** source-of-truth components and the **code** implementations in `components/ui/` + composed components in `components/`.

**Figma file:** https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop  
**Last audit:** _Not yet run_ — fill this table when `/audit-components` or manual audit runs.

---

## How to read this doc

| Column | Meaning |
|---|---|
| **Status** | ✅ implemented · ⚠️ partial · ❌ missing · 🔄 in progress |
| **Figma node** | `id` from Figma URL `?node-id=…` |
| **Code path** | Relative path under project root |
| **Parity** | ✅ 1:1 · ⚠️ visual drift · ❌ broken |
| **Notes** | Missing variants, deviations, follow-ups |

---

## Audit Matrix

| Component | Status | Figma node | Code path | Parity | Notes |
|---|---|---|---|---|---|
| Button | ✅ | `402:654` | `components/ui/button.tsx` | ✅ | All 6 variants + loading + 5 sizes match Figma. Solid destructive (not subtle). |
| Badge | ✅ | _TBD_ | `components/ui/badge.tsx` | _TBD_ | Installed via shadcn CLI default. Figma source not yet audited. |
| Separator | ✅ | _TBD_ | `components/ui/separator.tsx` | _TBD_ | Installed via shadcn CLI default. Figma source not yet audited. |
| Accordion | ✅ | _TBD_ | `components/ui/accordion.tsx` | _TBD_ | Installed via shadcn CLI default. Figma source not yet audited. |
| FaqAccordion | ✅ | _N/A_ | `components/faq-accordion.tsx` | _N/A_ | Composed (uses Accordion primitive). No direct Figma source. |
| ThemeToggle | ✅ | _N/A_ | `components/theme-toggle.tsx` | _N/A_ | Custom — Sun/Moon icons, ghost button. |
| ThemeProvider | ✅ | _N/A_ | `components/theme-provider.tsx` | _N/A_ | next-themes wrapper. |
| Card | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add card` |
| Input | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add input label form` |
| Dialog | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add dialog alert-dialog` |
| Select | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add select` |
| Tabs | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add tabs` |
| Sheet | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add sheet` |
| Skeleton | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add skeleton` |
| Sonner / Toaster | ❌ | _N/A_ | _Used in layout, not installed via shadcn_ | — | Pending: `npx shadcn@latest add sonner` |
| Tooltip | ❌ | _TBD_ | _Not installed_ | — | — |
| Popover | ❌ | _TBD_ | _Not installed_ | — | — |
| Command | ❌ | _TBD_ | _Not installed_ | — | — |
| Calendar / DatePicker | ❌ | _TBD_ | _Not installed_ | — | — |
| Table / DataTable | ❌ | _TBD_ | _Not installed_ | — | — |

---

## Per-component sections

### Button — `components/ui/button.tsx`

**Source:** [Figma node 402:654](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=402-654)  
**Status:** ✅ Implemented  
**Last audit:** 2026-06-17

#### Figma variants (12 from COMPONENT_SET)
1. `Type=Primary, State=Default` · `Type=Primary, State=Hover`
2. `Type=Secondary, State=Default` · `Type=Secondary, State=Hover`
3. `Type=Destructive, State=Default` · `Type=Destructive, State=Hover`
4. `Type=Outline, State=Default` · `Type=Outline, State=Hover`
5. `Type=Ghost, State=Default` · `Type=Ghost, State=Hover`
6. `Type=Link, State=Default` · `Type=Link, State=Hover`
7. `Type=Icon, State=Default` · `Type=Icon, State=Hover`
8. `Type=With icon, State=Default` · `Type=With icon, State=Hover`
9. `Type=Loading, State=Loading`

#### Code coverage
- 6 visual variants: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link` ✅
- 5 size presets: `default` (h-9), `sm` (h-8), `lg` (h-10), `icon` (size-9), `icon-sm` (size-8) ✅
- `isLoading` prop with Loader2 spinner ✅
- "With icon" handled by placing Lucide icon as child ✅

#### Token mapping (Figma RGB → CSS var)
| Figma color | Hex | CSS var | Tailwind class |
|---|---|---|---|
| Primary fill | `#171717` | `--primary` | `bg-primary` |
| Primary text | `#FAFAFA` | `--primary-foreground` | `text-primary-foreground` |
| Secondary fill | `#F5F5F5` | `--secondary` | `bg-secondary` |
| Destructive fill | `#DC2626` | `--destructive` | `bg-destructive` |
| Outline border | `#E5E5E5` | `--border` | `border-border` |
| Hover overlay | `#F5F5F5` | `--muted` | `hover:bg-muted` |

#### Open questions
- Should hover states be explicit variants or pure `:hover` pseudo-class? Currently we use `:hover` (CSS) — Figma shows them as separate variants for design clarity.

---

## Template — Per-component section (copy when filling)

```markdown
### <ComponentName> — `components/ui/<file>.tsx`

**Source:** [Figma node X:Y](URL)  
**Status:** ✅ / ⚠️ / ❌  
**Last audit:** YYYY-MM-DD

#### Figma variants
List from COMPONENT_SET (or "none — single component")

#### Code coverage
- Variants: …
- Sizes: …
- Props beyond default: …

#### Token mapping
| Figma value | Hex | CSS var | Tailwind class |
|---|---|---|---|
| … | … | … | … |

#### Open questions
- …
```
