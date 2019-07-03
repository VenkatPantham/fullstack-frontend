import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Review.css";
import axios from "axios";
let baseUrl = process.env.PRODUCTION
  ? "http://ec2-13-233-194-69.ap-south-1.compute.amazonaws.com:4000"
  : "http://localhost:4000";

class AddReview extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/restaurants/${this.props.data}/review`, {
        review: event.target.review.value,
        rating: event.target.rating.value
      })
      .then(res => {
        if (res.status == 201) this.props.history.push("/");
      });
  }

  render() {
    return (
      <div class="review_box">
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
    );
  }
}

export default AddReview;
