import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import ItemCart from "../Components/ItemCart";


const MyCart = ({ orders, handleDelete }) => {
  return !orders ? (
    <div>
      <h5>Cart is empty.</h5>
    </div>
  ) : (
    <div className="ui bulleted list">
      <h2>My Cart</h2>
      {orders.map((order, idx) => (
        <ItemCart key={idx} item={order} handleDelete={handleDelete}/>
      ))}
      <h4>Total: ${orders.map(order=> order.price).reduce((s, n)=> s + n, 0)}</h4>
      <Link
          to={'/checkout'}
          style={{ color: "green", fontWeight: "bold", fontSize: "30px" }}
        >
          Checkout
        </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(MyCart);
