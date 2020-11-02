import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import "./Review.css";

class AddReview extends Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    console.log(form);
    axios
      .post(`${baseUrl}/restaurants/${this.props.data}/review`, {
        review: event.target.review.value,
        rating: event.target.ratings.value,
      })
      .then((rev) => {
        this.props.updated(rev);
      });
    form.reset();
    this.setState({ rating: 0 });
  }

  render() {
    return (
      <div className="review_box">
        <form onSubmit={this.handleSubmit} className="form-group review_add">
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
              name="ratings"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick}
            />
          </div>
          <button className="btn btn-success review_button">
            Add Your Review
          </button>
        </form>
      </div>
    );
  }
}

export default AddReview;
