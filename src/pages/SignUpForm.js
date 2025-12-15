import { useState } from "react";

import userService from "../services/userService";
export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hash: "",
    profile_pic_url: "",
    bio: "",
    given_name: "",
    family_name: "",
    website: "",
    location: "",
    pronoun: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.addUser(formData);
      console.log("Usuario creado exitosamente");
      setFormData({
        username: "",
        email: "",
        password_hash: "",
        profile_pic_url: "",
        bio: "",
        given_name: "",
        family_name: "",
        website: "",
        location: "",
        pronoun: "",
      });
    } catch (error) {
      console.error(
        "Something went wrong trying to create the user",
        formData.username
      );
      alert(error.message || "Error al agregar el usuario(╯°□°）╯");
    }
  };
  console.log(formData);

  return (
    <div>
      <div>
        <main
          className="card-settings"
          role="main"
          aria-labelledby="form-title"
        >
          <h1 id="form-title">Sign Up</h1>

          <form className="form-settings" onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="field username-row">
              <label htmlFor="username">Username</label>
              <input
                value={formData.username}
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* Given / Family */}
            <div className="grid-2">
              <div className="field">
                <label htmlFor="given">Given name</label>
                <input
                  id="given"
                  name="given_name"
                  value={formData.given_name}
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="family">Family name</label>
                <input
                  id="family"
                  name="family_name"
                  type="text"
                  value={formData.family_name}
                  placeholder="Doe ..."
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Email */}
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                type="email"
                placeholder="example@mail.com"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Type your password"
                required
                minlength="6"
              />
            </div>
            <div className="field">
              <input
                type="password"
                id="password"
                name="password_hash"
                placeholder="Confirm your password"
                value={formData.password_hash}
                required
                minlength="6"
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
                  value={formData.location}
                  placeholder="Ciudad, País"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleChange}
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
                onChange={handleChange}
                value={formData.bio}
                placeholder="Tell us something about you!"
              />
            </div>
            {/* Pronoun */}
            <div className="field" style={{ maxWidth: "320px" }}>
              <label htmlFor="pronoun">Pronoun</label>
              <select
                id="pronoun"
                name="pronoun"
                onChange={handleChange}
                value={formData.pronoun}
              >
                <option selected>Prefer not to say</option>
                <option>They / their</option>
                <option>She / her</option>
                <option>He / him</option>
              </select>
              <div className="helper">
                <em>Pride</em> to their watchlist
              </div>
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
