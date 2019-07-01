import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import RestaurantDetails from "./RestaurantDetails";
import "./Review.css";

class res extends Component {
  constructor(props) {
    super();
    this.state = { restaurant: [], review: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    await axios
      .get(`/restaurants/${this.props.match.params.restaurantId}`)
      .then(restaurant => {
        this.state.restaurant.push(restaurant.data);
        this.setState((this.state.restaurant = this.state.restaurant));
        axios.get(`/restaurants/${restaurant.data.id}/reviews`).then(review => {
          review.data.map(item => {
            axios.get(`/users/${item.userId}`).then(user => {
              item.user = user.data;
              this.forceUpdate();
            });
            this.state.review.push(item);
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
            <RestaurantDetails data={item} reviews={this.state.review} />
          ))}
        </div>
      </div>
    );
  }
}
export default res;
