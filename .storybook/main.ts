import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(ts|tsx)',
    '../src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {},
  viteFinal: async (config) => {
    // vite-plugin-dts is for library builds only — strip it from Storybook's build
    // to avoid api-extractor failures in CI
    config.plugins = (config.plugins ?? []).filter(
      (p) => !p || Array.isArray(p) || (p as Record<string, unknown>)['name'] !== 'vite:dts'
    )
    return config
  },
}

export default config
