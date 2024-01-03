import styled, { css } from 'styled-components'
import type { ButtonProps } from '@/types/component.type'
import { computedMargin, computedPadding } from '@/utils/style'

function computedColor(theme: Record<string, any>, color?: string) {
  let bgColor = theme.colors.primary
  let bgColorHover = theme.colors.primaryHover
  if (color === 'secondary'
    || color === 'success'
    || color === 'warning'
    || color === 'error') {
    bgColor = theme.colors[color]
    bgColorHover = theme.colors[`${color}Hover`]
  }

  return css`
    background-color: ${bgColor};
    color: #ffffff;
    &:hover {
      background-color: ${bgColorHover};
    }
  `
}

const ButtonStyle = styled.button<ButtonProps>`
  ${props => computedColor(props.theme, props.$color)}
  ${props => computedPadding(props)}
  ${props => computedMargin(props)}
  font-size: ${props => props.$size ? props.theme[props.$size].fontSize : '1rem'};
  line-height: ${props => props.$size ? props.theme[props.$size].lineHeight : 'normal'};
  border-radius: 0.3rem;
  border: ${props => props.$outline ? '1px solid black' : 'none'};
  cursor: pointer;
  transition: ease-in-out 0.2s;
  width: ${props => props.$wide ? `calc(100% - 2 * ${props.$ml || props.$mr || props.$mx || props.$m || 0}rem)` : 'auto'};
`

export default ButtonStyle
