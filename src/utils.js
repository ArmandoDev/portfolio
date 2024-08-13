const GITHUB_API = "https://api.github.com/users/armandodev/repos";
const DEFAULT_PROJECT_IMAGE = "/projects/default.webp";

const checkImageExists = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export const getLanguages = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch languages: ${response.statusText}`);
    }
    const data = await response.json();

    return Object.entries(data).map(([key, value], index) => ({
      id: index,
      name: key,
      lines: value,
    }));
  } catch (error) {
    console.error("Error fetching languages:", error);
    return [];
  }
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(GITHUB_API, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();

    return await Promise.all(
      data.map(async (project) => {
        const imageUrl = `/projects/${project.name}.webp`;
        const imageExists = await checkImageExists(imageUrl);

        const languages = await getLanguages(project.languages_url);

        return {
          id: project.id,
          name: project.name.toUpperCase().replace(/-/g, " "),
          html_url: project.html_url,
          homepage: project.homepage,
          description: project.description,
          languages,
          image: imageExists ? imageUrl : DEFAULT_PROJECT_IMAGE,
          imageAlt: project.name,
        };
      })
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
