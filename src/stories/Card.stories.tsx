import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use cards to group related content or actions into a visually distinct surface. ' +
          'Cards sit at the elevated background level, lifting them slightly above the page. ' +
          'Prefer a single clear purpose per card — avoid cramming unrelated content into one.',
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Full card layout with header, content, and footer actions.',
      },
    },
  },
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Apolodor</CardTitle>
        <CardDescription>Ada Milea · 2003 · 14 tracks</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Added to your library 3 days ago. Last played yesterday.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Play</Button>
        <Button size="sm" variant="primary">Add to queue</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Content-only card with no header or footer — useful for stats, summaries, or inline detail panels.',
      },
    },
  },
  render: () => (
    <Card className="w-80">
      <CardContent>
        <p className="text-sm text-muted-foreground">Library</p>
        <p className="text-2xl" style={{ fontVariationSettings: "'wght' 800, 'YTLC' 540" }}>4,219 tracks</p>
      </CardContent>
    </Card>
  ),
}
