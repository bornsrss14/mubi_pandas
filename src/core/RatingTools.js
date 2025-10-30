import {
  IconEye,
  IconEyeFilled,
  IconHeart,
  IconHeartFilled,
  IconPlaylistAdd,
} from "@tabler/icons-react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useLikes } from "../contexts/LikesContext";
import { useWatch } from "../contexts/WatchContext";
export const RatingTools = ({ showRatingTools, mubi, user }) => {
  const { saveLike, userLikes, deleteFromLike } = useLikes();
  const {
    userWatch,
    saveWatch,
    deleteFromWatch,
    userWatched,
    saveWatched,
    deleteFromWatched,
  } = useWatch();
  function handleLike() {
    saveLike(mubi, user);
  }
  function handleAddWatchList() {
    saveWatch(mubi, user);
  }
  function handleDeleteWatchList() {
    deleteFromWatch(mubi);
  }
  function handleWatched() {
    saveWatched(mubi, user);
  }
  function handleDeleteFromWatched() {
    deleteFromWatched(mubi);
  }

  function handleDeleteLike() {
    deleteFromLike(mubi);
  }
  return (
    <>
      <div id="container-tools-rating">
        <button onClick={showRatingTools} className="close-btn-float">
          x{" "}
        </button>
        <div className="tool-rating tools-icons-rating">
          <div
            onClick={
              userWatched.some((watched) => watched.idMubiWatched === mubi)
                ? () => handleDeleteFromWatched()
                : () => handleWatched()
            }
            id="centered"
          >
            {userWatched.some((watched) => watched.idMubiWatched === mubi) ? (
              <IconEyeFilled
                color="#76CD26"
                size={"3.8rem"}
                stroke={1}
              ></IconEyeFilled>
            ) : (
              <IconEye size={"4.3rem"} stroke={1}></IconEye>
            )}

            <p>
              {userWatched.some((watched) => watched.idMubiWatched === mubi)
                ? "Watched"
                : "Watch"}
            </p>
          </div>
          <div
            onClick={
              userLikes.some((like) => like.idMubiLiked === mubi)
                ? () => handleDeleteLike()
                : () => handleLike()
            }
            id="centered"
          >
            {/* retorna true or false => en la lista de Me gusta del usuario, hay alguna coincidencia con 
            el id que se está pasando de la película selecionada (?) */}
            {userLikes.some((like) => like.idMubiLiked === mubi) ? (
              <IconHeartFilled
                size={"4.3rem"}
                color="red"
                stroke={1}
              ></IconHeartFilled>
            ) : (
              <IconHeart size={"4.3rem"} stroke={1}></IconHeart>
            )}
            <p>
              {userLikes.some((like) => like.idMubiLiked === mubi)
                ? "Liked"
                : "Like"}
            </p>
          </div>
          <div
            onClick={
              userWatch.some((watch) => watch.idMubiWatch === mubi)
                ? () => handleDeleteWatchList()
                : () => handleAddWatchList()
            }
            id="centered"
          >
            {userWatch.some((watch) => watch.idMubiWatch === mubi) ? (
              <IconPlaylistAdd
                size={"4.3rem"}
                color="#76CD26"
                stroke={1}
              ></IconPlaylistAdd>
            ) : (
              <IconPlaylistAdd size={"4.3rem"} stroke={1}></IconPlaylistAdd>
            )}

            <p>
              {userWatch.some((watch) => watch.idMubiWatch === mubi)
                ? "Remove"
                : "Watchlist"}
            </p>
          </div>
        </div>
        <div className="tool-rating">
          <div id="centered">
            <p>Rate</p>
            <Rating stroke={0.71} starSize={47} toRate={true}></Rating>
          </div>
        </div>
        <div
          onClick={() => console.log("Show your activity")}
          className="tool-rating tool-txt"
        >
          <Link to={"/activity-user"}>Show your activity</Link>
        </div>
        <div
          onClick={() =>
            console.log("Esto es para agregar una reseña, o editar")
          }
          className="tool-rating tool-txt"
        >
          <Link to={""}>Review or log...</Link>
        </div>
        <div
          onClick={() => console.log("Esto me permite agregar a una lista")}
          className="tool-rating tool-txt"
        >
          <Link to={""}>Add to list...</Link>
        </div>
      </div>
    </>
  );
};

export default RatingTools;
