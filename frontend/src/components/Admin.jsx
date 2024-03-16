import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:3000/api/admin/uploadFile', formData);

      alert('Data uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      
      <h1>Admin Panel</h1>
      <Link to="/">Student Portal</Link><br></br>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Data</button>
      
    </div>
  );
}

export default Admin;