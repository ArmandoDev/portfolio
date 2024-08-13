import { useEffect, useState } from "react";
import Article from "../components/Article";
import { fetchProjects } from "../utils";
import Project from "../components/Project";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await fetchProjects());
    };
    getProjects();
  }, []);

  return (
    <Article articleId="projects" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Proyectos</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </section>
    </Article>
  );
}
