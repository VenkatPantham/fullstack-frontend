import React from "react";
import "./Signup.css";
import NavigationBar from "./NavigationBar";

function Login() {
  return (
    <div>
      <NavigationBar />
      <div className="d-flex justify-content-center align-items-center container register">
        <form action="/user" method="post" data-toggle="validator">
          <h2 align="center">
            <b>SIGN UP</b>
          </h2>
          <hr />
          <div className="form-group">
            <label for="inputName" className="control-label registration_text">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label for="inputEmail" className="control-label registration_text">
              Email Adress
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="useremail"
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
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
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
                I agree to tomato's{" "}
                <strong>Terms of Service, Privacy Policy</strong> and{" "}
                <strong>Content Policies</strong>
              </label>
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary register_button">
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

export default Login;
