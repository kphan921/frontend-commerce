import { Card, Image } from "semantic-ui-react";

const ItemCard = (props) => {
  return (
    <Card raised onClick={(e) => props.view(e, props.movie)} className="card-size" style={{ width: "325px" }}>
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
        <Image src={props.item.image} className="centered card-image" />
        <Card.Description>
          ${props.item.price}
        </Card.Description>{" "}
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
