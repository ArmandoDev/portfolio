import Article from "../components/Article";

export default function Projects() {
  return (
    <Article articleId="projects" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Proyectos</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <li className="border border-solid border-gray-300 rounded-lg overflow-hidden shadow-xl">
            <img
              className="w-full aspect-video object-cover object-center border-b border-solid border-gray-300"
              src="/projects/00-portfolio.webp"
              alt="Portfolio"
            />
            <div className="px-4 py-2">
              <ul className="flex flex-wrap gap-1 text-xs text-white mb-1">
                <li className="bg-blue-500 rounded-sm p-1">HTML</li>
                <li className="bg-blue-500 rounded-sm p-1">CSS</li>
                <li className="bg-blue-500 rounded-sm p-1">JavaScript</li>
                <li className="bg-blue-500 rounded-sm p-1">React</li>
                <li className="bg-blue-500 rounded-sm p-1">TailwindCSS</li>
              </ul>

              <h3 className="text-lg font-bold">Portfolio</h3>
              <p className="font-medium opacity-80">Portafolio personal.</p>

              <ul className="flex justify-end gap-2">
                <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
                  <a
                    href="https://github.com/armandodev/portfolio"
                    title="Repo GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src="/icons/github.svg"
                      alt="GitHub"
                    />
                  </a>
                </li>
                <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
                  <a
                    href="https://armandodev-portfolio.vercel.app/"
                    title="Ver página"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="icon" src="/icons/live.svg" alt="Live" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </Article>
  );
}
