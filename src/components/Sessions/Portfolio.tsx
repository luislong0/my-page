import Link from 'next/link'
import { Carrousel } from '../Carrousel'
import { TypedSpan } from '../TypedSpan'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div
      id="portfolio"
      className="h-fit w-full bg-radial-gradient xl:min-h-screen"
    >
      <div className="m-auto flex w-full max-w-7xl flex-col items-center justify-center px-8 py-20 md:px-20 xl:h-screen xl:flex-row xl:gap-32 2xl:px-0 2xl:py-0">
        <div className="">
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <h2 className="text-4xl font-extrabold uppercase text-zinc-100 sm:text-5xl">
              {'< '}
              Portifólio
              {' />'}
            </h2>
            <TypedSpan />
          </div>

          <div className="mt-20 flex flex-col items-center gap-20 xl:flex-row xl:items-start">
            <div
              data-aos="zoom-in"
              className="flex flex-1 flex-col gap-4 px-4 sm:px-0"
            >
              <p className="text-md leading-relaxed text-zinc-100 sm:text-lg">
                Desenvolvo aplicações e páginas de ponta a ponta, utilizando as
                tecnologias mais requisitadas e valorizadas no mercado atual.
                Meu foco reside em alinhar produtividade com inovação,
                assegurando soluções que não apenas atendam às expectativas, mas
                que também elevem padrões. No coração desse processo, estão
                ferramentas e frameworks de alta performance e confiabilidade.
                Ao lado, você encontrará detalhes sobre as tecnologias
                específicas com as quais trabalho e aprofundo minha expertise.
              </p>

              <p className="text-md flex-1  leading-relaxed text-zinc-100 sm:text-lg">
                Confira os projetos que já coloquei em prática! É lá que você
                vai ver como todas essas palavras se transformam em ação. Cada
                projeto é uma pegada do meu jeito de transformar ideias em
                soluções bacanas e práticas. Dando uma olhada no meu portfólio,
                você vai ver na prática como eu uso essas tecnologias e, quem
                sabe, se inspirar para a gente criar algo juntos. Dá uma espiada
                e veja o que acha!
              </p>

              <Link
                href={''}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-md border-2 border-violet-100 px-8 py-2.5 font-bold text-violet-100 transition-all hover:scale-105 hover:bg-violet-100 hover:font-extrabold hover:text-violet-950 sm:max-w-[250px]"
              >
                Ver projetos
                <ArrowRight size={22} strokeWidth={3} />
              </Link>
            </div>
            <Carrousel />
          </div>
        </div>
      </div>
    </div>
  )
}
