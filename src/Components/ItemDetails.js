import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const reviewsAPI = "http://localhost:3000/reviews";

class ItemDetails extends Component {
  state = {
    text: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addReview = (e, item) => {
    e.preventDefault();
    fetch(reviewsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        text: this.state.text,
        item_id: this.props.item.id,
      }),
    })
      .then((res) => res.json())
      .then((items) => {
        this.props.dispatch({ type: "ADD_REVIEW", items });
      });
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui two column centered grid">
          <div className="row">
            <div className="eight wide column">
              <img
                alt="oh no!"
                className="ui large rectangular image bordered"
                src={this.props.item.image}
              />
              {localStorage.getItem("token") && (
                <Form onSubmit={this.addReview} className="form">
                  <Form.TextArea
                    label="Review"
                    required
                    name="text"
                    placeholder="Write your review..."
                    onChange={this.handleInputChange}
                  />

                  <Button type="submit" positive>
                    Submit
                  </Button>
                </Form>
              )}
              <Link
                to={"/items"}
                style={{ color: "green", fontWeight: "bold" }}
              >
                Back To Browse
              </Link>
            </div>
            <div className="four wide column">
              <h2>{this.props.item.name}</h2>
              <p>
                <br />
                <strong>Price: </strong>${this.props.item.price}
                <br />
              </p>

              <br />
              {localStorage.getItem("token") && (
                <button
                  className="ui button fluid"
                  onClick={() => this.props.addToCart(this.props.item)}
                >
                  Add to Cart
                </button>
              )}
              <div>
                <h5>Reviews:</h5>
                <ul>
                  {this.props.item.reviews.map((review) => (
                    <li>{review.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(ItemDetails);
