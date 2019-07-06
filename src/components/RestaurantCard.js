import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import "./Restaurants.css";

class RestaurantCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="col-md-6 cols">
        <div className="card cards">
          <Link
            className="links"
            to={`/restaurants/${this.props.data.id}/reviews`}
          >
            <div className="post">
              <img
                className="post_image"
                align="left"
                src={this.props.data.image}
                alt="Restaurant_Image"
              />
              <div className="post_data">
                <p className="post_title">{this.props.data.name}</p>
                <p className="post_type">{this.props.data.type}</p>
                <p className="post_cost">
                  Cost &#8377;{this.props.data.minCost} for one
                </p>
                <p className="post_time">Upto {this.props.data.minTime} mins</p>
                <p className="post_payment">
                  Accepts cash &#38; Online payments
                </p>
              </div>
              <div>
                <p className="post_rating">{this.props.data.rating}</p>
                <p className="post_views">{this.props.data.views} views</p>
                <p className="post_reviews">
                  {this.props.data.reviews} reviews
                </p>
              </div>
            </div>
          </Link>
          <Footer />
          </div>
      </div>
    );
  }
}

export default RestaurantCard;
