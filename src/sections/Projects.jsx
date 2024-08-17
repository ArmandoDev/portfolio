import { useEffect, useState } from "react";
import Article from "../components/Article";
import { fetchProjects } from "../utils";
import Project from "../components/Project";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetchProjects();
        if (response) {
          setProjects(response);
        } else {
          throw new Error("No se pudieron cargar los proyectos");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getProjects();
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Article articleId="projects" className="min-h-fit overflow-hidden">
      <section className="w-full grid gap-5 place-items-center">
        <h2 className="w-full text-3xl font-bold">{">"} Proyectos</h2>
        {isLoading ? (
          <p>Cargando proyectos...</p>
        ) : error ? (
          <p role="alert" className="text-red-500">
            {error}
          </p>
        ) : showAll ? (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in animate-duration-300"
            role="list"
            aria-label="Lista de proyectos"
          >
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </ul>
        ) : (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in animate-duration-300"
            role="list"
            aria-label="Lista de proyectos"
          >
            {projects.slice(0, 4).map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </ul>
        )}
        {projects.length > 4 && (
          <button
            className="flex items-center gap-2 text-lg"
            onClick={handleShowAll}
          >
            {showAll ? (
              <>
                Ocultar proyectos{" "}
                <img
                  className="icon"
                  src="/icons/arrow-up.svg"
                  alt="Ícono de flecha hacia arriba"
                  loading="lazy"
                />
              </>
            ) : (
              <>
                Ver todos{" "}
                <img
                  className="icon"
                  src="/icons/arrow-down.svg"
                  alt="Ícono de flecha hacia abajo"
                  loading="lazy"
                />
              </>
            )}
          </button>
        )}
      </section>
    </Article>
  );
}
