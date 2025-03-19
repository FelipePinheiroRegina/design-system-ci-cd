import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@regina-ignite-ui/react'
import { useState } from 'react'

const meta: Meta<ToastProps> = {
  title: 'Typography/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente utilizado para exibir um toast',
      },
    },
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      const title = 'Agendamento realizado'
      const element = (
        <time dateTime={new Date().toISOString()}>
          {new Date().toISOString()}
        </time>
      )
      return (
        <Box css={{ height: '300px', width: '600px' }}>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <Story
            args={{
              open,
              onOpenChange: setOpen,
              toastTitle: title,
              toastDescription: element,
            }}
          />
        </Box>
      )
    },
  ],
  argTypes: {
    open: {
      control: 'boolean',
      description:
        'nesse parâmetro você deve passar a variável booleana para controlar o toast',
    },
    onOpenChange: {
      description:
        'nesse parâmetro voce deve passar a função setter do estado que controla o toast',
    },
    toastTitle: {
      control: 'text',
      description:
        'nesse parâmetro você passa uma string que representará o título',
    },
    toastDescription: {
      description: 'nesse parâmetro você passa um elemento ReactNode',
    },
  },
}

export default meta

type Story = StoryObj<ToastProps>

export const Primary: Story = {}
