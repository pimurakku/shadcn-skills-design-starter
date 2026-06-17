# Design System Specification

**Stack:** Next.js · shadcn/ui · Tailwind CSS v4  
**Theme:** Default Neutral  
**Color space:** sRGB (hex) — converted from Figma RGB floats  
**Source:** `variables-export.json` — 1,804 variables across 16 collections

---

## Collections Summary

| Collection | Variables | Modes | Type |
|------------|-----------|-------|------|
| `tw/colors` | 244 | Mode 1 | COLOR |
| `padding` | 245 | Mode 1 | FLOAT/STRING |
| `space` | 68 | Mode 1 | FLOAT/STRING |
| `border-radius` | 150 | Mode 1 | FLOAT/STRING |
| `margin` | 245 | Mode 1 | FLOAT/STRING |
| `tokens` | 87 | Mode 1 | FLOAT/STRING |
| `shadcn/ui` | 35 | light mode, dark mode | COLOR |
| `border-width` | 45 | Mode 1 | FLOAT/STRING |
| `gap` | 102 | Mode 1 | FLOAT/STRING |
| `stroke-width` | 11 | Mode 1 | FLOAT/STRING |
| `font` | 45 | Mode 1 | FLOAT/STRING |
| `height` | 24 | Mode 1 | FLOAT/STRING |
| `max-height` | 35 | Mode 1 | FLOAT/STRING |
| `max-width` | 51 | Mode 1 | FLOAT/STRING |
| `rdx/colors` | 396 | light mode, dark mode | COLOR |
| `opacity` | 21 | Mode 1 | FLOAT/STRING |

---

## 1. Base Scale Tokens — `tokens` (87 variables)

Foundational numeric values (in px) that all spacing/sizing tokens alias to.

| Token Name | Value (px) |
|------------|-----------|
| `-0,8` | -0.8 |
| `-0,4` | -0.4 |
| `0` | 0 |
| `0,4` | 0.4 |
| `0,5` | 0.5 |
| `0,75` | 0.75 |
| `0,8` | 0.8 |
| `1` | 1 |
| `1,25` | 1.25 |
| `1,5` | 1.5 |
| `1,6` | 1.6 |
| `1,75` | 1.75 |
| `2` | 2 |
| `2,25` | 2.25 |
| `2,5` | 2.5 |
| `2,75` | 2.75 |
| `3` | 3 |
| `4` | 4 |
| `5` | 5 |
| `6` | 6 |
| `8` | 8 |
| `10` | 10 |
| `12` | 12 |
| `14` | 14 |
| `15` | 15 |
| `16` | 16 |
| `18` | 18 |
| `20` | 20 |
| `24` | 24 |
| `25` | 25 |
| `28` | 28 |
| `30` | 30 |
| `32` | 32 |
| `35` | 35 |
| `36` | 36 |
| `40` | 40 |
| `44` | 44 |
| `45` | 45 |
| `48` | 48 |
| `50` | 50 |
| `55` | 55 |
| `56` | 56 |
| `60` | 60 |
| `64` | 64 |
| `65` | 65 |
| `70` | 70 |
| `72` | 72 |
| `75` | 75 |
| `80` | 80 |
| `85` | 85 |
| `90` | 90 |
| `95` | 95 |
| `96` | 96 |
| `100` | 100 |
| `112` | 112 |
| `128` | 128 |
| `144` | 144 |
| `160` | 160 |
| `176` | 176 |
| `192` | 192 |
| `200` | 200 |
| `208` | 208 |
| `224` | 224 |
| `240` | 240 |
| `256` | 256 |
| `288` | 288 |
| `300` | 300 |
| `320` | 320 |
| `384` | 384 |
| `400` | 400 |
| `448` | 448 |
| `500` | 500 |
| `512` | 512 |
| `576` | 576 |
| `600` | 600 |
| `640` | 640 |
| `672` | 672 |
| `700` | 700 |
| `768` | 768 |
| `800` | 800 |
| `896` | 896 |
| `900` | 900 |
| `1024` | 1024 |
| `1152` | 1152 |
| `1280` | 1280 |
| `1536` | 1536 |
| `9999` | 9999 |

---

## 2. Semantic Color Tokens — `shadcn/ui` (35 variables)

CSS variables used by all shadcn/ui components.  
Reference as `bg-background`, `text-foreground`, `border-border`, etc.

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `background` | `#FFFFFF` | `#0A0A0A` | Page canvas |
| `foreground` | `#0A0A0A` | `#FAFAFA` | Primary text |
| `card` | `#FFFFFF` | `#171717` | Card surface |
| `card-foreground` | `#0A0A0A` | `#FAFAFA` | Card text |
| `popover` | `#FFFFFF` | `#262626` | Popover/dropdown surface |
| `popover-foreground` | `#0A0A0A` | `#FAFAFA` | Popover text |
| `primary` | `#171717` | `#E5E5E5` | Primary action |
| `primary-foreground` | `#FAFAFA` | `#171717` | Text on primary |
| `secondary` | `#F5F5F5` | `#262626` | Secondary action |
| `secondary-foreground` | `#0A0A0A` | `#FAFAFA` | Text on secondary |
| `muted` | `#F5F5F5` | `#262626` | Muted/subdued surface |
| `muted-foreground` | `#737373` | `#A3A3A3` | Placeholder / subtle text |
| `accent` | `#F5F5F5` | `#404040` | Hover highlight |
| `accent-foreground` | `#171717` | `#FAFAFA` | Text on accent |
| `destructive` | `#DC2626` | `#F87171` | Error / delete |
| `border` | `#E5E5E5` | `#404040` | Dividers / outlines |
| `input` | `#E5E5E5` | `#171717` | Form field border |
| `ring` | `#737373` | `#737373` | Focus ring |
| `chart-1` | `#5EB1EF` | `#5EB1EF` | Chart color 1 |
| `chart-2` | `#0090FF` | `#0090FF` | Chart color 2 |
| `chart-3` | `#0588F0` | `#0588F0` | Chart color 3 |
| `chart-4` | `#0D74CE` | `#0D74CE` | Chart color 4 |
| `chart-5` | `#113264` | `#113264` | Chart color 5 |
| `sidebar` | `#FAFAFA` | `#171717` | Sidebar surface |
| `sidebar-foreground` | `#0A0A0A` | `#FAFAFA` | Sidebar text |
| `sidebar-primary` | `#171717` | `#0588F0` | Sidebar primary action |
| `sidebar-primary-foreground` | `#FAFAFA` | `#FAFAFA` | Text on sidebar primary |
| `sidebar-accent` | `#F5F5F5` | `#262626` | Sidebar hover |
| `sidebar-accent-foreground` | `#171717` | `#FAFAFA` | Text on sidebar accent |
| `sidebar-border` | `#D4D4D4` | `#404040` | Sidebar dividers |
| `sidebar-ring` | `#737373` | `#737373` | Sidebar focus ring |
| `background-color` | `#000000 / 30%` | `#000000 / 30%` | Overlay backdrop |
| `semantic-background` | `#696867` | `#272625` | Semantic surface |
| `semantic-border` | `#898887` | `#535151` | Semantic divider |
| `semantic-foreground` | `#FFFFFF` | `#FFFFFF` | Semantic text |

---

## 3. Tailwind Color Palette — `tw/colors` (244 variables)

Full Tailwind v3/v4 color scale. Use via: `text-slate-500`, `bg-red-100`, etc.

### slate

| Token | Hex |
|-------|-----|
| `slate/50` | `#F8FAFC` |
| `slate/100` | `#F1F5F9` |
| `slate/200` | `#E2E8F0` |
| `slate/300` | `#CBD5E1` |
| `slate/400` | `#94A3B8` |
| `slate/500` | `#64748B` |
| `slate/600` | `#475569` |
| `slate/700` | `#334155` |
| `slate/800` | `#1E293B` |
| `slate/900` | `#0F172A` |
| `slate/950` | `#020617` |

### gray

| Token | Hex |
|-------|-----|
| `gray/50` | `#F9FAFB` |
| `gray/100` | `#F3F4F6` |
| `gray/200` | `#E5E7EB` |
| `gray/300` | `#D1D5DB` |
| `gray/400` | `#9CA3AF` |
| `gray/500` | `#6B7280` |
| `gray/600` | `#4B5563` |
| `gray/700` | `#374151` |
| `gray/800` | `#1F2937` |
| `gray/900` | `#111827` |
| `gray/950` | `#030712` |

### zinc

| Token | Hex |
|-------|-----|
| `zinc/50` | `#FAFAFA` |
| `zinc/100` | `#F4F4F5` |
| `zinc/200` | `#E4E4E7` |
| `zinc/300` | `#D4D4D8` |
| `zinc/400` | `#A1A1AA` |
| `zinc/500` | `#71717A` |
| `zinc/600` | `#52525B` |
| `zinc/700` | `#3F3F46` |
| `zinc/800` | `#27272A` |
| `zinc/900` | `#18181B` |
| `zinc/950` | `#09090B` |

### neutral

| Token | Hex |
|-------|-----|
| `neutral/50` | `#FAFAFA` |
| `neutral/100` | `#F5F5F5` |
| `neutral/200` | `#E5E5E5` |
| `neutral/300` | `#D4D4D4` |
| `neutral/400` | `#A3A3A3` |
| `neutral/500` | `#737373` |
| `neutral/600` | `#525252` |
| `neutral/700` | `#404040` |
| `neutral/800` | `#262626` |
| `neutral/900` | `#171717` |
| `neutral/950` | `#0A0A0A` |

### stone

| Token | Hex |
|-------|-----|
| `stone/50` | `#FAFAF9` |
| `stone/100` | `#F5F5F4` |
| `stone/200` | `#E7E5E4` |
| `stone/300` | `#D6D3D1` |
| `stone/400` | `#A8A29E` |
| `stone/500` | `#78716C` |
| `stone/600` | `#57534E` |
| `stone/700` | `#44403C` |
| `stone/800` | `#292524` |
| `stone/900` | `#1C1917` |
| `stone/950` | `#0C0A09` |

### red

| Token | Hex |
|-------|-----|
| `red/50` | `#FEF2F2` |
| `red/100` | `#FEE2E2` |
| `red/200` | `#FECACA` |
| `red/300` | `#FCA5A5` |
| `red/400` | `#F87171` |
| `red/500` | `#EF4444` |
| `red/600` | `#DC2626` |
| `red/700` | `#B91C1C` |
| `red/800` | `#991B1B` |
| `red/900` | `#7F1D1D` |
| `red/950` | `#450A0A` |

### orange

