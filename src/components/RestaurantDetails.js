import React, { Component } from "react";
import RestaurantReview from "./RestaurantReview";
import "./Review.css";

export class RestaurantDetails extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <img
          className="img-fluid review_image"
          src={this.props.data.image}
          alt="review_image"
        />
        <p className="review_name">{this.props.data.name}</p>
        <div className="review_data">
          <div className="review_flex1">
            <h2>City</h2>
            <p className="review_city">{this.props.data.city}</p>
            <h2>Type</h2>
            <p class="review_type">{this.props.data.type}</p>
          </div>
          <div className="review_flex2">
            <h2>Open Status</h2>
            <p className="review_open">
              {this.props.data.openStatus ? "Open Now" : "Opening Soon"}
            </p>
            <h2>Phone Number</h2>
            <p className="review_phone">{this.props.data.phoneNo}</p>
          </div>
          <div className="review_flex3">
            <h2>Minimum Cost</h2>
            <p className="review_cost">
              Cost &#8377; {this.props.data.minCost} for one
            </p>
            <h2>Minimum Time</h2>
            <p className="review_time">Upto {this.props.data.minTime} mins</p>
          </div>
          <div className="review_flex4">
            <p className="review_rating">{this.props.data.rating}</p>
            <p className="review_views">{this.props.data.views} views</p>
            <p className="review_reviews">{this.props.data.reviews} reviews</p>
          </div>
        </div>
        <hr />
        {this.props.reviews.map(item => (
          <RestaurantReview data={item} />
        ))}
      </div>
    );
  }
}

export default RestaurantDetails;
