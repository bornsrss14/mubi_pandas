import { useState, useContext, createContext } from "react";
import { DataBaseWatched, DataBaseWatchLater } from "../storage/tempMovieData";

const WatchContext = createContext();
export function WatchProvider({ children }) {
  const [userWatch, setWatch] = useState([...DataBaseWatchLater]);
  const [userWatched, setWatched] = useState([...DataBaseWatched]);

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
  return (
    <div>
      <WatchContext.Provider
        value={{ userWatch, saveWatch, userWatched, saveWatched }}
      >
        {children}
      </WatchContext.Provider>
    </div>
  );
}

export const useWatch = () => useContext(WatchContext);
