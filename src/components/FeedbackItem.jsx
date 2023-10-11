import { useState } from "react";

function FeedbackItem() {
  // Declares a new state variable which is called 'rating'
  const [rating, setRating] = useState(7);
  // Declares a new state variable which is called 'textDisplay'
  const [textDisplay, setTextDisplay] = useState(
    "This is an example of feedback"
  );

  const handleClick = () => {
    // Reset 'rating' state value to 10
    // setRating(10);

    // Reset 'rating' state value by passing an arrow function to access previous state value if necessary
    setRating((prev) => {
      // Increment previous value by 1 on each click
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{textDisplay}</div>
      {/* Click event to reset 'rating' state value */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
