import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProfilePicUsername from "../core/ProfilePicUsername";
import PosterMovie from "../core/PosterMovie";
import Rating from "../core/Rating";
import TotalChat from "../core/TotalChat";

export const ReviewPreview = ({
  children,
  noStars,
  reviewTotalLikes = 12890,
  imgProfile,
  userName,
  mubiPoster,
  movieTitle = "The Fantastic Four: First Steps",
}) => {
  const plural = reviewTotalLikes > 1 ? "s" : "";

  return (
    <>
      <section style={{ width: "100%" }}>
        <div className="main-review-preview">
          <div className="firstPartReviewPreview">
            <div>
              {" "}
              <PosterMovie width={7} posterUrl={mubiPoster}></PosterMovie>
            </div>
            <div>
              <ProfilePicUsername
                userName={userName}
                imgProfile={imgProfile}
                withIcon={false}
                measure={"28px"}
              ></ProfilePicUsername>
              <h1> {movieTitle}</h1>
              <p>2025</p>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Rating noStars={noStars}></Rating>
                <TotalChat></TotalChat>
              </div>
            </div>
          </div>
          <div className="secondPartReviewPreview">
            {children}
            <div className="likesCount">
              <FontAwesomeIcon icon={faHeart} />
              <div>
                Like review {reviewTotalLikes} like{plural}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewPreview;
