import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Forms/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right"><AlignRight /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
