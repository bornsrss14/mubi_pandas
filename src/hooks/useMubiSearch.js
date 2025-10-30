import { useState, useEffect } from "react";
import movieDatabaseService from "../services/movieDatabaseService";

export const useMubiSearch = (query, delay = 500) => {
  const [results, setResults] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }
    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const movies = await movieDatabaseService.searchMovies(query);
        setResults(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [query, delay]);

  return { results, loading, error };
};
