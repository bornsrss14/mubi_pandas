import { Link } from "react-router-dom";
import FilterMovies from "../components/FilterMovies";
import ContainerFilms from "../components/ContainerFilms";
import { FiltersArrayItems } from "../storage/kindOfTabs";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import userMoviesService from "../services/userMoviesService";
import movieService from "../services/movieDatabaseService";
import LinkPoster from "../core/LinkPoster";
import { TMDB_IMAGE_BASE_URL } from "./Settings";

//watched
export const Watched = () => {
  const { mainUserData } = useContext(UserContext);
  const [allWatched, setAllWatched] = useState(null);
  useEffect(() => {
    if (!mainUserData.id) return;

    async function getWatched() {
      try {
        const allWatched = await userMoviesService.getAllWatched(
          mainUserData?.id
        );

        const ids = allWatched.movies.map((item) => item.id_tmdb);
        const allWatchedData = await movieService.getMoviePoster(ids);
        setAllWatched(allWatchedData);
      } catch (error) {
        console.log(error);
      }
    }
    getWatched();
  }, [mainUserData.id]);
  return (
    <>
      <FilterMovies arrayFilters={FiltersArrayItems}></FilterMovies>
      <ContainerFilms>
        <div className="container-films-user-films"></div>
        <p>watched</p>
        <div className={"basic-flex-row"}>
          {allWatched?.map((favItemMubi) => (
            <LinkPoster
              mubi={favItemMubi}
              key={favItemMubi.id}
              posterUrl={`${TMDB_IMAGE_BASE_URL}w500${favItemMubi.poster_path}`}
              width={7}
            ></LinkPoster>
          ))}
        </div>
      </ContainerFilms>
    </>
  );
};
export default Watched;
