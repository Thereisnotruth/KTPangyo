import styled from 'styled-components'
import type { GridProps } from '@/types/component.type'

const GridStyle = styled.div<GridProps>`
  display: grid;
  gap: ${props => props.$gap}rem;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 100%;
`

export default GridStyle
