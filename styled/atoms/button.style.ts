import styled from "styled-components"
import ButtonProps from "@/types/button.type"
import { primary } from "../theme"

const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${primary};
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.3rem;
  border: ${props => props.outline ? '1px solid black' : 'none'};
  cursor: pointer;
  transition: ease-in-out 0.2s;
  color: #ffffff;
  &: hover {
    background-color: gray;
  }
`

export default ButtonStyle