'use client'
import Button from "@/components/atoms/Button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <Button onClick={() => router.push('/tic-tac-toe')}>틱택토</Button>
    </main>
  )
}