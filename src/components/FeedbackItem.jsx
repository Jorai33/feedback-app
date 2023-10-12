import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ feedback }) {
  return (
    // Call the 'Card' styled component
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
