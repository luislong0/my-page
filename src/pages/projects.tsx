import { ProjectButtonTypes } from '@/components/ProjectButtonTypes'
import { ProjectCard } from '@/components/ProjectCard'
import SimpleLayout from '@/layout/SimpleLayout'
import { useStore } from '@/zustand-store'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const { projects } = useStore((store) => {
    return {
      projects: store.projects,
    }
  })

  return (
    <SimpleLayout>
      <div className="mx-auto w-full max-w-7xl px-8 py-20 2xl:px-0">
        <div className="mb-16 flex flex-col items-center justify-center gap-6">
          <div className="relative flex w-full flex-col items-start justify-start gap-8 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href={'/'}
              className="static left-0 flex items-center font-medium text-zinc-200 hover:text-violet-500 sm:absolute"
            >
              <ChevronLeft /> Início
            </Link>
            <h2 className="text-5xl font-extrabold uppercase text-zinc-200">
              Meus projetos
            </h2>
          </div>
          <p className="text-lg font-medium text-zinc-300">
            Confira abaixo uma seleção dos meus projetos mais recentes e
            relevantes. Se deseja ter uma visão mais completa, analisar códigos
            ou explorar outros trabalhos que desenvolvi ao longo do tempo,
            sinta-se à vontade para visitar meu{' '}
            <a href="" className="font-bold text-violet-500">
              Github
            </a>
            . Estou sempre atualizando e adicionando novos conteúdos.
          </p>
        </div>

        <ProjectButtonTypes />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                cardType={project.type}
                hashtags={project.hashtags}
                bannerUrl={project.bannerUrl}
                name={project.name}
                content={project.content}
                github={project.github}
                url={project.siteUrl}
              />
            )
          })}
        </div>
      </div>
    </SimpleLayout>
  )
}
