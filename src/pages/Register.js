import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfilePicUsername from "../core/ProfilePicUsername";
import { EMAIL_REGEX, PWD_REGEX, USER_REGEX } from "../utils/dateUtils";
import userService from "../services/userService";

export const Register = () => {
  const userRef = useRef();
  const errRef = useRef(); // if i had an erro, i need to put focus to this to annouce to screanreaders for accesibility
  const rol_default = 2001;
  const [registerUser, setUserRegister] = useState({
    username: "",
    given_name: "",
    family_name: "",
    email: "",
    password_hash: "",
    pronoun: "prefer not no say",
    roles: rol_default,
  });
  //state for fields

  const handleState = (e) => {
    const { name, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /* {
  yo necesito enviar este formato json a mi servidor
  "username": "bornsrss_",
  "given_name": "Rosario",
  "family_name": "Fuentes Garcìa",
  "email": "contacto@rosfuentes.dev",
  "password_hash": "poderLun4r14$$",
  "roles": 2001
}
 */

  console.log("Mi objeto de nuevo uaurio es", registerUser);

  const [userFocus, setUserFocus] = useState(false);
  const validUser = USER_REGEX.test(registerUser.username); // esto sustituyó validUser, setValidUSer state

  const [emailFocus, setEmailFocus] = useState(false);
  const validEmail = EMAIL_REGEX.test(registerUser.email);
  // pasa el REGEX email test??
  const [pwdFocus, setPwdFocus] = useState(false);
  const validPwd = PWD_REGEX.test(registerUser.password_hash); //const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState();
  const [matchFocus, setMatchFocus] = useState(false);
  const validMatch = registerUser.password_hash === matchPwd; //  const [validMatchPwd, setValidMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []); //setting the focus qhen the component loads, focus on the username input

  useEffect(() => {
    setErrMsg("");
  }, [registerUser.username, registerUser.password_hash, matchPwd]);

  const createNewUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = await userService.addUser(registerUser);
      console.log(`${newUser.username} created successfully `);
      setUserRegister({
        username: "",
        given_name: "",
        family_name: "",
        email: "",
        password_hash: "",
        pronoun: "prefer not to say",
        roles: rol_default,
      });
      setMatchPwd("");
    } catch (error) {
      console.error(
        "Something went wrong trying to create the user",
        registerUser.username,
      );
      alert(error.message || "Error al agregar el usuario(╯°□°）╯");
    }
  };
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
      <form onSubmit={createNewUser} className="form-register">
        <div className="field">
          <label htmlFor="username_handle">
            username
            <span className={validUser ? "valid" : "hide"}>
              {/*  hide display to none */}
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span
              className={
                validUser || !registerUser.username ? "hide" : "invalid"
              }
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="text"
            id="username_handle"
            ref={userRef}
            autoComplete="off"
            name="username"
            value={registerUser.username}
            onChange={handleState}
            required
            aria-invalid={validUser ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          ></input>
          <p
            id="uidnote"
            className={
              userFocus && registerUser.username && !validUser
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
          <label htmlFor="email">
            email
            <span className={validEmail ? "valid" : "hide"}>
              {/*  hide display to none */}
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span
              className={validEmail || !registerUser.email ? "hide" : "invalid"}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            required
            name="email"
            value={registerUser.email}
            onChange={handleState}
            autoComplete="off"
            id="email"
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
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password_hash"
            value={registerUser.password_hash}
            onChange={handleState}
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
          {registerUser.password_hash &&
          registerUser.password_hash.length > 6 ? (
            validMatch ? (
              <p style={{ color: " rgb(6, 240, 6)" }}>
                Correct <span style={{ color: "white" }}>◝(ᵔᗜᵔ)◜</span>
              </p>
            ) : (
              <p>
                <span style={{ color: "red" }}>Error: {""}</span>Type the same
                previous password (¬_¬")
              </p>
            )
          ) : (
            ""
          )}
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
          <input
            required
            name="given_name"
            value={registerUser.given_name}
            onChange={handleState}
            id="givenname"
            type="text"
          ></input>
        </div>
        <div htmlFor="familyname" className="field">
          <label id="familyname">family name</label>
          <input
            required
            value={registerUser.family_name}
            name="family_name"
            onChange={handleState}
            type="text"
          ></input>
        </div>
        <div className="field">
          <label htmlFor="pronoun">pronoun</label>
          <select
            id="pronoun"
            name="pronoun"
            value={registerUser.pronoun}
            onChange={handleState}
          >
            <option>She/her</option>
            <option> He/him</option>
            <option>Prefer not to say</option>
            <option>other</option>
          </select>
        </div>
        <button className="btn sign-up">create an account</button>
      </form>
    </section>
  );
};

export default Register;
