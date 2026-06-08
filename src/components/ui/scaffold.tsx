// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 Rareș Nistor <raresh@nistor.email>

import * as React from "react"
import { cn } from "@/lib/utils"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface ScaffoldProps {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  children?: React.ReactNode
  className?: string
  defaultOpen?: boolean
}

function Scaffold({
  sidebar,
  header,
  children,
  className,
  defaultOpen = true,
}: ScaffoldProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      {sidebar}
      <SidebarInset>
        {header && (
          <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b border-background-elevated bg-background px-4">
            {sidebar && <SidebarTrigger />}
            {header}
          </header>
        )}
        <main className={cn("flex flex-1 flex-col", className)}>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export { Scaffold }
