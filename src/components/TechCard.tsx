import { limitText } from '@/utils/limitText'
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import typescriptLogo from '../assets/icons8-typescript.svg'

interface TechCardProps {
  tech: 'react' | 'node' | 'native' | 'type'
  text: string
}

export function TechCard({ tech, text }: TechCardProps) {
  const [isSliced, setIsSliced] = useState(true)

  const slicedText = limitText(text, 250)

  return (
    <>
      {tech === 'react' && (
        <div className="flex h-full min-h-[500px] w-[300px] flex-col justify-between gap-5 rounded-md border-2 border-blue-500 bg-zinc-950 p-5 sm:w-[350px]">
          <span className="flex flex-col items-center justify-center gap-2 text-blue-500">
            <FontAwesomeIcon icon={faReact} size={'9x'} />
            <code className="text-xl font-bold">React</code>
          </span>

          <p className="text-zinc-100">
            {isSliced === true ? (
              <span>
                {slicedText}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver mais
                </button>
              </span>
            ) : (
              <span>
                {text}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver menos
                </button>
              </span>
            )}
          </p>

          <Link
            href={'/projects'}
            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-blue-500 px-8 py-2.5 font-bold text-blue-500 transition-all hover:scale-105 hover:bg-blue-500 hover:font-extrabold hover:text-white"
          >
            Projetos
          </Link>
        </div>
      )}

      {tech === 'node' && (
        <div className="flex h-full min-h-[500px] w-[300px] flex-col justify-between gap-5 rounded-md border-2 border-green-500 bg-zinc-950 p-5 sm:w-[350px]">
          <span className="flex flex-col items-center justify-center gap-2 text-green-500">
            <FontAwesomeIcon icon={faNodeJs} size={'9x'} />
            <code className="text-xl font-bold">NodeJS</code>
          </span>

          <p className="text-zinc-100">
            {isSliced === true ? (
              <span>
                {slicedText}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver mais
                </button>
              </span>
            ) : (
              <span>
                {text}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver menos
                </button>
              </span>
            )}
          </p>

          <Link
            href={''}
            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-green-500 px-8 py-2.5 font-bold text-green-500 transition-all hover:scale-105 hover:bg-green-500 hover:font-extrabold hover:text-white"
          >
            Projetos
          </Link>
        </div>
      )}

      {tech === 'native' && (
        <div className="flex h-full min-h-[500px] w-[300px] flex-col justify-between gap-5 rounded-md border-2 border-indigo-700 bg-zinc-950 p-6 sm:w-[350px]">
          <span className="flex flex-col items-center justify-center gap-2 text-indigo-700">
            <FontAwesomeIcon icon={faReact} size={'9x'} />
            <code className="text-xl font-bold">React Native</code>
          </span>

          <p className="text-zinc-100">
            {isSliced === true ? (
              <span>
                {slicedText}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver mais
                </button>
              </span>
            ) : (
              <span>
                {text}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver menos
                </button>
              </span>
            )}
          </p>

          <Link
            href={''}
            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-indigo-700 px-8 py-2.5 font-bold text-indigo-700 transition-all hover:scale-105 hover:bg-indigo-700 hover:font-extrabold hover:text-white"
          >
            Projetos
          </Link>
        </div>
      )}

      {tech === 'type' && (
        <div className="flex h-full min-h-[500px] w-[300px] flex-col justify-between gap-5 rounded-md border-2 border-sky-600 bg-zinc-950 p-6 sm:w-[350px]">
          <span className="flex flex-col items-center justify-center gap-2 text-sky-600">
            <Image src={typescriptLogo} alt="Typescript Logo" />
            <code className="text-xl font-bold">Typescript</code>
          </span>

          <p className="text-zinc-100">
            {isSliced === true ? (
              <span>
                {slicedText}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver mais
                </button>
              </span>
            ) : (
              <span>
                {text}{' '}
                <button
                  className="font-bold"
                  onClick={() => setIsSliced(!isSliced)}
                >
                  Ver menos
                </button>
              </span>
            )}
          </p>

          <Link
            href={''}
            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-sky-600 px-8 py-2.5 font-bold text-sky-600 transition-all hover:scale-105 hover:bg-sky-600 hover:font-extrabold hover:text-white"
          >
            Projetos
          </Link>
        </div>
      )}
    </>
  )
}
