import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddFeedback from "./components/AddFeedback";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
