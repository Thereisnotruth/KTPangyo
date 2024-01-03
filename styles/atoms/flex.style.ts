import styled from 'styled-components'
import type { FlexProps } from '@/types/component.type'
import { computedMargin, computedPadding } from '@/utils/style'

function setJustify(justify?: string) {
  if (!justify)
    return 'start'
  if (justify === 'start' || justify === 'center')
    return justify
  return `space-${justify}`
}

function setAlign(align?: string) {
  if (!align)
    return 'start'
  if (align === 'start' || align === 'center')
    return align
  return `space-${align}`
}

const FlexStyle = styled.div<FlexProps>`
  ${props => computedPadding(props)}
  ${props => computedMargin(props)}
  display: flex;
  flex-direction: ${props => props.$direction ?? 'row'};
  justify-content: ${props => setJustify(props.$justify)};
  align-items: ${props => setAlign(props.$align)};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
  gap: ${props => props.$gap || 0}rem;
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '100%'};
  overflow: auto;
  background-color: ${props => props.theme.colors.bgColor};
`

export default FlexStyle
