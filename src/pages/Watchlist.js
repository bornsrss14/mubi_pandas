import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";

export const Watchlist = ({ watch }) => {
  return (
    <>
      <SubNabvar></SubNabvar>
      <div>
        <FilterMovies></FilterMovies>
        <ContainerFilms></ContainerFilms>
      </div>
    </>
  );
};
export default Watchlist;
