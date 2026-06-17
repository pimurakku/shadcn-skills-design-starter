# Skill: Build UI with shadcn/ui + Tailwind CSS v4

You are helping build UI for a **Next.js** project using **shadcn/ui** and **Tailwind CSS v4** with the **Default Neutral** theme. Follow this skill precisely whenever you create, edit, or review UI code.

---

## Step 0 — Read before writing

Before writing any UI code:
1. Check which components are already installed under `components/ui/`
2. Check `app/globals.css` to confirm the 35 semantic CSS variables are declared (reference the token names in references/DESIGN.md §2)
3. Read `lib/utils.ts` to confirm the `cn()` helper is available

---

## Step 1 — Install components via CLI

Never write shadcn component source code from scratch. Always install via CLI:

```bash
npx shadcn@latest add <component-name>
```

Install multiple at once:
```bash
npx shadcn@latest add button card input label form
```

For monorepos, specify the app path:
```bash
npx shadcn@latest add button -c apps/web
```

Only write custom component code in `components/[feature]/` — never modify files inside `components/ui/`.

---

## Step 2 — Use semantic color tokens only

**Always** reference CSS variable tokens via Tailwind utilities. **Never** use hardcoded colors.

| Correct | Wrong |
|---------|-------|
| `bg-background` | `bg-white` |
| `text-foreground` | `text-gray-900` |
| `text-muted-foreground` | `text-gray-500` |
| `bg-primary text-primary-foreground` | `bg-black text-white` |
| `border-border` | `border-gray-200` |
| `bg-destructive` | `bg-red-500` |

