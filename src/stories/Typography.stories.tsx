import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  H1, H2, H3, H4, H5, H6,
  BodyText, BoldText, ItalicText, BoldItalicText, LabelText, MonoText,
} from '@/components/ui/typography'

const meta = {
  title: 'UI/Typography',
  component: BodyText,
  tags: ['autodocs'],
} satisfies Meta<typeof BodyText>

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <div className="space-y-2">
      <H1>Heading 1 — Titlu 1</H1>
      <H2>Heading 2 — Titlu 2</H2>
      <H3>Heading 3 — Titlu 3</H3>
      <H4>Heading 4 — Titlu 4</H4>
      <H5>Heading 5 — Titlu 5</H5>
      <H6>Heading 6 — Titlu 6</H6>
    </div>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <div className="space-y-2">
      <BodyText>Body — Corp. The quick brown fox jumps over the lazy dog.</BodyText>
      <div><BoldText>Bold — Aldin. The quick brown fox jumps over the lazy dog.</BoldText></div>
      <div><ItalicText>Italic — Cursiv. The quick brown fox jumps over the lazy dog.</ItalicText></div>
      <div><BoldItalicText>Bold Italic — Aldin Cursiv. The quick brown fox jumps over the lazy dog.</BoldItalicText></div>
      <div><LabelText>Label — Etichetă. The quick brown fox.</LabelText></div>
      <div><MonoText>Monospace — Monospațiu. const x = 42;</MonoText></div>
    </div>
  ),
}
