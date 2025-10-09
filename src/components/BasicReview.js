import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "../core/Rating";
import PosterMovie from "../core/PosterMovie";

export const BasicReview = ({ objeto }) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          width: "33rem",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <div>
          <PosterMovie
            width={8}
            posterUrl={objeto.posterUrl}
            comentDate="15 sep"
          ></PosterMovie>
        </div>
        <div
          style={{
            maxWidth: "100%",
            justifyItems: "start",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
        >
          <p style={{ fontSize: "22px", fontWeight: "700" }}>{objeto.title}</p>
          <div className="ratingAndDate">
            <Rating
              noStars={objeto.starRanking}
              customColor={" rgb(3, 186, 3)"}
              starSize={14}
              widthContainer="40%"
            ></Rating>
            <p>{objeto.date}</p>
          </div>
          <p style={{ fontSize: "9px", fontWeight: "700", color: "orange" }}>
            {objeto.spoilers ? "MAY CONTAIN SPOILERS" : "Read more"}
          </p>
          <p className="txt-review-truncate" style={{ fontSize: "15px" }}>
            {objeto.txtReview}
          </p>
          <div className="likesCount">
            <div>
              <FontAwesomeIcon icon={faHeart} />{" "}
            </div>
            <p style={{ fontSize: "13px" }}>2 like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicReview;
