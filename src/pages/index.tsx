/* eslint-disable react-hooks/exhaustive-deps */
import { Inter } from 'next/font/google'
import Hero from '@/components/Sessions/Hero'
import { RightBar } from '@/components/RightBar'
import About from '@/components/Sessions/About'
import Portfolio from '@/components/Sessions/Portfolio'
import Services from '@/components/Sessions/Services'
import Contact from '@/components/Sessions/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-zinc-900 ${inter.className}`}
    >
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <RightBar />
    </main>
  )
}
