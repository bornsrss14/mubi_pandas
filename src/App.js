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
import ReviewComposer from "./components/ReviewComposer";
import ReviewDetails from "./pages/ReviewDetails";
import { ReviewProvider } from "./contexts/ReviewProvider";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";

import { useAuthUser } from "./contexts/UserAuthProvider";
import { useAxiosInterceptors } from "./hooks/useAxiosInterceptors";
/* CONTEXT*/

export const UserContext = createContext();
export const NavContext = createContext();
export const RatingContextR = createContext();
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  /*Las nuevas variables con mi APi */
  const [
    mainUser,
    /* setMainUser */
  ] = useState(4); // esto se va a eliminar

  //const [mainUserData, setMainUserData] = useState({});
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const { loadFavorites, getAllListsEntries, myLists, topFavorites } =
    useAuthUser();

  //cambiar para obtener el user por username 💗

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const [userId] = useState("usr_001");
  const [activeTab, setActiveTab] = useState(1001);
  const [formData, setFormData] = useState(getUserById(userId));

  const [draftForm, setDraftForm] = useState(formData);
  const [listsPerUser] = useState(getUserLists(userId));
  const [reviewsUser, setReviewsUser] = useState(madeReviews(userId));

  const [dataFour, setDataFour] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    getAllListsEntries();
  }, [getAllListsEntries]);

  console.log(topFavorites);
  useAxiosInterceptors();
  return (
    <NavContext.Provider value={{ searchIsOpen, setSearchIsOpen }}>
      <UserContext.Provider
        value={{
          myLists,
          topFavorites,
          reviewsUser,
          setReviewsUser,
          formData,
          draftForm,
          dataFour,
          setDataFour,
        }}
      >
        <ReviewProvider>
          <Router>
            <Navbar movies={movies} query={query} setQuery={setQuery} />
            <Routes>
              <Route
                path="/pandas-home"
                element={<HomePage></HomePage>}
              ></Route>
              <Route path="/signup" element={<SignUpForm></SignUpForm>}></Route>
              <Route path="/" element={<Home></Home>}></Route>
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
              <Route
                path="/main-films"
                element={<MainFilms></MainFilms>}
              ></Route>
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
              <Route
                path="/watchlist"
                element={<Watchlist></Watchlist>}
              ></Route>
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
                /* path="review&detail/:id" */
                path="review&detail/:id/:id_review"
                element={<ReviewDetails></ReviewDetails>}
              ></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route
                path="review-preview"
                element={<ReviewPreviewSecond></ReviewPreviewSecond>}
              ></Route>
              <Route
                path="/review-detailed"
                element={<ReviewDetailed></ReviewDetailed>}
              ></Route>
              <Route
                path="/movies/review/:id"
                element={<ReviewComposer></ReviewComposer>}
              ></Route>

              <></>
            </Routes>
          </Router>
        </ReviewProvider>
      </UserContext.Provider>
    </NavContext.Provider>
  );
}
