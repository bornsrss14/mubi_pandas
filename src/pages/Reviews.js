import BasicReview from "../components/BasicReview";
import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";
import { FilterReview } from "../storage/kindOfTabs";

export const Reviews = () => {
  return (
    <>
      <FilterMovies arrayFilters={FilterReview}></FilterMovies>

      <ContainerFilms>
        <p>
          Aquí se renderizan solo las review hechas, los filtros serán de fechas
        </p>
        <div>
          <BasicReview
            titleMubiRevied={"Nacho Libre"}
            posterReview={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkX3mCE7PXKFsdJwWG4ZXubvnQ3wbWan7uqg&s"
            }
          ></BasicReview>
          <BasicReview
            titleMubiRevied={"Avatar: El Camino del Agua"}
            posterReview={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOPfGFXxSxuyiq4rYpdWZPWlzN1mRq_tdgg&s"
            }
          ></BasicReview>
          <BasicReview
            titleMubiRevied={"The Shape of Wather"}
            posterReview={
              "https://m.media-amazon.com/images/M/MV5BOGFlMTM2MTgtZDdlMy00ZDZlLWFjOTUtZDMzMGEwNmNiMWY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            }
          ></BasicReview>
        </div>
      </ContainerFilms>
    </>
  );
};

export default Reviews;
