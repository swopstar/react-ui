import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// SVG icons inside interactive components: consistent sizing, no pointer events
export const svgIcon = "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

// SVG icons inside menu items: same + inherit muted colour unless overridden
export const svgMenuIcon = "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground"

// Standard focus ring for interactive controls
export const focusRing = "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"

// Disabled state for form controls
export const disabledState = "disabled:cursor-not-allowed disabled:opacity-50"

// Dark-mode input background tint
export const inputDarkBg = "dark:bg-input/30"

// Modal/sheet overlay
export const overlayBase = "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"

// Popper (dropdown/popover/tooltip) open/close zoom animation
export const popperZoom = "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"

// Popper slide direction — matches Radix data-side attribute
export const popperSlide = "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
