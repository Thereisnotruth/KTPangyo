import type { ComponentPropsWithoutRef } from 'react'
import ButtonStyle from '@/styles/atoms/button.style'
import type { ButtonProps } from '@/types/component.type'

export default function Button({
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <ButtonStyle
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}
