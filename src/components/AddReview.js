import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Review.css";
import axios from "axios";
let baseUrl = "https://www.tomato.tk";

class AddReview extends Component {
  constructor(props) {
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
      .then(review => {
        console.log(review.config.data);
        // var v = this.state.rev;
        // var i = review.data;
        // axios.get(`${baseUrl}/users/${i.userId}`).then(user => {
        //   i.user = user.data;
        //   this.forceUpdate();
        // });
        // v.push(i);
        // this.setState((this.state.rev = v));
      });
    event.target.reset();
    // StarRatingComponent.reset();
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
