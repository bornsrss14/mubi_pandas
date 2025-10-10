import { Link } from "react-router-dom";
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
  /*Si yo itero en resultados, lo que tengo que considerar es que cada lista es única, tiene un id, y un ARRAY de mubis, el cuál necesito consultar
  qué películas son esas a las que se hace referencia  */
  console.log("checa esto", resultados);

  const listsWithMubis = listsPerUser.map((list) => ({
    ...list,
    moviesData: getMubisByIds(list.mubis),
  }));
  console.log(
    "Estas son las películas relacionadas con el usuario",
    listsWithMubis
  );
  return (
    <>
      <div>
        {listsWithMubis.map((list) => (
          <>
            {" "}
            <ListPreview arrayListPoster={list.moviesData}>
              <FooterListDescription itemLista={list}></FooterListDescription>
            </ListPreview>
          </>
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
