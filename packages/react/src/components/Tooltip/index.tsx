import { TooltipContainer, TooltipContent, TooltipTrigger } from './styles'
import {
  TooltipProvider,
  TooltipPortal,
  TooltipArrow,
} from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  tooltip: string
}

export const Tooltip = ({ children, tooltip }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {tooltip}
            <TooltipArrow className="arrow" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
