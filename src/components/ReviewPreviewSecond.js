import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProfilePicUsername from "../core/ProfilePicUsername";
import Rating from "../core/Rating";

export const ReviewPreviewSecond = ({
  review,
  nickname,
  noStarsRated = 1,
  imgProfile,
  reviewTotalLikes = 12890,
}) => {
  const plural = reviewTotalLikes > 1 ? "s" : "";
  return (
    <section id="container-review-item-second">
      <div>
        <ProfilePicUsername
          imgProfile={imgProfile}
          withNickname={false}
        ></ProfilePicUsername>
      </div>
      <div className="basic-flex-column">
        <div className="basic-flex-row">
          <p style={{ color: "gray" }}>
            Review by <span style={{ color: "white" }}>{review?.username}</span>
          </p>

          <div>
            <Rating
              customColor="white"
              starSize={"12"}
              toRate={false}
              noStars={review?.rating || noStarsRated}
            ></Rating>
          </div>
        </div>
        <div>
          <p>{review?.review}</p>
        </div>
        <div>
          <div className="likesCount">
            <FontAwesomeIcon icon={faHeart} />
            <div>
              Like review {reviewTotalLikes} like{plural}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPreviewSecond;
