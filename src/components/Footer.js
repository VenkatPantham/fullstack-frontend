import React from "react";
import { Link } from "react-router-dom";
import "./Restaurants.css";

function Footer() {
  return (
    <div className="card_footer">
      <Link to="/order">
        <button type="button" className="btn btn-outline-success order_button">
          Order Online
        </button>
      </Link>
    </div>
  );
}

export default Footer;
