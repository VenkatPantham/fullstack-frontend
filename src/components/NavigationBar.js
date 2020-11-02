import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark justify-content-between navigation">
          <Link to="/">
            <div className="navbar-brand mr-auto">
              <img
                className="navIcon"
                src={require("../images/nav-icon.png")}
                alt="Restaurant_Image"
              />
            </div>
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
                  <div className="nav-link login_button">Login</div>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="links" to="/signup">
                  <div className="nav-link create_button">
                    Create an account
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
