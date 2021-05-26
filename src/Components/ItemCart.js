import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";



const ItemCart = ({ item, handleDelete }) => {
  

  return (
    <Card raised style={{ width: "300px", height: "min" }}>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Image
          src={item.image}
          className="mini card-image"
          // style={{ width: "60px", height: "50px" }}
        />
        <Card.Description>Price: ${item.price}</Card.Description>
      
      <Link onClick={()=>handleDelete(item)}>
        Remove Item
      </Link>
      </Card.Content>
    </Card>
  );
};


  export default ItemCart;
