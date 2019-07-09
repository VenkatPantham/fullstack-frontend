import React, { Component } from "react";
import "./Review.css";

export class RestaurantReview extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="review_card">
        {this.props.data.user&&(
          <div className="review_follows">
            <img
              className="img-fluid review_photo"
              align="left"
              alt="Reviewer_Photo"
              src={this.props.data.user.image}
            />
            <p className="reviewer_name">{this.props.data.user.username}</p>
            <p className="reviewer_reviews">
              {this.props.data.user.reviews} reviews
            </p>
          </div>
        )}
        <div className="reviewer_review">
          <span className="reviewer_rate">RATED&nbsp;</span>{" "}
          <span className="reviewer_rating">{this.props.data.rating}</span>
        </div>
        <br />
        <div className="reviewer_review_data">{this.props.data.review}</div>
      </div>
    );
  }
}

export default RestaurantReview;
