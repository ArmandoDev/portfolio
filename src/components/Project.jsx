import { memo } from "react";

export default memo(function Project({ project }) {
  console.log("Rendering project:", project);

  return (
    <li className="relative border border-solid border-gray-300 rounded-lg overflow-hidden shadow-xl">
      <img
        className="w-full aspect-video object-cover object-center border-b border-solid border-gray-300"
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className="px-4 py-2">
        <ul className="flex flex-wrap gap-1 text-xs text-white mb-1">
          {project.languages.map((language) => (
            <li className="bg-blue-500 rounded-sm p-1" key={language.id}>
              {language.name}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="font-medium opacity-80 mb-10">
          {project.description || "No description provided."}
        </p>

        <ul className="absolute bottom-4 right-4 flex gap-2">
          <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
            <a
              href={project.html_url}
              title="Repo GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src="/icons/github.svg" alt="GitHub" />
            </a>
          </li>
          {project.homepage && (
            <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
              <a
                href={project.homepage}
                title="Ver página"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="/icons/live.svg" alt="Live" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
});
