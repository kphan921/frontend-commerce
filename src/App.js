import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import ItemsContainer from "./Containers/ItemsContainer";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import MyReviews from "./Containers/MyCart";

import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const itemsAPI = "http://localhost:3000/items";

class App extends Component {
  state = {
    logged_in: false
  };

  componentDidMount() {
    fetch(itemsAPI)
      .then((res) => res.json())
      .then((items) => console.log(items));  //this.dispatch({ type: "GET_ITEMS", items })
  }


  handleLogin = () => {
    this.setState({ logged_in: true });
  };




  render() {
    return (
      <div className="App">
        <Router>
          <Nav logged_in={this.state.logged_in} />
          <Switch>
            <Route
              exact
              path="/items"
              component={() => (
                <ItemsContainer
                  addNewReview={this.addNewReview}
                  user={this.state.user}
                  movies={this.state.movies}
                  movieView={this.state.view}
                  view={this.viewMovie}
                  movie={this.state.currentMovie}
                  goBack={this.goBack}
                  newReview={this.state.newReview}
                  addReview={this.addReview}
                  cancelReview={this.cancelReview}
                  logged_in={this.state.logged_in}
                />
              )}
            />

            {/* <Route>
              exact path="/movies/:id" 
              render={(routerProps) => {
                let movie = this.state.movies.find(
                  (movie) => Number(routerProps.match.params.id) === movie.id
                );
                return <MovieSpecs />;
              }}
            </Route> */}

            <Route
              path="/mycart"
              component={() => {
                return this.state.logged_in ? (
                  <MyReviews
                    reviews={this.state.reviews}
                    handleEditForm={this.handleEditForm}
                    handleDelete={this.handleDelete}
                    viewEdit={this.state.viewEdit}
                    cancelEditReview={this.cancelEditReview}
                    handleEdit={this.handleEdit}
                    review={this.state.currentReview}
                  />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />

            <Route
              exact
              path="/"
              // path="/login"
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
                this.setState({ logged_in: false });
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}



export default connect(mapStateToProps)(App);
