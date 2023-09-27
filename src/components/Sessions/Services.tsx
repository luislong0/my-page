import { useEffect } from 'react'
import { ServiceBox } from '../ServiceBox'
import AOS from 'aos'

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div
      id="services"
      className="m-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-8 py-20 md:px-20 2xl:px-0"
    >
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="bg-radial-gradient-text bg-clip-text text-4xl font-extrabold uppercase text-transparent sm:text-5xl">
          {'< '}Serviços{' />'}
        </h2>
        <code className="text-xl text-zinc-100">
          Conheça uma seleção de serviços que desenvolvo, abrangendo desde
          páginas web, aplicações web, mobile até a criação de APIs para
          diversas áreas e muito mais.
        </code>
      </div>

      <div data-aos="zoom-in" className="flex flex-col gap-6">
        <ServiceBox service="webPage" />
        <ServiceBox service="webApp" />
        <ServiceBox service="mobile" />
        <ServiceBox service="api" />
      </div>
    </div>
  )
}
