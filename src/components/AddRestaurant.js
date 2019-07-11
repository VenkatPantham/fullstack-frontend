import React, { Component } from "react";
import "./AddRestaurant.css";
import NavigationBar from "./NavigationBar";
import axios from "axios";
let baseUrl = "https://aws.tomato.tk";

class AddRestaurant extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/restaurant`, {
        name: event.target.name.value,
        city: event.target.city.value,
        phoneNo: event.target.phoneNo.value,
        type: event.target.type.value,
        minCost: event.target.minCost.value,
        minTime: event.target.minTime.value,
        image: event.target.image.value,
        openStatus: event.target.openStatus.value
      })
      .then(res => {
        if (res.status === 201) this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container containerBody">
          <h3>
            <b>Add a Restaurant</b>
          </h3>
          <h5>
            <b>Basic Info</b>
          </h5>
          <div className="container content">
            <form onSubmit={this.handleSubmit} method="post">
              <div className="form-group">
                <label className="restaurant_text">RESTAURANT NAME</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Restaurant Name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">CITY</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="Enter Restaurant City"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">PHONE NUMBER</label>
                <input
                  name="phoneNo"
                  step="0"
                  type="number"
                  pattern=".{10}"
                  className="form-control"
                  placeholder="Enter Restaurant Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">RESTAURANT TYPE</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  placeholder="Enter Restaurant Type"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">COST</label>
                <input
                  type="number"
                  name="minCost"
                  className="form-control"
                  placeholder="Enter Restaurant Minimum Cost"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">TIME</label>
                <input
                  type="number"
                  name="minTime"
                  className="form-control"
                  placeholder="Enter Restaurant Minimum Time"
                  required
                />
              </div>
              <div className="form-group">
                <label className="restaurant_text">RESTAURANT IMAGE</label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  placeholder="Enter Restaurant Image URL"
                  required
                />
              </div>
              <label className="restaurant_text">OPENING STATUS</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  name="openStatus"
                  className="form-check-input"
                  type="radio"
                  value="true"
                  required
                />
                <label className="form-check-label">
                  This place is already opened
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  name="openStatus"
                  className="form-check-input"
                  type="radio"
                  value="false"
                  required
                />
                <label className="form-check-label">
                  This place is opening soon
                </label>
              </div>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-success"
                id="restaurant_button"
              >
                Add Restaurant
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRestaurant;
