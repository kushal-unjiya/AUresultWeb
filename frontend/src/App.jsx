  // frontend/src/App.jsx
  import React, { useState } from 'react';
  import axios from 'axios';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import Admin from './components/Admin';
  import Result from './components/Result';
  import './App.css';

  function App() {
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [seatNo, setSeatNo] = useState('');
    const [semester, setSemester] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState(null);
    
    const handleEnrollmentNoChange = (e) => {
      setEnrollmentNo(e.target.value);
    };

    const handleSeatNoChange = (e) => {
      setSeatNo(e.target.value);
    };

    const handleSemesterChange = (e) => {
      setSemester(e.target.value);
    };

    const handleShowResult = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/student/getResult', {
          enrollmentNo,
          seatNo,
          semester,
        });

        setResultData(response.data);
        setShowResult(true);
      } 
      catch (error) {
        console.error('Error fetching results:', error);
        // If the error has a response property, it means the server responded with an error status code
        if (error.response) {
          alert(`Error: ${error.response.data.message}`);
        } else {
          alert('Error fetching results. Please try again.');
        }
      }
    };

    // 
    return (
      <Router>
      <div>
        <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/"
          element={
          <div className="login-container">
             <Link to="/admin">Admin Portal</Link>

            <h1>Welcome to, Adani University Result Portal</h1>
            <input
            type="text"
            placeholder="Enrollment No"
            value={enrollmentNo}
            onChange={handleEnrollmentNoChange}
            />
            <br />
            <input
            type="text"
            placeholder="University Seat No"
            value={seatNo}
            onChange={handleSeatNoChange}
            />{' '}
            <br />
            <input
            type="text"
            placeholder="Semester"
            value={semester}
            onChange={handleSemesterChange}
            />
            <br />
            <button onClick={handleShowResult}>Show Your Result</button>
          </div>
          }
        />
        </Routes>

        {showResult && <Result resultData={resultData} />}
      </div>
      </Router>
    );
  }

  export default App;

