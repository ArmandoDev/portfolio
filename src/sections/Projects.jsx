import { useEffect, useState } from "react";
import Article from "../components/Article";

/* import React, { useEffect, useState } from 'react';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TU_NOMBRE_DE_USUARIO/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Mis Repositorios</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
 */

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/armandodev/repos"
        );
        const data = await response.json();
        console.log(data);

        /* Formateo del JSON */
        const projects = data.map((project) => ({
          id: project.id,
          name: project.name,
          html_url: project.html_url,
          homepage: project.homepage,
          description: project.description,
          languages_url: project.languages_url,
          labels_url: project.labels_url,
          language: project.language,
          topics: project.topics,
        }));

        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Article articleId="projects" className="min-h-fit">
      <section className="w-full grid gap-5">
        <h2 className="text-3xl font-bold">{">"} Proyectos</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <li
              className="relative border border-solid border-gray-300 rounded-lg overflow-hidden shadow-xl"
              key={project.id}
            >
              <img
                className="w-full aspect-video object-cover object-center border-b border-solid border-gray-300"
                src={`${project.name.toLowerCase().replace(" ", "-")}.webp`}
                alt="Portfolio"
              />
              <div className="px-4 py-2">
                <ul className="flex flex-wrap gap-1 text-xs text-white mb-1">
                  <li className="bg-blue-500 rounded-sm p-1">HTML</li>
                  <li className="bg-blue-500 rounded-sm p-1">CSS</li>
                  <li className="bg-blue-500 rounded-sm p-1">JavaScript</li>
                  <li className="bg-blue-500 rounded-sm p-1">React</li>
                  <li className="bg-blue-500 rounded-sm p-1">TailwindCSS</li>
                </ul>

                <h3 className="text-lg font-bold">
                  {project.name.toUpperCase()}
                </h3>
                <p className="font-medium opacity-80 mb-8">
                  {project.description || "No description provided."}
                </p>

                <ul className="absolute bottom-2 right-2 flex gap-2">
                  <li className="hover:scale-125 transition-transform duration-200 ease-in-out">
                    <a
                      href={project.html_url}
                      title="Repo GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon"
                        src="/icons/github.svg"
                        alt="GitHub"
                      />
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
                        <img
                          className="icon"
                          src="/icons/live.svg"
                          alt="Live"
                        />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Article>
  );
}
