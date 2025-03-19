import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text, Box } from '@regina-ignite-ui/react'

const meta: Meta<TooltipProps> = {
  title: 'Typography/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente utilizado para exibir uma tooltip',
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    tooltip: {
      description:
        'Espera uma string para mostrar na tooltip caso o usuário passe o mouse por cima',
    },
  },
}

export default meta

type Story = StoryObj<TooltipProps>

export const Primary: Story = {
  args: {
    children: (
      <Box>
        <Text>12</Text>
      </Box>
    ),
    tooltip: '21 de Outubro - indisponível',
  },
}
