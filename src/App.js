import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  // App-level state
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedbacks(
        feedbacks.filter((feedback) => {
          // Returns an array minus the feedback that is deleted ( with the corresponding id)
          return feedback.id !== id;
        })
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
