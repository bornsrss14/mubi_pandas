import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { FilterWatchList } from "../storage/kindOfTabs";
import { useContext } from "react";
import { UserContext } from "../App";
import LinkPoster from "../core/LinkPoster";
import {
  DataBaseWatchLater,
  temDataMubisTotal,
} from "../storage/tempMovieData";

export const Watchlist = ({ watch }) => {
  const { formData } = useContext(UserContext);
  const allWatchListMubis = DataBaseWatchLater.filter(
    (mubi) => mubi.idUserAsociated === formData.idUser
  );
  const match = temDataMubisTotal.filter((obj2) =>
    allWatchListMubis.some((obj1) => obj1.idMubiWatch === obj2.id)
  );
  return (
    <>
      <div>
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
          <div className={"basic-flex-row"}>
            {match.map((mubi, i) => (
              <LinkPoster
                key={i}
                width={8}
                mubi={mubi}
                posterUrl={mubi.posterUrl}
              ></LinkPoster>
            ))}
          </div>
        </ContainerFilms>
      </div>
    </>
  );
};
export default Watchlist;
