import React, { createContext, useContext, useState } from "react";
import { DataBaseLikes } from "../storage/tempMovieData";

const LikesContext = createContext();
export function LikesProvider({ children }) {
  const [userLikes, setUserLikes] = useState([...DataBaseLikes]);

  const saveLike = (movieId, userId) => {
    setUserLikes((prev) => [
      ...prev,
      {
        id: 4000 + (prev.length + 1),
        idMubiLiked: movieId,
        idUserAsociated: userId,
      },
    ]);
    console.log("User like saved succedfully", userId, "movie:", movieId);
  };

  const deleteFromLike = (idMubi) => {
    setUserLikes((prev) => prev.filter((mubi) => mubi.idMubiLiked !== idMubi));
  };
  return (
    <LikesContext.Provider value={{ userLikes, saveLike, deleteFromLike }}>
      {children}
    </LikesContext.Provider>
  );
}
export const useLikes = () => useContext(LikesContext);
