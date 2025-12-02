import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link } from "react-router-dom";
import {
  IconSearch,
  IconNews,
  IconPlus,
  IconStereoGlasses,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import ReviewOverly from "./ReviewOverly";
import { NavContext, UserContext } from "../App";
import MainFilms from "../pages/MainFilms";

export const Navbar = ({ movies, query, setQuery }) => {
  const { formData, mainUserData } = useContext(UserContext);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  /* const [searchIsOpen, setSearchIsOpen] = useState(false); */
  const { searchIsOpen, setSearchIsOpen } = useContext(NavContext);
  const [addReview, setAddReview] = useState(false);

  function makeReview() {
    setBurgerIsOpen(false);
    setSearchIsOpen(false);
    console.log(
      "Esto abre un modal overly sobre toda la pantalla para agregar una nueva reseña de una pelíucla que buscas, en esste mismo modal"
    );
    setAddReview((prev) => !prev);
  }
  const toggleBurger = () => {
    setBurgerIsOpen((prev) => {
      if (!prev) setSearchIsOpen(false);
      return !prev;
    });
  };

  const toggleSearch = () => {
    setSearchIsOpen((prev) => {
      if (!prev) setBurgerIsOpen(false);
      return !prev;
    });
  };

  return (
    <div>
      <nav className="container-nav-bar">
        <header id="header-nav">
          <Link to="/">
            <ProfilePicUsername
              withNickname={false}
              measure="26px"
              imgProfile={
                "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
              }
            >
              {" "}
              {
                <p style={{ fontSize: "1.45rem", fontWeight: "800" }}>
                  pandasneezing
                </p>
              }
            </ProfilePicUsername>
          </Link>
          <div className="basic-flex-row">
            <button
              className="burger-button"
              aria-label="Abrir modal"
              onClick={makeReview}
              aria-expanded={addReview}
            >
              <IconPlus size={"22px"} color="white"></IconPlus>
            </button>

            <button
              className="burger-button"
              onClick={toggleBurger}
              aria-label="Abrir menu"
              aria-expanded={burgerIsOpen}
              aria-controls="main-menu"
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
            <button
              onClick={toggleSearch}
              aria-label="open search"
              aria-expanded={searchIsOpen}
              aria-controls="main-menu"
              className="burger-button"
            >
              <IconSearch color={"white"} size={"22px"}></IconSearch>
            </button>
          </div>
        </header>
        {/*Aquí utilizo mi servicio de recuperar datos y mostrarlos ♥️*/}
        <div className={`menu-search-wrap-uno${searchIsOpen ? "show" : ""}`}>
          <MainFilms></MainFilms>
        </div>
        <div
          onClick={(e) => {
            if (e.target.tagName === "A") {
              setBurgerIsOpen(false);
            }
          }}
          id="main-menu"
          aria-hidden={!burgerIsOpen}
          className={`menu-content${burgerIsOpen ? "show" : ""}`}
        >
          <div className=" menu-desplegable-mobil ">
            <ul className="flex-first-submenu">
              <li className="">
                <ProfilePicUsername
                  imgProfile={mainUserData.profile_pic_url}
                  withIcon={true}
                  userName={mainUserData.username}
                />
              </li>
            </ul>

            <ul className="grid-first-submenu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {/* <Link to={`/user-profile/${useForm.idUser}`}>Profile</Link> */}
                <Link to={"user-profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/watched"}>Watched</Link>
              </li>
              <li>
                <Link to={"/diary-user"}> Diary</Link>
              </li>
              <li>
                <Link to={"/reviews-user"}>Reviews</Link>
              </li>
              <li>
                <Link to={"/watchlist"}>Watchlist</Link>
              </li>
              <li>
                <Link to={"/listsNavbar"}>Lists</Link>
              </li>
              <li>
                <Link to={"likes-user"}>Likes</Link>
              </li>
              <li>
                <Link to={`/network/${formData.idUser}`}>Network</Link>
              </li>
              <li>
                <Link to={"settings-user"}>Settings</Link>
              </li>

              <li
                onClick={() =>
                  console.log("Esto hace que cierre sesión el usuario")
                }
              >
                Sign Out
              </li>
            </ul>
            <ul className="flex-first-submenu gap-submenu">
              <li>
                <Link className="basic-flex-row" to="/main-films">
                  <span>
                    <IconStereoGlasses size={"16px"}></IconStereoGlasses>
                  </span>
                  Films
                </Link>
              </li>
              <li>
                <Link className="basic-flex-row" to="/community">
                  <span>
                    <ProfilePicUsername
                      withNickname={false}
                      measure="16px"
                      imgProfile={
                        "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
                      }
                    ></ProfilePicUsername>
                  </span>
                  Community
                </Link>
              </li>
              <li className="">
                <Link className="basic-flex-row" to="/news">
                  <span>
                    <IconNews size={"16px"}></IconNews>
                  </span>
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ReviewOverly
        makeReview={makeReview}
        toggleIsOpen={addReview}
      ></ReviewOverly>
    </div>
  );
};

export default Navbar;
