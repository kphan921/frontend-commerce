import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import ItemsContainer from "./Containers/ItemsContainer";
import Login from "./Components/Login";
import ItemDetails from "./Components/ItemDetails";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import MyCart from "./Containers/MyCart";

import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const itemsAPI = "http://localhost:3000/items";
const ordersAPI = "http://localhost:3000/orders";

class App extends Component {
  componentDidMount() {

  }

  handleLogin = () => {
    fetch(itemsAPI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((items) => this.props.dispatch({ type: "GET_ITEMS", items }));

    fetch(ordersAPI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((orders) => this.props.dispatch({ type: "GET_ORDERS", orders }));
  };

  addToCart = (item) => {
    fetch(ordersAPI, {                   //fetch POST to orders
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ item_id: item.id }),
    })
      .then((res) => res.json())
      .then((orders) => console.log(orders));
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/items" component={() => <ItemsContainer />} />

            <Route
              exact
              path="/items/:id"
              render={(routerProps) => {
                if (this.props.items.length !== 0) {
                  let item = this.props.items.find(
                    (item) => Number(routerProps.match.params.id) === item.id
                  );
                  return <ItemDetails item={item} addToCart={this.addToCart} />;
                } else {
                  return <Redirect to="/items" />;
                }
              }}
            />

            <Route
              path="/mycart"
              component={() => {
                  return localStorage.getItem('token') ? (
                  <MyCart handleDelete={this.handleDelete} />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />

            <Route
              exact
              path="/"
              component={() => <Login handleLogin={this.handleLogin} />}
            />

            <Route
              path="/signup"
              component={() => <Signup handleLogin={this.handleLogin} />}
            />

            <Route
              path="/logout"
              component={() => {
                localStorage.clear();
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
