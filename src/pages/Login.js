import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../contexts/AuthProvider.js";
import loginService from "../services/loginService.js";
// 4-24 characters, letters, numbers, underscores, hyphens
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// 8-24 characters, at least one uppercase, one lowercase, one number, one special character
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [userFocus, setUserFocus] = useState();
  const [pwd, setPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState();
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [validName, setValidName] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = USER_REGEX.test(user); //.test is perfect i just need to know, is this valid?
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log("pwd", result);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Aquí llamo a mi servicio ˗ˏˋ ☏ ˎˊ˗
      const data = await loginService.login({ user, pwd });
      //guardo en mi contexto
      setAuth({ user, roles: data.roles, accessToken: data?.accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {" "}
      {success ? (
        <section>
          <h1>
            {" "}
            You are logged in! ദ്ദി◝ ⩊ ◜.ᐟ <br />
          </h1>
          <br />
          <p>
            {" "}
            <a href="##">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="sect-form">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="" htmlFor="username">
                nickname
              </label>
              <input
                className=""
                id="username"
                name="username"
                type="text"
                ref={userRef} //we can set focus on the input
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => {
                  setUserFocus(false);
                }}
              ></input>
            </div>

            <div className="">
              <label className="" htmlFor="email">
                pasword
              </label>
              <input
                className=""
                id="password"
                name="password"
                type="password"
              ></input>
            </div>
            <div className="">
              <label className="" htmlFor="email">
                Confirm pasword:
              </label>
              <input
                className=""
                id="password"
                name="password"
                type="password"
              ></input>
            </div>
            {/* <div className="">
          <label className="" htmlFor="email">
            username
          </label>
          <input
            className=""
            id="username"
            name="username"
            type="text"
            value={""}
          ></input>
        </div>
        <div>
          <p>
            I'm least 16 years old and accept the <span>Terms of Use</span>
          </p>
          <p>
            I accept the <span>Privacy Policy</span> and consent to the
            procesing of my personal information in accordance with it
          </p>
        </div> */}
            <button type="submit" className="simple-btn btn-sign-up">
              sign up
            </button>
          </form>
          <div>
            <p>
              Need an account? <br />
              <span className="line">
                {/* put link router here */} <a href="https"> Sign Up</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};
