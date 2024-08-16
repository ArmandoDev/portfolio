import Article from "../components/Article";
import Skill from "../components/Skill";

export default function Skills() {
  const skills = [
    { id: 1, icon: "/icons/open-book.svg", name: "Inglés" },
    { id: 2, icon: "/icons/html.svg", name: "HTML" },
    { id: 3, icon: "/icons/css.svg", name: "CSS" },
    { id: 4, icon: "/icons/javascript.svg", name: "JavaScript" },
    { id: 5, icon: "/icons/react.svg", name: "React" },
    { id: 6, icon: "/icons/tailwind.svg", name: "TailwindCSS" },
  ];

  return (
    <Article articleId="skills" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Habilidades</h2>

        <ul className="grid grid-cols-3 gap-8 place-items-center sm:grid-cols-5 md:grid-cols-6">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.id} />
          ))}
        </ul>

        <p className="text-sm font-light opacity-80 text-center">
          Estoy abierto a aprender nuevas tecnologías, herramientas y
          habilidades.
        </p>
      </section>
    </Article>
  );
}
