import { create } from 'zustand'

interface Project {
  id: number
  name: string
  bannerUrl: string
  type: string
  content: string
  hashtags: string[]
  github: string
  siteUrl: string
}

export interface NavbarState {
  isSelected: number
  selectedButton: string
  projects: Project[]
  save: (index: number) => void
  handleSelectButton(type: string): void
}

const InitialProjects = [
  {
    id: 1,
    name: 'BookWise App',
    bannerUrl: '/bookwise.png',
    type: 'react',
    content:
      'Trata-se de um sistema em que o usuário pode visualizar e avaliar livros, permitindo que outras pessoas vejam essas avaliações antes de comprar ou alugar. Com essas avaliações, os usuários podem obter feedbacks de outros usuários sobre o livro e decidir se devem ou não comprá-lo ou alugá-lo',
    hashtags: ['#frontend', '#backend', '#fullstack'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 2,
    name: 'Ignite Call',
    bannerUrl: '/igniteCall.png',
    type: 'react',
    content:
      'A aplicação é um sistema fullstack integrado ao Google e ao Google Calendar do usuário, permitindo agendar eventos, reuniões e compromissos com facilidade. Além disso, qualquer marcação feita através da aplicação é automaticamente sincronizada com o Google Calendar e gera um link para uma reunião no Google Meet.',
    hashtags: ['#frontend', '#backend', '#fullstack'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 3,
    name: 'Find a Friend API',
    bannerUrl: '/findAFriend.png',
    type: 'node',
    content:
      'Nesta aplicação, os usuários têm a oportunidade de visualizar e adotar animais em sua localidade. Proporcionamos um ambiente confiável para que organizações registrem animais prontos para adoção. Adicionalmente, nossa plataforma oferece uma ferramenta de busca avançada, que vai desde a pesquisa pelo nome do animal até a sua raça.',
    hashtags: ['#backend', '#mySQL', '#fullstack'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 4,
    name: 'My Climate',
    bannerUrl: '/myClimate.png',
    type: 'react',
    content:
      'Nesta aplicação, os usuários têm a oportunidade de visualizar e acompanhar as previsões meteorológicas de sua localidade. Proporcionamos um ambiente intuitivo e moderno para que fontes confiáveis forneçam informações climáticas atualizadas. Adicionalmente, nossa plataforma, desenvolvida em Next.js, oferece uma ferramenta de busca avançada, que vai desde a pesquisa por nome da cidade até condições climáticas específicas.',
    hashtags: ['#frontend', '#API'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 5,
    name: 'Github Blog',
    bannerUrl: '/githubBlog.png',
    type: 'react',
    content:
      'Esta aplicação é um blog pessoal hospedado no GitHub, onde os posts são representados por issues dentro de um repositório do Git. Para coletar esses dados, utilizamos a API do GitHub, que nos permite acessar tanto as informações pessoais quanto os detalhes das issues.',
    hashtags: ['#frontend', '#API', '#Github'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 6,
    name: 'Daily Diet',
    bannerUrl: '/dailyDiet.png',
    type: 'node',
    content:
      'Esta aplicação é uma API desenvolvida em Node.js, projetada para gerenciar as refeições e dietas diárias de um indivíduo. Para registrar e acessar esses dados, utilizamos recursos avançados de back-end que nos permitem monitorar tanto as informações nutricionais quanto os detalhes das refeições diárias.',
    hashtags: ['#Backend', '#API', '#mySQL'],
    github: 'dd',
    siteUrl: 'dd',
  },
  {
    id: 7,
    name: 'Habits App',
    bannerUrl: '/habits.png',
    type: 'react',
    content:
      'Nesta aplicação fullstack, com o front-end em Next.js e o back-end em Node.js, os usuários têm a oportunidade de criar e monitorar seus hábitos pessoais. Proporcionamos um ambiente seguro e intuitivo para que indivíduos registrem e acompanhem sua evolução diária. Além disso, os usuários podem seguir outros participantes e "visitá-los" para verificar a quantidade e frequência de hábitos realizados por eles. ',
    hashtags: ['#frontend', '#backend', '#fullstack'],
    github: 'dd',
    siteUrl: 'dd',
  },
]

// get: buscar informações que estão salvas no estado
// set: atualizar informações de um estado
export const useStore = create<NavbarState>((set) => {
  return {
    isSelected: 0,
    selectedButton: 'all',
    projects: InitialProjects,

    save: (index: number) => {
      set({ isSelected: index })
    },

    handleSelectButton: (type: string) => {
      set({ selectedButton: type })
      if (type !== 'all') {
        const filteredProjects = InitialProjects.filter(
          (project) => project.type === type,
        )
        set({ projects: filteredProjects })
      } else {
        set({ projects: InitialProjects })
      }
    },
  }
})
