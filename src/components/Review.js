import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import { baseUrl } from "./baseUrl";
import RestaurantDetails from "./RestaurantDetails";
import AddReview from "./AddReview";
import "./Review.css";

class Review extends Component {
  constructor(props) {
    super();
    this.state = { restaurant: [], review: [] };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  handleUpdate(review) {
    axios.get(`${baseUrl}/users/${review.data.userId}`).then((user) => {
      review.data.user = user.data;
      this.forceUpdate();
    });
    this.setState(this.state.review.push(review.data));
  }

  async fetch() {
    await axios
      .get(`${baseUrl}/restaurants/${this.props.match.params.restaurantId}`)
      .then((restaurant) => {
        this.state.restaurant.push(restaurant.data);
        this.setState((this.state.restaurant = this.state.restaurant));
        axios
          .get(`${baseUrl}/restaurants/${restaurant.data.id}/reviews`)
          .then((review) => {
            review.data.map((item) => {
              axios.get(`${baseUrl}/users/${item.userId}`).then((user) => {
                item.user = user.data;
                this.forceUpdate();
              });
              return this.state.review.push(item);
            });
            this.setState((this.state.review = this.state.review));
          });
      })
      .catch((err) => {
        alert("No Restaurant found with this ID!");
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container review">
          {this.state.restaurant.map((item) => (
            <RestaurantDetails data={item} reviews={this.state.review} />
          ))}
          <AddReview
            data={this.props.match.params.restaurantId}
            updated={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}
export default Review;
