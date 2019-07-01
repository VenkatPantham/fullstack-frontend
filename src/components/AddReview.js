import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Review.css";

class AddReview extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div class="review_box">
        <form
          action={`/restaurants/${this.props.data}/review`}
          method="post"
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
          <button type="submit" className="btn btn-success review_button">
            Add Your Review
          </button>
        </form>
      </div>
    );
  }
}

export default AddReview;
