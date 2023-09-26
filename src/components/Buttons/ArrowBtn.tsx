import { ArrowRight } from 'lucide-react'

export function ArrowBtn() {
  return (
    <a
      href="#_"
      className="group relative overflow-hidden rounded bg-violet-500 px-5 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-400 hover:ring-2 hover:ring-violet-400 hover:ring-offset-2 sm:max-w-[250px]"
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
      <span className="relative flex w-full items-center justify-center gap-2 font-extrabold">
        Download CV <ArrowRight size={22} strokeWidth={3} />
      </span>
    </a>
  )
}
