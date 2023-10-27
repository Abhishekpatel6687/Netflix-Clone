import React, { useState } from "react";
import "./Login.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from "./banner.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = ({page}) => {
  const app = initializeApp(firebaseConfig);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setUserExist] = useState(false)

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
 
  const navigate = useNavigate();
  const auth = getAuth();
  // console.log(auth)

  const onSignInClickHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate('/home');
        }
      })
      .catch((error) => setUserExist(true));
  };
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signIn-form">
   {isUserExist && <h2>User does not exist | Go to SignUp</h2> }
        <h1>{page?"Sign In" : "Register"}</h1>
        <form>
          <input
            type="text"
            value={email}
            onChange={emailOnChangeHandler}
            placeholder="Email or phone number"
          />
          <input
            type="password"
            value={password}
            onChange={passwordOnChangeHandler}
            placeholder="Password"
          />
          <button className="button" onClick={onSignInClickHandler}>
          {page?"Sign In" : "Register"}
          </button>
        </form>
        <div className="para">
          <h3>
            {page ? "New to Netflix" : "Existing User"} <Link to={page ? "/register" : "/login"}><span>{page ? "Sign up now." : "Sign In"}</span></Link>
          </h3>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="##" style={{ color: "blue" }}>
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
