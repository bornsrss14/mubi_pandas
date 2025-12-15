import { IconStar, IconStarFilled, IconX } from "@tabler/icons-react";

import { useContext, useState } from "react";
import { UserContext } from "../App";
import { RatingContext } from "../pages/MubiDetails";
import ratingService from "../services/ratingService";
export const Rating = ({
  id_tmdb,
  stroke,
  starSize,
  toRate = false,
  noStars = 5,
  widthContainer,
  customColor = "fff",
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const userContextValue = useContext(UserContext);
  const { mainUserData } = userContextValue || {}; // ← Agrega || {}

  const ratingContextValue = useContext(RatingContext);
  const { ratingRecord, setRatingRecord } = ratingContextValue || {};
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

  function settingHoverRating(i) {
    setHoverRating(i);
  }

  console.log("Este es mi rating seleccionado 🐷🐷🐷", ratingRecord);
  const deleteRating = async (id_user, id_tmdb) => {
    try {
      await ratingService.deleteByUserAndMubiId(id_user, id_tmdb);
      setRatingRecord(0);
      console.log("Rating eliminado └(＾ω＾)┐ ");
      alert("Rating deleted └(＾ω＾)┐");
    } catch (error) {
      console.error("No se pudo eliminar este rating");
      alert(error.message || "Error al eliminar el rating(╯°□°）╯");
    }
  };

  const handleRating = async (rating) => {
    try {
      if (!mainUserData?.id) {
        console.error("Usuario no autenticado");
        return;
      }
      setRatingRecord(rating);
      const ratingData = {
        id_user: mainUserData?.id,
        id_tmdb: id_tmdb,
        rating: rating,
      };
      await ratingService.create(ratingData);
      console.log("Rating creada con éxito ⭐");
    } catch (error) {
      console.error("Something went wrong trying to create the rating");
      alert(error.message || "Error al agregar el usuario(╯°□°）╯");
    }
  };

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
                  {ratingRecord >= i + 1 || hoverRating >= i + 1 ? (
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

              {ratingRecord >= 1 ? (
                <button
                  onClick={() => deleteRating(mainUserData.id, id_tmdb)}
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
        <p style={textStyle}>{ratingRecord || hoverRating || ""}</p>
      </div>
    </>
  );
};

export default Rating;
