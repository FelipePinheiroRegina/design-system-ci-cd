import { ToastProvider } from '@radix-ui/react-toast'
import {
  ToastRoot,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './styles'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { X } from '@phosphor-icons/react'

export interface ToastProps {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  toastTitle: string
  toastDescription: ReactNode
}

export function Toast({
  open = false,
  onOpenChange,
  toastTitle,
  toastDescription,
}: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={onOpenChange} duration={2000}>
        <ToastTitle>{toastTitle}</ToastTitle>
        <ToastClose>
          <X />
        </ToastClose>
        <ToastDescription asChild>{toastDescription}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
