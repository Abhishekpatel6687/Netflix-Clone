import React, { useEffect, useState } from "react";
import "./Login.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import backgroundImage from "./banner.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ page }) => {
  const app = initializeApp(firebaseConfig);

  // const location = useLocation(); // it is already provide pathname="/login" true
  // const page = location.pathname === '/login'? true : false;
  // console.log(location)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setUserExist] = useState(false);
  const [isUserAlready, setUserAlready] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validation = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case "password":
        return value.length >= 6;
      default:
        break;
    }
  };

  useEffect(() => {
    setEmail("")
    setPassword("")
    setUserExist(false);
    setUserAlready(false);
    setEmailValid(true)
    setPasswordValid(true)
  }, [page]);

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

    if (!validation("email", email) || !validation("password", password)) {
      setEmailValid(validation("email", email));
      setPasswordValid(validation("password", password));
      return;
    }

    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/home");
          }
        })
        .catch((error) => setUserExist(true));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/home");
          }
        })
        .catch((error) => setUserAlready(true));
    }
  };
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signIn-form">
        {isUserExist && <h2>User does not exist | Go to SignUp</h2>}
        {isUserAlready && <h2>Email already in use | Go for Sign In </h2>}
        <h1>{page ? "Sign In" : "Register"}</h1>
        <form>
          <input
            type="text"
            value={email}
            onChange={emailOnChangeHandler}
            placeholder="Email or phone number"
          />
          {!emailValid && <p>Email is invalid/blank</p>}
          <input
            type="password"
            value={password}
            onChange={passwordOnChangeHandler}
            placeholder="Password"
          />
          {!passwordValid && <p>Email is invalid/blank</p>}
          <button className="button" onClick={onSignInClickHandler}>
            {page ? "Sign In" : "Register"}
          </button>
        </form>
        <div className="para">
          <h3>
            {page ? "New to Netflix" : "Existing User"}{" "}
            <Link to={page ? "/register" : "/login"}>
              <span>{page ? "Sign up now." : "Sign In"}</span>
            </Link>
          </h3>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="/" style={{ color: "blue" }}>
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
