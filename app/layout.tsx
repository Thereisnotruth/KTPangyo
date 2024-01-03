import type { Metadata } from 'next'
import ThemePrivoder from './theme-provider'
import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

export const metadata: Metadata = {
  title: 'test',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Nextjs에서는 html과 body를 자동으로 생성하지 않기 때문에 Root Layout에서 html과 body 정의 필수
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ThemePrivoder>
            {children}
          </ThemePrivoder>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
