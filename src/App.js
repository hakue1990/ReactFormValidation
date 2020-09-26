import React, { Component } from "react";
import "./App.css";
import background from "./assets/images/bg.jpg";

class App extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    checkbox: false,

    errors: {
      username: false,
      password: false,
      email: false,
      checkbox: false,
    },
  };

  messages = {
    usernameError: "at least 4 characters",
    passwordError: "at least 6 characters",
    emailError: "missing @",
    checkboxError: "agree statment",
  };
  handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  formValidation = () => {
    let username = false;
    let password = false;
    let email = false;
    let checkbox = false;
    let correct = false;

    if (this.state.username.length >= 4) {
      username = true;
    }

    if (this.state.email.includes("@")) {
      email = true;
    }
    if (this.state.password.length >= 6) {
      password = true;
    }
    if (this.state.checkbox) {
      checkbox = true;
    }
    if (username && password && email && checkbox) {
      correct = true;
    }
    return {
      username,
      email,
      password,
      checkbox,
      correct,
    };
  };
  handleFormSubmit = (e) => {
    console.log(this.formValidation());
    e.preventDefault();
    if (this.formValidation().correct) {
      this.setState({
        username: "",
        password: "",
        email: "",
        checkbox: false,

        errors: {
          username: false,
          password: false,
          email: false,
          checkbox: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !this.formValidation().username,
          password: !this.formValidation().password,
          email: !this.formValidation().email,
          checkbox: !this.formValidation().checkbox,
        },
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="box">
          <form onSubmit={this.handleFormSubmit}>
            <img src="./avatar.png" alt="avatar" />
            <label htmlFor="user">
              <input
                type="text"
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              {this.state.errors.username ? (
                <span>{this.messages.usernameError}</span>
              ) : null}
            </label>
            <label htmlFor="password">
              <input
                type="password"
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              {this.state.errors.password ? (
                <span>{this.messages.passwordError}</span>
              ) : null}
            </label>
            <label htmlFor="email">
              <input
                placeholder="Email"
                type="email"
                onChange={this.handleInputChange}
                name="email"
              />{" "}
              {this.state.errors.email ? (
                <span>{this.messages.emailError}</span>
              ) : null}
            </label>
            <label htmlFor="checkbox">
              I agree
              <input
                className="checkbox"
                type="checkbox"
                onChange={this.handleInputChange}
                name="checkbox"
                id="checkbox"
              />
              {this.state.errors.checkbox ? (
                <span>{this.messages.checkboxError}</span>
              ) : null}
            </label>
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
