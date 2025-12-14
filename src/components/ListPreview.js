import { useEffect, useState } from "react";
import GalleryPostersList from "../core/GalleryPostersList";
import movieService from "../services/movieDatabaseService";

export const ListPreview = ({ arrayListPoster, children }) => {
  /** arrayListPoster  [232, 23423, 23];   */

  /*Esto devuelve un [{...}, {...}], aquí es donde debo iterar el [] para a cada item accder
  a su poster_path, y pasarlo con props en el componente
   */
  const [posters, setPosters] = useState([]); //poster_path
  useEffect(() => {
    async function getPoster() {
      try {
        const poster = await movieService.getMoviePoster(arrayListPoster);
        setPosters(poster);
        return poster;
      } catch (error) {}
    }
    getPoster();
  }, [arrayListPoster]);

  return (
    <>
      <div className="list-preview-container">
        <GalleryPostersList arrayListPoster={posters}></GalleryPostersList>
        {children}
      </div>
    </>
  );
};

export default ListPreview;
