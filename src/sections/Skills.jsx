import Article from "../components/Article";

export default function Skills() {
  return (
    <Article articleId="skills" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Habilidades</h2>

        <ul className="grid grid-cols-3 gap-8 place-items-center sm:grid-cols-5 md:grid-cols-6">
          <li className="w-full aspect-square grid gap-2 place-items-center p-2">
            <img
              className="w-[80%] aspect-square object-cover object-center sm:w-full"
              src="/icons/html.svg"
              alt="HTML"
            />
            <span className="text-xs font-medium opacity-80">HTML</span>
          </li>
          <li className="w-full aspect-square grid gap-2 place-items-center p-2">
            <img
              className="w-[80%] aspect-square object-cover object-center sm:w-full"
              src="/icons/css.svg"
              alt="CSS"
            />
            <span className="text-xs font-medium opacity-80">CSS</span>
          </li>
          <li className="w-full aspect-square grid gap-2 place-items-center p-2">
            <img
              className="w-[80%] aspect-square object-cover object-center sm:w-full"
              src="/icons/javascript.svg"
              alt="JavaScript"
            />
            <span className="text-xs font-medium opacity-80">JavaScript</span>
          </li>
          <li className="w-full aspect-square grid gap-2 place-items-center p-2">
            <img
              className="w-[80%] aspect-square object-cover object-center sm:w-full"
              src="/icons/react.svg"
              alt="React"
            />
            <span className="text-xs font-medium opacity-80">React</span>
          </li>
          <li className="w-full aspect-square grid gap-2 place-items-center p-2">
            <img
              className="w-[80%] aspect-square object-cover object-center sm:w-full"
              src="/icons/tailwind.svg"
              alt="TailwindCSS"
            />
            <span className="text-xs font-medium opacity-80">TailwindCSS</span>
          </li>
        </ul>

        <p className="text-sm font-light opacity-80 text-center">
          Estoy abierto a aprender nuevas tecnologías y herramientas.
        </p>
      </section>
    </Article>
  );
}
