import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import NavigationBar from "./NavigationBar";
let baseUrl = "https://aws.tomato.tk";

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/users/login`, {
        useremail: event.target.useremail.value,
        password: event.target.password.value
      })
      .then(res => {
        if (res.status === 200) this.props.push("/");
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="d-flex justify-content-center align-items-center container login">
          <form onSubmit={this.handleSubmit} data-toggle="validator">
            <h2 align="center">
              <b>LOG IN</b>
            </h2>
            <hr />
            <div className="form-group">
              <label
                for="inputName"
                className="control-label registration_text"
              >
                Email Adress
              </label>
              <input
                type="text"
                name="useremail"
                className="form-control login_field"
                required
              />
            </div>
            <div className="form-group">
              <label
                for="inputPassword"
                className="control-label registration_text"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control login_field"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-danger signin_button">Submit</button>
            </div>
            <label className="terms">
              By logging in, You agree to tomato's{" "}
              <span className="terms_a">Terms of Service</span>,{" "}
              <span className="terms_a">Cookie Policy</span>,{" "}
              <span className="terms_a">Privacy Policy</span> and{" "}
              <span className="terms_a">Content Policy</span>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
