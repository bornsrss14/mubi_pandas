import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";
import InlineNav from "../core/InlineNav";
import { arrayTabsList, FilterList } from "../storage/kindOfTabs";
export const ListsNavbar = ({ templateContainer, setActiveTab, activeTab }) => {
  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del comp
  return (
    <>
      <div className="section-persentage">
        <FilterMovies arrayFilters={FilterList}></FilterMovies>
        <InlineNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          arrayTabs={arrayTabsList}
        ></InlineNav>

        <div className="container-persentage component-wrapper">
          {ComponenteSelected && <ComponenteSelected></ComponenteSelected>}
        </div>
      </div>
    </>
  );
};

export default ListsNavbar;
