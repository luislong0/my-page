import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main
        className={`flex flex-col items-center justify-between bg-zinc-900 ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
