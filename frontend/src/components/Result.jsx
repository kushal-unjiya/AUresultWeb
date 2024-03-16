import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ resultData }) => {
  return (
    <div>
      <h2>Result:</h2>
      <pre>{JSON.stringify(resultData, null, 2)}</pre>
      <Link to="/">Go back to Student Portal</Link>
    </div>
  );
};

export default Result;
