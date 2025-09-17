import { IconRefresh, IconMenu3 } from "@tabler/icons-react";
import Rating from "../core/Rating";
import PosterMovie from "../core/PosterMovie";
export const DiaryItem = ({ posterUrl, titleUrl }) => {
  return (
    <div>
      <div id="diary-item-grid">
        <p>30 AGU</p>
        <div className="basic-flex-row">
          {" "}
          <PosterMovie width={4} posterUrl={posterUrl}></PosterMovie>
          <div className="basic-flex-column">
            <h2>{titleUrl}</h2>
            <Rating
              customColor="rgb(2, 221, 2)"
              toRate={false}
              starSize={9}
            ></Rating>
          </div>
        </div>
        <div className="basic-flex-row">
          <button className="burger-button">
            <IconRefresh size={"22px"} stroke={1.5} color="white"></IconRefresh>
          </button>

          <button className="burger-button">
            <IconMenu3 size={"22px"} stroke={1.5} color="white"></IconMenu3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
