import { useEffect, useState } from "react";
import Article from "../components/Article";
import { fetchProjects } from "../utils";
import Project from "../components/Project";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetchProjects();

      if (!response) {
        return;
      }

      setProjects(response);
    };
    getProjects();
  }, []);

  return (
    <Article articleId="projects" className="min-h-fit overflow-hidden">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Proyectos</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
          {projects ? (
            projects.map((project) => (
              <Project project={project} key={project.id} />
            ))
          ) : (
            <li className="col-span-2 border border-solid border-gray-300 rounded-lg shadow-xl p-4 text-center">
              Ha ocurrido un error al cargar los proyectos. Por favor, inténtelo
              de nuevo más tarde.
            </li>
          )}
        </ul>
      </section>
    </Article>
  );
}