| Token | Hex |
|-------|-----|
| `orange/50` | `#FFF7ED` |
| `orange/100` | `#FFEDD5` |
| `orange/200` | `#FED7AA` |
| `orange/300` | `#FDBA74` |
| `orange/400` | `#FB923C` |
| `orange/500` | `#F97316` |
| `orange/600` | `#EA580C` |
| `orange/700` | `#C2410C` |
| `orange/800` | `#9A3412` |
| `orange/900` | `#7C2D12` |
| `orange/950` | `#431407` |

### amber

| Token | Hex |
|-------|-----|
| `amber/50` | `#FFFBEB` |
| `amber/100` | `#FEF3C7` |
| `amber/200` | `#FDE68A` |
| `amber/300` | `#FCD34D` |
| `amber/400` | `#FBBF24` |
| `amber/500` | `#F59E0B` |
| `amber/600` | `#D97706` |
| `amber/700` | `#B45309` |
| `amber/800` | `#92400E` |
| `amber/900` | `#78350F` |
| `amber/950` | `#451A03` |

### green

| Token | Hex |
|-------|-----|
| `green/50` | `#F0FDF4` |
| `green/100` | `#DCFCE7` |
| `green/200` | `#BBF7D0` |
| `green/300` | `#86EFAC` |
| `green/400` | `#4ADE80` |
| `green/500` | `#22C55E` |
| `green/600` | `#16A34A` |
| `green/700` | `#15803D` |
| `green/800` | `#166534` |
| `green/900` | `#14532D` |
| `green/950` | `#052E16` |

### emerald

| Token | Hex |
|-------|-----|
| `emerald/50` | `#ECFDF5` |
| `emerald/100` | `#D1FAE5` |
| `emerald/200` | `#A7F3D0` |
| `emerald/300` | `#6EE7B7` |
| `emerald/400` | `#34D399` |
| `emerald/500` | `#10B981` |
| `emerald/600` | `#059669` |
| `emerald/700` | `#047857` |
| `emerald/800` | `#065F46` |
| `emerald/900` | `#064E3B` |
| `emerald/950` | `#022C22` |

### teal

| Token | Hex |
|-------|-----|
| `teal/50` | `#F0FDFA` |
| `teal/100` | `#CCFBF1` |
| `teal/200` | `#99F6E4` |
| `teal/300` | `#5EEAD4` |
| `teal/400` | `#2DD4BF` |
| `teal/500` | `#14B8A6` |
| `teal/600` | `#0D9488` |
| `teal/700` | `#0F766E` |
| `teal/800` | `#115E59` |
| `teal/900` | `#134E4A` |
| `teal/950` | `#042F2E` |

### cyan

| Token | Hex |
|-------|-----|
| `cyan/50` | `#ECFEFF` |
| `cyan/100` | `#CFFAFE` |
| `cyan/200` | `#A5F3FC` |
| `cyan/300` | `#67E8F9` |
| `cyan/400` | `#22D3EE` |
| `cyan/500` | `#06B6D4` |
| `cyan/600` | `#0891B2` |
| `cyan/700` | `#0E7490` |
| `cyan/800` | `#155E75` |
| `cyan/900` | `#164E63` |
| `cyan/950` | `#083344` |

### sky

| Token | Hex |
|-------|-----|
| `sky/50` | `#F0F9FF` |
| `sky/100` | `#E0F2FE` |
| `sky/200` | `#BAE6FD` |
| `sky/300` | `#7DD3FC` |
| `sky/400` | `#38BDF8` |
| `sky/500` | `#0EA5E9` |
| `sky/600` | `#0284C7` |
| `sky/700` | `#0369A1` |
| `sky/800` | `#075985` |
| `sky/900` | `#0C4A6E` |
| `sky/950` | `#082F49` |

### indigo

| Token | Hex |
|-------|-----|
| `indigo/50` | `#EEF2FF` |
| `indigo/100` | `#E0E7FF` |
| `indigo/200` | `#C7D2FE` |
| `indigo/300` | `#A5B4FC` |
| `indigo/400` | `#818CF8` |
| `indigo/500` | `#6366F1` |
| `indigo/600` | `#4F46E5` |
| `indigo/700` | `#4338CA` |
| `indigo/800` | `#3730A3` |
| `indigo/900` | `#312E81` |
| `indigo/950` | `#1E1B4B` |

### violet

| Token | Hex |
|-------|-----|
| `violet/50` | `#F5F3FF` |
| `violet/100` | `#EDE9FE` |
| `violet/200` | `#DDD6FE` |
| `violet/300` | `#C4B5FD` |
| `violet/400` | `#A78BFA` |
| `violet/500` | `#8B5CF6` |
| `violet/600` | `#7C3AED` |
| `violet/700` | `#6D28D9` |
| `violet/800` | `#5B21B6` |
| `violet/900` | `#4C1D95` |
| `violet/950` | `#2E1065` |

### purple

| Token | Hex |
|-------|-----|
| `purple/50` | `#FAF5FF` |
| `purple/100` | `#F3E8FF` |
| `purple/200` | `#E9D5FF` |
| `purple/300` | `#D8B4FE` |
| `purple/400` | `#C084FC` |
| `purple/500` | `#A855F7` |
| `purple/600` | `#9333EA` |
| `purple/700` | `#7E22CE` |
| `purple/800` | `#6B21A8` |
| `purple/900` | `#581C87` |
| `purple/950` | `#3B0764` |

### fuchsia

| Token | Hex |
|-------|-----|
| `fuchsia/50` | `#FDF4FF` |
| `fuchsia/100` | `#FAE8FF` |
| `fuchsia/200` | `#F5D0FE` |
| `fuchsia/300` | `#F0ABFC` |
| `fuchsia/400` | `#E879F9` |
| `fuchsia/500` | `#D946EF` |
| `fuchsia/600` | `#C026D3` |
| `fuchsia/700` | `#A21CAF` |
| `fuchsia/800` | `#86198F` |
| `fuchsia/900` | `#701A75` |
| `fuchsia/950` | `#4A044E` |

### pink

| Token | Hex |
|-------|-----|
| `pink/50` | `#FDF2F8` |
| `pink/100` | `#FCE7F3` |
| `pink/200` | `#FBCFE8` |
| `pink/300` | `#F9A8D4` |
| `pink/400` | `#F472B6` |
| `pink/500` | `#EC4899` |
| `pink/600` | `#DB2777` |
| `pink/700` | `#BE185D` |
| `pink/800` | `#9D174D` |
| `pink/900` | `#831843` |
| `pink/950` | `#500724` |

### rose

| Token | Hex |
|-------|-----|
| `rose/50` | `#FFF1F2` |
| `rose/100` | `#FFE4E6` |
| `rose/200` | `#FECDD3` |
| `rose/300` | `#FDA4AF` |
| `rose/400` | `#FB7185` |
| `rose/500` | `#F43F5E` |
| `rose/600` | `#E11D48` |
| `rose/700` | `#BE123C` |
| `rose/800` | `#9F1239` |
| `rose/900` | `#881337` |
| `rose/950` | `#4C0519` |

### lime

| Token | Hex |
|-------|-----|
| `lime/50` | `#F7FEE7` |
| `lime/100` | `#ECFCCB` |
| `lime/200` | `#D9F99D` |
| `lime/300` | `#BEF264` |
| `lime/400` | `#A3E635` |
| `lime/500` | `#84CC16` |
| `lime/600` | `#65A30D` |
| `lime/700` | `#4D7C0F` |
| `lime/800` | `#3F6212` |
| `lime/900` | `#365314` |
| `lime/950` | `#1A2E05` |

### yellow

| Token | Hex |
|-------|-----|
| `yellow/50` | `#FEFCE8` |
| `yellow/100` | `#FEF9C3` |
| `yellow/200` | `#FEF08A` |
| `yellow/300` | `#FDE047` |
| `yellow/400` | `#FACC15` |
| `yellow/500` | `#EAB308` |
| `yellow/600` | `#CA8A04` |
| `yellow/700` | `#A16207` |
| `yellow/800` | `#854D0E` |
| `yellow/900` | `#713F12` |
| `yellow/950` | `#422006` |

### blue

| Token | Hex |
|-------|-----|
| `blue/50` | `#EFF6FF` |
| `blue/100` | `#DBEAFE` |
| `blue/200` | `#BFDBFE` |
| `blue/300` | `#93C5FD` |
| `blue/400` | `#60A5FA` |
| `blue/500` | `#3B82F6` |
| `blue/600` | `#2563EB` |
| `blue/700` | `#1D4ED8` |
| `blue/800` | `#1E40AF` |
| `blue/900` | `#1E3A8A` |
| `blue/950` | `#172554` |

| `white` | `#FFFFFF` |
| `black` | `#000000` |
---

## 4. Radix Color Scales — `rdx/colors` (396 variables)

Radix UI 12-step semantic color scales + alpha scales.  
Step 1 = lightest background · Step 12 = highest-contrast text.

### gray

| Token | Light | Dark |
|-------|-------|------|
| `gray/1` | `#FCFCFC` | `#111111` |
| `gray/2` | `#F9F9F9` | `#191919` |
| `gray/3` | `#F0F0F0` | `#222222` |
| `gray/4` | `#E8E8E8` | `#2A2A2A` |
| `gray/5` | `#E0E0E0` | `#313131` |
| `gray/6` | `#D9D9D9` | `#3A3A3A` |
| `gray/7` | `#CECECE` | `#484848` |
| `gray/8` | `#BBBBBB` | `#606060` |
| `gray/9` | `#8D8D8D` | `#6E6E6E` |
| `gray/10` | `#838383` | `#7B7B7B` |
| `gray/11` | `#646464` | `#B4B4B4` |
| `gray/12` | `#202020` | `#EEEEEE` |

### mauve

| Token | Light | Dark |
|-------|-------|------|
| `mauve/1` | `#FDFCFD` | `#121113` |
| `mauve/2` | `#FAF9FB` | `#1A191B` |
| `mauve/3` | `#F2EFF3` | `#232225` |
| `mauve/4` | `#EAE7EC` | `#2B292D` |
| `mauve/5` | `#E3DFE6` | `#323035` |
| `mauve/6` | `#DBD8E0` | `#3C393F` |
| `mauve/7` | `#D0CDD7` | `#49474E` |
| `mauve/8` | `#BCBAC7` | `#625F69` |
| `mauve/9` | `#8E8C99` | `#6F6D78` |
| `mauve/10` | `#84828E` | `#7C7A85` |
| `mauve/11` | `#65636D` | `#B5B2BC` |
| `mauve/12` | `#211F26` | `#EEEEF0` |

