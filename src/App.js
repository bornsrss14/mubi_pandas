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
import MainFilms from "./pages/MainFilms";
import ProfileExternal from "./pages/ProfileExternal";
import {
  DataProjectNetwork,
  DataProjects,
  DataProjectsList,
} from "./storage/kindOfTabs";
import NewListBoilerplate from "./pages/NewListBoilerplate";
import MovieListView from "./pages/MovieListView";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const [activeTab, setActiveTab] = useState(1001);

  const [formData, setFormData] = useState({
    userName: "vaneebuga",
    givenName: "",
    familyName: "",
    email: "",
    location: "",
    website: "",
    bioDescription: "",
    pronoun: "",
    favoriteFourMubis: [
      "https://i.pinimg.com/736x/4e/3d/80/4e3d805bb3c46870f79e6b9e4a345b5b.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKT0sAK715hJLaIkBfoi6LTbNDv18JCqWKgg&s",
    ],
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
        <Route path="/main-films" element={<MainFilms></MainFilms>}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/user-films" element={<UserFilms />}></Route>
        <Route
          path="/user-profile"
          element={<Profile formData={formData} setFormData={setFormData} />}
        ></Route>
        <Route
          path="/external-profile"
          element={
            <ProfileExternal
              formData={formData}
              setFormData={setFormData}
            ></ProfileExternal>
          }
        >
          {" "}
        </Route>
        <Route path="/activity-user" element={<Activity></Activity>}></Route>
        <Route path="/diary-user" element={<Diary></Diary>}></Route>
        <Route path="/reviews-user" element={<Reviews></Reviews>}></Route>
        <Route path="/watchlist" element={<Watchlist></Watchlist>}></Route>
        <Route
          path="/listsNavbar"
          element={
            <ListsNavbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              templateContainer={DataProjectsList}
            ></ListsNavbar>
          }
        ></Route>
        <Route
          path="/listboilerplate"
          element={<NewListBoilerplate></NewListBoilerplate>}
        ></Route>
        <Route
          path="/movielistview/:id"
          element={<MovieListView></MovieListView>}
        ></Route>
        <Route path="/likes-user" element={<Likes></Likes>}></Route>
        <Route
          path="/network"
          element={
            <Network
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              templateContainer={DataProjectNetwork}
            ></Network>
          }
        ></Route>
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
        <Route
          path="/mubi"
          element={
            <Mubi
              activeTab={activeTab}
              setActiveTab={setActiveTab} /*esto lo debo aplicar a Activity  */
              templateContainer={DataProjects}
            ></Mubi>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
