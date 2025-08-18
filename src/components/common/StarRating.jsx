import "../../styles/starRating.css";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "filled" : "empty"}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
