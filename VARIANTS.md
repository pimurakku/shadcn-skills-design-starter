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
| `destructive` | `bg-destructive text-white hover:bg-destructive/90` | Delete / dangerous |
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

### Variants (4)

| Variant | Use case |
|---|---|
| `default` | Primary tag |
| `secondary` | Neutral tag |
| `destructive` | Warning / error tag |
| `outline` | Subtle bordered tag |

No size variants. Custom `className` via prop.

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
