import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { tempMovieData } from "../src/storage/tempMovieData";
import { tempWatchedData } from "./storage/tempWatchedData";
import LogoScalable from "./components/LogoScalable";

import MovieInfoItem from "./components/MovieInfoItem";
import RatedMovieItem from "./components/RatedMovieItem";
import { ReviewsSummary } from "./components/ReviewsSummary";
import ProfilePicUsername from "./core/ProfilePicUsername";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Films from "./pages/Films";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <Router>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/films"
            element={
              <Films
                avgImdbRating={avgImdbRating}
                avgUserRating={avgUserRating}
                avgRuntime={avgRuntime}
                watched={watched}
              />
            }
          ></Route>{" "}
        </Route>
      </Routes>
    </Router>
  );
}
