import ToFollowBtnDots from "./ToFollowBtnDots";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useAuthUser } from "../contexts/UserAuthProvider";
export const ProfilePicProfileView = ({ measure }) => {
  const profilePicture = {
    width: measure,
    height: measure,
    borderRadius: "50%", // circulo perfecto
    overflow: "hidden",
    objectFit: "cover", // aseguro que la imagen se ajuste sin deformarse
  };
  const { formData } = useContext(UserContext);
  const { authUser } = useAuthUser();
  const toFollow = authUser.idUser !== formData.idUser;
  return (
    <>
      <div className="grid-profile-hero">
        <div className="picture-avatar" style={profilePicture}>
          <img
            className="img-full-cover"
            alt="profile-pic"
            src={authUser?.profile_pic_url || "not found"}
          />
        </div>
        <div className="nickname-avatar">
          <p className="nickname">{authUser?.username || "not found"}</p>{" "}
          <p style={{ margin: "0px", color: "white", fontSize: ".89rem" }}>
            {authUser.pronoun}
          </p>
        </div>
        <div className="dots-avatar">
          <ToFollowBtnDots toFollow={toFollow}></ToFollowBtnDots>
          <></>
        </div>
      </div>
    </>
  );
};

export default ProfilePicProfileView;
