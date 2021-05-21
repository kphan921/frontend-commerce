import React from "react";
import "semantic-ui-css/semantic.min.css";


const ItemDetails = (props) => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="eight wide column">
            <img
              alt="oh no!"
              className="ui large rectangular image bordered"
              src={props.item.image}
            />
          </div>
          <div className="four wide column">
            <h2>{props.item.name}</h2>
            <p>
              <br />
              <strong>Price: </strong>
              ${props.item.price}
              <br />
            </p>
            <br />
            <button className="ui button fluid" onClick={() => props.addToCart(props.item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
