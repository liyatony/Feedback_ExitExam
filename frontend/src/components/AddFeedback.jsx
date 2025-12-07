import { useState } from "react";
import axios from "axios";

function AddFeedback() {
  const [form, setForm] = useState({
    courseId: "",
    courseName: "",
    courseDuration: "",
    feedbackComments: "",
    feedbackRating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/feedback", form);
    alert("Feedback added!");
    setForm({
      courseId: "",
      courseName: "",
      courseDuration: "",
      feedbackComments: "",
      feedbackRating: ""
    });
  };

  return (
    <div className="container">
      <h3>Add Feedback</h3>
      <form onSubmit={handleSubmit}>
        <input name="courseId" placeholder="Course ID" value={form.courseId} onChange={handleChange} required />
        <input name="courseName" placeholder="Course Name" value={form.courseName} onChange={handleChange} required />
        <input name="courseDuration" placeholder="Course Duration" value={form.courseDuration} onChange={handleChange} required />
        <textarea name="feedbackComments" placeholder="Feedback Comments" value={form.feedbackComments} onChange={handleChange} required />
        <input type="number" name="feedbackRating" placeholder="Rating (1-5)" value={form.feedbackRating} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFeedback;
