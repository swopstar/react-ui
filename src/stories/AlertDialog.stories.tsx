import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

type AlertDialogStoryArgs = ComponentProps<typeof AlertDialog> & {
  size?: ComponentProps<typeof AlertDialogContent>['size']
}

const meta: Meta<AlertDialogStoryArgs> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Size of the dialog panel',
    },
  },
  args: { size: 'default' },
  parameters: {
    docs: {
      description: {
        component:
          'Use an alert dialog to interrupt the user with a decision that requires explicit confirmation before proceeding. ' +
          'Reserve it for actions that are destructive, irreversible, or have significant consequences — not for routine confirmations. ' +
          'The action button variant should match the severity of the action.',
      },
    },
  },
}

export default meta
type Story = StoryObj<AlertDialogStoryArgs>

export const Destructive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Destructive actions — deleting data, removing a library, wiping metadata — should use a destructive action button so the severity is visually clear.',
      },
    },
  },
  render: ({ size }: AlertDialogStoryArgs) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Remove library</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove this library?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the library and all its metadata. Your media files will not be affected.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Confirm: Story = {
  parameters: {
    docs: {
      description: {
        story: 'For non-destructive actions that still warrant confirmation — applying a bulk change, triggering a long-running task — use the default action button.',
      },
    },
  },
  render: ({ size }: AlertDialogStoryArgs) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Re-scan library</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          <AlertDialogTitle>Re-scan the entire library?</AlertDialogTitle>
          <AlertDialogDescription>
            This will re-index all files and may take several minutes. The library will remain accessible during the scan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="primary">Start scan</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
