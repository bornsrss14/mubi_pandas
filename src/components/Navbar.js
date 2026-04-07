import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link } from "react-router-dom";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import ReviewOverly from "./ReviewOverly";
import { NavContext, UserContext } from "../App";
import MainFilms from "../pages/MainFilms";
import ComponenteHeader from "../core/ComponenteHeader";

import { useAuthUser } from "../contexts/UserAuthProvider";

export const Navbar = ({ movies, query, setQuery }) => {
  const { formData } = useContext(UserContext);

  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const [dropDeskMenu, setDropDeskMenu] = useState(false);
  /* const [searchIsOpen, setSearchIsOpen] = useState(false); */
  const { searchIsOpen, setSearchIsOpen } = useContext(NavContext);
  const [addReview, setAddReview] = useState(false);
  const { authUser, logOutFun } = useAuthUser();

  function makeReview() {
    setBurgerIsOpen(false);
    setSearchIsOpen(false);
    console.log(
      "Esto abre un modal overly sobre toda la pantalla para agregar una nueva reseña de una pelíucla que buscas, en esste mismo modal",
    );
    setAddReview((prev) => !prev);
  }
  const toggleBurger = () => {
    setBurgerIsOpen((prev) => {
      if (!prev) setSearchIsOpen(false);
      return !prev;
    });
  };

  const toggleDropDesk = () => {
    setDropDeskMenu((prev) => {
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
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const handleResize = (e) => {
      if (e.matches) {
        setBurgerIsOpen(false);
        setSearchIsOpen(false);
      }
    };

    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const handleLogOut = async () => {
    try {
      logOutFun();
      console.log("Chiao Bella!");
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <nav className="container-nav-bar">
        <header id="header-nav">
          <div>
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
          </div>
          {/*  Este es el que debe contener el menú desplegarse y posicionarse absoluto respecto de su padre*/}
          <div onClick={toggleDropDesk} className="drop-desk-menu">
            <ProfilePicUsername
              imgProfile={authUser.profile_pic_url}
              withIcon={true}
              userName={authUser.username}
            />
            <div
              onClick={(e) => {
                if (e.target.tagName === "a") {
                  //esto tiene un bug de afuera
                  setDropDeskMenu(false);
                }
              }}
              id="main-menu"
              aria-hidden={!dropDeskMenu}
              className={`menu-content-desk ${dropDeskMenu ? "show" : ""} `}
            >
              <div className="menu-desplegable-desk">
                <ul className="grid-first-submenu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    {/* <Link to={`/user-profile/${useForm.idUser}`}>Profile</Link> */}
                    <Link to={"/user-profile"}>Profile</Link>
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

                  <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
                    Sign Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="basic-flex-row">
            <div className="display-mobile">
              <ComponenteHeader></ComponenteHeader>
            </div>
            <Link
              to={"/list/new/"}
              className="burger-button display-desk"
              aria-label="Abrir modal"
              /* onClick={makeReview} */

              aria-expanded={addReview}
            >
              <IconPlus size={"22px"} color="white"></IconPlus>
            </Link>
            <div className="display-desk">
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
            </div>
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
        {/* Este es el que se posiciona como absoluto del navbar */}
        <div
          onClick={(e) => {
            if (e.target.tagName === "A") {
              setBurgerIsOpen(false);
            }
          }}
          style={{ border: "solid 1rem green" }}
          id="main-menu"
          aria-hidden={!burgerIsOpen}
          className={`menu-content${burgerIsOpen ? "show" : ""} display-desk`}
        >
          <div className="menu-desplegable-mobil menu-desplegable-desk">
            <ul
              style={{ border: "1px solid pink" }}
              className="flex-first-submenu"
            >
              <li className="">
                <ProfilePicUsername
                  imgProfile={authUser.profile_pic_url}
                  withIcon={true}
                  userName={authUser.username}
                />
              </li>
            </ul>

            <ul
              style={{ border: "2px dotted green" }}
              className="grid-first-submenu"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {/* <Link to={`/user-profile/${useForm.idUser}`}>Profile</Link> */}
                <Link to={"/user-profile"}>Profile</Link>
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

              <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
                Sign Out
              </li>
            </ul>
            <div>
              <ComponenteHeader></ComponenteHeader>
            </div>
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
