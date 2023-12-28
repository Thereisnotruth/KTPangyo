import ButtonStyle from '@/styled/atoms/button.style'
import type ButtonProps from '@/types/button.type'

export default function Button({ children, color, outline, onClick }: ButtonProps) {
  return (
    <ButtonStyle
      color={color}
      onClick={onClick}
      outline={outline}
    >
      {children}
    </ButtonStyle>
  )
}
