import UserNavBar from "../components/UserNavBar";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import FilterMovies from "../components/FilterMovies";
import ContainerFilms from "../components/ContainerFilms";
import MainFooter from "../components/MainFooter";
import SubNabvar from "../components/SubNabvar";
import PosterMovie from "../core/PosterMovie";
import { FiltersArrayItems } from "../storage/kindOfTabs";

export const UserFilms = () => {
  return (
    <>
      <FilterMovies arrayFilters={FiltersArrayItems}></FilterMovies>
      <ContainerFilms>
        <div className="container-films-user-films">
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbaWHc1UHI-PZtMgTyOMxyd2NqBHWpVRa1A&s"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RmcVgRqSF20uhsVz4iroSlGoAkeNfoAhRQ&s"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://i.pinimg.com/564x/48/bd/0d/48bd0d791162ee722890842ac1023352.jpg"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://www.tallengestore.com/cdn/shop/products/PrincessMononoke-StudioGhibliJapanaeseAnimatedMoviePoster_7ffbd668-7bf0-4a03-9934-da7d1fa2ffed.jpg?v=1642160523"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://cdn.displate.com/artwork/270x380/2024-03-25/ea7872b16c88a7b5e86d4178b477d802_e2ab24e2aa74b99aece00d675c7e978d.jpg"
              }
              width={10}
            ></PosterMovie>
          </Link>

          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://images.squarespace-cdn.com/content/v1/5e7a8f6d95bc3643e73bc2e8/1650516930473-W9V90ZE5IMW5MOAT4F51/EVA_POSTER_5400x7200.jpg?format=2500w"
              }
              width={10}
            ></PosterMovie>
          </Link>

          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/no240-my-inception-minimal-movie-poster-chungkong-art.jpg"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZw03_5sSUYMmb4OZ3MC4eUkAjCMl0YjBCQ&s"
              }
              width={10}
            ></PosterMovie>
          </Link>
          <Link to={"/mubi"}>
            <PosterMovie
              posterUrl={
                "https://m.media-amazon.com/images/I/61n4IhciL9L._UF894,1000_QL80_.jpg"
              }
              width={10}
            ></PosterMovie>
          </Link>
        </div>
      </ContainerFilms>
    </>
  );
};
export default UserFilms;
