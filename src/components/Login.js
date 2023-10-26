import React from "react";
import "./Login.scss"
import backgroundImage from "./banner.jpg"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }} >
    <div className="signIn-form">
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <Link to="/home"><button className="button">Sign In</button></Link>
      </form>
      <div className="para">
        <h3>New to Netflix? <span>Sign up now.</span></h3>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="##" style={{color:"blue"}}>Learn more.</a>
        </p>
      </div>
    </div>
    </div>

  );
};

export default Login
