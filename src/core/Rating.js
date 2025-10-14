import { IconStar, IconStarFilled, IconX } from "@tabler/icons-react";

import { useState } from "react";
export const Rating = ({
  stroke,
  starSize,
  toRate = false,
  noStars = 5,
  widthContainer,
  customColor = "fff",
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const styleContainer = {
    width: widthContainer,
    height: "auto",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };
  const starContainerStyle = {
    display: "flex",
    gap: ".2rem",
  };
  const textStyle = {
    IconLineHeight: ".8rem",
    margin: "0",
    color: "white",
    fontSize: "1rem",
  };

  function handleRating(rating) {
    setRating(rating);
  }
  function settingHoverRating(i) {
    setHoverRating(i);
  }

  function resetRatingValues() {
    console.log("Esto resetea el estado de las estrellas");
    setRating(0);
  }

  return (
    <>
      <div style={styleContainer}>
        <div style={starContainerStyle}>
          {toRate && (
            <div style={{ display: "flex", alignItems: "center" }}>
              {Array.from({ length: noStars }, (_, i) => (
                <span
                  onClick={() => handleRating(i + 1)}
                  onMouseEnter={() => settingHoverRating(i + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  key={i}
                  style={{ cursor: "pointer" }}
                >
                  {rating >= i + 1 || hoverRating >= i + 1 ? (
                    <IconStarFilled
                      stroke={stroke}
                      size={`${starSize}px`}
                      fill="#ffdb10"
                    />
                  ) : (
                    <IconStar
                      size={`${starSize}px`}
                      color="#ffdb10"
                      stroke={stroke}
                    />
                  )}
                </span>
              ))}

              {rating >= 1 ? (
                <button
                  onClick={resetRatingValues}
                  style={{ margin: "0 0 0 1rem" }}
                  className="burger-button"
                >
                  <IconX stroke={2} size={"15px"} color="white" />
                </button>
              ) : (
                <span></span>
              )}
            </div>
          )}

          {!toRate && //aquí ya está calificado
            Array.from(
              {
                length: noStars,
              },
              (_, i) => (
                <span key={i}>
                  {noStars >= i + 1 ? (
                    <IconStarFilled
                      stroke={stroke}
                      size={`${starSize}px`}
                      fill={customColor}
                    />
                  ) : (
                    <p>oops! error</p>
                  )}
                </span>
              )
            )}
        </div>
        <p style={textStyle}>{rating || hoverRating || ""}</p>
      </div>
    </>
  );
};

export default Rating;
