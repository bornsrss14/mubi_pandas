import React from "react";
import { IconTrash } from "@tabler/icons-react";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { TMDB_IMAGE_BASE_URL } from "../pages/Settings";

const ListItemListed = ({
  title = "How to lose a guy in 10 days",
  year = 2003,
  movie,
  deleteMovieEntry,
}) => {
  return (
    <div className="basic-flex-row">
      {/* <PosterMovie
        posterUrl={
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThMmQN_yXAf5wfRINPKMJVdsBlbccvKwgaEHn2mc0Gc7EPZx3rUF6m4M0fxa0lnC4rWZwSEQ"
        }
        width={"4"}
      ></PosterMovie> */}

      <div key={movie.id} style={{ maxWidth: "4rem" }}>
        <div className="mubi-poster-m">
          <OptimizedImage
            className="rounded shadow"
            skeletonClassName="rounded"
            alt="poster"
            src={`${TMDB_IMAGE_BASE_URL}w500${movie.poster_path}`}
            placeholder="/lowQuality.jpeg"
          ></OptimizedImage>
        </div>
      </div>
      <div className="">
        <div className="basic-flex-row">
          <p>{movie.original_title}</p>
          <p>{year}</p>
        </div>
      </div>
      <div>
        <button className="btn_add_note"> Add note</button>
      </div>
      <div>
        <button
          onClick={() => deleteMovieEntry(movie.id)}
          className="simple-btn"
        >
          <IconTrash></IconTrash>
        </button>
      </div>
    </div>
  );
};

export default ListItemListed;
