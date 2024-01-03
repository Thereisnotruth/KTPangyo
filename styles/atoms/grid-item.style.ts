import styled from 'styled-components'
import type { GridItemProps } from '@/types/component.type'

const GridItemStyle = styled.div<GridItemProps>`
  grid-column: ${props => `span ${props.span}`};
`

export default GridItemStyle
