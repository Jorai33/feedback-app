import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} />;
      })}
    </div>
  );
}

export default FeedbackList;
