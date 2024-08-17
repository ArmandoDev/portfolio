import Article from "../components/Article";
import { SOCIAL_LINKS } from "../utils";

export default function Hero() {
  return (
    <Article
      articleId="hero"
      className="sm:flex-row animate-fade-in animate-duration-500 text-lg font-medium"
    >
      <img
        className="w-[90%] max-w-40 aspect-square object-cover object-center rounded-full border-4 border-solid border-white shadow-xl"
        src="https://avatars.githubusercontent.com/u/106457742"
        alt="Foto de Jorge Armando Ceras Cárdenas"
        loading="eager"
        width="160"
        height="160"
      />

      <section className="grid">
        <h1 className="text-2xl font-bold margin-0">
          {">"} Hola, soy Jorge Armando Ceras Cárdenas
        </h1>

        <p className="opacity-80">
          {">"} Desarrollador web Full-stack
          <span className="cursor" aria-hidden="true">
            _
          </span>
        </p>

        <ul className="flex gap-2 mt-2">
          {SOCIAL_LINKS.map(({ href, title, icon }) => {
            return (
              <li key={title}>
                <a
                  className="inline-block hover:scale-125 transition-transform duration-200 ease-in-out"
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  <img className="icon" src={icon} alt={title} loading="lazy" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Article>
  );
}
