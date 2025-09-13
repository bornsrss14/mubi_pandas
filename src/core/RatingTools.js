import { IconEye, IconHeart, IconPlaylistAdd } from "@tabler/icons-react";
import Rating from "./Rating";
export const RatingTools = ({ showRatingTools }) => {
  return (
    <>
      <div id="container-tools-rating">
        <button onClick={showRatingTools} className="close-btn-float">
          x{" "}
        </button>
        <div className="tool-rating tools-icons-rating">
          <div id="centered">
            <IconEye size={"4.3rem"} stroke={1}></IconEye>
            <p>Watch</p>
          </div>
          <div id="centered">
            <IconHeart size={"4.3rem"} stroke={1}></IconHeart>
            <p>Like</p>
          </div>
          <div id="centered">
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
        <div className="tool-rating tool-txt">Show your activity</div>
        <div className="tool-rating tool-txt">Review or log...</div>
        <div className="tool-rating tool-txt">Add to list...</div>
      </div>
    </>
  );
};

export default RatingTools;
