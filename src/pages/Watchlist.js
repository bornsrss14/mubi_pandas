import { useState } from "react";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { FilterWatchList } from "../storage/kindOfTabs";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import movieService from "../services/movieDatabaseService";
import LinkPoster from "../core/LinkPoster";
import {
  DataBaseWatchLater,
  temDataMubisTotal,
} from "../storage/tempMovieData";
import { TMDB_IMAGE_BASE_URL } from "./Settings";
import userMoviesService from "../services/userMoviesService";

export const Watchlist = ({ watch }) => {
  const { formData } = useContext(UserContext);
  const allWatchListMubis = DataBaseWatchLater.filter(
    (mubi) => mubi.idUserAsociated === formData.idUser
  );

  const { mainUserData } = useContext(UserContext);
  const [allWatchList, setAllWatchlist] = useState(null);
  /*obtengo y filtro los ids, voy a obtener los {...} .filter((item)=> item.id_user ) */

  useEffect(() => {
    if (!mainUserData?.id) return;

    async function getAllWatchedMovies() {
      try {
        const allWatchlist = await userMoviesService.getAllWatchList(
          mainUserData?.id
        );
        //filtro los id

        const ids = allWatchlist.movies.map((movie) => movie.id_tmdb);

        const allFavMoviesData = await movieService.getMoviePoster(ids);
        setAllWatchlist(allFavMoviesData);
      } catch (error) {}
    }
    getAllWatchedMovies();
  }, [mainUserData?.id]);
  console.log(allWatchList);
  return (
    <>
      <div className="card-settings">
        <FilterMovies arrayFilters={FilterWatchList}></FilterMovies>
        <ContainerFilms>
          <p>
            Aquí están los que marcon con{" "}
            <span>
              <IconPlaylistAdd
                stroke={1}
                size={"17px"}
                color="white"
              ></IconPlaylistAdd>
            </span>
          </p>
          <div className="movies-container">
            {allWatchList?.map((mubi, i) => (
              <LinkPoster
                key={mubi.id}
                posterUrl={`${TMDB_IMAGE_BASE_URL}w500${mubi.poster_path}`}
                width={8}
                mubi={mubi}
              ></LinkPoster>
            ))}
          </div>
        </ContainerFilms>
      </div>
    </>
  );
};
export default Watchlist;
