import { css } from 'styled-components'
import type { BaseProps } from '@/types/component.type'

export function computedPadding(props: BaseProps) {
  return css`
    padding-top: ${props.$pt || props.$py || props.$p || '0'}rem;
    padding-bottom: ${props.$pb || props.$py || props.$p || '0'}rem;
    padding-right: ${props.$pr || props.$px || props.$p || '0'}rem;
    padding-left: ${props.$pl || props.$px || props.$p || '0'}rem;
  `
}
export function computedMargin(props: BaseProps) {
  return css`
    margin-top: ${props.$mt || props.$my || props.$m || '0'}rem;
    margin-bottom: ${props.$mb || props.$my || props.$m || '0'}rem;
    margin-right: ${props.$mr || props.$mx || props.$m || '0'}rem;
    margin-left: ${props.$ml || props.$mx || props.$m || '0'}rem;
  `
}
export default function splitStyleProps<Props extends Record<string, any>>(props: Props) {
  const styledProps: any = {}
  const featureProps: any = {}

  for (const key of Object.keys(props)) {
    if (key.startsWith('$'))
      styledProps[key] = props[key]

    else
      featureProps[key] = props[key]
  }
  return {
    styledProps,
    featureProps,
  }
}
