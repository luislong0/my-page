/* eslint-disable react-hooks/exhaustive-deps */
import { Inter } from 'next/font/google'
import Hero from '@/components/Sessions/Hero'
import { RightBar } from '@/components/RightBar'
import About from '@/components/Sessions/About'
import Portfolio from '@/components/Sessions/Portfolio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-zinc-950 ${inter.className}`}
    >
      <Hero />
      <About />
      <Portfolio />
      <RightBar />
    </main>
  )
}