### slate

| Token | Light | Dark |
|-------|-------|------|
| `slate/1` | `#FCFCFD` | `#111113` |
| `slate/2` | `#F9F9FB` | `#18191B` |
| `slate/3` | `#F0F0F3` | `#212225` |
| `slate/4` | `#E8E8EC` | `#272A2D` |
| `slate/5` | `#E0E1E6` | `#2E3135` |
| `slate/6` | `#D9D9E0` | `#363A3F` |
| `slate/7` | `#CDCED6` | `#43484E` |
| `slate/8` | `#B9BBC6` | `#5A6169` |
| `slate/9` | `#8B8D98` | `#696E77` |
| `slate/10` | `#80838D` | `#777B84` |
| `slate/11` | `#60646C` | `#B0B4BA` |
| `slate/12` | `#1C2024` | `#EDEEF0` |

### sage

| Token | Light | Dark |
|-------|-------|------|
| `sage/1` | `#FBFDFC` | `#101211` |
| `sage/2` | `#F7F9F8` | `#171918` |
| `sage/3` | `#EEEEFF` | `#202221` |
| `sage/4` | `#E6E9E8` | `#272A29` |
| `sage/5` | `#DFE2E0` | `#2E3130` |
| `sage/6` | `#D7DAD9` | `#373B39` |
| `sage/7` | `#CBCFCD` | `#444947` |
| `sage/8` | `#B8BCBA` | `#5B625F` |
| `sage/9` | `#868E8B` | `#63706B` |
| `sage/10` | `#7C8481` | `#ADB5B2` |
| `sage/11` | `#5F6563` | `#ADB5B2` |
| `sage/12` | `#1A211E` | `#ECEEED` |

### olive

| Token | Light | Dark |
|-------|-------|------|
| `olive/1` | `#FCFDFC` | `#111210` |
| `olive/2` | `#F8FAF8` | `#181917` |
| `olive/3` | `#EFF1EF` | `#212220` |
| `olive/4` | `#E7E9E7` | `#282A27` |
| `olive/5` | `#DFE2DF` | `#2F312E` |
| `olive/6` | `#D7DAD7` | `#383A36` |
| `olive/7` | `#CCCFCC` | `#454843` |
| `olive/8` | `#B9BCB8` | `#5C625B` |
| `olive/9` | `#898E87` | `#687066` |
| `olive/10` | `#7F847D` | `#767D74` |
| `olive/11` | `#60655F` | `#AFB5AD` |
| `olive/12` | `#1D211C` | `#ECEEEC` |

### sand

| Token | Light | Dark |
|-------|-------|------|
| `sand/1` | `#FDFDFC` | `#111110` |
| `sand/2` | `#F9F9F8` | `#191918` |
| `sand/3` | `#F1F0EF` | `#222221` |
| `sand/4` | `#E9E8E6` | `#2A2A28` |
| `sand/5` | `#E2E1DE` | `#31312E` |
| `sand/6` | `#DAD9D6` | `#3B3A37` |
| `sand/7` | `#CFCECA` | `#494844` |
| `sand/8` | `#BCBBB5` | `#62605B` |
| `sand/9` | `#8D8D86` | `#6F6D66` |
| `sand/10` | `#82827C` | `#7C7B74` |
| `sand/11` | `#63635E` | `#B5B3AD` |
| `sand/12` | `#21201C` | `#EEEEEC` |

### tomato

| Token | Light | Dark |
|-------|-------|------|
| `tomato/1` | `#FFFCFC` | `#181111` |
| `tomato/2` | `#FFF8F7` | `#1F1513` |
| `tomato/3` | `#FEEBE7` | `#391714` |
| `tomato/4` | `#FFDCD3` | `#4E1511` |
| `tomato/5` | `#FFCDC2` | `#5E1C16` |
| `tomato/6` | `#FDBDAF` | `#6E2920` |
| `tomato/7` | `#F5A898` | `#853A2D` |
| `tomato/8` | `#EC8E7B` | `#AC4D39` |
| `tomato/9` | `#E54D2E` | `#E54D2E` |
| `tomato/10` | `#DD4425` | `#EC6142` |
| `tomato/11` | `#D13415` | `#FF977D` |
| `tomato/12` | `#5C271F` | `#FBD3CB` |

### red

| Token | Light | Dark |
|-------|-------|------|
| `red/1` | `#FFFCFC` | `#191111` |
| `red/2` | `#FFF7F7` | `#201314` |
| `red/3` | `#FEEBEC` | `#3B1219` |
| `red/4` | `#FFDBDC` | `#500F1C` |
| `red/5` | `#FFCDCE` | `#611623` |
| `red/6` | `#FDBDBE` | `#72232D` |
| `red/7` | `#F4A9AA` | `#8C333A` |
| `red/8` | `#EB8E90` | `#B54548` |
| `red/9` | `#E5484D` | `#E5484D` |
| `red/10` | `#DC3E42` | `#EC5D5E` |
| `red/11` | `#CE2C31` | `#FF9592` |
| `red/12` | `#641723` | `#FFD1D9` |

### ruby

| Token | Light | Dark |
|-------|-------|------|
| `ruby/1` | `#FFFCFD` | `#191113` |
| `ruby/2` | `#FFF7F8` | `#1E1517` |
| `ruby/3` | `#FEEAED` | `#3A141E` |
| `ruby/4` | `#FFDCE1` | `#4E1325` |
| `ruby/5` | `#FFCED6` | `#5E1A2E` |
| `ruby/6` | `#F8BFC8` | `#6F2539` |
| `ruby/7` | `#EFACB8` | `#883447` |
| `ruby/8` | `#E592A3` | `#B3445A` |
| `ruby/9` | `#E54666` | `#E54666` |
| `ruby/10` | `#DC3B5D` | `#EC5A72` |
| `ruby/11` | `#CA244D` | `#FF949D` |
| `ruby/12` | `#64172B` | `#FED2E1` |

### crimson

| Token | Light | Dark |
|-------|-------|------|
| `crimson/1` | `#FFFCFD` | `#191114` |
| `crimson/2` | `#FEF7F9` | `#201318` |
| `crimson/3` | `#FFE9F0` | `#381525` |
| `crimson/4` | `#FEDCE7` | `#4D122F` |
| `crimson/5` | `#FACEDD` | `#5C1839` |
| `crimson/6` | `#F3BED1` | `#6D2545` |
| `crimson/7` | `#EAACC3` | `#873356` |
| `crimson/8` | `#E093B2` | `#B0436E` |
| `crimson/9` | `#E93D82` | `#E93D82` |
| `crimson/10` | `#DF3478` | `#EE518A` |
| `crimson/11` | `#CB1D63` | `#FF92AD` |
| `crimson/12` | `#621639` | `#FDD3E8` |

### pink

| Token | Light | Dark |
|-------|-------|------|
| `pink/1` | `#FFFCFE` | `#191117` |
| `pink/2` | `#FEF7FB` | `#21121D` |
| `pink/3` | `#FEE9F5` | `#37172F` |
| `pink/4` | `#FBDCEF` | `#4B143D` |
| `pink/5` | `#F6CEE7` | `#591C47` |
| `pink/6` | `#EFBFDD` | `#692955` |
| `pink/7` | `#E7ACD0` | `#833869` |
| `pink/8` | `#DD93C2` | `#A84885` |
| `pink/9` | `#D6409F` | `#D6409F` |
| `pink/10` | `#CF3897` | `#DE51A8` |
| `pink/11` | `#C2298A` | `#FF8DCC` |
| `pink/12` | `#651249` | `#FDD1EA` |

### plum

| Token | Light | Dark |
|-------|-------|------|
| `plum/1` | `#FEFCFF` | `#181118` |
| `plum/2` | `#FDF7FD` | `#201320` |
| `plum/3` | `#FBEBFB` | `#351A35` |
| `plum/4` | `#F7DEF8` | `#451D47` |
| `plum/5` | `#F2D1F3` | `#512454` |
| `plum/6` | `#E9C2EC` | `#5E3061` |
| `plum/7` | `#DEADE3` | `#734079` |
| `plum/8` | `#CF91D8` | `#92549C` |
| `plum/9` | `#AB4ABA` | `#AB4ABA` |
| `plum/10` | `#A144AF` | `#B658C4` |
| `plum/11` | `#953EA3` | `#E796F3` |
| `plum/12` | `#53195D` | `#F4D4F4` |

### purple

| Token | Light | Dark |
|-------|-------|------|
| `purple/1` | `#FEFCFE` | `#ECD9FA` |
| `purple/2` | `#FBF7FE` | `#D19DFF` |
| `purple/3` | `#F7EDFE` | `#9A5CD0` |
| `purple/4` | `#F2E2FC` | `#8E4EC6` |
| `purple/5` | `#EAD5F9` | `#8457AA` |
| `purple/6` | `#E0C4F4` | `#664282` |
| `purple/7` | `#D1AFEC` | `#54346B` |
| `purple/8` | `#BE93E4` | `#48295C` |
| `purple/9` | `#8E4EC6` | `#3D224E` |
| `purple/10` | `#8347B9` | `#301C3B` |
| `purple/11` | `#8145B5` | `#1E1523` |
| `purple/12` | `#402060` | `#18111B` |

### violet

| Token | Light | Dark |
|-------|-------|------|
| `violet/1` | `#FDFCFE` | `#14121F` |
| `violet/2` | `#FAF8FF` | `#1B1525` |
| `violet/3` | `#F4F0FE` | `#291F43` |
| `violet/4` | `#EBE4FF` | `#33255B` |
| `violet/5` | `#E1D9FF` | `#3C2E69` |
| `violet/6` | `#D4CAFE` | `#473876` |
| `violet/7` | `#C2B5F5` | `#56468B` |
| `violet/8` | `#AA99EC` | `#6958AD` |
| `violet/9` | `#6E56CF` | `#6E56CF` |
| `violet/10` | `#654DC4` | `#7D66D9` |
| `violet/11` | `#6550B9` | `#BAA7FF` |
| `violet/12` | `#2F265F` | `#E2DDFE` |

### iris

| Token | Light | Dark |
|-------|-------|------|
| `iris/1` | `#FDFDFF` | `#13131E` |
| `iris/2` | `#F8F8FF` | `#171625` |
| `iris/3` | `#F0F1FE` | `#202248` |
| `iris/4` | `#E6E7FF` | `#262A65` |
| `iris/5` | `#DADCFF` | `#303374` |
| `iris/6` | `#CBCDFF` | `#3D3E82` |
| `iris/7` | `#B8BAF8` | `#4A4A95` |
| `iris/8` | `#9B9EF0` | `#5958B1` |
| `iris/9` | `#5B5BD6` | `#5B5BD6` |
| `iris/10` | `#5151CD` | `#6E6ADE` |
| `iris/11` | `#5753C6` | `#B1A9FF` |
| `iris/12` | `#272962` | `#E0DFFE` |

