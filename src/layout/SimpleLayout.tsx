import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function SimpleLayout({ children }: LayoutProps) {
  return (
    <>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        {children}
      </main>
    </>
  )
}
