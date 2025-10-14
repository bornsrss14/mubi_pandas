import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { arrayTabsSubNavbar } from "../storage/kindOfTabs";

export const SubNabvar = ({ children }) => {
  return (
    <div>
      {}
      <div className="flex-row container-navbar-user">
        {children}
        <ul className="navbar-user">
          {arrayTabsSubNavbar.map((itemArr) => (
            <li key={itemArr.idTab}>
              <Link to={`/${itemArr.linkTo}`}>{itemArr.targetTab}</Link>
            </li>
          ))}
        </ul>
        <div>
          <IconSearch></IconSearch>
        </div>
      </div>
    </div>
  );
};

export default SubNabvar;
