import Image from 'next/image'
import landingPageIcon from '../assets/icons8-landing-page-90.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faGlobe,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'

interface ServiceBoxProps {
  service: string
}

export function ServiceBox({ service }: ServiceBoxProps) {
  return (
    <div className="flex rounded-md border-2 border-zinc-100">
      {service === 'webPage' && (
        <>
          <div className="hidden w-full max-w-[200px] items-center justify-center rounded-l-md border-r-2 bg-radial-gradient xl:flex">
            <Image src={landingPageIcon} alt="Landing page Icon" />
            {/* <FontAwesomeIcon icon={faReact} size={'5x'} /> */}
          </div>
          <div className="flex flex-1 flex-col gap-5 p-8">
            <span className="text-2xl font-bold uppercase text-violet-500">
              Páginas web
            </span>
            <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
              As <span className="font-bold text-violet-500">páginas web</span>{' '}
              e{' '}
              <span className="font-bold text-violet-500">landing pages </span>
              são essenciais no mundo digital. Elas desempenham um papel crucial
              em marketing, convertendo visitantes em clientes e destacando-se
              da concorrência. No ambiente de trabalho, uma página web bem
              estruturada promove comunicação e credibilidade. Quando
              otimizadas, estas páginas também impulsionam a produtividade,
              facilitando a colaboração e a automação de processos. Em essência,
              uma forte presença online é vital para o sucesso nos dias de hoje.
            </p>
          </div>
        </>
      )}
      {service === 'webApp' && (
        <>
          <div className="hidden w-full max-w-[200px] items-center justify-center rounded-l-md border-r-2 bg-radial-gradient text-zinc-100 xl:flex">
            <FontAwesomeIcon icon={faDesktop} size={'4x'} />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-8">
            <span className="text-2xl font-bold uppercase text-violet-500">
              Aplicações Web
            </span>
            <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
              Aplicações web{' '}
              <span className="font-bold text-violet-500">full stack</span>{' '}
              englobam a totalidade do desenvolvimento digital, abarcando tanto
              o <span className="font-bold text-violet-500">front-end</span>{' '}
              (parte visível ao usuário) quanto o{' '}
              <span className="font-bold text-violet-500">back-end</span>{' '}
              (infraestrutura e lógica de negócios por trás dos bastidores).
              Esta abordagem significa que o desenvolvedor ou a equipe trabalha
              em todos os aspectos da aplicação, garantindo coesão e harmonia
              entre a interface do usuário e os sistemas subjacentes. Optar por
              uma perspectiva full stack permite uma maior flexibilidade e
              controle sobre a experiência total da aplicação, sendo essencial
              para criações integradas e eficientes na era digital
              contemporânea.
            </p>
          </div>
        </>
      )}
      {service === 'mobile' && (
        <>
          <div className="hidden w-full max-w-[200px] items-center justify-center rounded-l-md border-r-2 bg-radial-gradient text-zinc-100 xl:flex">
            <FontAwesomeIcon icon={faMobileScreen} size={'4x'} />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-8">
            <span className="text-2xl font-bold uppercase text-violet-500">
              Mobile
            </span>
            <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
              As aplicações móveis têm evoluído constantemente, e o uso de
              frameworks como o{' '}
              <span className="font-bold text-violet-500">React Native </span>{' '}
              surge como uma solução para desenvolvimento cross-platform,
              permitindo criar apps para iOS e Android usando uma única base de
              código. O React Native, oriundo do React - uma biblioteca do
              JavaScript - facilita a criação de interfaces de usuário com
              componentes reutilizáveis. Em paralelo, o Expo oferece um ambiente
              de desenvolvimento e ferramentas que simplificam o processo de
              criação, teste e publicação de apps em React Native. Combinando os
              dois, desenvolvedores podem criar aplicações móveis eficientes e
              escaláveis com uma curva de aprendizado reduzida
            </p>
          </div>
        </>
      )}
      {service === 'api' && (
        <>
          <div className="hidden w-full max-w-[200px] items-center justify-center rounded-l-md border-r-2 bg-radial-gradient text-zinc-100 xl:flex">
            <FontAwesomeIcon icon={faGlobe} size={'4x'} />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-8">
            <span className="text-2xl font-bold uppercase text-violet-500">
              {"API's"}
            </span>
            <p className="text-md leading-relaxed text-zinc-200 sm:text-lg">
              Utilizar{' '}
              <span className="font-bold text-violet-500">Node.js </span>
              para criar{' '}
              <span className="font-bold text-violet-500">APIs </span>
              permite às empresas desenvolverem serviços back-end de maneira
              ágil e escalável, graças ao modelo assíncrono e orientado a
              eventos do Node. Isso se traduz em aplicações mais responsivas e
              capazes de lidar com muitas requisições simultaneamente. Além
              disso, ao usar JavaScript tanto no front-end quanto no back-end,
              as empresas podem ter equipes mais integradas e versáteis. O
              resultado é uma maior coesão no desenvolvimento, redução de
              custos, e capacidade de se adaptar rapidamente às mudanças do
              mercado ou requisitos do cliente.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
