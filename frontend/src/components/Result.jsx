// src/components/Result.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ resultData }) => {
  if (!resultData) {
    return <div>No result available</div>;
  }

  const renderResult = () => {
    return Object.keys(resultData).map((key, index) => {
      if (key === '_id') {
        return null; // Skip rendering for 'id' key
      }
      return ( 
        <div key={index}>
          <h3>{key}</h3>
          <p>{resultData[key]}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Result:</h2>
      {renderResult()}
      <Link to="/">Go back to Student Portal</Link>
    </div>
  );
};

export default Result;