### indigo

| Token | Light | Dark |
|-------|-------|------|
| `indigo/1` | `#FDFDFE` | `#11131F` |
| `indigo/2` | `#F7F9FF` | `#141726` |
| `indigo/3` | `#EDF2FE` | `#182449` |
| `indigo/4` | `#E1E9FF` | `#1D2E62` |
| `indigo/5` | `#D2DEFF` | `#253974` |
| `indigo/6` | `#C1D0FF` | `#304384` |
| `indigo/7` | `#ABBDF9` | `#3A4F97` |
| `indigo/8` | `#8DA4EF` | `#435DB1` |
| `indigo/9` | `#3E63DD` | `#3E63DD` |
| `indigo/10` | `#3358D4` | `#5472E4` |
| `indigo/11` | `#3A5BC7` | `#9EB1FF` |
| `indigo/12` | `#1F2D5C` | `#D6E1FF` |

### blue

| Token | Light | Dark |
|-------|-------|------|
| `blue/1` | `#FBFDFF` | `#0D1520` |
| `blue/2` | `#F4FAFF` | `#111927` |
| `blue/3` | `#E6F4FE` | `#0D2847` |
| `blue/4` | `#D5EFFF` | `#003362` |
| `blue/5` | `#C2E5FF` | `#004074` |
| `blue/6` | `#ACD8FC` | `#104D87` |
| `blue/7` | `#8EC8F6` | `#205D9E` |
| `blue/8` | `#5EB1EF` | `#2870BD` |
| `blue/9` | `#0090FF` | `#0090FF` |
| `blue/10` | `#0588F0` | `#3B9EFF` |
| `blue/11` | `#0D74CE` | `#70B8FF` |
| `blue/12` | `#113264` | `#C2E6FF` |

### cyan

| Token | Light | Dark |
|-------|-------|------|
| `cyan/1` | `#FAFDFE` | `#0B161A` |
| `cyan/2` | `#F2FAFB` | `#101B20` |
| `cyan/3` | `#DEF7F9` | `#082C36` |
| `cyan/4` | `#CAF1F6` | `#003848` |
| `cyan/5` | `#B5E9F0` | `#004558` |
| `cyan/6` | `#9DDDE7` | `#045468` |
| `cyan/7` | `#7DCEDC` | `#12677E` |
| `cyan/8` | `#3DB9CF` | `#11809C` |
| `cyan/9` | `#00A2C7` | `#00A2C7` |
| `cyan/10` | `#0797B9` | `#23AFD0` |
| `cyan/11` | `#107D98` | `#4CCCE6` |
| `cyan/12` | `#0D3C48` | `#B6ECF7` |

### teal

| Token | Light | Dark |
|-------|-------|------|
| `teal/1` | `#FAFEFD` | `#0D1514` |
| `teal/2` | `#F3FBF9` | `#111C1B` |
| `teal/3` | `#E0F8F3` | `#0D2D2A` |
| `teal/4` | `#CCF3EA` | `#023B37` |
| `teal/5` | `#B8EAE0` | `#084843` |
| `teal/6` | `#A1DED2` | `#145750` |
| `teal/7` | `#83CDC1` | `#1C6961` |
| `teal/8` | `#53B9AB` | `#207E73` |
| `teal/9` | `#12A594` | `#12A594` |
| `teal/10` | `#0D9B8A` | `#0EB39E` |
| `teal/11` | `#008573` | `#0BD8B6` |
| `teal/12` | `#0D3D38` | `#ADF0DD` |

### jade

| Token | Light | Dark |
|-------|-------|------|
| `jade/1` | `#FBFEFD` | `#0D1512` |
| `jade/2` | `#F4FBF7` | `#121C18` |
| `jade/3` | `#E6F7ED` | `#0F2E22` |
| `jade/4` | `#D6F1E3` | `#0B3B2C` |
| `jade/5` | `#C3E9D7` | `#114837` |
| `jade/6` | `#ACDEC8` | `#1B5745` |
| `jade/7` | `#8BCEB6` | `#246854` |
| `jade/8` | `#56BA9F` | `#2A7E68` |
| `jade/9` | `#29A383` | `#29A383` |
| `jade/10` | `#26997B` | `#27B08B` |
| `jade/11` | `#208368` | `#1FD8A4` |
| `jade/12` | `#1D3B31` | `#ADF0D4` |

### green

| Token | Light | Dark |
|-------|-------|------|
| `green/1` | `#FBFEFC` | `#0E1512` |
| `green/2` | `#F4FBF6` | `#121B17` |
| `green/3` | `#E6F6EB` | `#132D21` |
| `green/4` | `#D6F1DF` | `#113B29` |
| `green/5` | `#C4E8D1` | `#174933` |
| `green/6` | `#ADDDC0` | `#20573E` |
| `green/7` | `#8ECEAA` | `#28684A` |
| `green/8` | `#5BB98B` | `#2F7C57` |
| `green/9` | `#30A46C` | `#30A46C` |
| `green/10` | `#2B9A66` | `#33B074` |
| `green/11` | `#218358` | `#3DD68C` |
| `green/12` | `#193B2D` | `#B1F1CB` |

### grass

| Token | Light | Dark |
|-------|-------|------|
| `grass/1` | `#FBFEFB` | `#0E1511` |
| `grass/2` | `#F5FBF5` | `#141A15` |
| `grass/3` | `#E9F6E9` | `#1B2A1E` |
| `grass/4` | `#DAF1DB` | `#1D3A24` |
| `grass/5` | `#C9E8CA` | `#25482D` |
| `grass/6` | `#B2DDB5` | `#2D5736` |
| `grass/7` | `#94CE9A` | `#366740` |
| `grass/8` | `#65BA74` | `#3E7949` |
| `grass/9` | `#46A758` | `#46A758` |
| `grass/10` | `#3E9B4F` | `#53B365` |
| `grass/11` | `#2A7E3B` | `#71D083` |
| `grass/12` | `#203C25` | `#C2F0C2` |

### bronze

| Token | Light | Dark |
|-------|-------|------|
| `bronze/1` | `#FDFCFC` | `#141110` |
| `bronze/2` | `#FDF7F5` | `#1C1917` |
| `bronze/3` | `#F6EDEA` | `#262220` |
| `bronze/4` | `#EFE4DF` | `#302A27` |
| `bronze/5` | `#E7D9D3` | `#3B3330` |
| `bronze/6` | `#DFCDC5` | `#493E3A` |
| `bronze/7` | `#D3BCB3` | `#5A4C47` |
| `bronze/8` | `#C2A499` | `#6F5F58` |
| `bronze/9` | `#A18072` | `#A18072` |
| `bronze/10` | `#957468` | `#AE8C7E` |
| `bronze/11` | `#7D5E54` | `#D4B3A5` |
| `bronze/12` | `#43302B` | `#EDE0D9` |

### gold

| Token | Light | Dark |
|-------|-------|------|
| `gold/1` | `#FDFDFC` | `#121211` |
| `gold/2` | `#FAF9F2` | `#1B1A17` |
| `gold/3` | `#F2F0E7` | `#24231F` |
| `gold/4` | `#EAE6DB` | `#2D2B26` |
| `gold/5` | `#E1DCCF` | `#38352E` |
| `gold/6` | `#D8D0BF` | `#444039` |
| `gold/7` | `#CBC0AA` | `#544F46` |
| `gold/8` | `#B9A88D` | `#696256` |
| `gold/9` | `#978365` | `#978365` |
| `gold/10` | `#8C7A5E` | `#A39073` |
| `gold/11` | `#71624B` | `#CBB99F` |
| `gold/12` | `#3B352B` | `#E8E2D9` |

### brown

| Token | Light | Dark |
|-------|-------|------|
| `brown/1` | `#FEFDFC` | `#12110F` |
| `brown/2` | `#FCF9F6` | `#1C1816` |
| `brown/3` | `#F6EEE7` | `#28211D` |
| `brown/4` | `#F0E4D9` | `#322922` |
| `brown/5` | `#EBDACA` | `#3E3128` |
| `brown/6` | `#E4CDB7` | `#4D3C2F` |
| `brown/7` | `#DCBC9F` | `#614A39` |
| `brown/8` | `#CEA37E` | `#7C5F46` |
| `brown/9` | `#AD7F58` | `#AD7F58` |
| `brown/10` | `#A07553` | `#B88C67` |
| `brown/11` | `#815E46` | `#DBB594` |
| `brown/12` | `#3E332E` | `#F2E1CA` |

### orange

| Token | Light | Dark |
|-------|-------|------|
| `orange/1` | `#FEFCFB` | `#17120E` |
| `orange/2` | `#FFF7ED` | `#1E160F` |
| `orange/3` | `#FFEFD6` | `#331E0B` |
| `orange/4` | `#FFDFB5` | `#462100` |
| `orange/5` | `#FFD19A` | `#562800` |
| `orange/6` | `#FFC182` | `#66350C` |
| `orange/7` | `#F5AE73` | `#7E451D` |
| `orange/8` | `#EC9455` | `#A35829` |
| `orange/9` | `#F76B15` | `#F76B15` |
| `orange/10` | `#EF5F00` | `#FF801F` |
| `orange/11` | `#CC4E00` | `#FFA057` |
| `orange/12` | `#582D1D` | `#FFE0C2` |

### amber

| Token | Light | Dark |
|-------|-------|------|
| `amber/1` | `#FEFDFB` | `#16120C` |
| `amber/2` | `#FEFBE9` | `#1D180F` |
| `amber/3` | `#FFF7C2` | `#302008` |
| `amber/4` | `#FFEE9C` | `#3F2700` |
| `amber/5` | `#FBE577` | `#4D3000` |
| `amber/6` | `#F3D673` | `#5C3D05` |
| `amber/7` | `#E9C162` | `#714F19` |
| `amber/8` | `#E2A336` | `#8F6424` |
| `amber/9` | `#FFC53D` | `#FFC53D` |
| `amber/10` | `#FFBA18` | `#FFD60A` |
| `amber/11` | `#AB6400` | `#FFCA16` |
| `amber/12` | `#4F3422` | `#FFE7B3` |

### yellow

