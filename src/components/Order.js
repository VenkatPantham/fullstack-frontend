import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";

function Order() {
  return (
    <div className="main">
      <img
        src={require("../images/cooking.jpg")}
        alt="background"
        className="bg"
      />
      <div className="text">
        We're cooking things for you...
        <br />
        Meanwhile you can view our restaurants.
      </div>
      <div className="button">
        <Link to="/">
          <button className="btn btn-outline-danger">We'll meet soon</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
