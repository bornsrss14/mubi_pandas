import { IconChevronDown, fontSize, IconChevronUp } from "@tabler/icons-react";
export const ProfilePicUsername = ({
  userName = "bornsrss",
  measure = "35px",
  withIcon = false,
  fontSi,
  imgProfile,
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
      <div className="flex-row div-picture-nikname">
        <div style={profilePicture}>
          <img className="img-full-cover" alt="profile-pic" src={imgProfile} />
        </div>
        <p style={{ fontSize: fontSi }} className="nickname">
          {userName}
        </p>
        {withIcon ? (
          <IconChevronDown size={"18px"} stroke={"2px"}></IconChevronDown>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProfilePicUsername;
