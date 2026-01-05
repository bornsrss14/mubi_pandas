import { useState } from "react";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import InlineNav from "../core/InlineNav";
import {
  arrayTabsSubNavbar,
  DataComponentsActivity,
  FilterList,
} from "../storage/kindOfTabs";

export const Activity = () => {
  const [activeTab, setActiveTab] = useState(1001);
  const activeTabItem = DataComponentsActivity.find(
    (item) => item.id === activeTab
  );
  let ComponenteSelected = activeTabItem?.componente;
  return (
    <>
      <div style={{ marginTop: "2rem", border: "solid red 3px" }}>
        <FilterMovies arrayFilters={FilterList}></FilterMovies>

        <InlineNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          arrayTabs={arrayTabsSubNavbar}
        ></InlineNav>
        {ComponenteSelected && <ComponenteSelected></ComponenteSelected>}
      </div>
    </>
  );
};
export default Activity;
