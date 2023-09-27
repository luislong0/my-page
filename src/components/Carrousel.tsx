import { TechCard } from './TechCard'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export function Carrousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.08,
      spacing: 5,
    },
  })

  return (
    <div ref={ref} className="keen-slider max-w-sm px-4">
      <div className="keen-slider__slide number-slide1">
        <TechCard tech="react" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <TechCard tech="node" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <TechCard tech="native" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <TechCard tech="type" />
      </div>
    </div>
  )
}
