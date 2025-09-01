import { useState } from "react";
import { IconEyeFilled, IconDots, IconThumbUp } from "@tabler/icons-react";
import Rating from "./Rating";

export const OverlyActions = ({ setShowModal, showModal }) => {
  const [setLiked] = useState(false);
  const [setSeen] = useState(false);
  const handleAddFavorites = () => {
    console.log("Esto lo agrega a favoritos");
    setLiked((prev) => !prev);
  };

  const handleAddToWatched = () => {
    console.log("Esto agrega a los vistos");
    setSeen((prev) => !prev);
  };

  const showModalOptions = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="overly-actions">
        <div onClick={handleAddFavorites} className="icon-action">
          <IconThumbUp className="icon-action-h" />
        </div>
        <div onClick={handleAddToWatched} className="icon-action">
          <IconEyeFilled className="icon-action-h" />
        </div>
        <div onClick={showModalOptions} className="icon-action">
          <IconDots className="icon-action-h" />
          <div className={`overly-options ${showModal ? "overly-true" : ""} `}>
            <div>
              {" "}
              <Rating toRate={true}></Rating>
            </div>
            <div>Show your activity</div>
            <div>Add to lists...</div>
            <div>Where to watch</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlyActions;
