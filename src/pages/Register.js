import React, { use, useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfilePicUsername from "../core/ProfilePicUsername";
import { EMAIL_REGEX, PWD_REGEX, USER_REGEX } from "../utils/dateUtils";

export const Register = () => {
  const userRef = useRef();
  const errRef = useRef(); // if i had an erro, i need to put focus to this to annouce to screanreaders for accesibility

  //state for fields

  const [user_handle, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);
  const validUser = USER_REGEX.test(user_handle); // esto sustituyó validUser, setValidUSer state

  const [email_handle, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const validEmail = EMAIL_REGEX.test(email_handle);
  // pasa el REGEX email test??
  const [pwd, setPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState(false);
  const validPwd = PWD_REGEX.test(pwd); //const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState();
  const [matchFocus, setMatchFocus] = useState(false);
  const validMatch = pwd === matchPwd; //  const [validMatchPwd, setValidMatchPwd] = useState(false);

  console.log("¿Son válidas las contraseñas?");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []); //setting the focus qhen the component loads, focus on the username input

  useEffect(() => {
    setErrMsg("");
  }, [user_handle, pwd, matchPwd]);
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

      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"} //position absolute way off the screenc but will be available to screen
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form className="form-register">
        <div className="field">
          <label htmlFor="username_handle">
            username
            <span className={validUser ? "valid" : "hide"}>
              {/*  hide display to none */}
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validUser || !user_handle ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="text"
            id="username_handle"
            ref={userRef}
            autoComplete="off"
            value={user_handle}
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validUser ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          ></input>
          <p
            id="uidnote"
            className={
              userFocus && user_handle && !validUser
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters. <br />
            Must begin with a letter. <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="field">
          <label htmlFor="email_handle">
            email
            <span className={validEmail ? "valid" : "hide"}>
              {/*  hide display to none */}
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validEmail || !email_handle ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            required
            value={email_handle}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
            id="email_handle"
            type="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setPwdFocus(false)}
            aria-describedby="emailnote"
          ></input>
          <p
            id="emailnote"
            className={emailFocus && !validEmail ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Not a valid e-mail, try again
            <br />
          </p>
        </div>
        <div className="field">
          {validMatch ? "Correct 👌" : "Try again 🙅‍♀️"}
          <label htmlFor="password">password</label>
          <input
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            type="password"
          ></input>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters. <br />
            Must include uppercase and lowercase letters, a number a special
            character. <br />
          </p>
        </div>
        <div className="field">
          <label htmlFor="matchpassword">Type again password</label>
          <input
            id="matchpassword"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            type="password"
          ></input>
        </div>
        <div className="field">
          <label htmlFor="givenname">given name</label>
          <input id="givenname" type="text"></input>
        </div>
        <div htmlFor="familyname" className="field">
          <label id="familyname">family name</label>
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
