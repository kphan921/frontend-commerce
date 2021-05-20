import React from "react";
// import Review from "../Components/Review.js";
import "semantic-ui-css/semantic.min.css";
// import EditReviewForm from "../Components/EditReviewForm";

class MyCart extends React.Component {
  render() {
    
    if (this.props.items) {
      return (
        <div>
          <h5>Cart is empty.</h5>
        </div>
      );
    }

    return (
      <div class="ui bulleted list">
        <h2>My Reviews</h2>
        {/* {!this.props.viewEdit ? this.props.reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleEditForm={this.props.handleEditForm}
            handleDelete={this.props.handleDelete}
          />
        ))
        :
        <EditReviewForm review={this.props.review} key={this.props.review.id} cancelEditReview={this.props.cancelEditReview} handleEdit={this.props.handleEdit} />} */}
      </div>
    );
  }
}

export default MyCart;
