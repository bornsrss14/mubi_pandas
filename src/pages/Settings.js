import { useContext, useState } from "react";
import PosterMovie from "../core/PosterMovie";
import { FourMubis } from "../storage/kindOfTabs";
import SearchBar from "../core/SearchBar";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { getMubisByIds } from "../utils/dateUtils";

export const Settings = ({
  formData,
  setFormData,

  setDraftForm,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [query, setQuery] = useState("");

  /*FUNTION 1. Agrega un url <String> de poster de películas a el array, para poder mostrarlo */
  const addFavoriteMubi = (mubiUrl) => {
    setDraftForm((prev) => ({
      ...prev,
      favoriteFourMubis: [...prev.favoriteFourMubis, mubiUrl],
    }));
  };
  /*FUNTION: 2. Crea un nuevo array con los que cumplen la condicional, los que son diferentes al url pasada */
  function RemoveFavorite(mubiUrl) {
    setDraftForm((prev) => ({
      ...prev,
      favoriteFourMubis: prev.favoriteFourMubis.filter(
        (url) => url !== mubiUrl
      ),
    }));
  }
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

  const { draftForm } = useContext(UserContext);

  const favoriteFourMubis = getMubisByIds(draftForm.favoriteFourMubis);
  console.log("Estas son las cuatro", favoriteFourMubis);

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
              value={draftForm.userName} /* se almacena en el draft */
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
                value={draftForm.givenName}
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
                value={draftForm.familyName}
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
              value={draftForm.email}
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
                value={draftForm.location}
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
                value={draftForm.website}
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
              value={draftForm.bioDescription}
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
              value={draftForm.pronoun}
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
              {favoriteFourMubis.map((favItemMubi) => (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    RemoveFavorite(favItemMubi);
                  }}
                  className="delete-fav-mubi-wrapper"
                >
                  <div className="close-btn-float-favorite">x</div>

                  <PosterMovie
                    key={favItemMubi}
                    posterUrl={favItemMubi.posterUrl}
                    width={7}
                  ></PosterMovie>
                </div>
              ))}

              {Array.from({
                length: 4 - draftForm.favoriteFourMubis.length,
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
          <div className={`isBarOpen${isSearchOpen ? "true" : ""}`}>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>

            <button
              className="simple-button-any"
              onClick={(e) => {
                e.preventDefault();
                setIsSearchOpen(false);
                setQuery("");
              }}
            >
              Close
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                addFavoriteMubi(query);
                setIsSearchOpen(false);
                setQuery("");
              }}
              className="simple-button"
            >
              Add
            </button>
          </div>
          {/* <h3>Data persistido:</h3>
          <pre>{JSON.stringify(draftForm, null, 2)}</pre>*/}
          {/* Actions */}
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
      </main>
    </div>
  );
};

export default Settings;
