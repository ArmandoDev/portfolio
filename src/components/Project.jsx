import { memo } from "react";

export default memo(function Project({ project }) {
  return (
    <li className="relative border border-solid border-gray-300 rounded-lg overflow-hidden shadow-xl px-4 py-2">
      <h3 className="text-xl font-bold mb-1">{project.name}</h3>
      <ul
        className="flex flex-wrap gap-1 text-sm text-white mb-1"
        aria-label={`Lenguajes utilizados en ${project.name}`}
      >
        {project.languages.map((language) => (
          <li className="bg-blue-500 rounded-sm p-1" key={language.id}>
            {language.name}
          </li>
        ))}
      </ul>
      <p className="opacity-80 mb-10 text-base">
        {project.description || "No se proporcionó descripción."}
      </p>

      <ul
        className="absolute bottom-4 right-4 flex gap-2"
        aria-label={`Enlaces relacionados con ${project.name}`}
      >
        <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
          <a
            href={project.html_url}
            title={`Ver repositorio de ${project.name} en GitHub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              src="/icons/github.svg"
              alt="Ícono de GitHub"
              loading="lazy"
              width="48"
              height="48"
            />
          </a>
        </li>
        {project.homepage && (
          <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
            <a
              href={project.homepage}
              title={`Ver página web de ${project.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon"
                src="/icons/live.svg"
                alt="Ícono de sitio web en vivo"
                loading="lazy"
                width="48"
                height="48"
              />
            </a>
          </li>
        )}
      </ul>
    </li>
  );
});
