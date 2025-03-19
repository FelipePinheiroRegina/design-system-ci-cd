import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  '.arrow': {
    fill: '$gray900',
  },
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  padding: '$3 $4',
  borderRadius: '$sm',
})
