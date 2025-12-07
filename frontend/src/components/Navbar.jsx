import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Feedback Admin Panel</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Feedback</Link>
      </div>
    </div>
  );
}

export default Navbar;
