import { useState } from "react";
import PosterMovie from "../core/PosterMovie";
import { IconPlus, IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { getMubisByIds } from "../utils/dateUtils";

export const MemberItem = ({ name, stats, picture, arrayPosters }) => {
  const [isFollowing, setISFollowing] = useState(false);
  const toggleFollow = () => {
    setISFollowing((prev) => !prev);
    console.log(
      "Esto lo agrega a la lista de seguidos/ dejar de seguir por mi"
    );
  };

  const posters = getMubisByIds(arrayPosters);
  console.log(posters.posterUrl);

  return (
    <Link to={"/external-profile"}>
      <div className="member-card">
        <div className="avatar-container">
          <img src={picture} alt="User" className="avatar" />
          <button
            onClick={toggleFollow}
            className={`follow-btn ${isFollowing ? "true" : ""}`}
          >
            {isFollowing ? (
              <IconCheck size={12} stroke={3}></IconCheck>
            ) : (
              <IconPlus size={12} stroke={3}></IconPlus>
            )}
          </button>
        </div>
        <h3 className="name">{name}</h3>
        <p className="stats">{stats}</p>
        <div className="posters">
          {arrayPosters.map((poster, i) => (
            <PosterMovie width={3} posterUrl={poster.posterUrl}></PosterMovie>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MemberItem;
