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
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć 8 znaków",
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      username: "",
      email: "",
      password: "",
      accept: false,
      message: "",
    });
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
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.inputHandle}
            />
            I agree all this shit:
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
