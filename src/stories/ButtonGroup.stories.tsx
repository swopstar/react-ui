import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Left</Button>
      <ButtonGroupSeparator />
      <Button>Middle</Button>
      <ButtonGroupSeparator />
      <Button>Right</Button>
    </ButtonGroup>
  ),
}
