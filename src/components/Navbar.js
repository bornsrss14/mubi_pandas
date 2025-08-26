import React from "react";
import LogoScalable from "./LogoScalable";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link, Links } from "react-router-dom";

export const Navbar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <LogoScalable customHeight={"38px"} customWidth={"140px"} />
      <div className="flex-row">
        <div className="container-menu-profile">
          <ProfilePicUsername
            imgProfile={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/cards-tatoki%2Fshiba-perrito.jpg?alt=media&token=4b3718b8-823d-4368-b83c-3a68086c0cd4"
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
              <li>Diary</li>
              <li>Reviews</li>
              <li>Watchlist</li>
              <li>Lists</li>
              <li>Likes</li>
              <li>Tags</li>
              <li>Network</li>
              <li>Settings</li>
              <li>Subscriptions</li>
              <li>Sign Out</li>
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
