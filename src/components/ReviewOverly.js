import { IconX, IconHeart, IconHeartFilled } from "@tabler/icons-react";
import PosterMovie from "../core/PosterMovie";
import { useState } from "react";
import Rating from "../core/Rating";

export const ReviewOverly = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [hasSpoiler, setHasSpoiler] = useState(false);
  const [txtReview, setTxtReview] = useState("");

  return (
    <>
      <div className={`background-overly`}></div>
      <section className={`container-review-overly`}>
        <div className="basic-flex-row top-overly">
          <div
            style={{ gap: "3rem", padding: "0rem 1.4rem" }}
            className="basic-flex-row"
          >
            <button className="btn-back-review">BACK</button>
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              I watched...
            </p>
          </div>
          <button className="burger-button">
            <IconX size={"17px"} color="white" stroke={1}></IconX>
          </button>
        </div>
        <div className="basic-flex-row">
          <div>
            <PosterMovie
              posterUrl={
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjHiCFuqr7ACRsUVX_SVPUFvp-hiejg74DsCjPvfS6PQq3PLIbWTtvgG1s7KlaLw--nBEPgmgQY9qi-jPS8FEdZCNmZiVzk01XCy4mUrZxXQ"
              }
              width={"3"}
            ></PosterMovie>
          </div>
          <div className="basic-flex-row">
            <h2 style={{ fontSize: "2rem" }}>Maxine</h2>
            <p style={{ fontSize: "1.4rem" }}>2022</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
          <div className="basic-flex-row">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="checkmark"></span>
              Watched on <span> 16 Sep 2025</span>
            </label>
          </div>
          <div className="basic-flex-row">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={hasSpoiler}
                onChange={(e) => setHasSpoiler(e.target.checked)}
              />
              <span className="checkmark"></span>
              <span>This review has spoilers</span>
            </label>
          </div>
        </div>
        <div className="textarea-container">
          <label>Mensaje</label>
          <textarea
            onChange={(e) => setTxtReview(e.target.value)}
            id="txtarea"
            value={txtReview}
            placeholder="Type your review here..."
          ></textarea>
        </div>
        <div className="wrap-like-rating basic-flex-row">
          <div className="basic-row-column">
            <p>Rating</p>
            <Rating toRate={true} stroke={1.5} starSize={"24"}></Rating>
          </div>
          <div className="basic-row-column">
            <p>Like</p>
            <button className="burger-button">
              <IconHeartFilled color="white"></IconHeartFilled>
            </button>
          </div>
        </div>
        <button className="btn-save-review">Save</button>
      </section>
    </>
  );
};

export default ReviewOverly;
