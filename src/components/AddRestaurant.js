import React from "react";
import "./AddRestaurant.css";
import NavigationBar from "./NavigationBar";

function AddRestaurant() {
  return (
    <div>
      <NavigationBar />
      <div class="container containerBody">
        <h3>
          <b>Add a Restaurant</b>
        </h3>
        <h5>
          <b>Basic Info</b>
        </h5>
        <div class="container content">
          <form action="/restaurant" method="post">
            <div class="form-group">
              <label class="restaurant_text">RESTAURANT NAME</label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Enter Restaurant Name"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">CITY</label>
              <input
                type="text"
                name="city"
                class="form-control"
                placeholder="Enter Restaurant City"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">PHONE NUMBER</label>
              <input
                name="phoneNo"
                step="0"
                type="number"
                pattern=".{10}"
                class="form-control"
                placeholder="Enter Restaurant Phone Number"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">RESTAURANT TYPE</label>
              <input
                type="text"
                name="type"
                class="form-control"
                placeholder="Enter Restaurant Type"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">COST</label>
              <input
                type="number"
                name="minCost"
                class="form-control"
                placeholder="Enter Restaurant Cost"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">TIME</label>
              <input
                type="number"
                name="minTime"
                class="form-control"
                placeholder="Enter Restaurant Time"
                required
              />
            </div>
            <div class="form-group">
              <label class="restaurant_text">RESTAURANT IMAGE</label>
              <input
                type="text"
                name="image"
                class="form-control"
                placeholder="Enter Restaurant Image URL"
                required
              />
            </div>
            <label class="restaurant_text">OPENING STATUS</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                name="openStatus"
                class="form-check-input"
                type="radio"
                value="true"
                required
              />
              <label class="form-check-label">
                This place is already opened
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                name="openStatus"
                class="form-check-input"
                type="radio"
                value="false"
                required
              />
              <label class="form-check-label">This place is opening soon</label>
            </div>
            <br />
            <br />
            <button
              type="submit"
              class="btn btn-success"
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

export default AddRestaurant;
