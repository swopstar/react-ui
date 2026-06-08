import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'Forms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
}
