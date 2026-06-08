import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type DialogStoryArgs = ComponentProps<typeof Dialog> & {
  showCloseButton?: ComponentProps<typeof DialogContent>['showCloseButton']
}

const meta: Meta<DialogStoryArgs> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    showCloseButton: {
      control: 'boolean',
      description: 'Show the × close button in the top-right corner of the dialog',
    },
  },
  args: { showCloseButton: true },
  parameters: {
    docs: {
      description: {
        component:
          'Use a dialog to surface focused tasks or information that require the user\'s attention without navigating away from the current page. ' +
          'Unlike an alert dialog, a dialog can be dismissed freely and is suitable for forms, settings, and detail views. ' +
          'Use an alert dialog instead when an explicit confirm or cancel decision is required.',
      },
    },
  },
}

export default meta
type Story = StoryObj<DialogStoryArgs>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A typical form dialog — editable fields with a save action in the footer.',
      },
    },
  },
  render: ({ showCloseButton }: DialogStoryArgs) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit library</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>Edit library</DialogTitle>
          <DialogDescription>Update the name and location of your media library.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="library-name">Name</Label>
            <Input id="library-name" defaultValue="My Music" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="library-path">Path</Label>
            <Input id="library-path" defaultValue="/home/razz/music" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary" type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
