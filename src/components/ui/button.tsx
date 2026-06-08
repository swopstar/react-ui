// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 Rareș Nistor <raresh@nistor.email>

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-default items-center justify-center gap-2 rounded-md border text-sm font-medium whitespace-nowrap outline-none focus-visible:[outline:1px_solid_var(--ring)] focus-visible:outline-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Neutral surface — no brand tint; uses achromatic tokens throughout
        default:
          "bg-secondary border-border text-secondary-foreground hover:[outline:1px_solid_var(--border)] hover:outline-offset-0 active:[outline:1px_solid_var(--border)] active:outline-offset-0 active:bg-border",
        // Filled — edge token is same hue, shifted lightness (darker light / lighter dark)
        primary:
          "bg-primary text-primary-foreground border-primary-edge hover:[outline:1px_solid_var(--primary-edge)] hover:outline-offset-0 active:[outline:1px_solid_var(--primary-edge)] active:outline-offset-0 active:bg-primary-edge",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive-edge hover:[outline:1px_solid_var(--destructive-edge)] hover:outline-offset-0 active:[outline:1px_solid_var(--destructive-edge)] active:outline-offset-0 active:bg-destructive-edge",
        positive:
          "bg-positive text-positive-foreground border-positive-edge hover:[outline:1px_solid_var(--positive-edge)] hover:outline-offset-0 active:[outline:1px_solid_var(--positive-edge)] active:outline-offset-0 active:bg-positive-edge",
        warning:
          "bg-warning text-warning-foreground border-warning-edge hover:[outline:1px_solid_var(--warning-edge)] hover:outline-offset-0 active:[outline:1px_solid_var(--warning-edge)] active:outline-offset-0 active:bg-warning-edge",
        confirm:
          "bg-confirm text-confirm-foreground border-confirm-edge hover:[outline:1px_solid_var(--confirm-edge)] hover:outline-offset-0 active:[outline:1px_solid_var(--confirm-edge)] active:outline-offset-0 active:bg-confirm-edge",
        outline: "bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent",
        link: "cursor-pointer border-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
