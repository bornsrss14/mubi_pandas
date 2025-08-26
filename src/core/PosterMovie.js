import { useState } from "react";
import OverlyActions from "./OverlyActions";

export const PosterMovie = ({
  height = "24rem",
  width = "15rem",
  posterUrl,
  children,
  comentDate = "4 Aug",
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: height, width: width }} id="img-full-cover">
        <img className="img-full-cover" alt="img-poster" src={posterUrl} />
        <div onMouseLeave={() => setShowModal(false)}>
          <OverlyActions
            setShowModal={setShowModal}
            showModal={showModal}
          ></OverlyActions>
        </div>
      </div>
      {children}
    </div>
  );
};
export default PosterMovie;
