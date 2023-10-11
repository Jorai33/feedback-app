function App() {
  // Declare variables
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];

  const loading = false;
  const showComment = true;

  if (loading) return <h1>Loading...</h1>;

  return (
    // Needs to return a single enclosing tag or fragment to work
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/* Ternary operator ( can also be replaced with '&&' if no else condition ) */}
      {showComment ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => {
              return <li key={index}>{comment.text}</li>;
            })}
          </ul>
        </div>
      ) : (
        "no comment"
      )}
    </div>
  );
}

export default App;
