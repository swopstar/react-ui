import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowLeft, Search, Share2, UserRoundPlus } from 'lucide-react'
import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Navigation/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Home',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Home',
    actions: (
      <>
        <Button size="icon"><Search /></Button>
        <Button size="icon"><Share2 /></Button>
      </>
    ),
  },
}

export const WithPrefixActions: Story = {
  args: {
    title: 'Manage users',
    prefixActions: <Button size="icon"><ArrowLeft /></Button>,
    actions: <Button variant="primary"><UserRoundPlus />Add user</Button>,
  },
}
