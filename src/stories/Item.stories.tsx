import type { Meta, StoryObj } from '@storybook/react-vite'
import { Item, ItemContent, ItemDescription, ItemGroup, ItemSeparator, ItemTitle } from '@/components/ui/item'

const meta = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ItemGroup className="w-80 rounded-md border border-border">
      <Item>
        <ItemContent>
          <ItemTitle>Invoice #001</ItemTitle>
          <ItemDescription>Due 15 Jan 2025</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Invoice #002</ItemTitle>
          <ItemDescription>Due 28 Jan 2025</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
