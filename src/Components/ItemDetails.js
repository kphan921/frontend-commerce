import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

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
            <Link to={"/items"} style={{ color: "green", fontWeight: "bold" }}>
              Back To Browse
            </Link>
          </div>
          <div className="four wide column">
            <h2>{item.name}</h2>
            <p>
              <br />
              <strong>Price: </strong>${item.price}
              <br />
            </p>
            
            <br />
            {localStorage.getItem("token") && (
              <button
                className="ui button fluid"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            )}
            <div>
              <h5>Reviews:</h5>
              <ul>
                {item.reviews.map((review) => (
                  <li>{review.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
