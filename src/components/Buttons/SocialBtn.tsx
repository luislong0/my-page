/* eslint-disable @typescript-eslint/no-explicit-any */

interface SocialBtnProps {
  svg: any
  content: string
  color?: string
  href: string
}

export function SocialBtn({
  svg,
  content,
  color = 'white',
  href,
}: SocialBtnProps) {
  return (
    <a
      href={href}
      className={`${
        color === 'blue' &&
        'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
      }
      ${
        color === 'white' &&
        'border-2 border-zinc-200 text-zinc-200 hover:bg-zinc-200 hover:text-zinc-950'
      } flex w-full max-w-[250px] items-center justify-center gap-3 rounded-md px-8 py-2.5 font-bold transition-all hover:scale-105 hover:font-extrabold`}
    >
      {svg}
      {content}
    </a>
  )
}
