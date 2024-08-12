import Article from "../components/Article";

export default function Hero() {
  return (
    <Article articleId="hero" className="sm:flex-row">
      <img
        className="w-[90%] max-w-40 aspect-square object-cover object-center rounded-full border-4 border-solid border-white shadow-xl"
        src="https://avatars.githubusercontent.com/u/106457742"
        alt="Foto de Jorge Armando Ceras Cárdenas"
        title="Foto de Jorge Armando Ceras Cárdenas"
      />

      <section className="grid">
        <h1 className="text-2xl font-bold margin-0">
          {">"} Hola, soy Jorge Armando Ceras Cárdenas
          <span className="block text-lg font-medium opacity-80 margin-0">
            {">"} Desarrollador web Full-stack<span className="cursor">_</span>
          </span>
        </h1>

        <ul className="flex gap-2 my-5">
          <li>
            <a
              href="https://github.com/armandodev"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/github.svg"
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="mailto:jorge.armando.c.cardenas@gmail.com" title="Email">
              <img
                className="icon hover:scale-125 transition-transform duration-200 ease-in-out"
                src="/icons/gmail.svg"
                alt="Email"
              />
            </a>
          </li>
        </ul>
      </section>
    </Article>
  );
}
