import * as React from "react"
import { cn } from "@/lib/utils"

// Heading variation shared across H1–H6
const HEADING_VARS = "'YTLC' 540, 'wght' 850, 'wdth' 95" as const

function H1({ className, style, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-[2em] leading-tight", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function H2({ className, style, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[1.75em] leading-tight", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function H3({ className, style, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-[1.5em] leading-snug", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function H4({ className, style, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn("text-[1.25em] leading-snug", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function H5({ className, style, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      className={cn("text-[1.125em] leading-snug", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function H6({ className, style, ...props }: React.ComponentProps<"h6">) {
  return (
    <h6
      className={cn("text-[1em] leading-snug", className)}
      style={{ fontVariationSettings: HEADING_VARS, ...style }}
      {...props}
    />
  )
}

function BodyText({ className, style, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-[1em] leading-normal", className)}
      style={{ fontVariationSettings: "'wght' 500, 'YTLC' 540", ...style }}
      {...props}
    />
  )
}

function BoldText({ className, style, ...props }: React.ComponentProps<"strong">) {
  return (
    <strong
      className={cn("font-normal", className)}
      style={{ fontVariationSettings: "'wght' 800, 'YTLC' 540", ...style }}
      {...props}
    />
  )
}

function ItalicText({ className, ...props }: React.ComponentProps<"em">) {
  return <em className={cn("italic", className)} {...props} />
}

function BoldItalicText({ className, style, ...props }: React.ComponentProps<"strong">) {
  return (
    <strong
      className={cn("italic font-normal", className)}
      style={{ fontVariationSettings: "'wght' 800, 'YTLC' 540", ...style }}
      {...props}
    />
  )
}

function LabelText({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("text-[0.875em]", className)} {...props} />
}

function MonoText({ className, ...props }: React.ComponentProps<"code">) {
  return <code className={cn("font-mono", className)} {...props} />
}

export { H1, H2, H3, H4, H5, H6, BodyText, BoldText, ItalicText, BoldItalicText, LabelText, MonoText }
