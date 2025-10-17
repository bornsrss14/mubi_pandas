import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { FilterWatchList } from "../storage/kindOfTabs";
import PosterMovie from "../core/PosterMovie";
import { useContext } from "react";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";
import LinkPoster from "../core/LinkPoster";

export const Watchlist = ({ watch }) => {
  const { formData } = useContext(UserContext);
  console.log(formData, "mis datos");
  const fullList = getMubisByIds(formData.watchLater);
  console.log(fullList, "full");
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
          <div>
            {fullList.map((mubi, i) => (
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
