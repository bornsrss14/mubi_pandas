import { Link } from "react-router-dom";
/*
import
  DataMyLists,
  ownerList,
  temDataMubisTotal,
  "../storage/tempMovieData";
  */
import FooterListDescription from "./FooterListDescription";
import ListPreview from "./ListPreview";
import { getMubisByIds } from "../utils/dateUtils";
import movieService from "../services/movieDatabaseService";

const ContainerMyLists = ({ listsPerUser, myLists }) => {
  /* const [listPerUser, setListPerUser] = useState(getUserLists(usrId));
  /*Filtrar objetos de películas que coincidan con las claves de las películas de X usuario 
  const listsPerUser = getUserLists(usrId); */

  /*Crea objetos con su id de lista relacionado y con un array de los codigos de películas que marca en su lista*/
  /*
  const resultados = listsPerUser.map((obj) => ({
    id: obj._id,
    mubis: obj.mubis,
  }));
   */
  /*Estas son las películas de las listas de cada usuario  */
  const listsWithMubis = listsPerUser.map((list) => ({
    ...list,
    moviesData: getMubisByIds(list.mubis),
  }));

  return (
    <>
      <div>
        {/* 
        {listsWithMubis.map((list, i) => (
          <Link to={`/movielistview/${list._id}`} key={i}>
            recupero posters por ids <<-- comentario
            <ListPreview arrayListPoster={list.moviesData}>
              <FooterListDescription itemLista={list}></FooterListDescription>
            </ListPreview>
          </Link>
        ))}
              */}

        {myLists?.map((list, index) => (
          <Link to={`/movielistview/${list.id}`} key={index}>
            <ListPreview
              arrayListPoster={list.entries.map((list) => list.id_mubi_tmdb)}
            >
              <FooterListDescription itemLista={list}></FooterListDescription>
            </ListPreview>
          </Link>
        ))}
      </div>

      <section>
        <div>
          {myLists?.data?.map((lista) => (
            <>
              <h2>{lista?.title}</h2>
              <p>{lista?.brief_description}</p>
              <ul>
                {/* {lista.entries.map((item) => (
                  <li key={item.id}>   
                    {item.id_mubi_tmdb} – {item.note}
                  </li>
                ))} */}

                {lista?.entries.map((item) => item.id_mubi_tmdb)}
              </ul>
            </>
          ))}
        </div>
      </section>
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
