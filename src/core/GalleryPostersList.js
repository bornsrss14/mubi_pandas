import PosterMovie from "./PosterMovie";
const GalleryPostersList = ({ arrayListPoster }) => {
  return (
    <div className="poster-list-container">
      {arrayListPoster.slice(0, 5).map((poster, index) => (
        <PosterMovie
          key={index}
          width={8.5}
          posterUrl={poster.posterUrl || poster.url}
        />
      ))}
    </div>
  );
};

export default GalleryPostersList;
