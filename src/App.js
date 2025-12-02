import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { tempMovieData } from "../src/storage/tempMovieData";
import { tempWatchedData } from "../src/storage/tempWatchedData";

import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Community } from "./pages/Community";
import News from "./pages/News";
import Watched from "./pages/Watched";
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
import ListWithNotes from "./pages/ListWithNotes";
import { getUserById, getUserLists, madeReviews } from "./utils/dateUtils";
import ReviewPreviewSecond from "./components/ReviewPreviewSecond";
import ReviewDetailed from "./pages/ReviewDetailed";
import MubiDetails from "./pages/MubiDetails";
import SignUpForm from "./pages/SignUpForm";
import userService from "./services/userService";
import fourFavService from "./services/fourFavoriteService";
import movieService from "./services/movieDatabaseService";
import { useMovieToggle } from "./hooks/useMovieToggle";
/* CONTEXT*/

export const UserContext = createContext();
export const NavContext = createContext();
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  /*Las nuevas variables con mi APi */
  const [mainUser, setMainUser] = useState(4); //recibe mi id
  const [mainUserData, setMainUserData] = useState({});
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  useEffect(() => {
    handleGetUser(mainUser);
  }, [mainUser]);

  const handleGetUser = async (id) => {
    try {
      const res = await userService.getUserById(id);
      setMainUserData(res.data);
    } catch (error) {
      alert(`Error al tratar de encontrar el usuario con el id: ${id}`);
    }
  };

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const [userId] = useState("usr_001");
  const [activeTab, setActiveTab] = useState(1001);
  const [formData, setFormData] = useState(getUserById(userId));
  const [topFavorites, setTopFavorites] = useState([]);

  const [draftForm, setDraftForm] = useState(formData);
  const [listsPerUser] = useState(getUserLists(userId));
  const [reviewsUser, setReviewsUser] = useState(madeReviews(userId));

  const [dataFour, setDataFour] = useState([]);

  async function refreshTopFavorites() {
    if (!mainUserData?.id) return;

    const four = await fourFavService.getFourFavById(mainUserData.id);
    const ids = four.data.map((item) => item.id_mubi);
    const moviesDataFour = await movieService.getMoviePoster(ids);

    setTopFavorites(moviesDataFour);
  }
  useEffect(() => {
    if (!mainUserData?.id) return;

    async function loadTopFavorites() {
      try {
        const four = await fourFavService.getFourFavById(mainUserData.id);
        const ids = four.data.map((item) => item.id_mubi);

        const moviesDataFour = await movieService.getMoviePoster(ids);
        setTopFavorites(moviesDataFour);
      } catch (error) {
        console.error("Error loading favorites", error);
      }
    }

    loadTopFavorites();
  }, [mainUserData?.id]);

  return (
    <NavContext.Provider value={{ searchIsOpen, setSearchIsOpen }}>
      <UserContext.Provider
        value={{
          refreshTopFavorites,
          topFavorites,
          setTopFavorites,
          reviewsUser,
          setReviewsUser,
          formData,
          draftForm,
          mainUserData,
          dataFour,
          setDataFour,
          setMainUserData,
        }}
      >
        <Router>
          <Navbar movies={movies} query={query} setQuery={setQuery} />
          <Routes>
            <Route path="/signup" element={<SignUpForm></SignUpForm>}></Route>
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
            <Route path="/watched" element={<Watched />}></Route>
            <Route
              path="/user-profile"
              element={
                <Profile formData={formData} setFormData={setFormData} />
              }
            ></Route>
            <Route
              path="/external-profile/:id"
              element={
                <ProfileExternal
                  formData={formData}
                  setFormData={setFormData}
                ></ProfileExternal>
              }
            >
              {" "}
            </Route>
            <Route
              path="/activity-user"
              element={<Activity></Activity>}
            ></Route>
            <Route path="/diary-user" element={<Diary></Diary>}></Route>
            <Route path="/reviews-user" element={<Reviews></Reviews>}></Route>
            <Route path="/watchlist" element={<Watchlist></Watchlist>}></Route>
            <Route
              path="/listsNavbar"
              element={
                <ListsNavbar
                  listsPerUser={listsPerUser}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  templateContainer={DataProjectsList}
                ></ListsNavbar>
              }
            ></Route>
            <></>
            <Route
              path="/list/new/"
              element={<NewListBoilerplate></NewListBoilerplate>}
            ></Route>
            <Route
              path="/movielistview/:id"
              element={
                <MovieListView listsPerUser={listsPerUser}></MovieListView>
              }
            ></Route>
            <Route
              path="/listWithNotes/:id"
              element={<ListWithNotes></ListWithNotes>}
            ></Route>
            <Route path="/likes-user" element={<Likes></Likes>}></Route>
            <Route
              path="/network/:id"
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
              path="/mubi/:id"
              element={
                <Mubi
                  activeTab={activeTab}
                  setActiveTab={
                    setActiveTab
                  } /*esto lo debo aplicar a Activity  */
                  templateContainer={DataProjects}
                ></Mubi>
              }
            ></Route>
            <Route
              path="/mubi&detail/:id"
              element={
                <MubiDetails
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  templateContainer={DataProjects}
                ></MubiDetails>
              }
            ></Route>
            <Route
              path="review-preview"
              element={<ReviewPreviewSecond></ReviewPreviewSecond>}
            ></Route>
            <Route
              path="/review-detailed"
              element={<ReviewDetailed></ReviewDetailed>}
            ></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </NavContext.Provider>
  );
}
