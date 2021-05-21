import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { withRouter } from "react-router";
// import { connect } from "react-redux";

class Login extends Component {
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
    fetch('http://localhost:3000/auth',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ user: {...this.state} })
    }).then(res => res.json())
    .then(tokenObj => {
      if(tokenObj.token){                               // check if token is valid
        localStorage.setItem('token',tokenObj.token)     // save token to localStorage
        this.props.handleLogin()
        this.props.history.push('/items')
      }else{
        alert('Login failed..')
      }
    })

  }
  render() {
    return (
      <Segment className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Button type="submit" positive>
            Login
          </Button>

        </Form>
      </Segment>
    );
  }
}

export default withRouter(Login);
