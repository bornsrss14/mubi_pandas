import { IconEye, IconHeart, IconPlaylistAdd } from "@tabler/icons-react";
import Rating from "./Rating";
export const RatingTools = () => {
  return (
    <>
      <div id="container-tools-rating">
        <div className="tool-rating">
          <IconEye></IconEye>
          <IconHeart></IconHeart>
          <IconPlaylistAdd></IconPlaylistAdd>
        </div>
        <div className="tool-rating">
          <Rating></Rating>
        </div>
        <div className="tool-rating">Show your activity</div>
        <div className="tool-rating">Review or log</div>
        <div className="tool-rating">Add to list</div>
      </div>
    </>
  );
};

export default RatingTools;
