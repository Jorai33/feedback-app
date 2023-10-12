import PropTypes from "prop-types";

function FeedbackStats({ feedbacks }) {
  // Calculate ratings average
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

  // Fix average to 1 decimal ("toFixed"), if it's '0' don't show it ( regular expression)
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedbackStats;
