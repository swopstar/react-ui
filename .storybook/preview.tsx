// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 Rareș Nistor <raresh@nistor.email>

import type { Preview, Decorator } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/lib/theme/ThemeProvider'
import '../src/styles/globals.css'

const BRANDS = {
  master:   { label: 'Master',   seedColor: '#607D8B' },
  swopcart: { label: 'Swopcart', seedColor: '#EE5300' },
  swoptape: { label: 'Swoptape', seedColor: '#DE00EE' },
} as const

type BrandKey = keyof typeof BRANDS

export const globalTypes = {
  brand: {
    description: 'Brand theme',
    toolbar: {
      title: 'Brand',
      icon: 'paintbrush',
      items: Object.entries(BRANDS).map(([value, { label }]) => ({ value, title: label })),
      dynamicTitle: true,
    },
    defaultValue: 'master',
  },
  colorMode: {
    description: 'Color mode',
    toolbar: {
      title: 'Mode',
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark',  title: 'Dark',  icon: 'moon' },
        { value: 'auto',  title: 'System', icon: 'browser' },
      ],
      dynamicTitle: true,
    },
    defaultValue: 'light',
  },
}

const withTheme: Decorator = (Story, context) => {
  const brand = (context.globals.brand as BrandKey) ?? 'master'
  const colorMode = (context.globals.colorMode as 'light' | 'dark' | 'auto') ?? 'light'
  const { seedColor } = BRANDS[brand]
  const padded = context.parameters.padded !== false
  const fullHeight = context.parameters.fullHeight === true

  return (
    <ThemeProvider
      seedColor={seedColor}
      mode={colorMode}
      className="bg-background text-foreground"
      style={{ ...(fullHeight && { minHeight: '100vh' }), ...(padded && { padding: '1.5rem' }) }}
    >
      <Story />
    </ThemeProvider>
  )
}

export const decorators: Decorator[] = [withTheme]

const preview: Preview = {
  parameters: {
    backgrounds: { disabled: true },
    controls: {
      matchers: {
        color: /(background|color|fill|stroke)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
}

export default preview
