import type { ComponentPropsWithoutRef } from 'react'
import GridItemStyle from '@/styles/atoms/grid-item.style'
import type { GridItemProps } from '@/types/component.type'

export default function GridItem({
  span,
  children,
  ...props
}: GridItemProps & ComponentPropsWithoutRef<'div'>) {
  return (
    <GridItemStyle
      span={span}
      {...props}
    >
      {children}
    </GridItemStyle>
  )
}
