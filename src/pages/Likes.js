import { useContext, useEffect, useState } from "react";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { FilterWatchList } from "../storage/kindOfTabs";
import { DataBaseLikes, temDataMubisTotal } from "../storage/tempMovieData";
import { UserContext } from "../App";
import movieService from "../services/movieDatabaseService";
import LinkPoster from "../core/LinkPoster";
import { TMDB_IMAGE_BASE_URL } from "./Settings";
import userMoviesService from "../services/userMoviesService";
export const Likes = ({ usrId = "usr_001" }) => {
  const firstFilter = DataBaseLikes.filter(
    (item) => item.idUserAsociated === usrId
  );

  const match = temDataMubisTotal.filter((obj2) =>
    firstFilter.some((obj1) => obj1.idMubiLiked === obj2.id)
  );

  const { mainUserData } = useContext(UserContext);
  const [allLiked, setAllLiked] = useState(null);
  //montar los {...} de las películas marcadas con liked por {id_user} user

  useEffect(() => {
    if (!mainUserData?.id) return;
    async function getAllLikedMovies() {
      try {
        const allLikes = await userMoviesService.getAllLiked(mainUserData?.id);
        const ids = allLikes.movies.map((item) => item.id_tmdb);
        const allFavMoviesData = await movieService.getMoviePoster(ids);
        setAllLiked(allFavMoviesData);
      } catch (error) {
        console.error("Error loading posters :/");
      }
    }
    getAllLikedMovies();
  }, [mainUserData?.id]);
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterWatchList}></FilterMovies>
        <ContainerFilms>
          <div className={"basic-flex-row"}>
            {allLiked?.map((favItemMubi) => (
              <LinkPoster
                mubi={favItemMubi}
                key={favItemMubi.id}
                posterUrl={`${TMDB_IMAGE_BASE_URL}w500${favItemMubi.poster_path}`}
                width={7}
              ></LinkPoster>
            ))}
          </div>
          <div />
        </ContainerFilms>
      </div>
    </>
  );
};

export default Likes;
