import PosterMovie from "./PosterMovie";
import { TMDB_IMAGE_BASE_URL } from "../pages/Settings";

/*getPosterPath */
const GalleryPostersList = ({ arrayListPoster }) => {
  return (
    <div className="poster-list-container">
      {arrayListPoster.slice(0, 5).map((poster, index) => (
        <PosterMovie
          poster={poster}
          key={index}
          width={8.5}
          posterUrl={
            poster?.posterUrl ||
            poster?.url ||
            `${TMDB_IMAGE_BASE_URL}w500${poster?.poster_path}`
          }
        />
      ))}
    </div>
  );
};

export default GalleryPostersList;
