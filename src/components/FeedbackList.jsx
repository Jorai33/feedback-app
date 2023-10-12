import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      {feedbacks.map((feedback) => {
        return (
          <FeedbackItem
            key={feedback.id}
            feedback={feedback}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedbackList;
