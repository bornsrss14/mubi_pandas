import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import InlineNav from "../core/InlineNav";
import { arrayTabsNetwork, FilterFolowed } from "../storage/kindOfTabs";

export const Network = ({ templateContainer, setActiveTab, activeTab }) => {
  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del componente que se renderizará
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterFolowed}></FilterMovies>
        <InlineNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          arrayTabs={arrayTabsNetwork}
        ></InlineNav>
        <div className="container-persentage component-wrapper">
          {ComponenteSelected && <ComponenteSelected></ComponenteSelected>}
        </div>
      </div>
    </>
  );
};

export default Network;
