import { Link, useNavigate } from "react-router-dom";
import "./HomeBanner.scss";
import backgroundImage from "./banner.jpg";
const HomeBanner = () => {
  const navigate = useNavigate();
  const onSignInHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
      <div
        className="container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="header-banner">
          <img src="/Images/logo.png" alt="logo" />
          <form>
            <select className="option">
              <option>Hindi</option>
              <option>English</option>
            </select>
            <Link to="/login">
              <button className="btn" onClick={onSignInHandler}>
                Sign In
              </button>
            </Link>
          </form>
        </div>
        <div className="home-banner">
          <div>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div>
              <input type="text" placeholder="Email Address" />
              <button className="button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeBanner;
