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
import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import ReviewComposer from "../components/ReviewComposer";
export const RatingTools = ({
  showRatingTools,
  mubi,
  id_tmdb,
  states,
  toggle,
  loadingData,
}) => {
  const { saveLike, userLikes, deleteFromLike } = useLikes();
  const {
    userWatch,
    saveWatch,
    deleteFromWatch,
    userWatched,
    saveWatched,
    deleteFromWatched,
  } = useWatch();
  //Determinamos cuál UI según viewport
  const { isMobile, isDesktop } = useBreakpoint();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  return (
    <>
      <div id={isMobile ? "container-tools-rating" : ""}>
        <button onClick={showRatingTools} className="close-btn-float">
          x{" "}
        </button>
        <div className="tool-rating tools-icons-rating">
          <div
            onClick={() => toggle("watched")}
            disabled={loadingData}
            id="centered"
          >
            {states.watched ? (
              <IconEyeFilled
                color="#76CD26"
                size={"3.8rem"}
                stroke={1}
              ></IconEyeFilled>
            ) : (
              <IconEye size={"4.3rem"} stroke={1}></IconEye>
            )}

            <p>{states.watched ? "Watched" : "Watch"}</p>
          </div>
          <div
            /* onClick={
              userLikes.some((like) => like.idMubiLiked === mubi)
                ? () => handleDeleteLike()
                : () => handleLike()
            } */
            onClick={() => toggle("liked")}
            disabled={loadingData}
            id="centered"
          >
            {/* retorna true or false => en la lista de Me gusta del usuario, hay alguna coincidencia con 
            el id que se está pasando de la película selecionada (?) */}
            {states?.liked ? (
              <IconHeartFilled
                size={"4.3rem"}
                color="red"
                stroke={1}
              ></IconHeartFilled>
            ) : (
              <IconHeart size={"4.3rem"} stroke={1}></IconHeart>
            )}
            <p>{states.liked ? "Liked" : "Like"}</p>
          </div>
          <div
            onClick={() => {
              toggle("to_watch");
            }}
            disabled={loadingData}
            id="centered"
          >
            {states.to_watch ? (
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
            <Rating
              id_tmdb={id_tmdb}
              stroke={0.71}
              starSize={isDesktop ? 27 : 47}
              toRate={true}
            ></Rating>
          </div>
        </div>
        <div
          onClick={() => console.log("Show your activity")}
          className="tool-rating tool-txt"
        >
          <Link to={"/activity-user"}>Show your activity</Link>
        </div>
        <div
          /*Cerrar el modal de tools */
          onClick={() => setIsReviewModalOpen(true)}
          className="tool-rating tool-txt"
        >
          <span>Review or log...</span>
          {/* <Link to={`/movies/review/${id_tmdb}`}>Review or log...</Link> */}
        </div>
        <div className="tool-rating tool-txt">
          <Link to={""}>Add to list...</Link>
        </div>
        {isReviewModalOpen && (
          <ReviewComposer
            id_tmdb={id_tmdb}
            onClose={() => setIsReviewModalOpen(false)}
          ></ReviewComposer>
        )}
      </div>
    </>
  );
};

export default RatingTools;
