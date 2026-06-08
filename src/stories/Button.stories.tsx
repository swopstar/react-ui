import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'positive', 'warning', 'confirm', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'xs', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'Button' } }
export const Primary: Story = { args: { children: 'Primary', variant: 'primary' } }
export const Destructive: Story = { args: { children: 'Delete', variant: 'destructive' } }
export const Positive: Story = { args: { children: 'Confirm', variant: 'positive' } }
export const Warning: Story = { args: { children: 'Warning', variant: 'warning' } }
export const Confirm: Story = { args: { children: 'Proceed', variant: 'confirm' } }
export const Link: Story = { args: { children: 'Link', variant: 'link' } }
export const Disabled: Story = { args: { children: 'Disabled', disabled: true } }
export const Small: Story = { args: { children: 'Small', size: 'sm' } }
export const Large: Story = { args: { children: 'Large', size: 'lg' } }

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(['Default', 'Primary', 'Destructive', 'Positive', 'Warning', 'Confirm', 'Link'] as const).map(
        (variant) => <Button key={variant} variant={variant.toLowerCase() as any}>{variant}</Button>
      )}
    </div>
  ),
}
