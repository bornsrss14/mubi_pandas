import { IconPlus, IconCheck } from "@tabler/icons-react";
import ProfilePicUsername from "./ProfilePicUsername";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const FollowerItem = ({
  follower,
  withBtn,
  imgProfile,
  followers = 2099,
  following = 14,
}) => {
  const [isFollowing, setISFollowing] = useState(false);
  const { formData } = useContext(UserContext);
  const toggleFollow = () => {
    setISFollowing((prev) => !prev);
    console.log(
      "Esto lo agrega a la lista de seguidos/ dejar de seguir por mi"
    );
  };

  /*   const profile = String(follower.idUser) === String(formData.idUser); */

  return (
    <div className="inline-follower">
      <Link to={`/external-profile/${follower.idUser}`}>
        {/*  <Link
        to={profile ? "/user-profile" : `/external-profile/${follower.idUser}`}
      > */}
        <div className="basic-flex-row">
          <div>
            <ProfilePicUsername
              withIcon={false}
              withNickname={false}
              measure={"35px"}
              imgProfile={follower?.profilePicUrl || imgProfile}
            ></ProfilePicUsername>
          </div>
          <div className="">
            <p>
              <strong>
                {follower.givenName} {follower.familyName}
              </strong>
            </p>
            <div className="basic-flex-row">
              <p>{follower.followers.length || followers} followers</p>
              <p>{follower.following.length} following</p>
            </div>
          </div>
        </div>
      </Link>
      {withBtn && (
        <div>
          {follower.idUser !== formData.idUser && (
            <button
              onClick={toggleFollow}
              className={`follow-btn-rel ${isFollowing ? "true" : ""}`}
            >
              {isFollowing ? (
                <IconCheck color="white" size={14} stroke={3}></IconCheck>
              ) : (
                <IconPlus size={14} stroke={3}></IconPlus>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FollowerItem;
