# Component Variants Matrix

Quick-reference table for every variant/size/state combination supported by each component in `components/ui/`.

> **Source-of-truth:** the component file itself (via CVA `variants` object). This doc mirrors them for human review.

---

## Button — `components/ui/button.tsx`

### Variants (6)

| Variant | Tailwind classes | Use case |
|---|---|---|
| `default` | `bg-primary text-primary-foreground hover:bg-primary/90` | Primary action |
| `secondary` | `bg-secondary text-secondary-foreground hover:bg-secondary/80` | Secondary action |
| `destructive` | `bg-destructive text-destructive-foreground hover:bg-destructive/90` | Delete / dangerous |
| `outline` | `border-border bg-background hover:bg-muted` | Bordered, less weight |
| `ghost` | `hover:bg-muted hover:text-foreground` | Tertiary, no surface |
| `link` | `text-primary underline-offset-4 hover:underline` | Inline link-style |

### Sizes (5)

| Size | Height | Padding | Use case |
|---|---|---|---|
| `default` | `h-9` (36px) | `px-4 py-2` | Standard button |
| `sm` | `h-8` (32px) | `px-3` | Compact toolbar / inline |
| `lg` | `h-10` (40px) | `px-6` | Hero CTA |
| `icon` | `size-9` | none | Icon-only square (36px) |
| `icon-sm` | `size-8` | none | Compact icon-only (32px) |

### Boolean props

| Prop | Default | Effect |
|---|---|---|
| `isLoading` | `false` | Renders `<Loader2 className="animate-spin" />` before children, sets `disabled` |
| `disabled` | `false` | Native HTML — `opacity-50 pointer-events-none` |

### Full coverage matrix

6 variants × 5 sizes × {loading: yes/no} × {disabled: yes/no} = **120 combinations** — all supported

```tsx
<Button variant="destructive" size="lg" isLoading>Deleting…</Button>
<Button variant="ghost" size="icon-sm" aria-label="Close"><X /></Button>
<Button asChild variant="link"><Link href="/about">About</Link></Button>
```

---

## Badge — `components/ui/badge.tsx`

**Source:** Figma node `73:3479` (8 variants — 4 text-shaped + 1 icon + 3 number-shaped)

> Note: Badge uses `h-6` (24px) instead of Figma's 22px — token-aligned + meets WCAG 2.5.8 target size when used as interactive `<a>`.

### Text variants (4) — rounded-lg, h-6

| Variant | Tailwind classes | Use case |
|---|---|---|
| `default` | `rounded-lg bg-primary text-primary-foreground` | Primary tag |
| `secondary` | `rounded-lg bg-secondary text-secondary-foreground` | Neutral tag |
| `destructive` | `rounded-lg bg-destructive text-destructive-foreground` | Warning / error tag (solid) |
| `outline` | `rounded-lg border-border text-foreground` | Subtle bordered tag |

### Icon variant (1)

| Variant | Tailwind classes | Use case |
|---|---|---|
| `secondary-icon` | `rounded-lg bg-primary text-primary-foreground` | Tag with leading/trailing icon (e.g. ✓ Verified) |

### Number variants (3) — rounded-full pill

| Variant | Tailwind classes | Use case |
|---|---|---|
| `default-number` | `rounded-full bg-primary text-primary-foreground min-w-5` | Notification count |
| `destructive-number` | `rounded-full bg-destructive text-destructive-foreground min-w-5` | Alert count |
| `secondary-number` | `rounded-full border-border font-mono text-foreground min-w-5` | Outlined numeric (Geist Mono) |

### Polymorphism

Uses `useRender` from `@base-ui/react/use-render` — pass `render={<a href="…" />}` to make Badge an anchor with hover styles applied.

### Removed (not in Figma)

- ~~`ghost`~~ — was a custom addition, removed for Figma parity
- ~~`link`~~ — was a custom addition, removed for Figma parity

---

## Separator — `components/ui/separator.tsx`

### Orientations (2)

| Orientation | Default | Use case |
|---|---|---|
| `horizontal` | ✓ | Section divider in vertical layouts |
| `vertical` | | Divider in flex rows |

### Props

| Prop | Default | Effect |
|---|---|---|
| `orientation` | `"horizontal"` | Direction of the line |
| `decorative` | `false` | When true, hides from a11y tree (Radix) |

---

## Dialog — `components/ui/dialog.tsx`

