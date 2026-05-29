<div align="center"><img src="logo.svg" alt="" width="64" height="64"></div>
<h1 align="center">swop* react ui</h1>

Shared React component library for swop\* projects. Built on [shadcn/ui](https://ui.shadcn.com) (new-york style) and Tailwind v4, with a runtime theme system that generates a full colour palette from a single seed colour.

## Installation

```bash
npm install @swopstar/react-ui
```

Requires a `.npmrc` pointing the `@swopstar` scope at GitHub Packages:

```
@swopstar:registry=https://npm.pkg.github.com
```

## Usage

Import the stylesheet once at your app root:

```ts
import '@swopstar/react-ui/style.css'
```

Wrap your app in `ThemeProvider` with your brand seed colour:

```tsx
import { ThemeProvider } from '@swopstar/react-ui'

export default function App() {
  return (
    <ThemeProvider seedColor="#DE00EE" mode="auto">
      {/* your app */}
    </ThemeProvider>
  )
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `seedColor` | `string` | — | Any CSS colour; drives the entire palette |
| `mode` | `'light' \| 'dark' \| 'auto'` | `'auto'` | `auto` follows `prefers-color-scheme` |
| `radius` | `number` | `0.875` | Base border radius in rem |
| `tokens` | `Partial<ThemeTokens>` | — | Per-token overrides applied after generation |

### Brand seeds

| Project | Seed |
|---------|------|
| Master | `#607D8B` |
| Swopcart | `#EE5300` |
| Swoptape | `#DE00EE` |

### Reading the active theme

```tsx
import { useTheme } from '@swopstar/react-ui'

const { isDark, activeTokens, seedColor } = useTheme()
```

### Generating tokens without a provider

```ts
import { generateTheme, tokensToVars } from '@swopstar/react-ui'

const { light, dark } = generateTheme('#EE5300')
```

## Components

`Button` · `Input` · `Card` · `Badge` · `Checkbox` · `Label` · `Separator` · `Select` · `Dialog` · `Popover` · `Tooltip` · `DropdownMenu` · `Tabs`

Button variants: `default` · `primary` · `destructive` · `positive` · `warning` · `confirm` · `link`

## Colour system

The palette is neutral-first. Page surfaces carry no chroma; seed colour appears only on intentional interactive chrome (`primary`, `surface`, `edge`, ring, charts). Fixed semantic colours (`destructive`, `positive`, `warning`, `confirm`) are constant across all brands.

All filled components use white foreground and meet WCAG 2 AA contrast (4.5:1 minimum).

## Development

```bash
npm run dev            # Storybook on :6006
npm run build          # Type-check + build to dist/
npm run typecheck      # Type-check only
npm run build-storybook
```

Storybook's toolbar exposes **Brand** and **Mode** (Light / Dark / System) globals so every component can be previewed across all three seeds in both colour modes.

## Adding components

```bash
npx shadcn@latest add <component>
```

After adding: audit the generated file and align border/outline classes with the existing pattern in `button.tsx`.
