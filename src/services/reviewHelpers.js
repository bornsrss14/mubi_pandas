import reviewService from "./reviewService";
import movieService from "./movieDatabaseService";

export const fetchUserReviews = async (authUser) => {
  if (!authUser?.id) {
    return;
  }

  if (!authUser?.id) {
    throw new Error("User id is required");
  }
  const response = await reviewService.getByUser(authUser?.id);
  console.log(response?.data, "Esto en mi helper, las reviews");
  const ids = response?.data?.map((item) => item?.id_tmdb);
  const allFavMoviesData = await movieService.getMoviePoster(ids);

  return { posters: allFavMoviesData, reviews: response };
};
