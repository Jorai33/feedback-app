import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimesCircle } from "react-icons/fa";

function FeedbackItem({ feedback, handleDelete }) {
  return (
    // Call the 'Card' styled component
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimesCircle color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
