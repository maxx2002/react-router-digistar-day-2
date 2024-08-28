import React from "react";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul>
        <li>
          <Link to="/projects/project-1" className="text-blue-400">
            Project 1
          </Link>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
};

export default Projects;
