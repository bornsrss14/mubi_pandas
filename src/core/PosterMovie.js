import { useState } from "react";
import OverlyActions from "./OverlyActions";

export const PosterMovie = ({
  width,
  posterUrl,
  children,
  comentDate = "4 Aug",
}) => {
  const [showModal, setShowModal] = useState(false);
  const customHeight = (width * 3) / 2;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: `${width}rem` }}
    >
      <div
        style={{ height: `${customHeight}rem`, width: `${width}rem` }}
        id="img-full-cover"
      >
        <img className="img-full-cover" alt="img-poster" src={posterUrl} />
        <div onMouseLeave={() => setShowModal(false)}>
          <OverlyActions
            setShowModal={setShowModal}
            showModal={showModal}
          ></OverlyActions>
        </div>
      </div>
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};
export default PosterMovie;
