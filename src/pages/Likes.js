import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import LinkPoster from "../core/LinkPoster";
import { FilterWatchList } from "../storage/kindOfTabs";
import { DataBaseLikes, temDataMubisTotal } from "../storage/tempMovieData";
export const Likes = ({ usrId = "usr_001" }) => {
  const firstFilter = DataBaseLikes.filter(
    (item) => item.idUserAsociated === usrId
  );

  const match = temDataMubisTotal.filter((obj2) =>
    firstFilter.some((obj1) => obj1.idMubiLiked === obj2.id)
  );
  console.log("Estos pertenecen a los id de las películas", firstFilter);
  console.log("Esto son los me gusta del usuario usr_001 ", match);
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterWatchList}></FilterMovies>
        <ContainerFilms>
          {/* <p>Aquí van las películas que les he dado like o corazon</p> */}
          <div className="basic-flex-row">
            {match.map((item) => (
              <LinkPoster
                mubi={item}
                width={5}
                posterUrl={item.posterUrl}
              ></LinkPoster>
            ))}
          </div>
        </ContainerFilms>
      </div>
    </>
  );
};

export default Likes;
