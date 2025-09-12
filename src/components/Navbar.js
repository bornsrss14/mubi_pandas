import React from "react";
import LogoScalable from "./LogoScalable";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link } from "react-router-dom";

export const Navbar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <LogoScalable customHeight={"38px"} customWidth={"140px"} />
      <div className="flex-row">
        <div className="container-menu-profile">
          <ProfilePicUsername
            imgProfile={
              "https://www.elbuentono.com.mx/wp-content/uploads/2014/02/vanesabuganza.jpg"
            }
            withIcon={true}
          />
          <div className="menu-flot">
            <ul>
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
          </div>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search by title, genre ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul style={{ margin: "0rem 2rem" }} className="flex-row">
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
