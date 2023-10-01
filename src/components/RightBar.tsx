import { useStore } from '@/zustand-store'
import React from 'react'

const links = ['home', 'about', 'port', 'services', 'contact']

export function RightBar() {
  const { isSelected, save } = useStore((store) => {
    return {
      save: store.save,
      isSelected: store.isSelected,
    }
  })

  function scrollToElement(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelect = (link: string, index: number) => {
    save(index)
    scrollToElement(link)
  }

  return (
    <aside className="fixed right-12 top-1/2 hidden h-16 -translate-y-1/2 transform flex-col gap-5 md:flex ">
      {links.map((link, i) =>
        isSelected === i + 1 ? (
          <div
            key={i}
            className="rotate-45 scale-125 transform border-2 border-zinc-100 bg-violet-600 p-[4px] ring-1 ring-violet-600 transition-all"
          />
        ) : (
          <div
            key={i}
            onClick={() => handleSelect(link, i + 1)}
            className="hover:border-1 transform border-2 border-violet-600 bg-zinc-100 p-[4px] transition-all hover:rotate-45 hover:scale-125 hover:border-zinc-100 hover:bg-violet-600 hover:ring-1 hover:ring-violet-600"
          />
        ),
      )}
    </aside>
  )
}
