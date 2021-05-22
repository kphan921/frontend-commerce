import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ItemCard = ({ item }) => {
  return (
    <Card raised className="card-size" style={{ width: "300px" }}>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Image src={item.image} className="centered card-image" />
        <Card.Description>$ {item.price}</Card.Description>{" "}
        <Link
          to={`/items/${item.id}`}
          style={{ color: "blue", fontWeight: "bold" }}
        >
          More Info
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
