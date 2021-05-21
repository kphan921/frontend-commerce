import ItemCard from "../Components/ItemCard";
import "semantic-ui-css/semantic.min.css"

const ItemsContainer = (props) => {
  return (
    <div className="centered ui four stackable cards">
      {props.items.map((item, id) => (
        <ItemCard item={item} key={id} />
      ))}
    </div>
  );
};

export default ItemsContainer;
