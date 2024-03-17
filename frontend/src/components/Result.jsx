import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ resultData }) => {
  return (
    <div>
      <h2>Result:</h2>
      <div>
        {/* Render the resultData directly */}
        <p>Enrollment No: {resultData.enrollmentNo}</p>
        <p>Seat No: {resultData.seatNo}</p>
        <p>Semester: {resultData.semester}</p>
        {/* Add other fields as needed */}
      </div>
      <Link to="/">Go back to Student Portal</Link>
    </div>
  );
};

export default Result;
