// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 Rareș Nistor <raresh@nistor.email>

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Disc3,
  Download,
  Folder,
  Home,
  ListMusic,
  Plus,
  Search,
  Smartphone,
  User,
} from 'lucide-react'
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
  SidebarProvider,
  SidebarSeparator,
} from '@/components/ui/sidebar'

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', padded: false },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const nav = [
  { title: 'Home', icon: Home, active: true },
  { title: 'Collections', icon: Folder },
  { title: 'Artists', icon: User },
  { title: 'Albums', icon: Disc3 },
  { title: 'Search', icon: Search },
]

const playlists = [
  { title: 'New playlist', icon: Plus },
  { title: 'Drum and Bass', icon: ListMusic },
  { title: 'Romanian Folk Music', icon: ListMusic },
  { title: 'Hard bass', icon: ListMusic },
]

const recents = [
  { title: 'Apolodor', icon: Disc3 },
  { title: 'Dire Straits', icon: User },
  { title: 'Bootlegs', icon: Folder },
]

const footer = [
  { title: 'swoptape app', icon: Download },
  { title: 'Listen on the go', icon: Smartphone },
]

export const Default: Story = {
  render: () => (
    <SidebarProvider style={{ '--sidebar-width': '16rem' } as React.CSSProperties}>
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
                {nav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active} asChild>
                      <a href="#">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
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
                {playlists.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
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
                {recents.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
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
            {footer.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User />
                <span>razz</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  ),
}
