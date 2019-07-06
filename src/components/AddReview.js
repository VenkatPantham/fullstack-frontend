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
    let form = event.target;
    axios
      .post(`${url}/restaurants/${this.state.rst[0].id}/review`, {
        review: event.target.review.value,
        rating: event.target.rating.value
      })
      .then(review => {
        var v = this.state.rev;
        var i = review.data;
        axios.get(`${url}/users/${i.userId}`).then(user => {
          i.user = user.data;
          this.forceUpdate();
        });
        v.push(i);
        this.setState((this.state.rev = v));
      });
    form.reset();
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
