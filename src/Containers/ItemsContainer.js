import ItemCard from "../Components/ItemCard";
import "semantic-ui-css/semantic.min.css"
import { connect } from "react-redux";

const ItemsContainer = ({ items }) => {
  return (
    <div className="centered ui four stackable cards">
      {items.map((item, id) => (
        <ItemCard item={item} key={id} />
      ))}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemsContainer);
