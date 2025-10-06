import { IconPlus, IconCheck } from "@tabler/icons-react";
import ProfilePicUsername from "./ProfilePicUsername";
import { useState } from "react";

const FollowerItem = ({
  withBtn,
  imgProfile,
  followers = 2099,
  following = 14,
}) => {
  const [isFollowing, setISFollowing] = useState(false);
  const toggleFollow = () => {
    setISFollowing((prev) => !prev);
    console.log(
      "Esto lo agrega a la lista de seguidos/ dejar de seguir por mi"
    );
  };
  return (
    <div className="inline-follower">
      <div className="basic-flex-row">
        <div>
          <ProfilePicUsername
            withIcon={false}
            withNickname={false}
            measure={"35px"}
            imgProfile={imgProfile}
          ></ProfilePicUsername>
        </div>
        <div className="">
          <p>
            <strong> Maya Cade</strong>
          </p>
          <div className="basic-flex-row">
            <p>{followers} followers</p>
            <p>{following} following</p>
          </div>
        </div>
      </div>
      {withBtn && (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default FollowerItem;
