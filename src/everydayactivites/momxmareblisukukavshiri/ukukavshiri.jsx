import { useState } from "react";
import './ukukavshiri.css'

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      write your feedback
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default Feedback;