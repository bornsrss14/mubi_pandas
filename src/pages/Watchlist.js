import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { IconPlaylistAdd } from "@tabler/icons-react";
import { FilterWatchList } from "../storage/kindOfTabs";
import PosterMovie from "../core/PosterMovie";

export const Watchlist = ({ watch }) => {
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
            <PosterMovie
              width={8}
              posterUrl={
                "https://isopixel.net/wp-content/uploads/2010/08/rocky.jpg"
              }
            ></PosterMovie>
            <PosterMovie
              width={8}
              posterUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcObgdfn1LFEO2ar7ALnpGJI74_dITv4EGw&s"
              }
            ></PosterMovie>
            <PosterMovie
              width={8}
              posterUrl={
                "https://static.posters.cz/image/350/posters/back-to-the-future-i152504.jpg"
              }
            ></PosterMovie>
            <PosterMovie
              width={8}
              posterUrl={
                "https://isopixel.net/wp-content/uploads/2010/08/Robocop.jpg"
              }
            ></PosterMovie>
            <PosterMovie
              width={8}
              posterUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNqXPa6xz5GFJexK1hr5LY_Rqn660_c2yXQ&s"
              }
            ></PosterMovie>
          </div>
        </ContainerFilms>
      </div>
    </>
  );
};
export default Watchlist;
