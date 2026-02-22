import React from "react";
import { Link } from "react-router-dom";
import ProfilePicUsername from "./ProfilePicUsername";
import { IconNews, IconStereoGlasses } from "@tabler/icons-react";
export const ComponenteHeader = () => {
  return (
    <div>
      <ul
        style={{ border: "solid 1px red" }}
        className="third-submenu flex-first-submenu gap-submenu"
      >
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
  );
};

export default ComponenteHeader;
