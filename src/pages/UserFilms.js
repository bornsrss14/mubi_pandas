import UserNavBar from "../components/UserNavBar";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import FilterMovies from "../components/FilterMovies";
import ContainerFilms from "../components/ContainerFilms";
import MainFooter from "../components/MainFooter";
import SubNabvar from "../components/SubNabvar";
import PosterMovie from "../core/PosterMovie";
import { FiltersArrayItems } from "../storage/kindOfTabs";
import { useContext } from "react";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";

export const UserFilms = () => {
  const { formData } = useContext(UserContext);
  const listaFavoritos = getMubisByIds(formData?.[0].favorites);
  console.log(
    "Estos son los datos de mi usuario, quiero recuperar el",
    listaFavoritos
  );
  return (
    <>
      <FilterMovies arrayFilters={FiltersArrayItems}></FilterMovies>
      <ContainerFilms>
        <div className="container-films-user-films">
          {listaFavoritos.map((fav, index) => (
            <Link key={fav.id || index} to={`/mubi/${fav.id}`}>
              <PosterMovie posterUrl={fav.posterUrl} width={10}></PosterMovie>
            </Link>
          ))}
        </div>
      </ContainerFilms>
    </>
  );
};
export default UserFilms;
