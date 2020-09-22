import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 4 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi więcej niż 7 znaków",
    accept_incorrect: "Nie potwierdzona zgoda",
  };
  inputHandle = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    } else {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    }
  };
  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (
      this.state.username.length > 4 &&
      this.state.username.indexOf(" " === -1)
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.password.length > 4) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true;
    }
    return {
      username,
      email,
      password,
      accept,
      correct,
    };
  };
  handleSubmit = (e) => {
    const validation = this.formValidation();
    console.log(validation);

    e.preventDefault();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: "",
        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            username:
            <input
              type="text"
              value={this.state.username}
              id="username"
              name="username"
              onChange={this.inputHandle}
            />
            {this.state.errors.username ? (
              <span>{this.messages.username_incorrect}</span>
            ) : null}
          </label>

          <label htmlFor="email">
            email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.inputHandle}
            />
            {this.state.errors.email ? (
              <span>{this.messages.email_incorrect}</span>
            ) : null}
          </label>
          <label htmlFor="password">
            password:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandle}
            />
            {this.state.errors.password ? (
              <span>{this.messages.password_incorrect}</span>
            ) : null}
          </label>
          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.inputHandle}
            />
            I agree all this shit
            {this.state.errors.accept ? (
              <span>{this.messages.accept_incorrect}</span>
            ) : null}
          </label>
          <button>Submait</button>
        </form>
      </div>
    );
  }
}

export default App;
