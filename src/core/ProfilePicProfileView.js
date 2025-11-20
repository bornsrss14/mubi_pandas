import ToFollowBtnDots from "./ToFollowBtnDots";
import { useContext } from "react";
import { UserContext } from "../App";
export const ProfilePicProfileView = ({
  userData,
  measure,
  userName = "pandasneezing",
  fontSi,
}) => {
  const profilePicture = {
    width: measure,
    height: measure,
    borderRadius: "50%", // circulo perfecto
    overflow: "hidden",
    objectFit: "cover", // aseguro que la imagen se ajuste sin deformarse
  };
  const { formData } = useContext(UserContext);
  const toFollow = userData.idUser !== formData.idUser;
  return (
    <>
      <div className="grid-profile-hero">
        <div className="picture-avatar" style={profilePicture}>
          <img
            className="img-full-cover"
            alt="profile-pic"
            src={userData?.profile_pic_url || "not found"}
          />
        </div>
        <div className="nickname-avatar">
          <p className="nickname">{userData?.username || "not found"}</p>{" "}
          <p style={{ margin: "0px", color: "white", fontSize: ".89rem" }}>
            {userData.pronoun}
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
