import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'Label text' } }

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="field">Field label</Label>
      <Input id="field" placeholder="Enter value" />
    </div>
  ),
}
