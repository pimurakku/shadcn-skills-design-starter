# Component Audit

Tracks parity between **Figma** source-of-truth components and the **code** implementations in `components/ui/` + composed components in `components/`.

**Figma file:** https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop  
**Last audit:** 2026-06-17 — Figma parity audit complete for Button, Badge, Separator, Accordion. All issues fixed.

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
| Button | ✅ | `402:654` | `components/ui/button.tsx` | ✅ | 6 variants + isLoading + 5 sizes. Destructive uses `text-destructive-foreground` (fixed from `text-white`). |
| Badge | ✅ | `73:3479` | `components/ui/badge.tsx` | ✅ | 8 variants matching Figma: 4 text-shaped (rounded-lg, h-22px), 1 icon, 3 number-shaped (rounded-full). Removed non-Figma ghost/link variants. |
| Separator | ✅ | `76:10176` | `components/ui/separator.tsx` | ✅ | Uses `bg-border` (= shadcn/ui/border). Both orientations. |
| Accordion | ✅ | `73:3341` | `components/ui/accordion.tsx` | ✅ | Trigger padding `py-4` (was `py-2.5`); chevron color `text-foreground` (was `text-muted-foreground`). Matches Figma 16/16 padding. |
| FaqAccordion | ✅ | _N/A_ | `components/faq-accordion.tsx` | _N/A_ | Composed (uses Accordion primitive). No direct Figma source. |
| ThemeToggle | ✅ | _N/A_ | `components/theme-toggle.tsx` | _N/A_ | Custom — Sun/Moon icons, ghost button. |
| ThemeProvider | ✅ | _N/A_ | `components/theme-provider.tsx` | _N/A_ | next-themes wrapper. |
| Card | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add card` |
| Input | ✅ | `76:8518` | `components/ui/input.tsx` | ✅ | h-9 (36px), px-3 py-1, rounded-lg. Variants in Figma: Default, With Label, File, With Button, Disabled. All implemented via prop composition. |
| Label | ✅ | _N/A_ | `components/ui/label.tsx` | _N/A_ | shadcn primitive — used with Input. Docs page added at `app/docs/components/label/`. |
| Dialog | ✅ | `74:7828` | `components/ui/dialog.tsx` | ✅ | 2 Figma variants (Dialog + Custom_close_button). p-6, rounded-lg, shadow-lg, title text-lg font-semibold. |
| AlertDialog | ❌ | _TBD_ | _Not installed_ | — | Pending: `npx shadcn@latest add alert-dialog` |
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

#### Token mapping (Figma alias → CSS var → Tailwind)
| Figma alias | Hex | CSS var | Tailwind class |
|---|---|---|---|
| `shadcn/ui/primary` | `#171717` | `--primary` | `bg-primary` |
| `shadcn/ui/primary-foreground` | `#FAFAFA` | `--primary-foreground` | `text-primary-foreground` |
| `shadcn/ui/secondary` | `#F5F5F5` | `--secondary` | `bg-secondary` |
| `shadcn/ui/destructive` | `#DC2626` | `--destructive` | `bg-destructive` |
| `rdx/colors/white/12` (in Figma) | `#FFFFFF` | `--destructive-foreground` | `text-destructive-foreground` |
| `shadcn/ui/border` | `#E5E5E5` | `--border` | `border-border` |
| `shadcn/ui/foreground` | `#0A0A0A` | `--foreground` | `text-foreground` |
| Hover overlay | `#F5F5F5` | `--muted` | `hover:bg-muted` |

#### Open questions
- Should hover states be explicit variants or pure `:hover` pseudo-class? Currently we use `:hover` (CSS) — Figma shows them as separate variants for design clarity.

---

### Badge — `components/ui/badge.tsx`

**Source:** [Figma node 73:3479](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3479)
**Status:** ✅ Implemented (parity fixes applied 2026-06-17)
**Last audit:** 2026-06-17