| Token | Light | Dark |
|-------|-------|------|
| `yellow/1` | `#FDFDF9` | `#14120B` |
| `yellow/2` | `#FEFCE9` | `#1B180F` |
| `yellow/3` | `#FFFAB8` | `#2D2305` |
| `yellow/4` | `#FFF394` | `#362B00` |
| `yellow/5` | `#FFE770` | `#433500` |
| `yellow/6` | `#F3D768` | `#524202` |
| `yellow/7` | `#E4C767` | `#665417` |
| `yellow/8` | `#D5AE39` | `#836A21` |
| `yellow/9` | `#FFE629` | `#FFE629` |
| `yellow/10` | `#FFDC00` | `#FFFF57` |
| `yellow/11` | `#9E6C00` | `#F5E147` |
| `yellow/12` | `#473B1F` | `#F6EEB4` |

### lime

| Token | Light | Dark |
|-------|-------|------|
| `lime/1` | `#FCFDFA` | `#11130C` |
| `lime/2` | `#F8FAF3` | `#151A10` |
| `lime/3` | `#EEF6D6` | `#1F2917` |
| `lime/4` | `#E2F0BD` | `#29371D` |
| `lime/5` | `#D3E7A6` | `#334423` |
| `lime/6` | `#C2DA91` | `#3D522A` |
| `lime/7` | `#ABC978` | `#496231` |
| `lime/8` | `#8DB654` | `#577538` |
| `lime/9` | `#BDEE63` | `#BDEE63` |
| `lime/10` | `#B0E64C` | `#D4FF70` |
| `lime/11` | `#5C7C2F` | `#BDE56C` |
| `lime/12` | `#37401C` | `#E3F7BA` |

### mint

| Token | Light | Dark |
|-------|-------|------|
| `mint/1` | `#F9FEFD` | `#0E1515` |
| `mint/2` | `#F2FBF9` | `#0F1B1B` |
| `mint/3` | `#DDF9F2` | `#092C2B` |
| `mint/4` | `#C8F4E9` | `#003A38` |
| `mint/5` | `#B3ECDE` | `#004744` |
| `mint/6` | `#9CE0D0` | `#105650` |
| `mint/7` | `#7ECFBD` | `#1E685F` |
| `mint/8` | `#4CBBA5` | `#277F70` |
| `mint/9` | `#86EAD4` | `#86EAD4` |
| `mint/10` | `#7DE0CB` | `#A8F5E5` |
| `mint/11` | `#027864` | `#58D5BA` |
| `mint/12` | `#16433C` | `#C4F5E1` |

### sky

| Token | Light | Dark |
|-------|-------|------|
| `sky/1` | `#F9FEFF` | `#0D141F` |
| `sky/2` | `#F1FAFD` | `#111A27` |
| `sky/3` | `#E1F6FD` | `#112840` |
| `sky/4` | `#D1F0FA` | `#113555` |
| `sky/5` | `#BEE7F5` | `#154467` |
| `sky/6` | `#A9DAED` | `#1B537B` |
| `sky/7` | `#8DCAE3` | `#1F6692` |
| `sky/8` | `#60B3D7` | `#197CAE` |
| `sky/9` | `#7CE2FE` | `#7CE2FE` |
| `sky/10` | `#74DAF8` | `#A8EEFF` |
| `sky/11` | `#00749E` | `#75C7F0` |
| `sky/12` | `#1D3E56` | `#C2F3FF` |

### black

| Token | Light | Dark |
|-------|-------|------|
| `black/1` | `#000000 / 5%` | `#000000 / 5%` |
| `black/2` | `#000000 / 10%` | `#000000 / 10%` |
| `black/3` | `#000000 / 15%` | `#000000 / 15%` |
| `black/4` | `#000000 / 20%` | `#000000 / 20%` |
| `black/5` | `#000000 / 30%` | `#000000 / 30%` |
| `black/6` | `#000000 / 40%` | `#000000 / 40%` |
| `black/7` | `#000000 / 50%` | `#000000 / 50%` |
| `black/8` | `#000000 / 60%` | `#000000 / 60%` |
| `black/9` | `#000000 / 70%` | `#000000 / 70%` |
| `black/10` | `#000000 / 80%` | `#000000 / 80%` |
| `black/11` | `#000000 / 90%` | `#000000 / 90%` |
| `black/12` | `#000000 / 95%` | `#000000 / 95%` |

### white

| Token | Light | Dark |
|-------|-------|------|
| `white/1` | `#FFFFFF / 5%` | `#FFFFFF / 5%` |
| `white/2` | `#FFFFFF / 10%` | `#FFFFFF / 10%` |
| `white/3` | `#FFFFFF / 15%` | `#FFFFFF / 15%` |
| `white/4` | `#FFFFFF / 20%` | `#FFFFFF / 20%` |
| `white/5` | `#FFFFFF / 30%` | `#FFFFFF / 30%` |
| `white/6` | `#FFFFFF / 40%` | `#FFFFFF / 40%` |
| `white/7` | `#FFFFFF / 50%` | `#FFFFFF / 50%` |
| `white/8` | `#FFFFFF / 60%` | `#FFFFFF / 60%` |
| `white/9` | `#FFFFFF / 70%` | `#FFFFFF / 70%` |
| `white/10` | `#FFFFFF / 80%` | `#FFFFFF / 80%` |
| `white/11` | `#FFFFFF / 90%` | `#FFFFFF / 90%` |
| `white/12` | `#FFFFFF / 95%` | `#FFFFFF / 95%` |

---

## 5. Typography — `font` (45 variables)

### Font Family

| Token | Value |
|-------|-------|
| `family/sans` | `Inter` |
| `family/mono` | `Geist Mono` |

### Font Size (px)

| Token | Value |
|-------|-------|
| `size/xs` | `12` |
| `size/sm` | `14` |
| `size/base` | `16` |
| `size/lg` | `18` |
| `size/xl` | `20` |
| `size/2xl` | `24` |
| `size/3xl` | `30` |
| `size/4xl` | `36` |
| `size/5xl` | `48` |
| `size/6xl` | `60` |
| `size/7xl` | `72` |
| `size/8xl` | `96` |
| `size/9xl` | `128` |

### Font Style

| Token | Value |
|-------|-------|
| `style/italic` | `italic` |
| `style/not-italic` | `normal` |

### Font Weight

| Token | Value |
|-------|-------|
| `weight/thin` | `100` |
| `weight/extralight` | `200` |
| `weight/light` | `300` |
| `weight/normal` | `400` |
| `weight/medium` | `500` |
| `weight/semibold` | `600` |
| `weight/bold` | `700` |
| `weight/extrabold` | `800` |
| `weight/black` | `900` |

### Line Height — `leading` (px)

| Token | Value |
|-------|-------|
| `leading/3` | `12` |
| `leading/4` | `16` |
| `leading/5` | `20` |
| `leading/6` | `24` |
| `leading/7` | `28` |
| `leading/8` | `32` |
| `leading/9` | `36` |
| `leading/10` | `40` |
| `leading/12` | `48` |
| `leading/15` | `60` |
| `leading/18` | `72` |
| `leading/24` | `96` |
| `leading/32` | `128` |

### Letter Spacing — `tracking` (px)

| Token | Value |
|-------|-------|
| `tracking/tighter` | `-0.800000011920929` |
| `tracking/tight` | `-0.4000000059604645` |
| `tracking/normal` | `0` |
| `tracking/wide` | `0.4000000059604645` |
| `tracking/wider` | `0.800000011920929` |
| `tracking/widest` | `1.600000023841858` |

---

## 6. Padding — `padding` (245 variables)

Controls inner spacing. Maps to CSS `padding`.

**Prefixes:** `p`, `px`, `py`, `pt`, `pb`, `pr`, `pl`

### Scale steps (shown for `p` prefix)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `p-0` | `0` | `0rem` |
| `p-px` | `1` | `0.0625rem` |
| `p-0,5` | `2` | `0.125rem` |
| `p-1` | `4` | `0.25rem` |
| `p-1,5` | `6` | `0.375rem` |
| `p-2` | `8` | `0.5rem` |
| `p-2,5` | `10` | `0.625rem` |
| `p-3` | `12` | `0.75rem` |
| `p-3,5` | `14` | `0.875rem` |
| `p-4` | `16` | `1rem` |
| `p-5` | `20` | `1.25rem` |
| `p-6` | `24` | `1.5rem` |
| `p-7` | `28` | `1.75rem` |
| `p-8` | `32` | `2rem` |
| `p-9` | `36` | `2.25rem` |
| `p-10` | `40` | `2.5rem` |
| `p-11` | `44` | `2.75rem` |
| `p-12` | `48` | `3rem` |
| `p-14` | `56` | `3.5rem` |
| `p-16` | `64` | `4rem` |
| `p-20` | `80` | `5rem` |
| `p-24` | `96` | `6rem` |
| `p-28` | `112` | `7rem` |
| `p-32` | `128` | `8rem` |
| `p-36` | `144` | `9rem` |
| `p-40` | `160` | `10rem` |
| `p-44` | `176` | `11rem` |
| `p-48` | `192` | `12rem` |
| `p-52` | `208` | `13rem` |
| `p-56` | `224` | `14rem` |
| `p-60` | `240` | `15rem` |
| `p-64` | `256` | `16rem` |
| `p-72` | `288` | `18rem` |
| `p-80` | `320` | `20rem` |
| `p-96` | `384` | `24rem` |

### All 245 token names

**`p`:** `p-0` · `p-px` · `p-0,5` · `p-1` · `p-1,5` · `p-2` · `p-2,5` · `p-3` · `p-3,5` · `p-4` · `p-5` · `p-6` · `p-7` · `p-8` · `p-9` · `p-10` · `p-11` · `p-12` · `p-14` · `p-16` · `p-20` · `p-24` · `p-28` · `p-32` · `p-36` · `p-40` · `p-44` · `p-48` · `p-52` · `p-56` · `p-60` · `p-64` · `p-72` · `p-80` · `p-96`

**`px`:** `px-0` · `px-px` · `px-0,5` · `px-1` · `px-1,5` · `px-2` · `px-2,5` · `px-3` · `px-3,5` · `px-4` · `px-5` · `px-6` · `px-7` · `px-8` · `px-9` · `px-10` · `px-11` · `px-12` · `px-14` · `px-16` · `px-20` · `px-24` · `px-28` · `px-32` · `px-36` · `px-40` · `px-44` · `px-48` · `px-52` · `px-56` · `px-60` · `px-64` · `px-72` · `px-80` · `px-96`

