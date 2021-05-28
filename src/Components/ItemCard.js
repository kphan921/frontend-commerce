import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ItemCard = ({ item }) => {
  return (
    <Card
      className="card-size"
      style={{ width: "250px" }}
      as={Link}
      to={`/items/${item.id}`}
    >
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Image src={item.image} className="centered card-image" />
        <Card.Description>Price: ${item.price}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
