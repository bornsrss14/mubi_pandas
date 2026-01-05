import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "../core/Rating";
import { Link } from "react-router-dom";
import LinkPoster from "../core/LinkPoster";
import { TMDB_IMAGE_BASE_URL } from "../pages/Settings";
import { formatDateShortES } from "../utils/dateUtils";

export const BasicReview = ({ objeto }) => {
  const itemReview = objeto ?? "Aún está cargando la review pasada por props🔍";
  console.log(itemReview, "poster🍿🍿🍿");
  return (
    <Link to={`/review&detail/${itemReview?.id_tmdb}`}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          width: "100%",
          gap: "1rem",
          overflow: "hidden",
          margin: "2.6rem .4rem",
        }}
      >
        <div>
          {/* idUserList, se busca por esta referencia*/}
          {/* <Link to={`/mubi/${objeto?.id_mubi?.[0]}`}>
            <PosterMovie
              width={8}
              posterUrl={
                objeto?.poster ||
                objeto.objeto?.posterUrl ||
                objeto?.movieReviewed?.[0]?.posterUrl ||
                "yth"
              }
            ></PosterMovie>
          </Link> */}
          <LinkPoster
            toShowDetails={false}
            mubi={itemReview}
            key={itemReview?.id}
            posterUrl={`${TMDB_IMAGE_BASE_URL}w500${itemReview?.poster}`}
            width={7}
          ></LinkPoster>
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
          <div>
            <p style={{ fontSize: "22px", fontWeight: "700" }}>
              {itemReview?.title ||
                itemReview?.movieReviewed?.[0]?.title ||
                "Here The title"}
              -{" "}
              <span style={{ fontSize: "14px", fontWeight: "300" }}>
                {itemReview?.date}
              </span>
            </p>
          </div>
          <div className="ratingAndDate">
            <Rating
              noStars={
                itemReview?.rating ||
                itemReview?.starRanking ||
                itemReview?.star_ranking ||
                0
              }
              customColor={"rgb(3, 186, 3)"}
              starSize={14}
              widthContainer="40%"
            ></Rating>
            <p>
              {itemReview?.created_at && "created at"} {""}
              <span>
                {formatDateShortES(
                  itemReview?.updated_at ?? itemReview?.created_at
                ) ||
                  itemReview?.date ||
                  itemReview?.date ||
                  itemReview?.watched ||
                  "Here the date"}
              </span>
            </p>
          </div>
          <p style={{ fontSize: "9px", fontWeight: "700", color: "orange" }}>
            {itemReview?.spoilers ? "MAY CONTAIN SPOILERS" : "Read more"}
          </p>

          <p className="txt-review-truncate" style={{ fontSize: "15px" }}>
            {itemReview?.review ||
              itemReview?.txtReview ||
              itemReview?.txt_review ||
              "Aquí va el contenido de la reseña que el usuario ha hecho"}
          </p>
          <div className="likesCount">
            <div>
              <FontAwesomeIcon icon={faHeart} />{" "}
            </div>
            <p style={{ fontSize: "13px" }}>
              {itemReview?.likes || itemReview.total_likes} likes
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BasicReview;
