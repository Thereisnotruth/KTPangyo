import type { ComponentPropsWithoutRef } from 'react'
import GridStyle from '@/styles/atoms/grid.style'
import type { GridProps } from '@/types/component.type'

export default function Grid({
  $gap,
  children,
  ...props
}: GridProps & ComponentPropsWithoutRef<'div'>) {
  return (
    <GridStyle
      $gap={$gap}
      {...props}
    >
      {children}
    </GridStyle>
  )
}
