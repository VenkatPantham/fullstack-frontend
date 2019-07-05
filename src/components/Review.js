import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import RestaurantDetails from "./RestaurantDetails";
import "./Review.css";
let baseUrl = "https://clone.tomato.tk";

class Review extends Component {
  constructor(props) {
    super();
    this.state = { restaurant: [], review: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    await axios
      .get(`${baseUrl}/restaurants/${this.props.match.params.restaurantId}`)
      .then(restaurant => {
        this.state.restaurant.push(restaurant.data);
        this.setState((this.state.restaurant = this.state.restaurant));
        axios
          .get(`${baseUrl}/restaurants/${restaurant.data.id}/reviews`)
          .then(review => {
            review.data.map(item => {
              axios.get(`${baseUrl}/users/${item.userId}`).then(user => {
                item.user = user.data;
                this.forceUpdate();
              });
              return this.state.review.push(item);
            });
            this.setState((this.state.review = this.state.review));
          });
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container review">
          {this.state.restaurant.map(item => (
            <RestaurantDetails data={item} history={this.props.history} reviews={this.state.review} />
          ))}
        </div>
      </div>
    );
  }
}
export default Review;
