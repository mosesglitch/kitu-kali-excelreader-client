// src/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const FileUpload = ({getState}) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file first.");
      return;
    }
getState(true)
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://kitukali-excel-processor.onrender.com/upload', formData, {
        responseType: 'blob', // Handle binary response
      });

      // Create a download link and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Cleaned_Output.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('An error occurred while uploading the file.');
getState(false)

    } finally {
      setLoading(false);
getState(false)

    }
  };

  return (
    <div className="file-upload">
      <h1 
      className='upload-header'
      
      >Upload Excel File</h1>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
      />
      <div
      className='process-btn'
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Upload and Process'}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
