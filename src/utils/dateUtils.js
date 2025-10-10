import { ownerList, temDataMubisTotal } from "../storage/tempMovieData";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/*Esto es para la busqueda de películas por id */
export const getUserLists = (usrId) => {
  return ownerList.filter((list) => list.idUser === usrId);
};

export const getMubisByIds = (movieIds) => {
  /*Se le pasa el array de códigos a recorrer */
  return movieIds
    .map((id) => temDataMubisTotal.find((mubi) => mubi.id === id))
    .filter((movie) => movie !== undefined);
};
