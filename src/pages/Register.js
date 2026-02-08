import React from "react";
import ProfilePicUsername from "../core/ProfilePicUsername";

export const Register = () => {
  return (
    <section className="form-login-register" id="form-register">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProfilePicUsername
          withNickname={false}
          measure="26px"
          imgProfile={
            "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
          }
        ></ProfilePicUsername>
        <h1>Join pandasneezing</h1>
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p className="need-account">Already have a Letterboxd account?</p>
        <span className="need-account">Sign in.</span>
      </div>
      <form className="form-register">
        <div className="field">
          <label>username</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label>email</label>
          <input type="email"></input>
        </div>
        <div className="field">
          <label>password</label>
          <input type="password"></input>
        </div>
        <div className="field">
          <label>given name</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label>family name</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label htmlFor="pronoun">pronoun</label>
          <select id="pronoun" name="pronoun">
            <option value={1}>She/her</option>
            <option value={2}> He/him</option>
            <option value={3}>prefer not to say</option>
            <option value={4}>other</option>
          </select>
        </div>
        <button className="btn sign-up">create an account</button>
      </form>
    </section>
  );
};

export default Register;
