import { Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";



// const ordersAPI = "http://localhost:3000/orders";


const ItemCart = ({ item, handleDelete }) => {
  

  return (
    <Card raised style={{ width: "300px", height: "150px" }}>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Image
          src={item.image}
          className="centered card-image"
          style={{ width: "60px", height: "50px" }}
        />
        <Card.Description>Price: ${item.price}</Card.Description>
      </Card.Content>
      <Button className="ui button" onClick={()=>handleDelete(item)}>
        Remove Item
      </Button>
    </Card>
  );
};


  export default ItemCart;
