export function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-4 w-full sm:mb-0 sm:w-1/2">
            <h3 className="mb-2 text-xl font-bold text-violet-500">
              Serviços Oferecidos
            </h3>
            <ul className="text-zinc-300">
              <li>Desenvolvimento de Páginas Web</li>
              <li>Desenvolvimento Web Fullstack</li>
              <li>Desenvolvimento Mobile</li>
              <li>Otimização de Performance</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 sm:text-right">
            <h3 className="mb-2 text-xl font-bold text-violet-500">
              Links úteis
            </h3>
            <ul className="text-zinc-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-violet-500 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-violet-500 hover:underline"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#port"
                  className="hover:text-violet-500 hover:underline"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-violet-500 hover:underline"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-violet-500 hover:underline"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 text-center font-medium text-zinc-300">
          <span>© 2023 Luis Otavio Longo. Todos os direitos reservados.</span>
          <span>
            Desenvolvido com 💜 por{' '}
            <a
              href="https://www.linkedin.com/in/luislong0/"
              className="font-bold text-violet-500 underline"
            >
              Luis Otávio Longo
            </a>
          </span>
          <span className="font-bold text-violet-500">#NeverStopLearning</span>
        </div>
      </div>
    </footer>
  )
}
