import Image from 'next/image'

import emojiPng from '../../assets/emoji-iphone.png'
import NavbarMenu from '../NavbarMenu'
import SocialMediaIcons from '../SocialMediaIcons'
import { ArrowBtn } from '../Buttons/ArrowBtn'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div id="home" className="relative w-full bg-radial-gradient xl:h-screen">
      <NavbarMenu />
      <div className="m-auto flex w-full max-w-7xl flex-col items-center justify-center px-8 md:px-20 xl:h-[80vh] xl:flex-row xl:gap-10 2xl:px-0">
        <div
          data-aos="zoom-in"
          className="mt-10 flex flex-col gap-10 sm:gap-12"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold uppercase text-violet-300 sm:text-7xl">
              {'< '}
              <span className="text-white">Longo</span>. Dev
              {' />'}
            </h1>
            <code className="text-md text-violet-400 sm:text-xl">
              Fullstack Developer
            </code>
          </div>

          <p className="text-md font-medium leading-relaxed text-zinc-200 sm:text-xl">
            Desenvolvedor com formação em Análise e Desenvolvimento de Sistemas,
            apaixonado por tecnologia e preparado para desafios em ambientes
            inovadores. Atualizado com as últimas tendências, busco sempre uma
            oportunidade para contribuir e crescer na área de tecnologia.
          </p>

          <SocialMediaIcons />
          <ArrowBtn />
        </div>

        <Image src={emojiPng} alt={'emoji'} width={400} height={400} />
      </div>
    </div>
  )
}
