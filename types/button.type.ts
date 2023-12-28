import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  color?: string
  outline?: boolean
}

export default ButtonProps