**Source:** Figma node `74:7828` (2 COMPONENT_SETs: Dialog + Custom_close_button)

### Sub-components

| Component | Role |
|---|---|
| `Dialog` | Root — controls open state (`open` / `defaultOpen` / `onOpenChange`) |
| `DialogTrigger` | Element that opens the dialog (pass `render={<Button>}` etc.) |
| `DialogContent` | Popup with backdrop + portal; accepts `showCloseButton` (default true) |
| `DialogHeader` | Wraps Title + Description with `gap-2` flex |
| `DialogTitle` | Required — wires `aria-labelledby` |
| `DialogDescription` | Optional — wires `aria-describedby` |
| `DialogFooter` | Right-aligned button row (`sm:flex-row sm:justify-end`) |
| `DialogClose` | Any close trigger (`render={<Button>Cancel</Button>}`) |

### Sizing

| Property | Value |
|---|---|
| Padding | `p-6` (24px) |
| Border radius | `rounded-lg` (10px via `--radius`) |
| Border width | `border` (1px) |
| Default max width | `sm:max-w-md` (28rem / 448px) |
| Shadow | `shadow-lg` |
| Backdrop | `bg-black/30` + `backdrop-blur-xs` |

### Patterns

| Pattern | Notes |
|---|---|
| Form dialog | Header + form fields + Cancel/Save footer (matches Figma main variant) |
| Share / copy | Header + readonly input + Copy button (matches Custom_close_button variant) |
| Destructive confirm | Confirm button restates action ("Delete account", not "OK") per WCAG 3.3.4 |
| No close button | `showCloseButton={false}` — Escape + backdrop still work |

---

## Input — `components/ui/input.tsx`

**Source:** Figma node `76:8518`

### Anatomy patterns (compose via props, not variants)

| Pattern | Code | Notes |
|---|---|---|
| Default text input | `<Input type="email" placeholder="Email" />` | Border swaps on focus |
| With label | `<Label htmlFor="x">…</Label> + <Input id="x">` | Use `grid gap-2` wrapper |
| File | `<Input type="file" />` | `file:` pseudo-class styles button |
| Disabled | `<Input disabled />` | Opacity 50% + tinted background |
| With button | `<Input> + <Button>` in `flex gap-2` | Subscribe / send pattern |
| Error | `<Input aria-invalid />` | Renders destructive border + ring |

### Spec

| Property | Value |
|---|---|
| Height | `h-9` (36px) |
| Padding | `px-3 py-1` (12px / 4px) |
| Border radius | `rounded-lg` (8px) |
| Border width | `border` (1px) |
| Font size | `text-base md:text-sm` (16px mobile / 14px md+) |

### Standard HTML input types supported

`text` · `email` · `password` · `number` · `search` · `tel` · `url` · `file` · `date` · `time` · `datetime-local`

---

## Accordion — `components/ui/accordion.tsx`

### Sub-components

| Component | Required | Purpose |
|---|---|---|
| `<Accordion>` | ✓ | Root container — receives `type` and `collapsible` |
| `<AccordionItem>` | ✓ | One section — receives `value` |
| `<AccordionTrigger>` | ✓ | Header / clickable label |
| `<AccordionContent>` | ✓ | Expanded panel |

### Root props

| Prop | Type | Use case |
|---|---|---|
| `type` | `"single"` \| `"multiple"` | One panel open vs many |
| `collapsible` | `boolean` | Allow closing the active panel (single only) |
| `defaultValue` | `string` \| `string[]` | Initially open item(s) |

---

## FaqAccordion — `components/faq-accordion.tsx`

Composed component built on top of `Accordion`.

### Props

| Prop | Type | Default | Effect |
|---|---|---|---|
| `items` | `{ question, answer }[]` | 4 sample items | List of Q&A pairs |
| `defaultValue` | `string` | — | Pre-open one item by `value` |

---

## ThemeToggle — `components/theme-toggle.tsx`

No variants. Cycles `light` ↔ `dark` via `next-themes`. Renders a ghost `icon-sm` Button with Sun/Moon icons.

---

## Template — copy when documenting a new component

```markdown
## <ComponentName> — `components/ui/<file>.tsx`

### Variants (N)
| Variant | Tailwind classes | Use case |
|---|---|---|
| … | … | … |

### Sizes (N)
| Size | Dims | Use case |
|---|---|---|
| … | … | … |

### Props
| Prop | Default | Effect |
|---|---|---|
| … | … | … |
```
