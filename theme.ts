const theme = {
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  base: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  xl: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
}
export const lightTheme = {
  colors: {
    primary: '#0779ff',
    primaryHover: '#0668ee',

    secondary: '#667eff',
    secondaryHover: '#556dee',

    success: '#26b872',
    successHover: '#15a761',

    error: '#ff4248',
    errorHover: '#ee3137',

    warning: '#fbcb4f',
    warningHover: '#eaba3e',

    bgColor: '#dedede',
  },
  ...theme,
}
