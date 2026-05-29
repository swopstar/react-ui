export interface ThemeTokens {
  // Surfaces — neutral, no seed chroma
  background: string
  foreground: string
  card: string
  'card-foreground': string
  popover: string
  'popover-foreground': string
  // Semantic palette — fill + foreground + border edge per colour
  primary: string
  'primary-foreground': string
  'primary-edge': string
  destructive: string
  'destructive-foreground': string
  'destructive-edge': string
  positive: string
  'positive-foreground': string
  'positive-edge': string
  warning: string
  'warning-foreground': string
  'warning-edge': string
  confirm: string
  'confirm-foreground': string
  'confirm-edge': string
  // Tinted interactive surfaces — seed hue at low chroma for component chrome
  surface: string
  edge: string
  'edge-active': string
  // Neutral interactive surfaces
  secondary: string
  'secondary-foreground': string
  muted: string
  'muted-foreground': string
  accent: string
  'accent-foreground': string
  // Chrome
  border: string
  input: string
  ring: string
  radius: string
  // Sidebar
  sidebar: string
  'sidebar-foreground': string
  'sidebar-primary': string
  'sidebar-primary-foreground': string
  'sidebar-accent': string
  'sidebar-accent-foreground': string
  'sidebar-border': string
  'sidebar-ring': string
  // Charts
  'chart-1': string
  'chart-2': string
  'chart-3': string
  'chart-4': string
  'chart-5': string
}

export type ThemeTokenKey = keyof ThemeTokens

export interface ThemeConfig {
  seedColor: string
  tokens?: Partial<ThemeTokens>
  mode?: 'light' | 'dark' | 'auto'
  radius?: number
}

export interface ResolvedTheme {
  light: ThemeTokens
  dark: ThemeTokens
  activeTokens: ThemeTokens
  seedColor: string
  isDark: boolean
}
