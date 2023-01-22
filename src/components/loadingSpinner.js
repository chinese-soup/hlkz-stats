import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="centered">
      <svg className="spinner" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
