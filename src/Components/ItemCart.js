import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";



const ItemCart = ({ order, handleDelete }) => {
  

  return (
    <Card raised style={{ width: "300px", height: "min" }}>
      <Card.Content>
        <Card.Header>{order.item.name}</Card.Header>
        <Image
          src={order.item.image}
          className="mini card-image"
          // style={{ width: "60px", height: "50px" }}
        />
        <Card.Description>Price: ${order.item.price}</Card.Description>
      
      <Link onClick={()=>handleDelete(order)}>
        Remove Item
      </Link>
      </Card.Content>
    </Card>
  );
};


  export default ItemCart;
