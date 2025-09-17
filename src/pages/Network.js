import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";
import { FilterFolowed } from "../storage/kindOfTabs";

export const Network = () => {
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterFolowed}></FilterMovies>
        <ContainerFilms></ContainerFilms>
      </div>
    </>
  );
};

export default Network;
