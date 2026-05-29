import { parse, oklch, formatCss, clampChroma } from 'culori'
import type { Oklch } from 'culori'
import type { ThemeTokens } from './types'

// Fixed semantic palette — identical across all brand seeds
const SEMANTIC_LIGHT = {
  destructive:              'oklch(0.52 0.22 25)',
  'destructive-foreground': 'oklch(0.99 0 0)',
  'destructive-edge':       'oklch(0.40 0.25 25)',
  positive:                 'oklch(0.46 0.18 145)',
  'positive-foreground':    'oklch(0.99 0 0)',
  'positive-edge':          'oklch(0.34 0.20 145)',
  warning:                  'oklch(0.80 0.19 75)',
  'warning-foreground':     'oklch(0.14 0 0)',
  'warning-edge':           'oklch(0.57 0.23 75)',
  confirm:                  'oklch(0.55 0.18 255)',
  'confirm-foreground':     'oklch(0.99 0 0)',
  'confirm-edge':           'oklch(0.41 0.20 255)',
} satisfies Partial<ThemeTokens>

const SEMANTIC_DARK = {
  destructive:              'oklch(0.52 0.22 25)',
  'destructive-foreground': 'oklch(0.99 0 0)',
  'destructive-edge':       'oklch(0.70 0.20 25)',
  positive:                 'oklch(0.46 0.18 145)',
  'positive-foreground':    'oklch(0.99 0 0)',
  'positive-edge':          'oklch(0.65 0.16 145)',
  warning:                  'oklch(0.50 0.20 75)',
  'warning-foreground':     'oklch(0.99 0 0)',
  'warning-edge':           'oklch(0.68 0.22 75)',
  confirm:                  'oklch(0.50 0.18 255)',
  'confirm-foreground':     'oklch(0.99 0 0)',
  'confirm-edge':           'oklch(0.68 0.16 255)',
} satisfies Partial<ThemeTokens>

function toOklch(color: string): Oklch {
  const parsed = parse(color)
  if (!parsed) throw new Error(`Invalid seed color: "${color}"`)
  const converted = oklch(parsed)
  if (!converted) throw new Error(`Could not convert "${color}" to oklch`)
  return clampChroma(converted, 'oklch', 'rgb')
}

function oklchStr(l: number, c: number, h: number | undefined): string {
  const color: Oklch = { mode: 'oklch', l, c, h: h ?? 0 }
  const clamped = clampChroma(color, 'oklch', 'rgb')
  return formatCss(clamped) ?? `oklch(${l} ${c} ${h ?? 0})`
}

function buildLightTokens(seed: Oklch, radius: number): ThemeTokens {
  const h = seed.h
  const c = seed.c ?? 0
  // Cap at 0.50 so white foreground always has ≥ 4.5:1 contrast (WCAG AA)
  const primaryL = Math.min(Math.max(seed.l, 0.35), 0.50)

  return {
    ...SEMANTIC_LIGHT,
    // Neutral surfaces
    background:                   oklchStr(0.99, 0,    0),
    foreground:                   oklchStr(0.14, 0,    0),
    card:                         oklchStr(0.97, 0,    0),
    'card-foreground':            oklchStr(0.14, 0,    0),
    popover:                      oklchStr(0.99, 0,    0),
    'popover-foreground':         oklchStr(0.14, 0,    0),
    // Brand — derived from seed
    primary:                      oklchStr(primaryL,                         c, h),
    'primary-foreground':         oklchStr(0.99, 0,    0),
    'primary-edge':               oklchStr(Math.max(primaryL - 0.12, 0.12), c, h),
    // Tinted interactive surfaces — seed hue at low chroma
    surface:                      oklchStr(0.95, c * 0.12, h),
    edge:                         oklchStr(0.82, c * 0.22, h),
    'edge-active':                oklchStr(0.65, c * 0.40, h),
    // Neutral interactive surfaces
    secondary:                    oklchStr(0.94, 0,    0),
    'secondary-foreground':       oklchStr(0.22, 0,    0),
    muted:                        oklchStr(0.95, 0,    0),
    'muted-foreground':           oklchStr(0.50, 0,    0),
    accent:                       oklchStr(0.93, 0,    0),
    'accent-foreground':          oklchStr(0.20, 0,    0),
    // Chrome
    border:                       oklchStr(0.88, 0,    0),
    input:                        oklchStr(0.88, 0,    0),
    ring:                         oklchStr(primaryL, c, h),
    radius:                       `${radius}rem`,
    // Sidebar
    sidebar:                      oklchStr(0.97, 0,    0),
    'sidebar-foreground':         oklchStr(0.14, 0,    0),
    'sidebar-primary':            oklchStr(primaryL, c, h),
    'sidebar-primary-foreground': oklchStr(0.99, 0,    0),
    'sidebar-accent':             oklchStr(0.93, 0,    0),
    'sidebar-accent-foreground':  oklchStr(0.20, 0,    0),
    'sidebar-border':             oklchStr(0.88, 0,    0),
    'sidebar-ring':               oklchStr(primaryL, c, h),
    // Charts — seed hue with analogue offsets
    'chart-1':                    oklchStr(0.65, Math.max(c * 1.1, 0.12), h),
    'chart-2':                    oklchStr(0.58, Math.max(c * 1.0, 0.11), (h ?? 0) + 40),
    'chart-3':                    oklchStr(0.52, Math.max(c * 0.9, 0.10), (h ?? 0) + 80),
    'chart-4':                    oklchStr(0.72, Math.max(c * 1.0, 0.12), (h ?? 0) - 40),
    'chart-5':                    oklchStr(0.60, Math.max(c * 0.9, 0.11), (h ?? 0) + 160),
  }
}

