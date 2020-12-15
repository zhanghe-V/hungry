import { ReactNode } from 'react'

export interface TmButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'error'
  children: ReactNode
  htmlType?: 'submit' | 'button' | 'reset'
  [key: string]: any
}