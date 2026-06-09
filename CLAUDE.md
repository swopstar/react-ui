# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # Storybook dev server on :6006
npm run typecheck      # Type-check only (tsconfig.build.json) — primary correctness gate
npm run build          # Type-check then build library to dist/
npm run build-storybook  # Build static Storybook to storybook-static/
```

There is no test runner. Type-checking is the only automated correctness gate — run it before every commit.

Adding a shadcn component:
```bash
npx shadcn@latest add <component>
```

## Architecture

This is a Vite library-mode build (`formats: ['es', 'cjs']`) that produces `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`, and `dist/style.css`. Consumers import components from `@swopstar/react-ui` and styles from `@swopstar/react-ui/style.css`. Published to GitHub Packages (`npm.pkg.github.com`).

### Tailwind v4

No `tailwind.config.js`. Configuration lives entirely in `src/styles/globals.css`:
- `@theme inline` block bridges CSS custom properties (`--primary`, `--edge`, etc.) to Tailwind utilities (`bg-primary`, `border-edge`, etc.)
- `:root` block holds fallback token values so components render before `ThemeProvider` hydrates

**Critical — bare `border`**: Tailwind v4 resolves `border` without a colour class to `border-color: currentColor` (black). Always pair it with an explicit colour: `border border-border`, `border border-edge`, etc. This is a common source of black borders appearing on components.

**Critical — arbitrary CSS**: Tailwind v4 generates `border-color: var(--foo)` for `border-foo` utilities (raw token name). Arbitrary CSS in class strings must use the same raw name — `hover:[outline:1px_solid_var(--edge)]` — not the `--color-*` bridge name.

### Theme system

`src/lib/theme/` is the colour engine:

- **`types.ts`** — `ThemeTokens` interface (single source of truth for all token names), `ThemeConfig`, `ResolvedTheme`
- **`generate-palette.ts`** — `generateTheme(seedColor, overrides?, radius?)` returns `{ light, dark }` token maps. Fixed semantic colours (`destructive`, `positive`, `warning`, `confirm` and their `-foreground`/`-edge` variants) are plain string constants (`SEMANTIC_LIGHT`, `SEMANTIC_DARK`) and do not vary with the seed. Only `primary`, `surface`/`edge` tinted tokens, charts, and neutrals are derived from the seed via `culori`.
- **`ThemeProvider.tsx`** — wraps children in a `<div>` with all tokens as inline CSS vars + adds `class="dark"` when dark. Scopes dark mode to `.dark *` (not `:root`), so it can be nested. Portals (Radix Dialog, Popover, etc.) escape the wrapper; pass a `container` ref inside the provider div to fix that per-component.

`useTheme()` from `src/hooks/use-theme.ts` reads `ResolvedTheme` from context.

### Colour conventions

All colours in oklch. The palette is neutral-first: surfaces (background, card, secondary, muted, border) carry zero chroma. Seed chroma appears only on:
- `primary` / `primary-edge` / `primary-foreground`
- `surface` / `edge` / `edge-active` (low-chroma tinted chrome for interactive components)
- `ring`, sidebar-primary, charts

WCAG AA (4.5:1) is enforced by capping `primaryL` at 0.50 and using fixed dark fills for semantic colours. All filled buttons use white foreground.

### Design language rules

These rules apply across all components:

**Border = interactive.** Only components that accept user input or respond to clicks carry a border. Non-interactive display components (Alert, Card, Dialog content, AlertDialog content) have no border. When a Radix primitive ships with a bare `border` class by default, remove it.

**Typography for UI labels and titles.** Use `style={{ fontVariationSettings: "'wght' 800, 'YTLC' 540" }}` — not `font-semibold` or `font-bold`. The base body weight is 500 (set on `body` in `globals.css`), so Tailwind's `font-semibold` (600) doesn't provide enough contrast. Never use `tracking-tight` on UI text.

**Description / body text.** Remove `text-muted-foreground` from description sub-components (`AlertDescription`, `CardDescription`, `DialogDescription`, etc.) — they should inherit `text-foreground`.

**Elevated surfaces.** Cards and similar lifted surfaces use `bg-background-elevated` (`oklch(0.94 0 0)` light / `oklch(0.22 0 0)` dark), not `bg-card`.

**Menu labels.** Use `text-xs text-muted-foreground` + `fontVariationSettings: "'wght' 800, 'YTLC' 540"` to distinguish section labels from selectable items.

**No CSS transitions.** All interactive state changes (hover, active, focus) are instant — no `transition-*` classes.

### Button variants

Defined in `src/components/ui/button.tsx` via CVA. Current variants: `default`, `primary`, `destructive`, `positive`, `warning`, `confirm`, `link`. No `outline` or `ghost`.

Hover/active pattern: 1px border at rest; `hover:[outline:1px_solid_var(--token)] hover:outline-offset-0` adds a flush outline on hover, making the border visually 2px. Active fills with the edge colour.

The base class carries no `border-color`; each variant owns its border colour entirely (avoids `tailwind-merge` failing to resolve conflicts between custom token utilities).

### Storybook

`.storybook/preview.tsx` wraps every story in `ThemeProvider`. Toolbar provides **Brand** (Master / Swopcart `#EE5300` / Swoptape `#DE00EE`) and **Mode** (Light / Dark / System) globals. Stories live in `src/stories/` and are excluded from the library build.

Story categories: **Primitives**, **Forms**, **Components**, **Navigation**, **Shell**.

Story parameters:
- `padded: false` — disables the default `1.5rem` wrapper padding (use for full-bleed stories)
- `fullHeight: true` — sets `minHeight: 100vh` on the wrapper (Scaffold and Sidebar only)

Story authoring pattern when controls are needed:
```tsx
type FooStoryArgs = ComponentProps<typeof Foo> & { customProp?: string }
const meta = { ... } satisfies Meta<FooStoryArgs>
// render: ({ variant, customProp }: FooStoryArgs) => ...
```

The `vite-plugin-dts` plugin is stripped from Storybook builds via `viteFinal` in `.storybook/main.ts` to prevent `@microsoft/api-extractor` failures in CI.

Story copy should use library management scenarios (swoptape = music library, swopcart = video game library) rather than generic SaaS copy.

## Versioning

Internal library versioning follows `0.YYMM.R` (CalVer variant):
- `0` — fixed major; signals internal-only, no external stability guarantee
- `YYMM` — two-digit year + two-digit month
- `R` — release number within the month, starting at `1` (`0` is reserved for in-flight development)

Do not zero-pad `R` — Node's semver parser rejects leading zeros in numeric identifiers.

The full versioning standard is at `../swopstar-meta/standards/versioning.md`.
