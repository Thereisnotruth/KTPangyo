'use client'
import { ThemeProvider as TP } from 'styled-components'
import { lightTheme } from '@/theme'

export default function ThemePrivoder({
  children,
}: { children: React.ReactNode }) {
  return (
    <TP theme={lightTheme}>
      {children}
    </TP>
  )
}
