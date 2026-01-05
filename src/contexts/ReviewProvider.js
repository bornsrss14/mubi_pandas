import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUserReviews } from "../services/reviewHelpers";

const ReviewContext = createContext();

export const ReviewProvider = ({ children, mainUserData }) => {
  const mainUserDataU = mainUserData;
  const [allPosters, setAllPosters] = useState([]);
  const [allReviews, setAllReviews] = useState(null);
  const [loadingRevProv, setLoading] = useState(false);
  const [errorRevProv, setError] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      const userId = mainUserDataU?.id;
      if (!userId) {
        console.log("4. No user ID found, returning");
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { posters, reviews } = await fetchUserReviews(mainUserDataU?.id);
        setAllPosters(posters);
        setAllReviews(reviews);
      } catch (error) {
        console.log("Error loading reviews", error);
        setError(error.message || "Error al obtener datos (╯°□°）╯ ");
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, [mainUserDataU]);

  return (
    <div>
      <ReviewContext.Provider
        value={{ allPosters, allReviews, loadingRevProv, errorRevProv }}
      >
        {children}
      </ReviewContext.Provider>
    </div>
  );
};
export const useReview = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return context;
};