The 35 semantic tokens (full list in references/DESIGN.md §2): `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `border`, `input`, `ring`, `chart-1..5`, `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-primary-foreground`, `sidebar-accent`, `sidebar-accent-foreground`, `sidebar-border`, `sidebar-ring`, `background-color`, `semantic-background`, `semantic-border`, `semantic-foreground`.

**Palette colors** (`tw/colors` §3 and `rdx/colors` §4 in references/DESIGN.md) are raw palette references — use them only for one-off accent colors or illustration, never for component semantic surfaces.

For custom colors not in the token set, define a new CSS variable in `globals.css` under `:root` and expose it in `@theme inline`, then use it as a Tailwind class. Do not use arbitrary values like `bg-[#abc123]` for themed surfaces.

---

## Step 3 — Component composition rules

### Always use `cn()` for conditional classes

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class", className)} />
```

### Use `asChild` for polymorphic rendering

```tsx
// Render a Button as a Next.js Link
import Link from "next/link"
import { Button } from "@/components/ui/button"

<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>
```

### Compose, don't nest raw HTML inside shadcn components

```tsx
// Correct — use the provided sub-components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>

// Wrong — raw div inside Card
<Card>
  <div className="p-6">
    <h3>Title</h3>
  </div>
</Card>
```

---

## Step 4 — Typography

Never create a `<Typography>` wrapper component. Apply Tailwind classes directly to HTML elements using the scale from references/DESIGN.md §5 (Typography).

**Font stack** (from references/DESIGN.md §5): `family/sans = Inter` · `family/mono = Geist Mono`  
Apply via `next/font` in `layout.tsx` and set as CSS variables on `<html>`.

```tsx
// Correct
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
  Page Title
</h1>
<p className="leading-7 [&:not(:first-child)]:mt-6">Body text.</p>
<p className="text-sm text-muted-foreground">Helper / caption text.</p>
```

| Role | Tailwind classes | DESIGN.md reference |
|------|-----------------|---------------------|
| H1 | `scroll-m-20 text-4xl font-extrabold tracking-tight text-balance` | `size/4xl` · `weight/extrabold` · `tracking/tight` |
| H2 | `scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight` | `size/3xl` · `weight/semibold` |
| H3 | `scroll-m-20 text-2xl font-semibold tracking-tight` | `size/2xl` · `weight/semibold` |
| H4 | `scroll-m-20 text-xl font-semibold tracking-tight` | `size/xl` · `weight/semibold` |
| Body | `leading-7 [&:not(:first-child)]:mt-6` | `leading/7` |
| Lead | `text-xl text-muted-foreground` | `size/xl` |
| Small | `text-sm font-medium leading-none` | `size/sm` · `weight/medium` |
| Muted | `text-sm text-muted-foreground` | `size/sm` |
| Mono | `font-mono text-sm` | `family/mono` · `size/sm` |

---

## Step 5 — Forms

Use React Hook Form + Zod with shadcn Form components. Install dependencies:

```bash
npm install react-hook-form zod @hookform/resolvers
npx shadcn@latest add form input label
```

Standard form pattern:

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email(),
})

export function ExampleForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })

  function onSubmit(values: z.infer<typeof schema>) {
    // handle submit
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Step 6 — Loading & feedback states

Use shadcn Skeleton for loading placeholders, Spinner for inline loading, and Sonner for toast notifications.

```bash
npx shadcn@latest add skeleton spinner sonner
```

```tsx
// Skeleton placeholder
<Skeleton className="h-4 w-[250px]" />

// Spinner in button
<Button disabled>
  <Spinner className="mr-2" />
  Saving…
</Button>

// Toast in layout
import { Toaster } from "@/components/ui/sonner"
// in layout.tsx: <Toaster />

// Trigger toast
import { toast } from "sonner"
toast.success("Saved successfully")
toast.error("Something went wrong")
```

---

## Step 7 — Dialogs and overlays

Use Dialog for modal confirmations, Sheet for side panels, Drawer for mobile-optimized panels, AlertDialog for destructive confirmations.

```tsx
// Destructive confirm pattern
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

## Step 8 — Dark mode

Never use `dark:bg-white` style overrides for theme switching — the 35 semantic tokens in references/DESIGN.md §2 handle it automatically (each has a distinct light and dark value). Only add `dark:` prefix for structural differences (e.g., border visibility, shadow intensity) that the semantic tokens don't cover.

Ensure `ThemeProvider` from `next-themes` wraps the app in `layout.tsx`:

```tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## Step 9 — Tailwind v4 specifics

- Use `size-*` instead of `w-* h-*` for square elements: `size-4` not `w-4 h-4`
- Spacing scale is in references/DESIGN.md §6–9 (padding, margin, gap, space) — always use tokens like `p-4`, `gap-2`, `mt-6`, not arbitrary `p-[14px]`
- Height scale: references/DESIGN.md §10a · Max-height: §10b · Max-width: §10c
- Border radius scale: references/DESIGN.md §11 (10 steps: `rounded-xs` → `rounded-4xl` → `rounded-full`)
- Border width scale: references/DESIGN.md §12 (0, 1, 2, 4, 8 px per side)
- Animations: use `tw-animate-css`, not `tailwindcss-animate`
- No `tailwind.config.js` — all config lives in `globals.css` via `@theme inline`
- To add a custom color to the design system:

```css
/* globals.css */
:root {
  --brand: oklch(0.6 0.2 250);
}
@theme inline {
  --color-brand: var(--brand);
}
/* Usage in JSX: className="bg-brand text-brand-foreground" */
```

---

## Step 10 — Quality checklist

Before completing any UI task, verify:

- [ ] All components installed via CLI — no hand-written shadcn source
- [ ] Only semantic color tokens used (no raw hex/rgb)
- [ ] `cn()` used for all conditional className merging
- [ ] No hardcoded pixel values for spacing — use Tailwind scale (`p-4`, `gap-2`, etc.)
- [ ] Dark mode works without extra overrides
- [ ] Interactive elements are keyboard accessible (shadcn handles this via Radix UI)
- [ ] Loading and error states are covered
- [ ] TypeScript types are correct — no `any`
- [ ] `"use client"` added only to components that require browser APIs or event handlers

---

## Common patterns quick reference

| Need | Component(s) |
|------|-------------|
| Primary action | `<Button>` |
| Navigating to a route | `<Button asChild><Link href="…">` |
| Info container | `<Card>` with `<CardHeader>`, `<CardContent>` |
| Form field | `<FormField>` + `<FormItem>` + `<FormLabel>` + `<FormControl>` + `<FormMessage>` |
| Select / dropdown | `<Select>` with `<SelectTrigger>`, `<SelectContent>`, `<SelectItem>` |
| Confirmation modal | `<AlertDialog>` |
| Side panel | `<Sheet>` |
| Notification | `toast()` from Sonner |
| Loading state | `<Skeleton>` or `<Spinner>` |
| Empty state | `<Empty>` |
| Data list | `<Table>` or `<DataTable>` |
| Tabbed content | `<Tabs>` with `<TabsList>`, `<TabsTrigger>`, `<TabsContent>` |
| Collapsible section | `<Accordion>` |
| Date picker | `<DatePicker>` (Calendar + Popover) |
| Toast | `<Toaster>` in layout + `toast()` trigger |
| Command palette | `<Command>` |