**`py`:** `py-0` · `py-px` · `py-0,5` · `py-1` · `py-1,5` · `py-2` · `py-2,5` · `py-3` · `py-3,5` · `py-4` · `py-5` · `py-6` · `py-7` · `py-8` · `py-9` · `py-10` · `py-11` · `py-12` · `py-14` · `py-16` · `py-20` · `py-24` · `py-28` · `py-32` · `py-36` · `py-40` · `py-44` · `py-48` · `py-52` · `py-56` · `py-60` · `py-64` · `py-72` · `py-80` · `py-96`

**`pt`:** `pt-0` · `pt-px` · `pt-0,5` · `pt-1` · `pt-1,5` · `pt-2` · `pt-2,5` · `pt-3` · `pt-3,5` · `pt-4` · `pt-5` · `pt-6` · `pt-7` · `pt-8` · `pt-9` · `pt-10` · `pt-11` · `pt-12` · `pt-14` · `pt-16` · `pt-20` · `pt-24` · `pt-28` · `pt-32` · `pt-36` · `pt-40` · `pt-44` · `pt-48` · `pt-52` · `pt-56` · `pt-60` · `pt-64` · `pt-72` · `pt-80` · `pt-96`

**`pb`:** `pb-0` · `pb-px` · `pb-0,5` · `pb-1` · `pb-1,5` · `pb-2` · `pb-2,5` · `pb-3` · `pb-3,5` · `pb-4` · `pb-5` · `pb-6` · `pb-7` · `pb-8` · `pb-9` · `pb-10` · `pb-11` · `pb-12` · `pb-14` · `pb-16` · `pb-20` · `pb-24` · `pb-28` · `pb-32` · `pb-36` · `pb-40` · `pb-44` · `pb-48` · `pb-52` · `pb-56` · `pb-60` · `pb-64` · `pb-72` · `pb-80` · `pb-96`

**`pr`:** `pr-0` · `pr-px` · `pr-0,5` · `pr-1` · `pr-1,5` · `pr-2` · `pr-2,5` · `pr-3` · `pr-3,5` · `pr-4` · `pr-5` · `pr-6` · `pr-7` · `pr-8` · `pr-9` · `pr-10` · `pr-11` · `pr-12` · `pr-14` · `pr-16` · `pr-20` · `pr-24` · `pr-28` · `pr-32` · `pr-36` · `pr-40` · `pr-44` · `pr-48` · `pr-52` · `pr-56` · `pr-60` · `pr-64` · `pr-72` · `pr-80` · `pr-96`

**`pl`:** `pl-0` · `pl-px` · `pl-0,5` · `pl-1` · `pl-1,15` · `pl-2` · `pl-2,5` · `pl-3` · `pl-3,5` · `pl-4` · `pl-5` · `pl-6` · `pl-7` · `pl-8` · `pl-9` · `pl-10` · `pl-11` · `pl-12` · `pl-14` · `pl-16` · `pl-20` · `pl-24` · `pl-28` · `pl-32` · `pl-36` · `pl-40` · `pl-44` · `pl-48` · `pl-52` · `pl-56` · `pl-60` · `pl-64` · `pl-72` · `pl-80` · `pl-96`

---

## 7. Margin — `margin` (245 variables)

Controls outer spacing. Maps to CSS `margin`.

**Prefixes:** `m`, `mx`, `my`, `mt`, `mb`, `mr`, `ml`

### Scale steps (shown for `m` prefix)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `m-0` | `0` | `0rem` |
| `m-px` | `1` | `0.0625rem` |
| `m-0,5` | `2` | `0.125rem` |
| `m-1` | `4` | `0.25rem` |
| `m-1,5` | `6` | `0.375rem` |
| `m-2` | `8` | `0.5rem` |
| `m-2,5` | `10` | `0.625rem` |
| `m-3` | `12` | `0.75rem` |
| `m-3,5` | `14` | `0.875rem` |
| `m-4` | `16` | `1rem` |
| `m-5` | `20` | `1.25rem` |
| `m-6` | `24` | `1.5rem` |
| `m-7` | `28` | `1.75rem` |
| `m-8` | `32` | `2rem` |
| `m-9` | `36` | `2.25rem` |
| `m-10` | `40` | `2.5rem` |
| `m-11` | `44` | `2.75rem` |
| `m-12` | `48` | `3rem` |
| `m-14` | `56` | `3.5rem` |
| `m-16` | `64` | `4rem` |
| `m-20` | `80` | `5rem` |
| `m-24` | `96` | `6rem` |
| `m-28` | `112` | `7rem` |
| `m-32` | `128` | `8rem` |
| `m-36` | `144` | `9rem` |
| `m-40` | `160` | `10rem` |
| `m-44` | `176` | `11rem` |
| `m-48` | `192` | `12rem` |
| `m-52` | `208` | `13rem` |
| `m-56` | `224` | `14rem` |
| `m-60` | `240` | `15rem` |
| `m-64` | `256` | `16rem` |
| `m-72` | `288` | `18rem` |
| `m-80` | `320` | `20rem` |
| `m-96` | `384` | `24rem` |

### All 245 token names

**`m`:** `m-0` · `m-px` · `m-0,5` · `m-1` · `m-1,5` · `m-2` · `m-2,5` · `m-3` · `m-3,5` · `m-4` · `m-5` · `m-6` · `m-7` · `m-8` · `m-9` · `m-10` · `m-11` · `m-12` · `m-14` · `m-16` · `m-20` · `m-24` · `m-28` · `m-32` · `m-36` · `m-40` · `m-44` · `m-48` · `m-52` · `m-56` · `m-60` · `m-64` · `m-72` · `m-80` · `m-96`

**`mx`:** `mx-0` · `mx-px` · `mx-0,5` · `mx-1` · `mx-1,5` · `mx-2` · `mx-2,5` · `mx-3` · `mx-3,5` · `mx-4` · `mx-5` · `mx-6` · `mx-7` · `mx-8` · `mx-9` · `mx-10` · `mx-11` · `mx-12` · `mx-14` · `mx-16` · `mx-20` · `mx-24` · `mx-28` · `mx-32` · `mx-36` · `mx-40` · `mx-44` · `mx-48` · `mx-52` · `mx-56` · `mx-60` · `mx-64` · `mx-72` · `mx-80` · `mx-96`

**`my`:** `my-0` · `my-px` · `my-0,5` · `my-1` · `my-1,5` · `my-2` · `my-2,5` · `my-3` · `my-3,5` · `my-4` · `my-5` · `my-6` · `my-7` · `my-8` · `my-9` · `my-10` · `my-11` · `my-12` · `my-14` · `my-16` · `my-20` · `my-24` · `my-28` · `my-32` · `my-36` · `my-40` · `my-44` · `my-48` · `my-52` · `my-56` · `my-60` · `my-64` · `my-72` · `my-80` · `my-96`

**`mt`:** `mt-0` · `mt-px` · `mt-0,5` · `mt-1` · `mt-1,5` · `mt-2` · `mt-2,5` · `mt-3` · `mt-3,5` · `mt-4` · `mt-5` · `mt-6` · `mt-7` · `mt-8` · `mt-9` · `mt-10` · `mt-11` · `mt-12` · `mt-14` · `mt-16` · `mt-20` · `mt-24` · `mt-28` · `mt-32` · `mt-36` · `mt-40` · `mt-44` · `mt-48` · `mt-52` · `mt-56` · `mt-60` · `mt-64` · `mt-72` · `mt-80` · `mt-96`

**`mb`:** `mb-0` · `mb-px` · `mb-0,5` · `mb-1` · `mb-1,5` · `mb-2` · `mb-2,5` · `mb-3` · `mb-3,5` · `mb-4` · `mb-5` · `mb-6` · `mb-7` · `mb-8` · `mb-9` · `mb-10` · `mb-11` · `mb-12` · `mb-14` · `mb-16` · `mb-20` · `mb-24` · `mb-28` · `mb-32` · `mb-36` · `mb-40` · `mb-44` · `mb-48` · `mb-52` · `mb-56` · `mb-60` · `mb-64` · `mb-72` · `mb-80` · `mb-96`

**`mr`:** `mr-0` · `mr-px` · `mr-0,5` · `mr-1` · `mr-1,5` · `mr-2` · `mr-2,5` · `mr-3` · `mr-3,5` · `mr-4` · `mr-5` · `mr-6` · `mr-7` · `mr-8` · `mr-9` · `mr-10` · `mr-11` · `mr-12` · `mr-14` · `mr-16` · `mr-20` · `mr-24` · `mr-28` · `mr-32` · `mr-36` · `mr-40` · `mr-44` · `mr-48` · `mr-52` · `mr-56` · `mr-60` · `mr-64` · `mr-72` · `mr-80` · `mr-96`

**`ml`:** `ml-0` · `ml-px` · `ml-0,5` · `ml-1` · `ml-1,5` · `ml-2` · `ml-2,5` · `ml-3` · `ml-3,5` · `ml-4` · `ml-5` · `ml-6` · `ml-7` · `ml-8` · `ml-9` · `ml-10` · `ml-11` · `ml-12` · `ml-14` · `ml-16` · `ml-20` · `ml-24` · `ml-28` · `ml-32` · `ml-36` · `ml-40` · `ml-44` · `ml-48` · `ml-52` · `ml-56` · `ml-60` · `ml-64` · `ml-72` · `ml-80` · `ml-96`

---

## 8. Gap — `gap` (102 variables)

Controls flex/grid child spacing. Maps to CSS `gap`.

**Prefixes:** `gap`, `gap-x`, `gap-y`

### Scale steps (shown for `gap` prefix)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `gap-0` | `0` | `0rem` |
| `gap-0,5` | `2` | `0.125rem` |
| `gap-1` | `4` | `0.25rem` |
| `gap-1,5` | `6` | `0.375rem` |
| `gap-2` | `8` | `0.5rem` |
| `gap-2,5` | `10` | `0.625rem` |
| `gap-3` | `12` | `0.75rem` |
| `gap-3,5` | `14` | `0.875rem` |
| `gap-4` | `16` | `1rem` |
| `gap-5` | `20` | `1.25rem` |
| `gap-6` | `24` | `1.5rem` |
| `gap-7` | `28` | `1.75rem` |
| `gap-8` | `32` | `2rem` |
| `gap-9` | `36` | `2.25rem` |
| `gap-10` | `40` | `2.5rem` |
| `gap-11` | `44` | `2.75rem` |
| `gap-12` | `48` | `3rem` |
| `gap-14` | `56` | `3.5rem` |
| `gap-16` | `64` | `4rem` |
| `gap-20` | `80` | `5rem` |
| `gap-24` | `96` | `6rem` |
| `gap-28` | `112` | `7rem` |
| `gap-32` | `128` | `8rem` |
| `gap-36` | `144` | `9rem` |
| `gap-40` | `160` | `10rem` |
| `gap-44` | `176` | `11rem` |
| `gap-48` | `192` | `12rem` |
| `gap-52` | `208` | `13rem` |
| `gap-56` | `224` | `14rem` |
| `gap-60` | `240` | `15rem` |
| `gap-64` | `256` | `16rem` |
| `gap-72` | `288` | `18rem` |
| `gap-80` | `320` | `20rem` |
| `gap-96` | `384` | `24rem` |

