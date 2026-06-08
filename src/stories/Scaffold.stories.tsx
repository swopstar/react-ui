// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 Rareș Nistor <raresh@nistor.email>

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Disc3,
  Download,
  Folder,
  Home,
  ListMusic,
  Music2,
  Plus,
  Search,
  Smartphone,
  User,
} from 'lucide-react'
import { Scaffold } from '@/components/ui/scaffold'
import { PageHeader } from '@/components/ui/page-header'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'

const meta = {
  title: 'UI/Scaffold',
  component: Scaffold,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', padded: false },
} satisfies Meta<typeof Scaffold>

export default meta
type Story = StoryObj<typeof meta>

// ── Sidebar ────────────────────────────────────────────────────────────────

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-3">
        <div className="flex items-center gap-2 font-semibold text-base">
          <Disc3 className="size-6 text-primary" />
          swoptape
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: 'Home', icon: Home, active: true },
                { title: 'Collections', icon: Folder },
                { title: 'Artists', icon: User },
                { title: 'Albums', icon: Disc3 },
                { title: 'Search', icon: Search },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={item.active} asChild>
                    <a href="#"><item.icon /><span>{item.title}</span></a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Playlists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: 'New playlist', icon: Plus },
                { title: 'Drum and Bass', icon: ListMusic },
                { title: 'Romanian Folk Music', icon: ListMusic },
                { title: 'Hard bass', icon: ListMusic },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="#"><item.icon /><span>{item.title}</span></a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: 'Apolodor', icon: Disc3 },
                { title: 'Dire Straits', icon: User },
                { title: 'Bootlegs', icon: Folder },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="#"><item.icon /><span>{item.title}</span></a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          {[
            { title: 'swoptape app', icon: Download },
            { title: 'Listen on the go', icon: Smartphone },
          ].map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href="#"><item.icon /><span>{item.title}</span></a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton><User /><span>razz</span></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

// ── Media card ─────────────────────────────────────────────────────────────

interface MediaCardProps {
  image?: string
  placeholder?: 'artist' | 'album'
  title: string
  subtitle: string
}

function MediaCard({ image, placeholder = 'album', title, subtitle }: MediaCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <AspectRatio ratio={1}>
          {image ? (
            <img src={image} alt={title} className="size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center bg-muted">
              {placeholder === 'artist'
                ? <User className="size-12 text-muted-foreground" />
                : <Music2 className="size-12 text-muted-foreground" />}
            </div>
          )}
        </AspectRatio>
      </div>
      <div className="min-w-0 px-0.5">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

// ── Story ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Scaffold
      sidebar={<AppSidebar />}
      header={<PageHeader title="Home" />}
    >
      <div className="flex flex-col gap-8 p-6">
        <section>
          <h2 className="mb-3 text-base font-semibold">Recently played</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
            <MediaCard title="Apolodor" subtitle="Ada Milea, Dorina Chiriac, R..." />
            <MediaCard placeholder="artist" title="Dire Straits" subtitle="Artist" />
            <MediaCard placeholder="album" title="Love Tonight (Culture Shoc..." subtitle="Shouse, Culture Shock" />
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold">Recently added</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
            <MediaCard title="Apolodor" subtitle="Ada Milea, Dorina Chiriac, R..." />
            <MediaCard title="Apolodor in English" subtitle="Ada Milea, Dorina Chiriac, R..." />
            <MediaCard title="Apolodor" subtitle="Ada Milea, Dorina Chiriac, R..." />
            <MediaCard title="Apolodor" subtitle="Ada Milea, Dorina Chiriac, R..." />
          </div>
        </section>
      </div>
    </Scaffold>
  ),
}
