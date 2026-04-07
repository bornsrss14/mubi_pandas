import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUserReviews } from "../services/reviewHelpers";
import { useAuthUser } from "./UserAuthProvider";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const { authUser } = useAuthUser();
  const [allPosters, setAllPosters] = useState([]);
  const [allReviews, setAllReviews] = useState(null);
  const [loadingRevProv, setLoading] = useState(false);
  const [errorRevProv, setError] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      if (!authUser) {
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { posters, reviews } = await fetchUserReviews(authUser);
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
  }, [authUser]);

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
