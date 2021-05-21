import React from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { withRouter } from "react-router";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    //
    // Should pass in user_id once we get response from our API
    //
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { ...this.state } }),
    })
      .then((res) => res.json())
      .then((tokenObj) => {
        if (tokenObj.token) {
          // check of token is valid
          alert("You are signed up. Please Login...");
          this.props.history.push("/"); // direct new user to login
        } else {
          alert("Signup failed..");
        }
      });
  };

  render() {
    return (
      <Segment className={"form-container"}>
        <Form onSubmit={this.handleSubmit} autoComplete={"off"}>
          <Form.Field>
            <label>Username</label>
            <input
              required
              name="username"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Button type="submit" positive>
            Signup
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(Signup);
