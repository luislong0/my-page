import Image from 'next/image'
import developerPic from '../../assets/developer-pic.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SocialBtn } from '../Buttons/SocialBtn'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div
      id="about"
      className="m-auto flex w-full max-w-7xl flex-col items-center justify-center px-8 py-20 md:px-20 xl:h-screen xl:flex-row xl:gap-32 2xl:px-0 2xl:py-0"
    >
      <Image
        src={developerPic}
        alt="Developer Picture"
        width={400}
        height={400}
      />

      <div
        data-aos="zoom-in"
        className="mt-20 flex flex-col gap-4 sm:gap-8  xl:mt-0"
      >
        <span className="bg-radial-gradient-text bg-clip-text text-4xl font-extrabold uppercase text-transparent sm:text-5xl">
          {'< '}Sobre mim{' />'}
        </span>

        <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
          Sou{' '}
          <span className="font-extrabold text-violet-500">
            Luis Otavio Longo
          </span>
          . Atuo como desenvolvedor Full Stack e tenho uma verdadeira paixão por
          unir o melhor do front-end e back-end. Ao longo da minha trajetória,
          tive a oportunidade de participar de diversos projetos, cada um com
          seus próprios desafios e aprendizados. Esse percurso me tornou não só
          técnico, mas também criativo e solucionador.
        </p>

        <p className="text-md leading-relaxed text-zinc-200 sm:-mt-4 sm:text-lg">
          Na hora de codificar, não penso apenas em funcionalidade. Busco
          entregar algo que realmente faça diferença, que impressione e inove.
          Me vejo como um artesão no mundo digital, cuidando de cada detalhe
          para garantir qualidade e impacto.
        </p>

        <p className="text-md leading-relaxed text-zinc-200 sm:-mt-4 sm:text-lg ">
          Se você tiver dúvidas, ideias de projetos interessantes, propostas de
          parcerias ou simplesmente quiser conversar sobre o mundo da
          tecnologia, estou à disposição! Entre em contato diretamente pelo site
          ou pelas minhas redes sociais. Será um prazer discutir novas
          oportunidades e colaborações.
        </p>

        <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
          <SocialBtn
            color="blue"
            svg={<FontAwesomeIcon icon={faLinkedin} size={'xl'} />}
            content="LinkedIn"
            href="https://github.com/luislong0"
          />

          <SocialBtn
            svg={<FontAwesomeIcon icon={faGithub} size={'xl'} />}
            color="white"
            content="GitHub"
            href="https://www.linkedin.com/in/luislong0/"
          />
        </div>
      </div>
    </div>
  )
}
