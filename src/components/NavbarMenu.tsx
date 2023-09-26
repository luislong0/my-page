import Image from 'next/image'
import { useEffect, useState } from 'react'
import logo from '../assets/logositelongo.png'

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      if (currentScrollPos <= 0) {
        setNavbar(true) // mostrar a barra de navegação quando a posição de rolagem for 0
      } else if (currentScrollPos < scrollPos) {
        setNavbar(true) // mostrar a barra de navegação ao rolar para cima
      } else {
        setNavbar(false) // esconder a barra de navegação ao rolar para baixo
      }

      setScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPos])

  return (
    <nav
      className={`md:gap-50 w-full bg-violet-950 px-6 py-14 transition-opacity duration-300 md:flex md:items-center md:justify-between md:bg-transparent`}
    >
      <div
        className={`mx-auto max-w-full px-2 sm:px-6 lg:px-8 ${
          navbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-violet-900 hover:text-white focus:bg-violet-900 focus:text-white focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                color="#8b5cf6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  color="#8b5cf6"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                color="#8b5cf6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 md:mr-20">
              <Image src={logo} alt="Logo" width={150} height={150} />
            </div>
            <div className="hidden items-center justify-center sm:ml-6 sm:flex">
              <div className="flex items-center justify-center">
                <a
                  href="#home"
                  className="text-md rounded-md px-3 py-2 font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-md ml-4 rounded-md px-3 py-2 font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
                >
                  Sobre
                </a>
                <a
                  href="#port"
                  className="text-md ml-4 rounded-md px-3 py-2 font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
                >
                  Portifólio
                </a>
                <a
                  href="#services"
                  className="text-md ml-4 rounded-md px-3 py-2 font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
                >
                  Serviços
                </a>
                <a
                  href="#contact"
                  className="text-md ml-4 rounded-md px-3 py-2 font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } w-full flex-col gap-2 sm:hidden ${
          navbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mt-10 px-2 pb-3 pt-2">
          <a
            href="#home"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 focus:bg-violet-500 focus:text-white focus:outline-none"
          >
            Home
          </a>
          <div className="my-1 h-[1px] w-full bg-violet-600" />
          <a
            href="#about"
            className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
          >
            Sobre
          </a>
          <div className="my-1 h-[1px] w-full bg-violet-600" />
          <a
            href="#port"
            className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
          >
            Portfólio
          </a>
          <div className="my-1 h-[1px] w-full bg-violet-600" />
          <a
            href="#services"
            className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
          >
            Serviços
          </a>
          <div className="my-1 h-[1px] w-full bg-violet-600" />
          <a
            href="#contact"
            className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white focus:outline-none"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}
