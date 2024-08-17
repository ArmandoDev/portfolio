import { useState } from "react";
import Article from "../components/Article";
import Skill from "../components/Skill";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 1,
      icon: "/icons/open-book.svg",
      name: "Inglés",
      description: "Nivel avanzado en lectura y escritura",
    },
    {
      id: 2,
      icon: "/icons/html.svg",
      name: "HTML",
      description: "Estructuración semántica de contenido web",
    },
    {
      id: 3,
      icon: "/icons/css.svg",
      name: "CSS",
      description: "Diseño y estilizado de páginas web",
    },
    {
      id: 4,
      icon: "/icons/javascript.svg",
      name: "JavaScript",
      description: "Programación del lado del cliente y servidor",
    },
    {
      id: 5,
      icon: "/icons/react.svg",
      name: "React",
      description: "Desarrollo de interfaces de usuario interactivas",
    },
    {
      id: 6,
      icon: "/icons/tailwind.svg",
      name: "TailwindCSS",
      description: "Framework CSS para diseño rápido y personalizado",
    },
  ];

  return (
    <Article articleId="skills" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Habilidades</h2>

        <ul
          className="grid grid-cols-3 gap-8 place-items-center sm:grid-cols-5 md:grid-cols-6"
          role="list"
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {skills.map((skill) => (
            <Skill
              skill={skill}
              key={skill.id}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              isHovered={hoveredSkill === skill.id}
            />
          ))}
        </ul>

        <div className="text-sm font-medium opacity-90 text-center">
          {hoveredSkill ? (
            <span className="block">
              {skills.find((skill) => skill.id === hoveredSkill).description}
            </span>
          ) : (
            <span className="block">
              Estoy abierto a aprender nuevas tecnologías, herramientas y
              habilidades.
            </span>
          )}
        </div>
      </section>
    </Article>
  );
}
