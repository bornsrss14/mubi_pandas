import {
  IconHeartFilled,
  IconLabelFilled,
  IconHeart,
} from "@tabler/icons-react";
import Rating from "../core/Rating";
import LinkPoster from "../core/LinkPoster";
import { TMDB_IMAGE_BASE_URL } from "../pages/Settings";
import { useContext, useState } from "react";
import { UserContext } from "../App";
/*"id_user": 4, "id_tmdb": 554, "review": " delete this as soon as you see this ","has_spoilers": 1, "rating": 5 */
export const ReviewComposer = ({ movieTmdb = 400, id_tmdb }) => {
  const userContextValue = useContext(UserContext);
  const { mainUserData } = userContextValue || {};
  const [draftReview, setDraftReview] = useState({
    id_user: mainUserData?.id,
    id_tmdb: 234,
    review: null,
    has_spoilers: 0,
    rating: 2,
  });
  console.log("C'est mon  drafting 🫏", draftReview);
  const saveReview = () => {
    console.log("Aquí va mi save review function");
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setDraftReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  function getDate({ withTime = false } = {}) {
    const date = new Date();
    return withTime ? date.toISOString() : date.toISOString().split("T")[0];
  }

  const [hasSpoilers, setHasSpoilers] = useState(true);
  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setHasSpoilers(checked);
    console.log("El valor es", checked);
  };
  const poster_path =
    "https://image.tmdb.org/t/p/w500/xvfNVkpL7SJPt2WNyDp3Xoh3BTK.jpg";

  return (
    <div className="margin-desktop" style={{ marginTop: "4rem" }}>
      <section className="cont-review section-persentage">
        <div
          className="container-review"
          style={{ background: "rgba(60, 83, 106, 1)", padding: "2rem 1.3em" }}
        >
          <div className="header-review">
            <p className="header-txt">I watched...</p>
          </div>
          {/* ---------------------------------------------------------------> */}
          <div className="grid-areas-review">
            <div className="poster">
              <LinkPoster
                posterUrl={`${TMDB_IMAGE_BASE_URL}w500${poster_path}`}
                width={6}
              ></LinkPoster>
            </div>
            <div className="title">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                <p className="review-title">Tokyo Godfaters</p>
                <p className="review-year">2003</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                className="container-checkboxes"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".6rem",
                  }}
                >
                  <IconLabelFilled color="#4caf50"></IconLabelFilled>
                  <label className="font-form-review">
                    Watched on:{" "}
                    <span className="cont-date">
                      {getDate({ withTime: false })}
                    </span>
                  </label>
                </div>
                <div className="spoiler-toggle">
                  <input
                    type="checkbox"
                    id="has_spoilers"
                    name="has_spoilers"
                    className="spoiler-checkbox"
                    cleacla
                    checked={hasSpoilers}
                    onChange={((e) => handleCheckbox(e), handleChangeForm)}
                  />
                  <label htmlFor="has_spoilers" className="spoiler-label">
                    <span className="spoiler-icon"></span>
                    <span>Contain spoilers</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="txt_review">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label className="font-form-review" htmlFor="review">
                  Review
                </label>
                <textarea
                  className="txt_area"
                  id="review"
                  name="review"
                  value={draftReview.review}
                  onChange={handleChangeForm}
                  placeholder="Feel free to add a review..."
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="container-review-tool"
              >
                <Rating
                  id_tmdb={draftReview?.id_tmdb}
                  starSize={18}
                  noStars={5}
                  toRate={true}
                ></Rating>
                <IconHeart size={"2.3rem"} color="gray" stroke={1}></IconHeart>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: " 1.9rem 3rem",
            gap: "1rem",
            background: "rgba(23, 44, 63, 1)",
          }}
        >
          <button
            onClick={() => saveReview()}
            className="simple-button btn-cancel"
          >
            CANCEL
          </button>
          <button onClick={() => saveReview()} className="simple-button">
            SAVE
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewComposer;
