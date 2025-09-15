import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProfilePicUsername from "../core/ProfilePicUsername";
import Rating from "../core/Rating";

export const ReviewPreviewSecond = ({
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
            Review by <span style={{ color: "white" }}>{nickname}</span>
          </p>

          <div>
            <Rating
              starSize={"12"}
              toRate={false}
              noStars={noStarsRated}
            ></Rating>
          </div>
        </div>
        <div>
          <p>
            lcl I watched this one agther the second one, I felt like this one
            was no ehrte neas as goof as ethe sevonf
          </p>
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
