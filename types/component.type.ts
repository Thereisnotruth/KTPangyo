export interface BaseProps {
  $p?: string | number
  $pt?: string | number
  $pr?: string | number
  $pb?: string | number
  $pl?: string | number
  $py?: string | number
  $px?: string | number
  $m?: string | number
  $mt?: string | number
  $mr?: string | number
  $mb?: string | number
  $ml?: string | number
  $my?: string | number
  $mx?: string | number
  $width?: string
  $height?: string
}

export interface ButtonProps extends BaseProps {
  $size?: 'sm' | 'base' | 'lg' | 'xl'
  $color?: string
  $outline?: boolean
  $wide?: boolean
}

export interface FlexProps extends BaseProps {
  $gap?: number | string
  $direction?: 'row' | 'column'
  $justify?: 'start' | 'end' | 'center' | 'between' | 'evenly'
  $align?: 'stretch' | 'center' | 'start' | 'end'
  $wrap?: boolean
}

export interface GridProps extends BaseProps {
  $gap?: string | number
}

export interface GridItemProps extends BaseProps {
  span?: string | number
}
