import { TypeAnimation } from 'react-type-animation'

export function TypedSpan() {
  return (
    <code className="flex h-10 flex-col gap-1 text-xl font-bold text-violet-400 sm:h-auto sm:flex-row sm:gap-2">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Páginas e aplicações desenvolvidas de ponta a ponta utilizando React',
          1000, // wait 3s before replacing "Mice" with "Hamsters"
          'Páginas e aplicações desenvolvidas de ponta a ponta utilizando Node',
          1000,
          'Páginas e aplicações desenvolvidas de ponta a ponta utilizando React Native',
          1000,
          'Páginas e aplicações desenvolvidas de ponta a ponta utilizando Typescript',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />
    </code>
  )
}
