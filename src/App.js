import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { tempMovieData } from "../src/storage/tempMovieData";
import { tempWatchedData } from "../src/storage/tempWatchedData";

import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Community } from "./pages/Community";
import News from "./pages/News";
import UserFilms from "./pages/UserFilms";
import MainFooter from "./components/MainFooter";
import Profile from "./pages/Profile";

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
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/films"
          element={
            <Films
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
              watched={watched}
              movies={movies}
            />
          }
        ></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/user-films" element={<UserFilms />}></Route>
        <Route path="/user-profile" element={<Profile />}></Route>
      </Routes>
      <MainFooter></MainFooter>
    </Router>
  );
}
