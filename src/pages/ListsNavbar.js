import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";
import { FilterList } from "../storage/kindOfTabs";
export const ListsNavbar = () => {
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterList}></FilterMovies>
        <ContainerFilms></ContainerFilms>
      </div>
    </>
  );
};

export default ListsNavbar;
