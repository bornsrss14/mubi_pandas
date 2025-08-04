import { IconUser, IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import MovieInfoItem from "../components/MovieInfoItem";
import { ReviewsSummary } from "../components/ReviewsSummary";

export const Films = ({
  movies,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  watched,
}) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? (
              <IconMinus size="15px" className="rotate-center" />
            ) : (
              <IconPlus size="15px" className="rotate-center" />
            )}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => {
                return <MovieInfoItem key={movie.imdbID} movie={movie} />;
              })}
            </ul>
          )}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? (
              <IconMinus size="15px" className="rotate-center" />
            ) : (
              <IconPlus size="15px" className="rotate-center" />
            )}
          </button>
          {isOpen2 && (
            <ReviewsSummary
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
              watched={watched}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Films;
