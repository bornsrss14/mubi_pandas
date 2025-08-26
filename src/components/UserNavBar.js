import React from "react";
import ProfilePicUsername from "../core/ProfilePicUsername";

export const UserNavBar = () => {
  return (
    <>
      <div>
        <ProfilePicUsername
          imgProfile={
            "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/cards-tatoki%2Fshiba-perrito.jpg?alt=media&token=4b3718b8-823d-4368-b83c-3a68086c0cd4"
          }
          withIcon={false}
        ></ProfilePicUsername>
      </div>
    </>
  );
};

export default UserNavBar;
