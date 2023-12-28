'use client'
import { useRouter } from 'next/navigation'
import Button from '@/components/atoms/Button'

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <Button onClick={() => router.push('/tic-tac-toe')}>틱택토</Button>
    </main>
  )
}
