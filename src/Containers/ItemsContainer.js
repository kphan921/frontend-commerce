import ItemCard from "../Components/ItemCard";
import "semantic-ui-css/semantic.min.css";
import ItemDetails from "../Components/ItemDetails";

const ItemsContainer = (props) => {
  return (
    <div class="centered ui four stackable cards">
      {!props.movieView ? (
        props.movies.map((movie, id) => (
          <ItemCard movie={movie} key={id} view={props.view} />
        ))
      ) : (
        <ItemDetails
        user={props.user}
        addNewReview={props.addNewReview}
          movie={props.movie}
          goBack={props.goBack}
          newReview={props.newReview}
          addReview={props.addReview}
          cancelReview={props.cancelReview}
          view={props.view}
          logged_in={props.logged_in}
        />
      )}
    </div>
  );
};

export default ItemsContainer;
