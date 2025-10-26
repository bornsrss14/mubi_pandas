import { IconChevronDown } from "@tabler/icons-react";
import { OptimizedImage } from "../hooks/useOptimizedImage";
export const ProfilePicUsername = ({
  withNickname = true,
  children,
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
    backgroundColor: "white",
  };
  return (
    <>
      <div className="flex-row div-picture-nikname">
        <div style={profilePicture}>
          {/* <img className="img-full-cover" alt="profile-pic" src={imgProfile} /> */}
          <OptimizedImage
            placeholder="/lowQuality.jpeg"
            className="rounded shadow"
            skeletonClassName="rounded"
            alt="img-poster"
            src={imgProfile}
          ></OptimizedImage>
        </div>
        {withNickname && (
          <p style={{ fontSize: fontSi }} className="nickname">
            {userName}
          </p>
        )}

        {withIcon ? (
          <IconChevronDown size={"18px"} stroke={"2px"}></IconChevronDown>
        ) : (
          ""
        )}
        {children}
      </div>
    </>
  );
};

export default ProfilePicUsername;
