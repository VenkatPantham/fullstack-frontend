import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark justify-content-between navigation">
        <Link to="/" class="links">
          <a class="navbar-brand mr-auto" href="index">
            <img
              className="navIcon"
              src={require("../images/nav-icon.png")}
              alt="Restaurant_Image"
            />
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav text-right">
            <li class="nav-item active">
              <Link to="/login" class="links">
                <a class="nav-link login_button" href="login">
                  Login
                </a>
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="links" to="/signup">
                <a class="nav-link create_button" href="registration">
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