#### Figma variants (8 from COMPONENT_SET)
| Figma name | Code variant | Shape | Bound tokens |
|---|---|---|---|
| `Type=Default` | `default` | rounded-lg | `shadcn/ui/primary` + `shadcn/ui/primary-foreground` |
| `Type=Secondary` | `secondary` | rounded-lg | `shadcn/ui/secondary` + `shadcn/ui/secondary-foreground` |
| `Type=Destructive` | `destructive` | rounded-lg | `shadcn/ui/destructive` + `rdx/colors/white/12` → `--destructive-foreground` |
| `Type=Outline` | `outline` | rounded-lg | `shadcn/ui/border` + `shadcn/ui/foreground` |
| `Type=Secondary_icon` | `secondary-icon` | rounded-lg | `shadcn/ui/primary` + `shadcn/ui/primary-foreground` |
| `Type=Default_number` | `default-number` | rounded-full | `shadcn/ui/primary` + `shadcn/ui/primary-foreground` |
| `Type=Destructive_number` | `destructive-number` | rounded-full | `shadcn/ui/destructive` + `--destructive-foreground` |
| `Type=Secondary_number` | `secondary-number` | rounded-full | `shadcn/ui/border` + `shadcn/ui/foreground` (Geist Mono) |

#### Fixes applied
- Changed `rounded-4xl` → `rounded-lg` (matches Figma r=8) + `rounded-full` for number variants
- Changed `h-5` (20px) → `h-[22px]` (matches Figma)
- Flipped destructive: `bg-destructive/10 text-destructive` → solid `bg-destructive text-destructive-foreground`
- Added 4 missing variants: `secondary-icon`, `default-number`, `destructive-number`, `secondary-number`
- Removed `ghost` and `link` (not in Figma)

---

### Accordion — `components/ui/accordion.tsx`

**Source:** [Figma node 73:3341](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=73-3341)
**Status:** ✅ Implemented
**Last audit:** 2026-06-17

#### Figma states (2)
- `State=Default` — collapsed (52px row: trigger 16+20+16)
- `State=Open` — expanded with answer panel

#### Token mapping
| Element | Figma | CSS var | Tailwind class |
|---|---|---|---|
| Section title | `shadcn/ui/foreground` | `--foreground` | `text-foreground` (inherited) |
| Chevron icon | implicit (foreground) | `--foreground` | `text-foreground` |
| Panel content text | `shadcn/ui/foreground` | `--foreground` | `text-foreground` (inherited) |
| Item border | `shadcn/ui/border` | `--border` | `border-b` |

#### Fixes applied
- Trigger padding `py-2.5` → `py-4` (matches Figma 16/16)
- Chevron color `text-muted-foreground` → `text-foreground`
- FaqAccordion answer color: removed `text-muted-foreground` override (now inherits `foreground`)

---

### Separator — `components/ui/separator.tsx`

**Source:** [Figma node 76:10176](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-10176)
**Status:** ✅ Implemented
**Last audit:** 2026-06-17

#### Spec
- Background: `bg-border` (= `shadcn/ui/border` = `#E5E5E5` light / `#404040` dark)
- Orientations: horizontal (`h-px w-full`) · vertical (`w-px self-stretch`)
- `decorative` prop forwarded via base-ui Separator primitive

No Figma divergence. Token-aligned.

---

### Input — `components/ui/input.tsx`

**Source:** [Figma node 76:8518](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=76-8518)
**Status:** ✅ Implemented
**Last audit:** 2026-06-17

#### Figma anatomy (5 use cases)
| Figma name | Code variant | Notes |
|---|---|---|
| `Default` (State=Default/Active) | `<Input type="email" />` | Border swaps `border-input` → `border-ring` on focus |
| `File` | `<Input type="file" />` | Native file: pseudo-class styles "Choose File" button |
| `Disabled` | `<Input disabled />` | Opacity 50%, blocked pointer events |
| `With Label` | `<Label htmlFor> + <Input id>` | Compose via grid + gap-2 |
| `With Button` | `<Input> + <Button>` in flex | Compose via flex + gap-2 (subscribe pattern) |

#### Token mapping (Figma alias → CSS var → Tailwind)
| Element | Figma alias | CSS var | Tailwind class |
|---|---|---|---|
| Background | `shadcn/ui/background` | `--background` | `bg-background` |
| Border default | `shadcn/ui/border` | `--input` | `border-input` |
| Border focus | `shadcn/ui/ring` | `--ring` | `focus-visible:border-ring` |
| Placeholder | `shadcn/ui/muted-foreground` | `--muted-foreground` | `placeholder:text-muted-foreground` |
| Error border | `shadcn/ui/destructive` | `--destructive` | `aria-invalid:border-destructive` |
| Focus ring (50%) | `shadcn/ui/ring` | `--ring` | `focus-visible:ring-ring/50` |

