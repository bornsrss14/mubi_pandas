import { useContext, useEffect, useState } from "react";
import FilterMovies from "../components/FilterMovies";
import InlineNav from "../core/InlineNav";
import { arrayTabsList, FilterList } from "../storage/kindOfTabs";
import { UserContext } from "../App";
export const ListsNavbar = ({
  listsPerUser,
  templateContainer,
  setActiveTab,
  activeTab,
}) => {
  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del comp

  const { myLists } = useContext(UserContext); // todas las listas con entries

  /*Cargar en un effect las listas con las entries 
  por el id_usuario*/
  /*  useEffect(() => {
    async function getAllListsEntries(id_user) {
      try {
        const all = await ListService.getAllListWithEntries(id_user);
        //todos los objetos de las listas con entidades de películas
        setMyLists(all);
      } catch (error) {
        console.error(error);
      }
    }
    getAllListsEntries(mainUserData?.id);
  }, [mainUserData?.id]); */

  return (
    <>
      <div className="section-persentage-home">
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
              myLists={myLists.data}
            ></ComponenteSelected>
          )}
        </div>
      </div>
    </>
  );
};

export default ListsNavbar;