function buildDarkTokens(seed: Oklch, radius: number): ThemeTokens {
  const h = seed.h
  const c = seed.c ?? 0
  // Same cap as light mode — dark fills, white foreground, WCAG AA
  const primaryL = Math.min(Math.max(seed.l, 0.35), 0.50)

  return {
    ...SEMANTIC_DARK,
    // Neutral surfaces
    background:                   oklchStr(0.10, 0,    0),
    foreground:                   oklchStr(0.97, 0,    0),
    card:                         oklchStr(0.15, 0,    0),
    'card-foreground':            oklchStr(0.97, 0,    0),
    popover:                      oklchStr(0.15, 0,    0),
    'popover-foreground':         oklchStr(0.97, 0,    0),
    // Brand — derived from seed; edge lighter than fill so it reads on dark bg
    primary:                      oklchStr(primaryL,                          c, h),
    'primary-foreground':         oklchStr(0.99, 0,    0),
    'primary-edge':               oklchStr(Math.min(primaryL + 0.20, 0.85),  c, h),
    // Tinted interactive surfaces
    surface:                      oklchStr(0.22, c * 0.18, h),
    edge:                         oklchStr(0.42, c * 0.32, h),
    'edge-active':                oklchStr(0.58, c * 0.48, h),
    // Neutral interactive surfaces
    secondary:                    oklchStr(0.22, 0,    0),
    'secondary-foreground':       oklchStr(0.97, 0,    0),
    muted:                        oklchStr(0.20, 0,    0),
    'muted-foreground':           oklchStr(0.60, 0,    0),
    accent:                       oklchStr(0.20, 0,    0),
    'accent-foreground':          oklchStr(0.97, 0,    0),
    // Chrome
    border:                       'oklch(1 0 0 / 12%)',
    input:                        'oklch(1 0 0 / 15%)',
    ring:                         oklchStr(primaryL, c, h),
    radius:                       `${radius}rem`,
    // Sidebar
    sidebar:                      oklchStr(0.13, 0,    0),
    'sidebar-foreground':         oklchStr(0.97, 0,    0),
    'sidebar-primary':            oklchStr(primaryL, c, h),
    'sidebar-primary-foreground': oklchStr(0.99, 0,    0),
    'sidebar-accent':             oklchStr(0.20, 0,    0),
    'sidebar-accent-foreground':  oklchStr(0.60, 0,    0),
    'sidebar-border':             'oklch(1 0 0 / 12%)',
    'sidebar-ring':               oklchStr(primaryL, c, h),
    // Charts
    'chart-1':                    oklchStr(0.65, Math.max(c * 1.1, 0.14), h),
    'chart-2':                    oklchStr(0.60, Math.max(c * 1.0, 0.13), (h ?? 0) + 40),
    'chart-3':                    oklchStr(0.55, Math.max(c * 0.9, 0.12), (h ?? 0) + 80),
    'chart-4':                    oklchStr(0.70, Math.max(c * 1.0, 0.13), (h ?? 0) - 40),
    'chart-5':                    oklchStr(0.62, Math.max(c * 0.9, 0.12), (h ?? 0) + 160),
  }
}

export function generateTheme(
  seedColor: string,
  overrides: Partial<ThemeTokens> = {},
  radius = 0.875,
): { light: ThemeTokens; dark: ThemeTokens } {
  const seed = toOklch(seedColor)
  const light = { ...buildLightTokens(seed, radius), ...overrides }
  const dark = { ...buildDarkTokens(seed, radius), ...overrides }
  return { light, dark }
}

export function tokensToVars(tokens: ThemeTokens): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [`--${key}`, value])
  )
}
