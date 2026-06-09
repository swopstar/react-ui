import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { DiscAlbum, Folder, ListMusic, ListStart, Pencil, Play, Plus, User2 } from 'lucide-react'

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Context menus surface actions relevant to the item that was right-clicked. ' +
          'Use them on tracks, albums, and other library items to expose play, queue, metadata, and destructive actions. ' +
          'Group related actions with labels and separators; use sub-menus for secondary choices like playlist selection.',
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

const trigger = (
  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed border-border text-sm">
    Right-click here
  </ContextMenuTrigger>
)

export const Default: Story = {
  parameters: {
    docs: { description: { story: 'Track actions — play, queue, playlist assignment, metadata navigation, and delete.' } },
  },
  render: () => (
    <ContextMenu>
      {trigger}
      <ContextMenuContent className="w-48">
        <ContextMenuItem><Play /> Play</ContextMenuItem>
        <ContextMenuItem><ListStart /> Play next</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger><ListMusic /> Add to...</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem><Plus /> New playlist</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuLabel>Track</ContextMenuLabel>
        <ContextMenuItem><Pencil /> Edit metadata</ContextMenuItem>
        <ContextMenuItem><User2 /> Artist</ContextMenuItem>
        <ContextMenuItem><DiscAlbum /> Album</ContextMenuItem>
        <ContextMenuItem><Folder /> Collection</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Shortcuts: Story = {
  parameters: {
    docs: { description: { story: 'Keyboard shortcuts displayed alongside actions for power users.' } },
  },
  render: () => (
    <ContextMenu>
      {trigger}
      <ContextMenuContent className="w-52">
        <ContextMenuItem><Play /> Play<ContextMenuShortcut>Space</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem><ListStart /> Play next<ContextMenuShortcut>⌘↵</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem><Pencil /> Edit metadata<ContextMenuShortcut>⌘E</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete<ContextMenuShortcut>⌘⌫</ContextMenuShortcut></ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

function ColumnsDemo() {
  const [artist, setArtist] = React.useState(true)
  const [album, setAlbum] = React.useState(true)
  const [year, setYear] = React.useState(false)
  const [duration, setDuration] = React.useState(true)
  const [plays, setPlays] = React.useState(false)

  return (
    <ContextMenu>
      {trigger}
      <ContextMenuContent className="w-44">
        <ContextMenuLabel>Columns</ContextMenuLabel>
        <ContextMenuCheckboxItem checked={artist} onCheckedChange={setArtist}>Artist</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={album} onCheckedChange={setAlbum}>Album</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={year} onCheckedChange={setYear}>Year</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={duration} onCheckedChange={setDuration}>Duration</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={plays} onCheckedChange={setPlays}>Play count</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const Columns: Story = {
  parameters: {
    docs: { description: { story: 'Checkbox items for toggling column visibility in the track list.' } },
  },
  render: () => <ColumnsDemo />,
}

function QualityDemo() {
  const [quality, setQuality] = React.useState('lossless')

  return (
    <ContextMenu>
      {trigger}
      <ContextMenuContent className="w-44">
        <ContextMenuLabel>Streaming quality</ContextMenuLabel>
        <ContextMenuRadioGroup value={quality} onValueChange={setQuality}>
          <ContextMenuRadioItem value="low">Low (128 kbps)</ContextMenuRadioItem>
          <ContextMenuRadioItem value="standard">Standard (320 kbps)</ContextMenuRadioItem>
          <ContextMenuRadioItem value="lossless">Lossless (FLAC)</ContextMenuRadioItem>
          <ContextMenuRadioItem value="hires">Hi-Res (24-bit)</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const RadioGroup: Story = {
  parameters: {
    docs: { description: { story: 'Radio items for mutually exclusive choices — here, streaming quality.' } },
  },
  render: () => <QualityDemo />,
}
