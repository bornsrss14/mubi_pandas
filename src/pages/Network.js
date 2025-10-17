import { useContext } from "react";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import InlineNav from "../core/InlineNav";
import { arrayTabsNetwork, FilterFolowed } from "../storage/kindOfTabs";
import { UserContext } from "../App";
import { getUserById, getUsersByIds } from "../utils/dateUtils";
import { users } from "../storage/tempMovieData";
import { Link, useParams } from "react-router-dom";

export const Network = ({ templateContainer, setActiveTab, activeTab }) => {
  const activeTabItem = templateContainer.find((item) => item.id === activeTab);
  const ComponenteSelected = activeTabItem?.componente; //Asigna nombre del componente que se renderizará

  const { id } = useParams();
  const { formData } = useContext(UserContext);

  const currentUser = getUserById(id);
  console.log(currentUser, "este es mi actual usuario");

  /*Hay que buscar el id del usuario que ya está renderizando, pero lo
voy a pasar al link de /network:id */

  /* Obtener el objeto de el usuario que le estoy pasando, ya no es apartie de formData*/
  const followersObj = getUsersByIds(currentUser.followers, users);
  /*Objetos en lista de los usuarios que sigue currentUser */
  const followingObj = getUsersByIds(currentUser.following, users);
  /*Objetos en lista de los usuairos que currentUser ha bloqueado */
  const blockedObj = getUsersByIds(currentUser.blocked, users);

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
          {ComponenteSelected && (
            <ComponenteSelected
              followersObj={followersObj}
              followingObj={followingObj}
              blockedObj={blockedObj}
            ></ComponenteSelected>
          )}
        </div>
      </div>
    </>
  );
};

export default Network;
