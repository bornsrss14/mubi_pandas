import { Link, Links } from "react-router-dom";
import {
  DataMyLists,
  ownerList,
  temDataMubisTotal,
} from "../storage/tempMovieData";
import FooterListDescription from "./FooterListDescription";
import ListPreview from "./ListPreview";
import { getMubisByIds, getUserLists } from "../utils/dateUtils";
import { useState } from "react";

const ContainerMyLists = ({ listsPerUser }) => {
  /* const [listPerUser, setListPerUser] = useState(getUserLists(usrId));
  /*Filtrar objetos de películas que coincidan con las claves de las películas de X usuario 
  const listsPerUser = getUserLists(usrId); */

  /*Crea objetos con su id de lista relacionado y con un array de los codigos de películas que marca en su lista*/
  const resultados = listsPerUser.map((obj) => ({
    id: obj._id,
    mubis: obj.mubis,
  }));
  /*Estas son las películas de las listas de cada usuario  */
  const listsWithMubis = listsPerUser.map((list) => ({
    ...list,
    moviesData: getMubisByIds(list.mubis),
  }));

  return (
    <>
      <div>
        {listsWithMubis.map((list, i) => (
          <Link to={`/movielistview/${list._id}`} key={i}>
            {" "}
            <ListPreview arrayListPoster={list.moviesData}>
              <FooterListDescription itemLista={list}></FooterListDescription>
            </ListPreview>
          </Link>
        ))}
      </div>

      <div className="">
        <button
          className="btn-add-list"
          onClick={() => console.log("Esto deberá agregar una lista")}
        >
          {" "}
          Start a new list ...
        </button>
      </div>
    </>
  );
};

export default ContainerMyLists;
