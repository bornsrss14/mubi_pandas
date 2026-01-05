import reviewService from "./reviewService";
import movieService from "./movieDatabaseService";

export const fetchUserReviews = async ({ id_user }) => {
  const id = id_user ?? 4;
  console.log("fetchUserReviews - userId received:", id, typeof id);

  if (!id) {
    throw new Error("User id is required");
  }
  const response = await reviewService.getByUser(id);
  console.log(response.data, "Esto en mi helper, las reviews");
  const ids = response?.data.map((item) => item.id_tmdb);
  const allFavMoviesData = await movieService.getMoviePoster(ids);

  return { posters: allFavMoviesData, reviews: response };
};
