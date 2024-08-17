import { useState, useEffect } from "react";
import { fetchProjects } from "../utils";

export function useProjects() {
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

  return { projects, isLoading, error };
}
