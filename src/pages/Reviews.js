import { useContext } from "react";
import BasicReview from "../components/BasicReview";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import { FilterReview } from "../storage/kindOfTabs";
import { DataBaseReviews, temDataMubisTotal } from "../storage/tempMovieData";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";
/* /api/user/reviews/4

Lo interesante es que debo de hacer una función que llame a recuperar todas las reviews de X usuario por su id_user
Aquí las renderizo y a la vez las actuaizo según vayan cambiando ya sea que se eliminen o se actualicen*/
export const Reviews = ({ idUsr = "usr_001" }) => {
  /*CONTEXT */
  const { reviewsUser } = useContext(UserContext);
  const reviewsWithMubis = reviewsUser.map((obj) => ({
    ...obj,
    movieReviewed: getMubisByIds(obj.id_mubi),
  }));
  /* Busco en los datos de Las reviews que se vinculan con el idUsr, es decir, las que le pertenecen a este usuario*/

  /* Busco las coincidencias Dentro de los datos de todas las películas (temDataMubisTotal) para hacer un nuevo array resultado de las coincidencias 
  de del array de reviews (firsFilter) encuentre que coincida con el id pasado*/

  /*Se crea un objeto combinado de estos dos filtros, tengo la reseña y el objeto de película al que hace referencia esa reseña */
  /*
  const mixed = firstFilter.map((review) => {
    const pelicula = match.find((p) => p.id === review.idMubiLis);
    return {
      ...review,
      ...pelicula,
    };
  });
   */

  return (
    <div className="section-persentage">
      <FilterMovies arrayFilters={FilterReview}></FilterMovies>

      <ContainerFilms>
        <div>
          {reviewsWithMubis.map((review) => (
            <BasicReview
              key={review.id}
              objeto={review}
              spoilers={false}
            ></BasicReview>
          ))}
        </div>
      </ContainerFilms>
    </div>
  );
};

export default Reviews;
