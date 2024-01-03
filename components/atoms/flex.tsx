import type { ComponentPropsWithoutRef } from 'react'
import FlexStyle from '@/styles/atoms/flex.style'
import type { FlexProps } from '@/types/component.type'
import splitStyleProps from '@/utils/style'

export default function Flex({
  children,
  ...props
}: FlexProps & ComponentPropsWithoutRef<'div'>) {
  const { styledProps } = splitStyleProps(props)
  return (
    <FlexStyle {...styledProps}>
      {children}
    </FlexStyle>
  )
}
