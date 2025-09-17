import { useState } from "react";
import PosterMovie from "../core/PosterMovie";

export const Settings = () => {
  const [formData, setFormData] = useState({
    userName: "",
    given: "",
    family: "",
    email: "rosario.fuega@gmail.com",
    location: "",
    website: "",
    bio: "",
    pronoun: "",
  });
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
              name="username"
              type="text"
              value={formData.username}
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
                name="given"
                type="text"
                value={formData.given}
                onChange={"handleChange"}
                placeholder="Rosario"
              />
            </div>

            <div className="field">
              <label htmlFor="family">Family name</label>
              <input
                id="family"
                name="family"
                type="text"
                value={formData.family}
                onChange={"handleChange"}
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
              value={formData.email}
              onChange={"handleChange"}
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
                value={formData.location}
                onChange={"handleChange"}
                placeholder="Ciudad, País"
              />
            </div>
            <div className="field">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={"handleChange"}
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
              name="bio"
              value={formData.bio}
              onChange={"handleChange"}
              placeholder="Escribe algo breve sobre ti..."
            />
          </div>

          {/* Pronoun */}
          <div className="field" style={{ maxWidth: "320px" }}>
            <label htmlFor="pronoun">Pronoun</label>
            <select
              id="pronoun"
              name="pronoun"
              value={formData.pronoun}
              onChange={"handleChange"}
            >
              <option>They / their</option>
              <option>She / her</option>
              <option>He / him</option>
              <option>Prefer not to say</option>
            </select>
            <div className="helper">
              Example use: <strong>{formData.username}</strong> added{" "}
              <em>Pride</em> to their watchlist
            </div>
          </div>

          <div className="favorite-mubis-container">
            <label htmlFor="pronoun">Favorite Films</label>
          </div>

          {/* Actions */}
          <div className="actions">
            <button type="button" className="btn btn-ghost">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Settings;
