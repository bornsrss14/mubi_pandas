import { useContext, useEffect, useState } from "react";
import SearchBar from "../core/SearchBar";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";
import userService from "../services/userService";
import fourFavService from "../services/fourFavoriteService";
import movieDatabaseService from "../services/movieDatabaseService";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { useMubiSearch } from "../hooks/useMubiSearch";
import movieService from "../services/movieDatabaseService";

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/"; ///https://image.tmdb.org/t/p/z632eZtXaw76ZE5mMMGOBXCpm1T.jpg
export const Settings = ({
  formData,
  setFormData,

  setDraftForm,
}) => {
  const {
    draftForm,
    mainUserData,
    topFavorites,
    setTopFavorites,
    dataFour,
    setDataFour,
    refreshTopFavorites,
  } = useContext(UserContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  //Recuperar el id de las 4 pelìculas favoritas

  const [moviesFound, setMoviesFound] = useState([]); // va a mapear todos los resultados para selecionar
  const [selected, setSelected] = useState(null);

  const [movieData, setMovieData] = useState({
    id_mubi: "",
    id_user: "",
  });

  /*FUNTION: 3. Controlled inputs pensado para mi formulario  */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraftForm((prev) => ({ ...prev, [name]: value }));
  };
  /*FUNCTION: 4.- Save final changes  */
  const handleSave = (e) => {
    e.preventDefault();
    setFormData(draftForm);
    console.log(formData);
  };
  /*FUNCTION: 5.- Discard all changes previously made */
  const cancelTemporaryChanges = () => {
    setDraftForm(formData);
  };

  const handleDelete = async (id, permission) => {
    if (permission !== "yes") {
      console.log("El usuario canceló la eliminación");
      return;
    }
    try {
      const res = await userService.deleteUser(id);
      console.log("El usuario ha sido eliminado", res.data);

      //Aquí refresco la lista de navegar o el user data
    } catch (error) {
      console.log("Error al eliminar el usuario", error);
      alert(`No se pudo eliminar el usuario con su id: ${id}`);
    }
  };
  useEffect(() => {
    async function fetchMovies() {
      if (!dataFour || dataFour.length === 0) return; //avoid innecesari fetch

      try {
        const moviesDataFour = await movieDatabaseService.getMoviePoster(
          dataFour
        );
        setTopFavorites(moviesDataFour);
      } catch (error) {
        console.error("Error obteniendo posters 📸");
      }
    }
    fetchMovies();
  }, [dataFour]);

  useEffect(() => {
    if (selected && mainUserData?.id) {
      setMovieData({
        id_mubi: selected.id,
        id_user: mainUserData.id,
      });
    }
  }, [selected, mainUserData?.id]);

  const handleDeleteByUserAndMubi = async (id_movie, id_user) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await fourFavService.deleteByUserAndMubi(id_movie, id_user);
        refreshTopFavorites();
        //  IMPORTANTE: actualiza estado local
        setDataFour((prev) =>
          prev.filter((id) => Number(id) !== Number(id_movie))
        );
        alert("The movie was deleted successfully");
      } catch (error) {
        console.error("Something went wrong removing the movie");
        alert("Try again later please");
      }
    }
  };

  const handleSearch = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 2) {
      setMoviesFound([]);
      return;
    }
    const results = await movieService.searchMovies(searchQuery);
    setMoviesFound(results);
  };

  const handleSelectSubmit = async (movieData) => {
    try {
      await fourFavService.addMovie(movieData);
      refreshTopFavorites();
      setMovieData({
        id_mubi: "",
        id_user: "",
      });
    } catch (error) {
      console.error("Something went wron trying to add fav movie data");
      alert(error.message || "ERROR: (╯°□°）╯");
    }
  };
  return (
    <div>
      <main className="card-settings" role="main" aria-labelledby="form-title">
        <h1 id="form-title">Profile</h1>

        <form className="form-settings" onSubmit={"handleSubmit"} noValidate>
          {/* Username */}
          <div className="field username-row">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="userName"
              type="text"
              value={mainUserData.username} /* se almacena en el draft */
              readOnly
            />
            <button
              type="button"
              className="edit-btn"
              title="Editar username"
              aria-label="Editar username"
            >
              ✎
            </button>
          </div>

          {/* Given / Family */}
          <div className="grid-2">
            <div className="field">
              <label htmlFor="given">Given name</label>
              <input
                id="given"
                name="givenName"
                type="text"
                value={mainUserData.given_name}
                onChange={handleChange}
                placeholder="Rosario"
              />
            </div>

            <div className="field">
              <label htmlFor="family">Family name</label>
              <input
                id="family"
                name="familyName"
                type="text"
                value={mainUserData.family_name}
                onChange={handleChange}
                placeholder="Fuentes García"
              />
            </div>
          </div>

          {/* Email */}
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={mainUserData.email}
              onChange={handleChange}
            />
          </div>

          {/* Location / Website */}
          <div className="grid-2">
            <div className="field">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                value={mainUserData.location}
                onChange={handleChange}
                placeholder="Ciudad, País"
              />
            </div>
            <div className="field">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={mainUserData.website}
                onChange={handleChange}
                placeholder="https://"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="field">
            <label htmlFor="bio">Bio</label>
            <textarea
              className="txt-area-settings"
              id="bio"
              name="bioDescription"
              value={mainUserData.bio}
              onChange={handleChange}
              placeholder="Escribe algo breve sobre ti..."
            />
          </div>

          {/* Pronoun */}
          <div className="field" style={{ maxWidth: "320px" }}>
            <label htmlFor="pronoun">Pronoun</label>
            <select
              id="pronoun"
              name="pronoun"
              value={mainUserData.pronoun}
              onChange={handleChange}
            >
              <option>They / their</option>
              <option>She / her</option>
              <option>He / him</option>
              <option>Prefer not to say</option>
            </select>
            <div className="helper">
              Example use: <strong>{draftForm.username}</strong> added{" "}
              <em>Pride</em> to their watchlist
            </div>
          </div>
          <div className="favorite-mubis-container">
            <label htmlFor="pronoun">Favorite Films</label>
          </div>
          <div className="four-mubis-container">
            <div className="four-mubis-container">
              {topFavorites?.map((mubi) => (
                <div
                  onClick={() =>
                    handleDeleteByUserAndMubi(mubi.id, mainUserData.id)
                  }
                  className="delete-fav-mubi-wrapper"
                >
                  <div className="close-btn-float-favorite">x</div>
                  <div style={{ maxWidth: "9rem" }}>
                    <div className="mubi-poster-m">
                      <OptimizedImage
                        className="rounded shadow"
                        skeletonClassName="rounded"
                        alt="poster"
                        src={`${TMDB_IMAGE_BASE_URL}w500${mubi.poster_path}`}
                        placeholder="/lowQuality.jpeg"
                      ></OptimizedImage>
                    </div>
                  </div>
                </div>
              ))}

              {Array.from({
                length: 4 - topFavorites.length,
              }).map((_, index) => (
                <div key={index} className="emptyPoster">
                  <div
                    onClick={() => {
                      setIsSearchOpen(true);
                    }}
                    style={{ background: "green" }}
                    className="add-btn-float-favorite"
                  >
                    +
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*  <div className={`isBarOpen${isSearchOpen ? "true" : ""}`}>
            <SearchBar
              handleSearch={handleSearch}
              query={query}
              setQuery={setQuery}
            ></SearchBar>
          </div> */}
          <div className={`modal-search${isSearchOpen ? "true" : ""}`}>
            <SearchBar
              handleSearch={handleSearch}
              query={query}
              setQuery={setQuery}
            ></SearchBar>
            <div
              style={{
                background: "white",
                height: "14rem",
                overflowY: "auto",
              }}
              className={`isBarOpen${isSearchOpen ? "true" : ""}`}
            >
              <ul>
                {moviesFound.map((movie) => (
                  <li
                    className="dropdown-item movie-title"
                    onClick={() => setSelected(movie)}
                    key={movie.id}
                  >
                    {movie.title}({movie.year})
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="simple-button-any"
              onClick={(e) => {
                e.preventDefault();
                setIsSearchOpen(false);
                setQuery("");
                setMoviesFound([]);
                setSelected(null);
              }}
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!movieData.id_mubi || !movieData.id_user) {
                  alert("Selecciona una película primero");
                  return;
                }
                handleSelectSubmit(movieData);
                setIsSearchOpen(false);
                setQuery("");
                setMoviesFound([]);
              }}
            >
              Add
            </button>
          </div>

          <div>
            <h4>Seleccionadas:</h4>

            {selected ? (
              <ul>
                <li>
                  {selected.id} — {selected.title}
                </li>
              </ul>
            ) : (
              <p>No hay selección aún, el modal no se muestra</p>
            )}
          </div>

          <div className="actions">
            <button
              onClick={cancelTemporaryChanges}
              type="button"
              className="btn btn-ghost"
            >
              <Link to={"/user-profile"}>Cancelar</Link>
            </button>
            <button
              onClick={handleSave}
              type="submit"
              className="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </form>
        <section>
          <div>
            <button
              className="btn"
              onClick={() => handleDelete(mainUserData.id, "yes")}
            >
              Delete account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
