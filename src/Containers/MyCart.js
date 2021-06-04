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
    <div>
      <header className="ui header">
        <h2>Cart </h2>
      </header>
      <main className="cart">
        <div className="ui bulleted list" style={{marginRight: "50px"}}>
          {orders.length === 0? <h3>Your cart is empty</h3> : orders.map((order, idx) => (
            <ItemCart key={idx} order={order} handleDelete={handleDelete} />
          ))}
        </div>
        <div>
          <h4>
            Items: $
            {orders
              .map((order) => order.item.price)
              .reduce((s, n) => s + n, 0)
              .toFixed(2)}
          </h4>
          <h4>
            Tax: $
            {(
              orders
                .map((order) => order.item.price)
                .reduce((s, n) => s + n, 0) * 0.1
            ).toFixed(2)}
          </h4>
          <h4>
            Toral: $
            {(
              orders
                .map((order) => order.item.price)
                .reduce((s, n) => s + n, 0) +
              orders
                .map((order) => order.item.price)
                .reduce((s, n) => s + n, 0) *
                0.1
            ).toFixed(2)}
          </h4>
          {orders.length !== 0 && (
            <Link
              to={"/checkout"}
              style={{ color: "green", fontWeight: "bold", fontSize: "30px" }}
            >
              Checkout
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(MyCart);
