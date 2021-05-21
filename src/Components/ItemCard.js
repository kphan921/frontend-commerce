import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const ItemCard = (props) => {
  return (
    <div>
      <div>
        <header>{props.item.name}</header>
        <img src={props.item.image} alt="item-img-card" />
        <h3>Price: ${props.item.price}</h3>
        <div>
          <Link
            to={`/items/${props.item.id}`}
            style={{ color: "blue", fontWeight: "bold" }}
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
