import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { Activity } from "./pages/Activity";
import Diary from "./pages/Diary";
import Reviews from "./pages/Reviews";
import Watchlist from "./pages/Watchlist";
import ListsNavbar from "./pages/ListsNavbar";
import Likes from "./pages/Likes";
import Network from "./pages/Network";
import Settings from "./pages/Settings";
import Mubi from "./pages/Mubi";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const [formData, setFormData] = useState({
    userName: "vaneebuga",
    givenName: "",
    familyName: "",
    email: "",
    location: "",
    website: "",
    bioDescription: "",
    pronoun: "",
    favoriteFourMubis: [],
  });

  const [draftForm, setDraftForm] = useState(formData);

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
        <Route
          path="/user-profile"
          element={<Profile formData={formData} setFormData={setFormData} />}
        ></Route>
        <Route path="/activity-user" element={<Activity></Activity>}></Route>
        <Route path="/diary-user" element={<Diary></Diary>}></Route>
        <Route path="/reviews-user" element={<Reviews></Reviews>}></Route>
        <Route path="/watchlist" element={<Watchlist></Watchlist>}></Route>
        <Route
          path="/listsNavbar"
          element={<ListsNavbar></ListsNavbar>}
        ></Route>
        <Route path="/likes-user" element={<Likes></Likes>}></Route>
        <Route path="/network" element={<Network></Network>}></Route>
        <Route
          path="/settings-user"
          element={
            <Settings
              formData={formData}
              setFormData={setFormData}
              draftForm={draftForm}
              setDraftForm={setDraftForm}
            ></Settings>
          }
        ></Route>
        <Route path="/mubi" element={<Mubi></Mubi>}></Route>
      </Routes>
    </Router>
  );
}
