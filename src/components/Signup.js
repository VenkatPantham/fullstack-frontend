import React, { Component } from "react";
import "./Signup.css";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import { baseUrl } from "./baseUrl";

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/user`, {
        username: event.target.username.value,
        useremail: event.target.useremail.value,
        image: event.target.image.value,
        password: event.target.password.value,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("You have successfully registered!");
          this.props.history.push("/");
        }
      })
      .catch((res) => {
        alert("User with this Email already exists!");
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="d-flex justify-content-center align-items-center container register">
          <form onSubmit={this.handleSubmit} data-toggle="validator">
            <h2 align="center">
              <b>SIGN UP</b>
            </h2>
            <hr />
            <div className="form-group">
              <label
                for="inputName"
                className="control-label registration_text"
              >
                Full Name
              </label>
              <input
                name="username"
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter your Full Name"
                required
              />
            </div>
            <div className="form-group">
              <label
                for="inputEmail"
                className="control-label registration_text"
              >
                Email Adress
              </label>
              <input
                name="useremail"
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your Email Adress"
                data-error="Enter the valid email address is invalid"
                requiredclassName="terms_a"
              />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <label
                for="inputPassword"
                className="control-label registration_text"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                id="inputPassword"
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label registration_text">Image</label>
              <input
                name="image"
                type="text"
                placeholder="Enter your Image URL"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    data-error="Please accept the terms and regulations"
                    required
                  />
                  &nbsp;I agree to tomato's{" "}
                  <strong>Terms of Service, Privacy Policy</strong> and{" "}
                  <strong>Content Policies</strong>
                </label>
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary register_button">
                Submit
              </button>
            </div>
            <label className="terms">
              By creating an account, You agree to tomato's{" "}
              <span href="#" className="terms_a">
                Terms of Service
              </span>
              ,{" "}
              <span href="#" className="terms_a">
                Cookie Policy
              </span>
              ,{" "}
              <span href="#" className="terms_a">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span href="#" className="terms_a">
                Content Policy
              </span>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
