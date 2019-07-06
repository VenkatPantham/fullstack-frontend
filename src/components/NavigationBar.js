import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark justify-content-between navigation">
        <Link to="/">
          <a className="navbar-brand mr-auto" href="/">
            <img
              className="navIcon"
              src={require("../images/nav-icon.png")}
              alt="Restaurant_Image"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-right">
            <li className="nav-item active">
              <Link to="/login" className="links">
                <a className="nav-link login_button" href="login">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="links" to="/signup">
                <a className="nav-link create_button" href="registration">
                  Create an account
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
