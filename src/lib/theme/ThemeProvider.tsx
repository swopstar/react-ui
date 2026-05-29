import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { generateTheme, tokensToVars } from './generate-palette'
import { cn } from '@/lib/utils'
import type { ResolvedTheme, ThemeTokens } from './types'

interface ThemeProviderProps {
  seedColor: string
  tokens?: Partial<ThemeTokens>
  mode?: 'light' | 'dark' | 'auto'
  radius?: number
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ThemeContext = createContext<ResolvedTheme | null>(null)

function getSystemDark(): boolean {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
}

export function ThemeProvider({
  seedColor,
  tokens,
  mode = 'auto',
  radius = 0.875,
  children,
  className,
  style,
}: ThemeProviderProps) {
  const { light, dark } = useMemo(
    () => generateTheme(seedColor, tokens, radius),
    [seedColor, tokens, radius],
  )

  const [isDark, setIsDark] = useState<boolean>(() =>
    mode === 'dark' ? true : mode === 'light' ? false : getSystemDark(),
  )

  useEffect(() => {
    if (mode === 'dark') { setIsDark(true); return }
    if (mode === 'light') { setIsDark(false); return }
    setIsDark(getSystemDark())
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const activeTokens = isDark ? dark : light
  const cssVars = tokensToVars(activeTokens)

  const resolved = useMemo<ResolvedTheme>(
    () => ({ light, dark, activeTokens, seedColor, isDark }),
    [light, dark, activeTokens, seedColor, isDark],
  )

  return (
    <ThemeContext.Provider value={resolved}>
      <div
        className={cn(isDark ? 'dark' : '', className)}
        style={{ ...cssVars, ...style } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useThemeContext(): ResolvedTheme {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
