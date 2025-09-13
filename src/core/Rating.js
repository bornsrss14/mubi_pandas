import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";
export const Rating = ({
  stroke,
  starSize,
  toRate = false,
  noStars = 5,
  widthContainer,
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
    color: "gray",
    fontSize: "1rem",
  };

  function handleRating(rating) {
    setRating(rating);
  }
  function settingHoverRating(i) {
    setHoverRating(i);
  }

  return (
    <>
      <div style={styleContainer}>
        <div style={starContainerStyle}>
          {toRate &&
            Array.from(
              {
                length: noStars,
              },
              (_, i) => (
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
              )
            )}

          {!toRate && //aquí ya está calificado
            Array.from(
              {
                length: noStars,
              },
              (_, i) => (
                <span>
                  {noStars >= i + 1 ? (
                    <IconStarFilled
                      stroke={stroke}
                      size={`${starSize}px`}
                      fill="#fff"
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
