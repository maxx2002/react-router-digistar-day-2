import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-gray-900 text-white p-4 flex justify-around">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/projects" className="text-xl">
          Projects
        </Link>
        <Link to="/contact" className="text-xl">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
