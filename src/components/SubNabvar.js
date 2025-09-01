import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const SubNabvar = ({ children }) => {
  return (
    <div>
      <div className="flex-row container-navbar-user">
        {children}
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
    </div>
  );
};

export default SubNabvar;
