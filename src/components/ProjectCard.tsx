import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
// import image from './Screenshot_3.png'

interface ProjectCardProps {
  cardType: string
  hashtags: string[]
  bannerUrl: string
  name: string
  content: string
  github: string
  url: string
}

export function ProjectCard({
  cardType,
  bannerUrl,
  content,
  github,
  hashtags,
  name,
  url,
}: ProjectCardProps) {
  return (
    <div className="min-h-[450px] w-full rounded-md bg-zinc-800 pb-6 md:max-w-[350px]">
      <Image
        src={bannerUrl}
        alt=""
        width={900}
        height={90}
        quality={100}
        className="h-[90px] w-full rounded-t-md object-cover"
      />

      <div
        className={`relative flex h-1.5 justify-center ${
          cardType === 'react' && 'bg-blue-500'
        } ${cardType === 'node' && 'bg-green-500'} ${
          cardType === 'react-native' && 'bg-indigo-800'
        }`}
      >
        <div
          className={`absolute -mt-4 flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full ${
            cardType === 'react' && 'bg-blue-500'
          } ${cardType === 'node' && 'bg-green-500'} ${
            cardType === 'react-native' && 'bg-indigo-800'
          } p-2`}
        >
          {cardType === 'react' && (
            <FontAwesomeIcon
              icon={faReact}
              size="2xl"
              className="text-zinc-100"
            />
          )}
          {cardType === 'node' && (
            <FontAwesomeIcon
              icon={faNodeJs}
              size="2xl"
              className="text-zinc-100"
            />
          )}
          {cardType === 'react-native' && (
            <FontAwesomeIcon
              icon={faReact}
              size="2xl"
              className="text-zinc-100"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 px-4 pt-10">
        <span className="w-full text-center text-xl font-bold text-zinc-100">
          {name}
        </span>
        <p className="text-sm leading-relaxed text-zinc-300">{content}</p>

        <div className="flex gap-3">
          {hashtags.map((hashtag, i) => (
            <span
              key={i}
              className={`rounded-md ${cardType === 'react' && 'bg-blue-500'} ${
                cardType === 'node' && 'bg-green-500'
              } ${
                cardType === 'react-native' && 'bg-indigo-800'
              } px-2 py-[2.5px] text-sm font-bold text-zinc-100`}
            >
              {hashtag}
            </span>
          ))}
        </div>

        <div className="flex justify-between gap-2">
          <a
            href={github}
            className={`w-[150px] rounded-md ${
              cardType === 'react' && 'bg-blue-500'
            } ${cardType === 'node' && 'bg-green-500'} ${
              cardType === 'react-native' && 'bg-indigo-800'
            } py-1 text-center font-bold text-zinc-100`}
          >
            GitHub
          </a>
          {url !== '' && (
            <a
              href={url}
              className={`w-[150px] rounded-md ${
                cardType === 'react' && 'bg-blue-500'
              } ${cardType === 'node' && 'bg-green-500'} ${
                cardType === 'react-native' && 'bg-indigo-800'
              } py-1 text-center font-bold text-zinc-100`}
            >
              Ver Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
