import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Project {projectId} Details</h1>
      <p className="text-xl">Details about project {projectId} go here.</p>
    </div>
  );
};

export default ProjectDetail;
