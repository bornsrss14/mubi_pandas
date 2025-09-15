import LogoScalable from "./LogoScalable";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link } from "react-router-dom";
import {
  IconSearch,
  IconNews,
  IconPlus,
  IconStereoGlasses,
} from "@tabler/icons-react";
import { useState } from "react";

export const Navbar = ({ movies, query, setQuery }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  return (
    <nav className="container-nav-bar">
      <header id="header-nav">
        <LogoScalable customHeight={"38px"} customWidth={"140px"} />
        <div className="basic-flex-row">
          <button className="burger-button ">
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
          <button className="burger-button">
            <IconSearch size={"22px"} color="white"></IconSearch>
          </button>
        </div>
      </header>

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
        <div className=" menu-desplegable-mobil">
          <ul className="flex-first-submenu">
            <li className="">
              <ProfilePicUsername
                imgProfile={
                  "https://www.elbuentono.com.mx/wp-content/uploads/2014/02/vanesabuganza.jpg"
                }
                withIcon={true}
              />
            </li>
          </ul>

          <ul className="grid-first-submenu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"user-profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/user-films"}>Films</Link>
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
              <Link to={"/network"}>Network</Link>
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
              <Link className="basic-flex-row" to="/films">
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
  );
};

export default Navbar;
