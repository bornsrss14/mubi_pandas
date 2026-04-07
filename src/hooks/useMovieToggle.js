import { useEffect, useState } from "react";
import { useAuthUser } from "../contexts/UserAuthProvider";
export const useMovieToggle = (id_tmdb) => {
  const { authUser } = useAuthUser();

  const [states, setStates] = useState({
    liked: false,
    watched: false,
    to_watch: false,
  });
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    //  lógica de fetch aquí
    const fetchStatus = async () => {
      if (!authUser?.id || !id_tmdb) {
        return;
      }

      try {
        const url = `http://localhost:3001/api/user-movies/status/${authUser.id}/${id_tmdb}`;
        const response = await fetch(url);
        console.log("📡 URL completa:");
        if (response.ok) {
          const data = await response.json();
          setStates({
            liked: data?.liked === 1,
            watched: data?.watched === 1,
            to_watch: data?.to_watch === 1,
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchStatus();
  }, [authUser?.id, id_tmdb]);

  //toggle

  const toggle = async (field) => {
    if (!authUser?.id || !id_tmdb) return;
    setLoadingData(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/user-movies/${authUser.id}/${id_tmdb}/toggle`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field }),
        },
      );

      if (response.ok) {
        setStates((prev) => ({ ...prev, [field]: !prev[field] }));
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingData(false);
    }
  };
  return { states, toggle, loadingData };
};
