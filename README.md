<h1 align="center"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOEMxIDUuNjQyOTggMSA0LjQ2NDQ3IDEuNzMyMjMgMy43MzIyM0MyLjQ2NDQ3IDMgMy42NDI5OCAzIDYgM0gxMEMxMi4zNTcgMyAxMy41MzU1IDMgMTQuMjY3OCAzLjczMjIzQzE1IDQuNDY0NDcgMTUgNS42NDI5OCAxNSA4QzE1IDEwLjM1NyAxNSAxMS41MzU1IDE0LjI2NzggMTIuMjY3OEMxMy41MzU1IDEzIDEyLjM1NyAxMyAxMCAxM0g2QzMuNjQyOTggMTMgMi40NjQ0NyAxMyAxLjczMjIzIDEyLjI2NzhDMSAxMS41MzU1IDEgMTAuMzU3IDEgOFoiIGZpbGw9IiM1MDUwNTAiLz4KPHBhdGggZD0iTTUuMzI5NzIgMTIuNDYwOUwzLjQ4Njc4IDEwLjYxNDNMNi41NzczMSA3LjkwODY3TDYuOTM2MjQgOC43NTAyNEwyLjg0MjUzIDcuOTI5NDFMMy40OTgyIDUuNDgyNEw3LjQ1Mzg4IDYuODE4MzlMNi43NDEzMSA3LjQwMDQ3TDUuNDI0NTYgMy40ODYyOUw3Ljk0Mzg3IDIuODA4NThMOC42MDk4NCA2LjY1ODhMOC4xNjg0MiA2LjU0MDUzTDEwLjY0NDMgMy41MzIxNkwxMi41MDYzIDUuNDExNDVMOS4zOTY3MiA4LjA4NDM3TDkuMDYzNzUgNy4yNDk3NkwxMy4xNTc1IDguMDcwNTlMMTIuNDk0OSAxMC41NDM0TDguNTQ2MTIgOS4xODE2MUw5LjI1MTc4IDguNjI1MjlMMTAuNjAxNCAxMi41MjA3TDguMDU2MTIgMTMuMTkxNEw3LjQyMzAyIDkuMzIyMzlMNy44NjQ0NCA5LjQ0MDY3TDUuMzI5NzIgMTIuNDYwOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="" width="64" height="64"><br>
swop* react ui</h1>

Shared React component library for swop\* projects. Built on [shadcn/ui](https://ui.shadcn.com).

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
import "@swopstar/react-ui/style.css";
import { ThemeProvider } from "@swopstar/react-ui";

export default function App() {
  return (
    <ThemeProvider seedColor="#EE5300" mode="auto">
      {/* your app */}
    </ThemeProvider>
  );
}
```

See **Shell → ThemeProvider** in Storybook for a live colour picker and radius controls.
