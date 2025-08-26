import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProfilePicUsername from "../core/ProfilePicUsername";
import PosterMovie from "../core/PosterMovie";
import Rating from "../core/Rating";

export const ReviewPreview = ({ reviewTotalLikes = 12890 }) => {
  const plural = reviewTotalLikes > 1 ? "s" : "";

  return (
    <>
      <section style={{ width: "100%" }}>
        <div className="main-review-preview">
          <div className="firstPartReviewPreview">
            <div>
              {" "}
              <PosterMovie
                height="10rem"
                width="7rem"
                posterUrl={
                  "https://m.media-amazon.com/images/I/61Emapd1JJL.jpg"
                }
              ></PosterMovie>
            </div>
            <div>
              <ProfilePicUsername
                userName="pandas"
                imgProfile={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/cards-tatoki%2Fshiba-perrito.jpg?alt=media&token=4b3718b8-823d-4368-b83c-3a68086c0cd4"
                }
                withIcon={false}
                measure={"28px"}
              ></ProfilePicUsername>
              <h1> The Fantastic Four: First Steps</h1>
              <h1>2025</h1>
              <Rating></Rating>
            </div>
          </div>
          <div
            style={{ border: "2px solid pink", margin: "1rem" }}
            className="secondPartReviewPreview"
          >
            <div> Not Bad, Or you could just watch The Incredibles again.</div>
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
