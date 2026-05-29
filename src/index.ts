// Styles — Vite lib mode extracts this to dist/style.css
import '@/styles/globals.css'

// Theme system
export { ThemeProvider } from '@/lib/theme/ThemeProvider'
export { useTheme } from '@/hooks/use-theme'
export { generateTheme, tokensToVars } from '@/lib/theme/generate-palette'
export type { ThemeTokens, ThemeTokenKey, ThemeConfig, ResolvedTheme } from '@/lib/theme/types'

// Utilities
export { cn } from '@/lib/utils'

// Components
export { Button, buttonVariants } from '@/components/ui/button'
export { Input } from '@/components/ui/input'
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
export { Badge, badgeVariants } from '@/components/ui/badge'
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
export { Checkbox } from '@/components/ui/checkbox'
export { Label } from '@/components/ui/label'
export { Separator } from '@/components/ui/separator'
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsListVariants,
} from '@/components/ui/tabs'