### All 102 token names

**`gap`:** `gap-0` · `gap-0,5` · `gap-1` · `gap-1,5` · `gap-2` · `gap-2,5` · `gap-3` · `gap-3,5` · `gap-4` · `gap-5` · `gap-6` · `gap-7` · `gap-8` · `gap-9` · `gap-10` · `gap-11` · `gap-12` · `gap-14` · `gap-16` · `gap-20` · `gap-24` · `gap-28` · `gap-32` · `gap-36` · `gap-40` · `gap-44` · `gap-48` · `gap-52` · `gap-56` · `gap-60` · `gap-64` · `gap-72` · `gap-80` · `gap-96`

**`gap-x`:** `gap-x-0` · `gap-x-0,5` · `gap-x-1` · `gap-x-1,5` · `gap-x-2,5` · `gap-x-3` · `gap-x-3,5` · `gap-x-4` · `gap-x-5` · `gap-x-6` · `gap-x-7` · `gap-x-8` · `gap-x-9` · `gap-x-10` · `gap-x-11` · `gap-x-12` · `gap-x-14` · `gap-x-16` · `gap-x-20` · `gap-x-24` · `gap-x-28` · `gap-x-32` · `gap-x-36` · `gap-x-40` · `gap-x-44` · `gap-x-48` · `gap-x-52` · `gap-x-56` · `gap-x-60` · `gap-x-64` · `gap-x-72` · `gap-x-80` · `gap-x-96` · `gap-x-2 2`

**`gap-y`:** `gap-y-0` · `gap-y-0,5` · `gap-y-1` · `gap-y-1,5` · `gap-y-2` · `gap-y-2,5` · `gap-y-3` · `gap-y-3,5` · `gap-y-4` · `gap-y-5` · `gap-y-6` · `gap-y-7` · `gap-y-8` · `gap-y-9` · `gap-y-10` · `gap-y-11` · `gap-y-12` · `gap-y-14` · `gap-y-16` · `gap-y-20` · `gap-y-24` · `gap-y-28` · `gap-y-32` · `gap-y-36` · `gap-y-40` · `gap-y-44` · `gap-y-48` · `gap-y-52` · `gap-y-56` · `gap-y-60` · `gap-y-64` · `gap-y-72` · `gap-y-80` · `gap-y-96`

---

## 9. Space — `space` (68 variables)

Controls spacing between siblings via margin. Maps to `space-x` / `space-y`.

**Prefixes:** `space-x`, `space-y`

### Scale steps (shown for `space-x` prefix)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `space-x-0` | `0` | `0rem` |
| `space-x-0,5` | `2` | `0.125rem` |
| `space-x-1` | `4` | `0.25rem` |
| `space-x-1,5` | `6` | `0.375rem` |
| `space-x-2` | `8` | `0.5rem` |
| `space-x-2,5` | `10` | `0.625rem` |
| `space-x-3` | `12` | `0.75rem` |
| `space-x-3,5` | `14` | `0.875rem` |
| `space-x-4` | `16` | `1rem` |
| `space-x-5` | `20` | `1.25rem` |
| `space-x-6` | `24` | `1.5rem` |
| `space-x-7` | `28` | `1.75rem` |
| `space-x-8` | `32` | `2rem` |
| `space-x-9` | `36` | `2.25rem` |
| `space-x-10` | `40` | `2.5rem` |
| `space-x-11` | `44` | `2.75rem` |
| `space-x-12` | `48` | `3rem` |
| `space-x-14` | `56` | `3.5rem` |
| `space-x-16` | `64` | `4rem` |
| `space-x-20` | `80` | `5rem` |
| `space-x-24` | `96` | `6rem` |
| `space-x-28` | `112` | `7rem` |
| `space-x-32` | `128` | `8rem` |
| `space-x-36` | `144` | `9rem` |
| `space-x-40` | `160` | `10rem` |
| `space-x-44` | `176` | `11rem` |
| `space-x-48` | `192` | `12rem` |
| `space-x-52` | `208` | `13rem` |
| `space-x-56` | `224` | `14rem` |
| `space-x-60` | `240` | `15rem` |
| `space-x-64` | `256` | `16rem` |
| `space-x-72` | `288` | `18rem` |
| `space-x-80` | `320` | `20rem` |
| `space-x-96` | `384` | `24rem` |

### All 68 token names

**`space-x`:** `space-x-0` · `space-x-0,5` · `space-x-1` · `space-x-1,5` · `space-x-2` · `space-x-2,5` · `space-x-3` · `space-x-3,5` · `space-x-4` · `space-x-5` · `space-x-6` · `space-x-7` · `space-x-8` · `space-x-9` · `space-x-10` · `space-x-11` · `space-x-12` · `space-x-14` · `space-x-16` · `space-x-20` · `space-x-24` · `space-x-28` · `space-x-32` · `space-x-36` · `space-x-40` · `space-x-44` · `space-x-48` · `space-x-52` · `space-x-56` · `space-x-60` · `space-x-64` · `space-x-72` · `space-x-80` · `space-x-96`

**`space-y`:** `space-y-0` · `space-y-0,5` · `space-y-1` · `space-y-1,5` · `space-y-2` · `space-y-2,5` · `space-y-3` · `space-y-3,5` · `space-y-4` · `space-y-5` · `space-y-6` · `space-y-7` · `space-y-8` · `space-y-9` · `space-y-10` · `space-y-11` · `space-y-12` · `space-y-14` · `space-y-16` · `space-y-20` · `space-y-24` · `space-y-28` · `space-y-32` · `space-y-36` · `space-y-40` · `space-y-44` · `space-y-48` · `space-y-52` · `space-y-56` · `space-y-60` · `space-y-64` · `space-y-72` · `space-y-80` · `space-y-96`

---

## 10a. Height — `height` (24 variables)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `h-0` | `0` | `—rem` |
| `h-px` | `1` | `0.0625rem` |
| `h-0,5` | `2` | `0.125rem` |
| `h-1` | `4` | `0.25rem` |
| `h-2` | `8` | `0.5rem` |
| `h-2,5` | `10` | `0.625rem` |
| `h-3` | `12` | `0.75rem` |
| `h-3,5` | `14` | `0.875rem` |
| `h-4` | `16` | `1rem` |
| `h-5` | `20` | `1.25rem` |
| `h-6` | `24` | `1.5rem` |
| `h-7` | `28` | `1.75rem` |
| `h-8` | `32` | `2rem` |
| `h-9` | `36` | `2.25rem` |
| `h-10` | `40` | `2.5rem` |
| `h-12` | `48` | `3rem` |
| `h-14` | `56` | `3.5rem` |
| `h-16` | `64` | `4rem` |
| `h-18` | `72` | `4.5rem` |
| `h-20` | `80` | `5rem` |
| `h-24` | `96` | `6rem` |
| `h-48` | `192` | `12rem` |
| `h-72` | `288` | `18rem` |
| `h-96` | `384` | `24rem` |

---

## 10b. Max Height — `max-height` (35 variables)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `max-h-0` | `0` | `—rem` |
| `max-h-px` | `1` | `0.0625rem` |
| `max-h-0,5` | `2` | `0.125rem` |
| `max-h-1` | `4` | `0.25rem` |
| `max-h-1,5` | `6` | `0.375rem` |
| `max-h-2` | `8` | `0.5rem` |
| `max-h-2,5` | `10` | `0.625rem` |
| `max-h-3` | `12` | `0.75rem` |
| `max-h-3,5` | `14` | `0.875rem` |
| `max-h-4` | `16` | `1rem` |
| `max-h-5` | `20` | `1.25rem` |
| `max-h-6` | `24` | `1.5rem` |
| `max-h-7` | `28` | `1.75rem` |
| `max-h-8` | `32` | `2rem` |
| `max-h-9` | `36` | `2.25rem` |
| `max-h-10` | `40` | `2.5rem` |
| `max-h-11` | `44` | `2.75rem` |
| `max-h-12` | `48` | `3rem` |
| `max-h-14` | `56` | `3.5rem` |
| `max-h-16` | `64` | `4rem` |
| `max-h-20` | `80` | `5rem` |
| `max-h-24` | `96` | `6rem` |
| `max-h-28` | `112` | `7rem` |
| `max-h-32` | `128` | `8rem` |
| `max-h-36` | `144` | `9rem` |
| `max-h-40` | `160` | `10rem` |
| `max-h-44` | `176` | `11rem` |
| `max-h-48` | `192` | `12rem` |
| `max-h-52` | `208` | `13rem` |
| `max-h-56` | `224` | `14rem` |
| `max-h-60` | `240` | `15rem` |
| `max-h-64` | `256` | `16rem` |
| `max-h-72` | `288` | `18rem` |
| `max-h-80` | `320` | `20rem` |
| `max-h-96` | `384` | `24rem` |

---

## 10c. Max Width — `max-width` (51 variables)

