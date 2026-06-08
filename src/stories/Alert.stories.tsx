import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircle, CheckCircle, Hourglass, Info, OctagonAlert } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

type AlertStoryArgs = ComponentProps<typeof Alert> & { showAction?: boolean }

const meta: Meta<AlertStoryArgs> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'positive', 'warning', 'confirm'],
      description: 'The visual style of the alert',
    },
    showAction: {
      control: 'boolean',
      description: 'Show an optional action button',
      table: { category: 'Story controls' },
    },
  },
  args: { showAction: false },
  parameters: {
    docs: {
      description: {
        component:
          'Use alerts to surface persistent, non-interactive status messages inline within the page. ' +
          'Unlike a toast, an alert stays visible until the condition it describes is resolved. ' +
          'Alerts have no border — in this design language, borders signal interactivity.',
      },
    },
  },
}

export default meta
type Story = StoryObj<AlertStoryArgs>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use for neutral informational messages with no urgency or sentiment — background processes, general status updates, contextual hints.',
      },
    },
  },
  render: ({ variant, showAction }: AlertStoryArgs) => (
    <Alert variant={variant}>
      <Hourglass />
      <AlertTitle>Library scan in progress</AlertTitle>
      <AlertDescription>Your library is being scanned for new files. This may take a few minutes.</AlertDescription>
      {showAction && <AlertAction><Button size="xs">Cancel</Button></AlertAction>}
    </Alert>
  ),
}

export const Destructive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use when something has gone wrong and the user needs to know. Reserved for errors and failures that affect the current workflow.',
      },
    },
  },
  render: ({ variant, showAction }: AlertStoryArgs) => (
    <Alert variant={variant ?? 'destructive'}>
      <OctagonAlert />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to connect to the media server. Check your network settings and try again.</AlertDescription>
      {showAction && <AlertAction><Button size="xs">Retry</Button></AlertAction>}
    </Alert>
  ),
}

export const Positive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use to confirm a successful action or completed process. Keep the message specific — say what actually happened.',
      },
    },
  },
  render: ({ variant, showAction }: AlertStoryArgs) => (
    <Alert variant={variant ?? 'positive'}>
      <CheckCircle />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Import complete. 47 albums were added to your library.</AlertDescription>
      {showAction && <AlertAction><Button size="xs">View library</Button></AlertAction>}
    </Alert>
  ),
}

export const Warning: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use when something may go wrong or requires attention but is not blocking. The user can continue, but should be aware.',
      },
    },
  },
  render: ({ variant, showAction }: AlertStoryArgs) => (
    <Alert variant={variant ?? 'warning'}>
      <AlertCircle />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>12 tracks have missing metadata. Run a library scan to resolve them.</AlertDescription>
      {showAction && <AlertAction><Button size="xs">Run scan</Button></AlertAction>}
    </Alert>
  ),
}

export const Confirm: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use for pending states or actions that need a deliberate response — server updates, scheduled maintenance, or anything requiring acknowledgement.',
      },
    },
  },
  render: ({ variant, showAction }: AlertStoryArgs) => (
    <Alert variant={variant ?? 'confirm'}>
      <Info />
      <AlertTitle>Action required</AlertTitle>
      <AlertDescription>A server update is available. Restart the application to apply it.</AlertDescription>
      {showAction && <AlertAction><Button size="xs">Update now</Button></AlertAction>}
    </Alert>
  ),
}
