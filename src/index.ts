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
export { Alert, AlertTitle, AlertDescription, AlertAction } from '@/components/ui/alert'
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
export { AspectRatio } from '@/components/ui/aspect-ratio'
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar'
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
} from '@/components/ui/button-group'
export { Calendar, CalendarDayButton } from '@/components/ui/calendar'
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox'
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@/components/ui/context-menu'
export { DatePicker } from '@/components/ui/date-picker'
export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from '@/components/ui/item'
export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination'
export { Progress } from '@/components/ui/progress'
export { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
export { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
export { Skeleton } from '@/components/ui/skeleton'
export { Slider } from '@/components/ui/slider'
export { Toaster } from '@/components/ui/sonner'
export { Spinner } from '@/components/ui/spinner'
export { Switch } from '@/components/ui/switch'
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
export { Textarea } from '@/components/ui/textarea'
export { Toggle, toggleVariants } from '@/components/ui/toggle'
export { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
export {
  H1, H2, H3, H4, H5, H6,
  BodyText, BoldText, ItalicText, BoldItalicText, LabelText, MonoText,
} from '@/components/ui/typography'
export { useIsMobile } from '@/hooks/use-mobile'
export { Scaffold } from '@/components/ui/scaffold'
export { PageHeader } from '@/components/ui/page-header'
export type { PageHeaderProps } from '@/components/ui/page-header'
