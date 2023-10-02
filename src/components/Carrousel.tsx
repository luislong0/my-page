import { TechCard } from './TechCard'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

const reactText =
  'React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário. Centra-se na criação de componentes reutilizáveis, permitindo que as interfaces sejam construídas como uma composição de componentes. O React é particularmente famoso pela sua abordagem "virtual DOM", que otimiza a atualização e renderização da página, tornando as aplicações mais rápidas e eficientes. É amplamente utilizado em aplicações de página única (SPAs) e tem um vasto ecossistema com várias ferramentas, bibliotecas e comunidade ativa.'
const nodeText =
  'Node.js é uma plataforma que permite a execução de código JavaScript no lado do servidor, usando o motor JavaScript V8 do Google Chrome. É conhecido pelo seu modelo de I/O não bloqueante e orientado a eventos, tornando-o eficiente para aplicações de rede, como servidores web. Com Node.js, desenvolvedores podem usar JavaScript tanto no frontend quanto no backend, facilitando a integração. Além disso, vem com o npm, um gestor de pacotes, que simplifica a gestão de bibliotecas e ferramentas. Possui uma comunidade ativa e um extenso ecossistema de recursos auxiliares.'
const nativeText =
  'React Native é um framework do Facebook que permite criar aplicações móveis nativas para iOS e Android usando JavaScript e React. Ele proporciona a experiência de uma aplicação nativa, traduzindo componentes em widgets nativos da plataforma. Oferece "hot-reloading", facilitando o desenvolvimento ao mostrar mudanças em tempo real. Com um vasto ecossistema e uma comunidade ativa, o React Native é uma ferramenta versátil para desenvolvimento móvel.'
const typescriptText =
  'TypeScript é um superconjunto tipado de JavaScript desenvolvido pela Microsoft. Ele adiciona tipos estáticos opcionais ao JavaScript, permitindo que os desenvolvedores detectem erros de tipo em tempo de compilação, melhorando a qualidade e a manutenibilidade do código. Ao compilar, o TypeScript é transformado em JavaScript puro, tornando-o compatível com qualquer ambiente JavaScript. Além dos tipos, oferece outras características como interfaces e enums, enriquecendo o desenvolvimento JS.'

export function Carrousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.08,
      spacing: 5,
    },
  })

  return (
    <div ref={ref} className="keen-slider max-w-[350px] px-4 sm:max-w-sm">
      <div className="keen-slider__slide number-slide1">
        <TechCard tech="react" text={reactText} />
      </div>
      <div className="keen-slider__slide number-slide2">
        <TechCard tech="node" text={nodeText} />
      </div>
      <div className="keen-slider__slide number-slide3">
        <TechCard tech="native" text={nativeText} />
      </div>
      <div className="keen-slider__slide number-slide4">
        <TechCard tech="type" text={typescriptText} />
      </div>
    </div>
  )
}
