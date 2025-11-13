import React from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <div>
      <div>
        <main
          className="card-settings"
          role="main"
          aria-labelledby="form-title"
        >
          <h1 id="form-title">Profile</h1>

          <form className="form-settings" onSubmit={"handleSubmit"} noValidate>
            {/* Username */}
            <div className="field username-row">
              <label htmlFor="username">Username</label>
              <input id="username" name="userName" type="text" readOnly />
            </div>
            {/* Given / Family */}
            <div className="grid-2">
              <div className="field">
                <label htmlFor="given">Given name</label>
                <input
                  id="given"
                  name="givenName"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="field">
                <label htmlFor="family">Family name</label>
                <input
                  id="family"
                  name="familyName"
                  type="text"
                  placeholder="Doe ..."
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
                placeholder="example@mail.com"
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your password"
                required
                minlength="6"
              />
            </div>
            <div className="field">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm your password"
                required
                minlength="6"
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
                  placeholder="Ciudad, País"
                />
              </div>
              <div className="field">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
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
                placeholder="Tell us something about you!"
              />
            </div>
            {/* Pronoun */}
            <div className="field" style={{ maxWidth: "320px" }}>
              <label htmlFor="pronoun">Pronoun</label>
              <select id="pronoun" name="pronoun">
                <option selected>Prefer not to say</option>
                <option>They / their</option>
                <option>She / her</option>
                <option>He / him</option>
              </select>
              <div className="helper">
                <em>Pride</em> to their watchlist
              </div>
            </div>
            <div className="favorite-mubis-container">
              <label htmlFor="pronoun">Favorite Films</label>
            </div>

            {/* <h3>Data persistido:</h3>
              <pre>{JSON.stringify(draftForm, null, 2)}</pre>*/}
            {/* Actions */}
            <div className="actions">
              <button
                /* onClick={handleSave} */
                type="submit"
                className="btn btn-primary"
              >
                Guardar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SignUpForm;
