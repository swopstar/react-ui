<div align="center"><img src="logo.svg" alt="" width="64" height="64"></div>
<h1 align="center">swop* react ui</h1>

Shared React component library for swop\* projects. Built on [shadcn/ui](https://ui.shadcn.com) and Tailwind v4.

## Installation

```bash
npm install @swopstar/react-ui
```

Requires a `.npmrc` pointing the `@swopstar` scope at GitHub Packages:

```
@swopstar:registry=https://npm.pkg.github.com
```

## Usage

Import the stylesheet once at your app root, then wrap with `ThemeProvider`:

```tsx
import '@swopstar/react-ui/style.css'
import { ThemeProvider } from '@swopstar/react-ui'

export default function App() {
  return (
    <ThemeProvider seedColor="#EE5300" mode="auto">
      {/* your app */}
    </ThemeProvider>
  )
}
```

See **Shell → ThemeProvider** in Storybook for a live colour picker and radius controls.
