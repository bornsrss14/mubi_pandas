import { useState } from "react";
import PosterMovie from "../core/PosterMovie";
import { IconPlus, IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const MemberItem = ({ name, stats, picture }) => {
  const [isFollowing, setISFollowing] = useState(false);
  const toggleFollow = () => {
    setISFollowing((prev) => !prev);
    console.log(
      "Esto lo agrega a la lista de seguidos/ dejar de seguir por mi"
    );
  };

  const posters = [
    "https://cdn.posteritati.com/posters/000/000/062/660/the-tale-of-the-princess-kaguya-md-web.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq705Iu-g6MO8NMu5KIm8OXGmQat8RmX6Ew&s",
    "https://apreciart.pe/media/catalog/product/cache/e5e0055fc67962cf6eb0b1e5a0ef540b/p/o/posters-de-peliculas-titanic.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRdR43zBmbstrx5KqkYnwWyOLpi8XNJmKOA&s",
  ];
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
          {posters.map((poster, i) => (
            <PosterMovie width={3} posterUrl={poster}></PosterMovie>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MemberItem;
