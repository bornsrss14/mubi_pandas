/* import { createContext, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import ratingService from "../services/ratingService";
export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const { id } = useParams();
  const userContextValue = useContext(UserContext);
  const { mainUserData } = userContextValue || {};
  const [ratingRecord, setRatingRecord] = useState(0);

  useEffect(() => {
    setRatingRecord(null);
    const fetchRating = async () => {
      try {
        const record = await ratingService.getByUserAndTmdbId(
          mainUserData?.id,
          id
        );
        console.log("Rating fetched:", record?.data?.rating); // ← Debug
        setRatingRecord(record?.data?.rating);
      } catch (error) {
        console.error("Error al encontrar el rating con el usuario y id ");
        setRatingRecord(0); // ← Si no hay rating, poner en 0
      }
    };

    if (mainUserData?.id && id) {
      // Solo fetch si hay usuario
      fetchRating();
    }
  }, [mainUserData?.id, id]);
  return (
    <RatingContext.Provider value={{ ratingRecord, setRatingRecord }}>
      {children}
    </RatingContext.Provider>
  );
};
 */
