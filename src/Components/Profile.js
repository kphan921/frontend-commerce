import React from "react";
import { connect } from "react-redux";

const Profile = ({ user }) => {
  return (
    <div>
      <h4>User Name: {user.username}</h4>
      <h5>My reviews:</h5>
      <ul>
        {user.reviews.length === 0 ? (
          <p>You don't have any review</p>
        ) : (
          user.reviews.map((review) => <li key={review.id}>{review.text}</li>)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