| Token | Value (px) | rem |
|-------|-----------|-----|
| `max-w-0` | `0` | `—rem` |
| `max-w-px` | `1` | `0.0625rem` |
| `max-w-0,5` | `2` | `0.125rem` |
| `max-w-1` | `4` | `0.25rem` |
| `max-w-1,5` | `6` | `0.375rem` |
| `max-w-2` | `8` | `0.5rem` |
| `max-w-2,5` | `10` | `0.625rem` |
| `max-w-3` | `12` | `0.75rem` |
| `max-w-4` | `16` | `1rem` |
| `max-w-5` | `20` | `1.25rem` |
| `max-w-6` | `24` | `1.5rem` |
| `max-w-7` | `28` | `1.75rem` |
| `max-w-8` | `32` | `2rem` |
| `max-w-9` | `36` | `2.25rem` |
| `max-w-10` | `40` | `2.5rem` |
| `max-w-11` | `44` | `2.75rem` |
| `max-w-12` | `48` | `3rem` |
| `max-w-14` | `56` | `3.5rem` |
| `max-w-16` | `64` | `4rem` |
| `max-w-20` | `80` | `5rem` |
| `max-w-24` | `96` | `6rem` |
| `max-w-28` | `112` | `7rem` |
| `max-w-32` | `128` | `8rem` |
| `max-w-36` | `144` | `9rem` |
| `max-w-40` | `160` | `10rem` |
| `max-w-44` | `176` | `11rem` |
| `max-w-48` | `192` | `12rem` |
| `max-w-52` | `208` | `13rem` |
| `max-w-56` | `224` | `14rem` |
| `max-w-60` | `240` | `15rem` |
| `max-w-64` | `256` | `16rem` |
| `max-w-72` | `288` | `18rem` |
| `max-w-80` | `320` | `20rem` |
| `max-w-96` | `384` | `24rem` |
| `max-w-xs` | `320` | `—rem` |
| `max-w-sm` | `384` | `—rem` |
| `max-w-md` | `448` | `—rem` |
| `max-w-lg` | `512` | `—rem` |
| `max-w-xl` | `576` | `—rem` |
| `max-w-2xl` | `672` | `42rem` |
| `max-w-3xl` | `768` | `48rem` |
| `max-w-4xl` | `896` | `56rem` |
| `max-w-5xl` | `1024` | `64rem` |
| `max-w-6xl` | `1152` | `72rem` |
| `max-w-7xl` | `1280` | `80rem` |
| `max-w-none` | `0` | `—rem` |
| `max-w-screen-sm` | `640` | `—rem` |
| `max-w-screen-md` | `768` | `—rem` |
| `max-w-screen-lg` | `1024` | `—rem` |
| `max-w-screen-xl` | `1280` | `—rem` |
| `max-w-screen-2xl` | `1536` | `96rem` |

---

## 11. Border Radius — `border-radius` (150 variables)

10 size steps × 15 side variants = 150 variables.  
**Sides:** base · `t` · `b` · `l` · `r` · `tl` · `tr` · `bl` · `br` · `s` · `e` · `ss` · `se` · `es` · `ee`

### Base size scale

| Token | Value (px) |
|-------|-----------|
| `rounded-xs` | `2` |
| `rounded-sm` | `4` |
| `rounded-md` | `6` |
| `rounded-lg` | `8` |
| `rounded-xl` | `12` |
| `rounded-2xl` | `16` |
| `rounded-3xl` | `24` |
| `rounded-4xl` | `32` |
| `rounded-none` | `0` |
| `rounded-full` | `9999` |

### All 150 token names (by side variant)

**`rounded`:** `rounded-xs` · `rounded-sm` · `rounded-md` · `rounded-lg` · `rounded-xl` · `rounded-2xl` · `rounded-3xl` · `rounded-4xl` · `rounded-none` · `rounded-full` · `rounded-1-xs` · `rounded-1-sm` · `rounded-1-md` · `rounded-1-lg` · `rounded-1-xl` · `rounded-1-2xl` · `rounded-1-3xl` · `rounded-1-4xl` · `rounded-1-none` · `rounded-1-full`

**`rounded-t`:** `rounded-t-xs` · `rounded-t-sm` · `rounded-t-md` · `rounded-t-lg` · `rounded-t-xl` · `rounded-t-2xl` · `rounded-t-3xl` · `rounded-t-4xl` · `rounded-t-none` · `rounded-t-full`

**`rounded-b`:** `rounded-b-xs` · `rounded-b-sm` · `rounded-b-md` · `rounded-b-lg` · `rounded-b-xl` · `rounded-b-2xl` · `rounded-b-3xl` · `rounded-b-4xl` · `rounded-b-none` · `rounded-b-full`

**`rounded-r`:** `rounded-r-xs` · `rounded-r-sm` · `rounded-r-md` · `rounded-r-lg` · `rounded-r-xl` · `rounded-r-2xl` · `rounded-r-3xl` · `rounded-r-4xl` · `rounded-r-none` · `rounded-r-full`

**`rounded-tl`:** `rounded-tl-xs` · `rounded-tl-sm` · `rounded-tl-md` · `rounded-tl-lg` · `rounded-tl-xl` · `rounded-tl-2xl` · `rounded-tl-3xl` · `rounded-tl-4xl` · `rounded-tl-none` · `rounded-tl-full`

**`rounded-tr`:** `rounded-tr-xs` · `rounded-tr-sm` · `rounded-tr-md` · `rounded-tr-lg` · `rounded-tr-xl` · `rounded-tr-2xl` · `rounded-tr-3xl` · `rounded-tr-4xl` · `rounded-tr-none` · `rounded-tr-full`

**`rounded-bl`:** `rounded-bl-xs` · `rounded-bl-sm` · `rounded-bl-md` · `rounded-bl-lg` · `rounded-bl-xl` · `rounded-bl-2xl` · `rounded-bl-3xl` · `rounded-bl-4xl` · `rounded-bl-none` · `rounded-bl-full`

**`rounded-br`:** `rounded-br-xs` · `rounded-br-sm` · `rounded-br-md` · `rounded-br-lg` · `rounded-br-xl` · `rounded-br-2xl` · `rounded-br-3xl` · `rounded-br-4xl` · `rounded-br-none` · `rounded-br-full`

**`rounded-s`:** `rounded-s-xs` · `rounded-s-sm` · `rounded-s-md` · `rounded-s-lg` · `rounded-s-xl` · `rounded-s-2xl` · `rounded-s-3xl` · `rounded-s-4xl` · `rounded-s-none` · `rounded-s-full`

**`rounded-e`:** `rounded-e-xs` · `rounded-e-sm` · `rounded-e-md` · `rounded-e-lg` · `rounded-e-xl` · `rounded-e-2xl` · `rounded-e-3xl` · `rounded-e-4xl` · `rounded-e-none` · `rounded-e-full`

**`rounded-ss`:** `rounded-ss-xs` · `rounded-ss-sm` · `rounded-ss-md` · `rounded-ss-lg` · `rounded-ss-xl` · `rounded-ss-2xl` · `rounded-ss-3xl` · `rounded-ss-4xl` · `rounded-ss-none` · `rounded-ss-full`

**`rounded-se`:** `rounded-se-xs` · `rounded-se-sm` · `rounded-se-md` · `rounded-se-lg` · `rounded-se-xl` · `rounded-se-2xl` · `rounded-se-3xl` · `rounded-se-4xl` · `rounded-se-none` · `rounded-se-full`

**`rounded-es`:** `rounded-es-xs` · `rounded-es-sm` · `rounded-es-md` · `rounded-es-lg` · `rounded-es-xl` · `rounded-es-2xl` · `rounded-es-3xl` · `rounded-es-4xl` · `rounded-es-none` · `rounded-es-full`

**`rounded-ee`:** `rounded-ee-xs` · `rounded-ee-sm` · `rounded-ee-md` · `rounded-ee-lg` · `rounded-ee-xl` · `rounded-ee-2xl` · `rounded-ee-3xl` · `rounded-ee-4xl` · `rounded-ee-none` · `rounded-ee-full`

---

## 12. Border Width — `border-width` (45 variables)

5 thickness steps × 9 side variants = 45 variables.

| Token | Value (px) |
|-------|-----------|
| `border-0` | `0` |
| `border` | `1` |
| `border-2` | `2` |
| `border-4` | `4` |
| `border-8` | `8` |
| `border-x-0` | `0` |
| `border-x` | `1` |
| `border-x-2` | `2` |
| `border-x-4` | `4` |
| `border-x-8` | `8` |
| `border-y-0` | `0` |
| `border-y` | `1` |
| `border-y-2` | `2` |
| `border-y-4` | `4` |
| `border-y-8` | `8` |
| `border-s-0` | `0` |
| `border-s` | `1` |
| `border-s-2` | `2` |
| `border-s-4` | `4` |
| `border-s-8` | `8` |
| `border-e-0` | `0` |
| `border-e` | `1` |
| `border-e-2` | `2` |
| `border-e-4` | `4` |
| `border-e-8` | `8` |
| `border-t-0` | `0` |
| `border-t` | `1` |
| `border-t-2` | `2` |
| `border-t-4` | `4` |
| `border-t-8` | `8` |
| `border-r-0` | `0` |
| `border-r` | `1` |
| `border-r-2` | `2` |
| `border-r-4` | `4` |
| `border-r-8` | `8` |
| `border-b-0` | `0` |
| `border-b` | `1` |
| `border-b-2` | `2` |
| `border-b-4` | `4` |
| `border-b-8` | `8` |
| `border-l-0` | `0` |
| `border-l` | `1` |
| `border-l-2` | `2` |
| `border-l-4` | `4` |
| `border-l-8` | `8` |

---

## 13. Stroke Width — `stroke-width` (11 variables)

| Token | Value (px) |
|-------|-----------|
| `stroke-0,5` | `0.5` |
| `stroke-0,75` | `0.75` |
| `stroke-1` | `1` |
| `stroke-1,25` | `1.25` |
| `stroke-1,5` | `1.5` |
| `stroke-1,75` | `1.75` |
| `stroke-2` | `2` |
| `stroke-2,25` | `2.25` |
| `stroke-2,5` | `2.5` |
| `stroke-2,75` | `2.75` |
| `stroke-3` | `3` |

---

## 14. Opacity — `opacity` (21 variables)

| Token | Value (%) |
|-------|-----------|
| `opacity-0` | `0%` |
| `opacity-5` | `5%` |
| `opacity-10` | `10%` |
| `opacity-15` | `15%` |
| `opacity-20` | `20%` |
| `opacity-25` | `25%` |
| `opacity-30` | `30%` |
| `opacity-35` | `35%` |
| `opacity-40` | `40%` |
| `opacity-45` | `45%` |
| `opacity-50` | `50%` |
| `opacity-55` | `55%` |
| `opacity-60` | `60%` |
| `opacity-65` | `65%` |
| `opacity-70` | `70%` |
| `opacity-75` | `75%` |
| `opacity-80` | `80%` |
| `opacity-85` | `85%` |
| `opacity-90` | `90%` |
| `opacity-95` | `95%` |
| `opacity-100` | `100%` |

---

## Variable Count Verification

| Collection | Count |
|------------|-------|
| `tw/colors` | 244 |
| `padding` | 245 |
| `space` | 68 |
| `border-radius` | 150 |
| `margin` | 245 |
| `tokens` | 87 |
| `shadcn/ui` | 35 |
| `border-width` | 45 |
| `gap` | 102 |
| `stroke-width` | 11 |
| `font` | 45 |
| `height` | 24 |
| `max-height` | 35 |
| `max-width` | 51 |
| `rdx/colors` | 396 |
| `opacity` | 21 |
| **Total** | **1804** |
