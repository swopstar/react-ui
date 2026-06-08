import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: React.ReactNode
  prefixActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

function PageHeader({ title, prefixActions, actions, className }: PageHeaderProps) {
  return (
    <div className={cn("flex min-h-12 w-full items-center justify-between gap-3", className)}>
      <div className="flex items-center gap-3">
        {prefixActions && (
          <div className="flex items-center gap-3">{prefixActions}</div>
        )}
        <span className="text-sm" style={{ fontVariationSettings: "'wght' 800, 'YTLC' 540" }}>{title}</span>
      </div>
      {actions && (
        <div className="flex items-center gap-3">{actions}</div>
      )}
    </div>
  )
}

export { PageHeader }
export type { PageHeaderProps }
