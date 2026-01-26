import { useState, useContext, createContext } from "react";
import { DataBaseWatched, DataBaseWatchLater } from "../storage/tempMovieData";

const WatchContext = createContext();
export function WatchProvider({ children }) {
  const [userWatch, setWatch] = useState([...DataBaseWatchLater]);
  const [userWatched, setWatched] = useState([...DataBaseWatched]);
  /*1. Fun: Guarda en la lista de películas Watch; las que no he marcado como vistas, not yet.  */
  const saveWatch = (idMubi, idUser) => {
    setWatch((prev) => [
      ...prev,
      {
        id: 3030 + (prev.length + 1),
        idMubiWatch: idMubi,
        idUserAsociated: idUser,
      },
    ]);
    console.log("Movie added to watch list");
  };

  /*2.  Fun: Elimina de la lista de Watch: Son las películas que guardo en WatchList, no las he marcado como vistas */
  const deleteFromWatch = (idMubi) => {
    setWatch((prev) =>
      prev.filter((itemMubi) => itemMubi.idMubiWatch !== idMubi),
    );
  };
  /*1. Fun: Agrega a la lista de películas vistas */
  const saveWatched = (idMubi, idUser) => {
    setWatched((prev) => [
      ...prev,
      {
        id: 4040 + (prev.length + 1),
        idMubiWatched: idMubi,
        idUserAsociated: idUser,
      },
    ]);
  };

  /* 2. Fun: Elimina de la lista de películas vistas la que le pase como parametro, y de Xn usuario  */
  const deleteFromWatched = (idMubi) => {
    setWatched((prev) =>
      prev.filter((itemMubi) => itemMubi.idMubiWatched !== idMubi),
    );
  };

  return (
    <div>
      <WatchContext.Provider
        value={{
          userWatch,
          saveWatch,
          deleteFromWatch,
          userWatched,
          saveWatched,
          deleteFromWatched,
        }}
      >
        {children}
      </WatchContext.Provider>
    </div>
  );
}

export const useWatch = () => useContext(WatchContext);
