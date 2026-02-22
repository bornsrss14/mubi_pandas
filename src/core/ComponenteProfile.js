import React from "react";
import ProfilePicUsername from "./ProfilePicUsername";
import { Link } from "react-router-dom";

export const ComponenteProfile = () => {
  return (
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
  );
};

export default ComponenteProfile;
