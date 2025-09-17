import ContainerFilms from "../components/ContainerFilms";
import FilterMovies from "../components/FilterMovies";
import SubNabvar from "../components/SubNabvar";
import PosterMovie from "../core/PosterMovie";
import { FilterWatchList } from "../storage/kindOfTabs";
export const Likes = () => {
  return (
    <>
      <div>
        <FilterMovies arrayFilters={FilterWatchList}></FilterMovies>
        <ContainerFilms>
          <p>Aquí van las películas que les he dado like o corazon</p>
          <div>
            <PosterMovie
              width={5}
              posterUrl={
                "https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/02/07/lo-imposible-j-a-bayona-2012.jpeg"
              }
            ></PosterMovie>
            <PosterMovie
              width={5}
              posterUrl={
                "https://i.etsystatic.com/21145079/r/il/b18885/5543713714/il_570xN.5543713714_kvtc.jpg"
              }
            ></PosterMovie>
            <PosterMovie
              width={5}
              posterUrl={
                "https://es.web.img3.acsta.net/newsv7/20/01/18/10/49/14611770.jpg"
              }
            ></PosterMovie>
            <PosterMovie
              width={5}
              posterUrl={
                "https://i0.wp.com/multianime.com.mx/wp-content/uploads/2024/04/Sony-Pictures-y-tus-Bad-Boys-favoritos-llegan-desde-Miami-con-nuevo-poster.jpg?fit=742%2C1100&ssl=1"
              }
            ></PosterMovie>
          </div>
        </ContainerFilms>
      </div>
    </>
  );
};

export default Likes;
