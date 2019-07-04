import React, { Component } from "react";
import axios from "axios";
import "./Restaurants.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import RestaurantCard from "./RestaurantCard";
let baseUrl = "https://student.tomato.tk";

class Restaurants extends Component {
  constructor() {
    super();
    this.state = { restaurants: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    await axios.get(`${baseUrl}/restaurants`).then(res => {
      res.data.map(item => {
        return this.state.restaurants.push(item);
      });
      this.setState((this.state.restaurants = this.state.restaurants));
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="py-5 all-cards-container">
          <div className="container" id="background">
            <div className="row hidden-sm-up">
              {this.state.restaurants.map(item => (
                <RestaurantCard data={item} />
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
