import styled, { css } from 'styled-components'
import type ButtonProps from '@/types/button.type'

function setColorStyle(color: string | undefined, theme: any) {
  switch (color) {
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: #ffffff;
        &:hover {
          background-color: ${theme.colors.primaryHover}
        }
      `
  }
}

const ButtonStyle = styled.button<ButtonProps>`
  ${props => setColorStyle(props.color, props.theme)}
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.3rem;
  border: ${props => props.outline ? '1px solid black' : 'none'};
  cursor: pointer;
  transition: ease-in-out 0.2s;
`

export default ButtonStyle
