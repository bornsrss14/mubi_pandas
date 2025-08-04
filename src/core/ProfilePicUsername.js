import React from "react";

export const ProfilePicUsername = ({
  userName = "bornsrss",
  measure = "35px",
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
          <img
            className="img-full-cover"
            alt="profile-pic"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/cards-tatoki%2Fshiba-perrito.jpg?alt=media&token=4b3718b8-823d-4368-b83c-3a68086c0cd4"
          />
        </div>
        <p className="nickname">{userName}</p>
      </div>
    </>
  );
};

export default ProfilePicUsername;
