import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-bars loading-lg h-full"></span>
    </div>
  );
};

export default Loader;
