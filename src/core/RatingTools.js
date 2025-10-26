import {
  IconEye,
  IconHeart,
  IconHeartFilled,
  IconPlaylistAdd,
} from "@tabler/icons-react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useLikes } from "../contexts/LikesContext";
export const RatingTools = ({ showRatingTools, mubi, user }) => {
  const { saveLike, userLikes } = useLikes();
  function handleLike() {
    saveLike(mubi, user);
    console.log("Objetos de", userLikes);
  }
  return (
    <>
      <div id="container-tools-rating">
        <button onClick={showRatingTools} className="close-btn-float">
          x{" "}
        </button>
        <div className="tool-rating tools-icons-rating">
          <div
            onClick={() =>
              console.log("This btn adds to the list of watched films")
            }
            id="centered"
          >
            <IconEye size={"4.3rem"} stroke={1}></IconEye>
            <p>Watch</p>
          </div>
          <div onClick={() => handleLike()} id="centered">
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
            <p>Like</p>
          </div>
          <div
            onClick={() =>
              console.log("This btn adds the film a the list selected")
            }
            id="centered"
          >
            <IconPlaylistAdd size={"4.3rem"} stroke={1}></IconPlaylistAdd>
            <p>Watchlist</p>
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
