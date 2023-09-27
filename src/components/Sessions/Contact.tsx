import { useEffect } from 'react'
import AOS from 'aos'
import { ContactForm } from '../ContactForm'

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
    })
  }, [])

  return (
    <div
      id="contact"
      className="h-fit w-full bg-radial-gradient pb-0 pt-20 sm:pb-20 xl:min-h-screen"
    >
      <div className="m-auto flex w-full max-w-7xl flex-col items-center justify-center gap-20 md:px-20 xl:flex-row xl:gap-32">
        <div
          data-aos="zoom-in"
          className=" flex flex-1 flex-col gap-4 px-8 sm:gap-8 xl:mt-0 2xl:px-0"
        >
          <h2 className="text-4xl font-extrabold uppercase text-zinc-100 sm:text-5xl">
            {'< '}
            Entre em contato
            {' />'}
          </h2>

          <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
            Possui dúvidas sobre tecnologia, curiosidades sobre algum projeto
            que desenvolvi ou simplesmente gostaria de discutir sobre as
            tendências do mercado digital? Adoraria conversar e esclarecer suas
            questões. Além disso, se meu trabalho chamou sua atenção e está
            considerando contratar um serviço, estou totalmente aberto para
            discutir como posso atender às suas expectativas e necessidades. Seu
            feedback, seja ele uma dúvida, elogio ou proposta, é valioso para
            mim. Por isso, sinta-se à vontade para entrar em contato a qualquer
            momento.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
