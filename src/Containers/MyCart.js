import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import ItemCard from "../Components/ItemCard";

class MyCart extends React.Component {
  render() {
    if (!this.props.orders) {
      return (
        <div>
          <h5>Cart is empty.</h5>
        </div>
      );
    }

    return (
      <div className="ui bulleted list">
        <h2>My Cart</h2>
        {this.props.orders.map((order, idx) => (
          // <div key={order.id}>{order.name}</div>
          <ItemCard key={idx} item={order} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(MyCart);
