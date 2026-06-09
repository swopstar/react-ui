import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const meta = {
  title: 'Shell/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
  parameters: {
    padded: false,
    docs: {
      description: {
        component:
          'Wrap your app in `ThemeProvider` to inject the colour palette and enable dark mode. ' +
          'Pass any CSS colour as `seedColor` — the full palette is generated at runtime. ' +
          'Tokens are applied both as inline CSS vars on the wrapper div and on `<html>`, ' +
          'so Radix portals (Dialog, Popover, etc.) inherit the correct theme automatically.',
      },
    },
  },
  argTypes: {
    seedColor: { control: 'color' },
    mode: { control: 'select', options: ['light', 'dark', 'auto'] },
    radius: { control: { type: 'range', min: 0, max: 2, step: 0.125 } },
  },
  args: {
    seedColor: '#EE5300',
    mode: 'light',
    radius: 0.875,
  },
} satisfies Meta<typeof ThemeProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ seedColor, mode, radius }) => (
    <ThemeProvider
      seedColor={seedColor}
      mode={mode}
      radius={radius}
      className="bg-background text-foreground p-6 min-h-40 flex flex-col gap-4"
    >
      <Card className="w-72">
        <CardHeader>
          <CardTitle>Library</CardTitle>
          <CardDescription>4,219 tracks · 312 albums</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Last synced 2 minutes ago.</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="primary">Sync now</Button>
          <Button>Settings</Button>
        </CardFooter>
      </Card>
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="confirm">Confirm</Button>
      </div>
    </ThemeProvider>
  ),
}
