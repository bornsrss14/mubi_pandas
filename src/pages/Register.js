import React, { useEffect, useRef, useState } from "react";
import ProfilePicUsername from "../core/ProfilePicUsername";
import { USER_REGEX } from "../utils/dateUtils";

export const Register = () => {
  const userRef = useRef();
  const errRef = useRef(); // if i had an erro, i need to put focus to this to annouce to screanreaders for accesibility

  //state for fields

  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);
  const validUser = USER_REGEX.test(user);

  const [pwd, setPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState();
  const [matchFocus, setMatchFocus] = useState(false);
  const [validMatchPwd, setValidMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []); //setting the focus qhen the component loads, focus on the username input

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
        <p className="need-account">Already have a pandasneezing account?</p>
        <span className="need-account">Sign in.</span>
      </div>
      <form className="form-register">
        <div className="field">
          <label>username</label>
          <input
            ref={userRef}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
          ></input>
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
