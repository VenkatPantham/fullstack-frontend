import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import "./Restaurants.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import RestaurantCard from "./RestaurantCard";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    await axios.get(`${baseUrl}/restaurants`).then((res) => {
      this.setState((this.state.restaurants = res.data));
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="py-5 all-cards-container">
          <div className="container" id="background">
            <div className="row hidden-sm-up">
              {this.state.restaurants.map((item, index) => (
                <RestaurantCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="add_restaurant">
          <p className="add_restaurant_text">
            You can add your Restaurant now !!!
          </p>
          <div className="restaurant_button">
            <Link to="/addrestaurant">
              <button
                type="button"
                className="btn btn-danger add_restaurant_button"
              >
                Add Restaurant
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Restaurants;
