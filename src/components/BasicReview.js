import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "../core/Rating";
import PosterMovie from "../core/PosterMovie";

export const BasicReview = ({
  spoilers = true,
  posterReview = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3mTHkOCUusc1scC_nuSANs6VcFC4cpPkjO8SHKbwAM3tIdqbq38orWFaDj7I7oRvTJYx8rfCx8WiBkQVT6RetSU1rN-FbjXfurNEIp_qo",
  titleMubiRevied,
}) => {
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
            posterUrl={posterReview}
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
          <p style={{ fontSize: "22px", fontWeight: "700" }}>
            {titleMubiRevied}
          </p>
          <div className="ratingAndDate">
            <Rating
              customColor={" rgb(3, 186, 3)"}
              starSize={14}
              widthContainer="40%"
            ></Rating>
            <p>4 Agu</p>
          </div>
          <p style={{ fontSize: "15px" }}>
            {spoilers ? "This review may contain spoilers" : "Read more"}
          </p>
          <p className="txt-review-truncate" style={{ fontSize: "15px" }}>
            Una de mis películas favoritas hasta el momento, simbolizando mucho
            la oportunidad de la vida y que es un acto tan delicado y eimero
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
