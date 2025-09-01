import UserNavBar from "../components/UserNavBar";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import FilterMovies from "../components/FilterMovies";
import ContainerFilms from "../components/ContainerFilms";
import MainFooter from "../components/MainFooter";
import SubNabvar from "../components/SubNabvar";

export const UserFilms = () => {
  return (
    <>
      <SubNabvar></SubNabvar>
      <FilterMovies></FilterMovies>
      <ContainerFilms></ContainerFilms>
    </>
  );
};
export default UserFilms;
