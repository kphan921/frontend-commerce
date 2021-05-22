import React from "react";
import "semantic-ui-css/semantic.min.css";


const ItemDetails = ({ item, addToCart }) => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="eight wide column">
            <img
              alt="oh no!"
              className="ui large rectangular image bordered"
              src={item.image}
            />
          </div>
          <div className="four wide column">
            <h2>{item.name}</h2>
            <p>
              <br />
              <strong>Price: </strong>
              ${item.price}
              <br />
            </p>
            <br />
            <button className="ui button fluid" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
