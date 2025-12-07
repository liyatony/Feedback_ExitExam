import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const fetchFeedbacks = async () => {
    const res = await axios.get("https://feedback-exitexam.onrender.com");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://feedback-exitexam.onrender.com${id}`);
    fetchFeedbacks();
  };

  const handleEdit = (fb) => {
    setEditId(fb._id);
    setEditData(fb);
  };

  const handleUpdate = async () => {
    await axios.put(`https://feedback-exitexam.onrender.com${editId}`, editData);
    setEditId(null);
    fetchFeedbacks();
  };

  return (
    <div className="container">
      <h3>Feedback Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb) => (
            <tr key={fb._id}>
              <td>
                {editId === fb._id ? (
                  <input value={editData.courseId} onChange={(e) => setEditData({ ...editData, courseId: e.target.value })} />
                ) : (
                  fb.courseId
                )}
              </td>
              <td>
                {editId === fb._id ? (
                  <input value={editData.courseName} onChange={(e) => setEditData({ ...editData, courseName: e.target.value })} />
                ) : (
                  fb.courseName
                )}
              </td>
              <td>
                {editId === fb._id ? (
                  <input value={editData.courseDuration} onChange={(e) => setEditData({ ...editData, courseDuration: e.target.value })} />
                ) : (
                  fb.courseDuration
                )}
              </td>
              <td>
                {editId === fb._id ? (
                  <input value={editData.feedbackRating} onChange={(e) => setEditData({ ...editData, feedbackRating: e.target.value })} />
                ) : (
                  fb.feedbackRating
                )}
              </td>
              <td>
                {editId === fb._id ? (
                  <button onClick={handleUpdate}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(fb)}>Update</button>
                )}
                <button onClick={() => handleDelete(fb._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
