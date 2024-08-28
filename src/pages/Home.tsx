import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">Explore my work and get in touch!</p>
    </div>
  );
};

export default Home;
