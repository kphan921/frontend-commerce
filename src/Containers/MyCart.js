import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import ItemCard from "../Components/ItemCard";

const MyCart = ({ orders }) => {
  return !orders ? (
    <div>
      <h5>Cart is empty.</h5>
    </div>
  ) : (
    <div className="ui bulleted list">
      <h2>My Cart</h2>
      {orders.map((order, idx) => (
        <ItemCard key={idx} item={order} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(MyCart);
