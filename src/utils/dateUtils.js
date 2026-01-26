import {
  ownerList,
  temDataMubisTotal,
  totalReviews,
  users,
} from "../storage/tempMovieData";

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
/*Busqueda de reviews hechas por el usuario */
/*paso el usuario usr_1001 ejemplo */
export const madeReviews = (idUser) => {
  return totalReviews.filter((review) => review.id_user === idUser);
};

/*Obtener el objeto completo de un X */
export const getUserById = (id) => {
  return users.find((user) => user.idUser === id);
};

/*Obtener listado de X elementos de un X array de codigos (ids) */

/*El id que recibe en .map(id) es de tipo => usr_004 , esto solo aplica para usuarios*/
export function getUsersByIds(array, datos) {
  return array
    .map((id) => datos.find((item) => item.idUser === id))
    .filter((item) => item !== undefined);
}

export const formatDateShortES = (isoDate) => {
  if (!isoDate) return "";

  const date = new Date(isoDate);

  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  return `${date.getUTCDate()} ${
    months[date.getUTCMonth()]
  } ${date.getUTCFullYear()}`;
};

/* if (diffSeconds < 0) {
  // futuro → rtf.format(valorPositivo)
} */
export const timeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);

  const diffSeconds = Math.floor((now - date) / 1000);
  const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

  // 👉 FUTURO
  if (diffSeconds < 0) {
    const minutes = Math.ceil(Math.abs(diffSeconds) / 60);
    const hours = Math.ceil(minutes / 60);
    const days = Math.ceil(hours / 24);

    if (minutes < 60) return rtf.format(minutes, "minute");
    if (hours < 24) return rtf.format(hours, "hour");
    return rtf.format(days, "day");
  }

  // 👉 PASADO
  const minutes = Math.floor(diffSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "justo ahora";
  if (minutes < 60) return rtf.format(-minutes, "minute");
  if (hours < 24) return rtf.format(-hours, "hour");
  return rtf.format(-days, "day");
};
