import FilterMovies from "../components/FilterMovies";
import InlineNav from "../core/InlineNav";
import { arrayTabsList, FilterList } from "../storage/kindOfTabs";
export const ListsNavbar = ({
  listsPerUser,
  templateContainer,
  setActiveTab,
  activeTab,
}) => {
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
          {ComponenteSelected && (
            <ComponenteSelected
              listsPerUser={listsPerUser}
            ></ComponenteSelected>
          )}
        </div>
      </div>
    </>
  );
};

export default ListsNavbar;
