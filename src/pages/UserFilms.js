import UserNavBar from "../components/UserNavBar";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import FilterMovies from "../components/FilterMovies";
import ContainerFilms from "../components/ContainerFilms";
import MainFooter from "../components/MainFooter";

export const UserFilms = () => {
  return (
    <>
      <div className="flex-row container-navbar-user">
        <Link to={"/"}>
          <UserNavBar />{" "}
        </Link>
        <ul className="navbar-user">
          <li>
            <Link>Activity</Link>
          </li>
          <li>
            <Link to={"/user-films"}>Films</Link>
          </li>
          <li>
            <Link>Diary</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
          <li>
            <Link>Watchlist</Link>
          </li>
          <li>
            <Link>Lists</Link>
          </li>
          <li>
            <Link>Likes</Link>
          </li>
          <li>
            <Link>Tags</Link>
          </li>
          <li>
            <Link>Network</Link>
          </li>
        </ul>
        <div>
          <IconSearch></IconSearch>
        </div>
      </div>
      <FilterMovies></FilterMovies>
      <ContainerFilms></ContainerFilms>
    </>
  );
};
export default UserFilms;