#### Spec parity
| Property | Figma | Code | Match |
|---|---|---|---|
| Height | 36px | `h-9` | ✅ |
| Horizontal padding | 12px | `px-3` | ✅ |
| Vertical padding | 4px | `py-1` | ✅ |
| Border radius | 8px | `rounded-lg` | ✅ |
| Border width | 1px | `border` | ✅ |
| Placeholder text size | 16px | `text-base md:text-sm` | ⚠️ Code uses 14px on md+ for compact spacing (responsive) |

#### Fixes applied
- Changed default `h-8` → `h-9` (matches Figma 36px)
- Changed default `px-2.5 py-1` → `px-3 py-1` (matches Figma pad=4/4/12/12)
- Changed default `bg-transparent` → `bg-background` (matches Figma fill)
- Changed default `file:h-6` → `file:h-7` (proportional to new h-9)

---

### Dialog — `components/ui/dialog.tsx`

**Source:** [Figma node 74:7828](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=74-7828)
**Status:** ✅ Implemented
**Last audit:** 2026-06-17

#### Figma variants (2 COMPONENT_SETs)
| Figma name | Code pattern | Notes |
|---|---|---|
| `Dialog` (State=Default/Open) | `<Dialog><DialogTrigger><DialogContent>` | Trigger + open panel with form + Cancel/Save footer |
| `Custom_close_button` (State=Default/Open) | Same root, single input + button | Share-link / copy-to-clipboard pattern |

#### Sub-components
- `Dialog` (root) · `DialogTrigger` · `DialogContent` (popup + portal + overlay)
- `DialogHeader` · `DialogTitle` · `DialogDescription`
- `DialogFooter` · `DialogClose`

#### Token mapping (Figma alias → CSS var → Tailwind)
| Element | Figma alias | CSS var | Tailwind class |
|---|---|---|---|
| Panel background | `shadcn/ui/background` | `--background` | `bg-background` |
| Panel border | `shadcn/ui/border` | `--border` | `border border-border` |
| Title text | `shadcn/ui/foreground` | `--foreground` | `text-foreground` |
| Description text | `shadcn/ui/muted-foreground` | `--muted-foreground` | `text-muted-foreground` |
| Overlay backdrop | — | — | `bg-black/30` |
| Drop shadow | 2-stop shadow (10% opacity) | — | `shadow-lg` |

#### Spec parity
| Property | Figma | Code | Match |
|---|---|---|---|
| Padding | 24px | `p-6` | ✅ |
| Border radius | 10px | `rounded-lg` (= var(--radius) = 0.625rem = 10px) | ✅ |
| Border width | 1px | `border` | ✅ |
| Title font size | 18px Semi Bold | `text-lg font-semibold` | ✅ |
| Description font size | 14px Regular | `text-sm` | ✅ |
| Header gap | 24px | `gap-6` (between header/body/footer) | ✅ |
| Title leading | tight | `leading-none` | ✅ |

#### Fixes applied (from shadcn default)
- Changed `rounded-xl` → `rounded-lg` (matches Figma r=10px exactly via --radius)
- Changed `p-4` → `p-6` (matches Figma 24px)
- Changed `bg-popover` → `bg-background` (matches Figma fill alias)
- Changed `ring-1 ring-foreground/10` → `border border-border` (matches Figma 1px stroke)
- Added `shadow-lg` (matches Figma 2-stop drop shadow)
- Changed `gap-4` → `gap-6` (matches Figma 24px sections)
- Changed title `text-base font-medium font-heading` → `text-lg font-semibold` (matches Figma 18px Semi Bold)
- Removed DialogFooter `-mx-4 -mb-4 bg-muted/50 p-4 border-t` (not in Figma — Figma footer is just right-aligned buttons)
- Backdrop `bg-black/10` → `bg-black/30` (visible scrim per Figma)
- Close button positioning `top-2 right-2` → `top-4 right-4` (proportional to new p-6)

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
