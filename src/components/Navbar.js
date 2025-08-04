import React from "react";
import LogoScalable from "./LogoScalable";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { Link } from "react-router-dom";

export const Navbar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <LogoScalable customHeight={"38px"} customWidth={"140px"} />
      <div className="flex-row">
        <ProfilePicUsername />
        <input
          className="search"
          type="text"
          placeholder="Search by title, genre ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          <li>
            <Link to="/films">Film</Link>
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
