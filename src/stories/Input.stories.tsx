import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { placeholder: 'Enter text…' } }
export const Email: Story = { args: { type: 'email', placeholder: 'you@example.com' } }
export const Password: Story = { args: { type: 'password', placeholder: 'Password' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true } }

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}
