import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowDownUp, DiscAlbum, Ellipsis, Folder, ListMusic, ListStart, Pencil, Play, Plus, SlidersHorizontal, User2 } from 'lucide-react'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown menus attach to a trigger element and reveal a list of actions on click. ' +
          'Use them on toolbar buttons, row action buttons, and anywhere a set of related actions needs a compact home. ' +
          'Prefer context menus for item-level actions triggered by right-click.',
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: { description: { story: 'Track actions on an icon button — play, queue, playlist assignment, metadata, and delete.' } },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" aria-label="Track options"><Ellipsis /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start">
        <DropdownMenuItem><Play /> Play</DropdownMenuItem>
        <DropdownMenuItem><ListStart /> Play next</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger><ListMusic /> Add to...</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem><Plus /> New playlist</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Track</DropdownMenuLabel>
        <DropdownMenuItem><Pencil /> Edit metadata</DropdownMenuItem>
        <DropdownMenuItem><User2 /> Artist</DropdownMenuItem>
        <DropdownMenuItem><DiscAlbum /> Album</DropdownMenuItem>
        <DropdownMenuItem><Folder /> Collection</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Shortcuts: Story = {
  parameters: {
    docs: { description: { story: 'Keyboard shortcuts alongside actions for power users.' } },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" aria-label="Track options"><Ellipsis /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start">
        <DropdownMenuItem><Play /> Play<DropdownMenuShortcut>Space</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><ListStart /> Play next<DropdownMenuShortcut>⌘↵</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Pencil /> Edit metadata<DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

function ColumnsDemo() {
  const [artist, setArtist] = React.useState(true)
  const [album, setAlbum] = React.useState(true)
  const [year, setYear] = React.useState(false)
  const [duration, setDuration] = React.useState(true)
  const [plays, setPlays] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="default"><SlidersHorizontal /> Columns</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="start">
        <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={artist} onCheckedChange={setArtist}>Artist</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={album} onCheckedChange={setAlbum}>Album</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={year} onCheckedChange={setYear}>Year</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={duration} onCheckedChange={setDuration}>Duration</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={plays} onCheckedChange={setPlays}>Play count</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Columns: Story = {
  parameters: {
    docs: { description: { story: 'Checkbox items to toggle column visibility in the track list.' } },
  },
  render: () => <ColumnsDemo />,
}

function SortDemo() {
  const [sort, setSort] = React.useState('date-added')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="default"><ArrowDownUp /> Sort</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="start">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="date-added">Date added</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="artist">Artist</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="album">Album</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="duration">Duration</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Sort: Story = {
  parameters: {
    docs: { description: { story: 'Radio group for mutually exclusive sort order selection.' } },
  },
  render: () => <SortDemo />,
}
