import { IconChevronDown, fontSize, IconChevronUp } from "@tabler/icons-react";
import EditBtnDotsBtn from "./EditBtnDotsBtn";
export const ProfilePicProfileView = ({
  formData,
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
  return (
    <>
      <div className="grid-profile-hero">
        <div className="picture-avatar" style={profilePicture}>
          <img
            className="img-full-cover"
            alt="profile-pic"
            src={
              "https://www.elbuentono.com.mx/wp-content/uploads/2014/02/vanesabuganza.jpg"
            }
          />
        </div>
        <div className="nickname-avatar">
          <p className="nickname">{formData.userName}</p>{" "}
          <p style={{ margin: "0px", color: "white", fontSize: ".89rem" }}>
            {formData.pronoun}
          </p>
        </div>
        <div className="dots-avatar">
          <EditBtnDotsBtn></EditBtnDotsBtn>
        </div>
      </div>
    </>
  );
};

export default ProfilePicProfileView;
