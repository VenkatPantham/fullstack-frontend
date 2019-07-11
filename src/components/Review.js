import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import RestaurantDetails from "./RestaurantDetails";
import StarRatingComponent from "react-star-rating-component";
import "./Review.css";
let baseUrl = "https://aws.tomato.tk";

class Review extends Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { restaurant: [], review: [] };
  }

  async handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    await axios
      .post(
        `${baseUrl}/restaurants/${this.props.match.params.restaurantId}/review`,
        {
          review: event.target.review.value,
          rating: event.target.rating.value
        }
      )
      .then(rev => {
        alert("Comment added successfully!");
        axios.get(`${baseUrl}/users/${rev.data.userId}`).then(user => {
          rev.data.user = user.data;
          this.forceUpdate();
        });
        this.state.review.push(rev.data);
        this.setState((this.state.review = this.state.review));
      });
    form.reset();
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
      })
      .catch(err => {
        alert("No Restaurant found with this ID!");
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container review">
          {this.state.restaurant.map(item => (
            <RestaurantDetails
              data={item}
              history={this.props.history}
              reviews={this.state.review}
            />
          ))}
          <div className="review_box">
            <form
              onSubmit={this.handleSubmit}
              className="form-group review_add"
            >
              <h4 align="left">Write a Review</h4>
              <input
                className="form-control"
                name="review"
                type="text"
                placeholder="Help other foodies by sharing your review ..."
                required
              />
              <div className="rating">
                <StarRatingComponent
                  name="rating"
                  starCount={5}
                  required="required"
                />
              </div>
              <button className="btn btn-success review_button">
                Add Your Review
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Review;
