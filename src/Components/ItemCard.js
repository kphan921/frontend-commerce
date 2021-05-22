import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <header>{item.name}</header>
        <img src={item.image} alt="item-img-card" />
        <h3>Price: ${item.price}</h3>
        <div>
          <Link
            to={`/items/${item.id}`}
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
