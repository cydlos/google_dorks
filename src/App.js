import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  const [dork, setDork] = useState('site:');
  const [query, setQuery] = useState('');
  const [fileType, setFileType] = useState('');


  const handleDorkChange = (event) => {
    setDork(event.target.value);
    if (event.target.value !== 'filetype:') {
      setFileType('');
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const handleSearch = () => {
    let searchUrl = `https://www.google.com/search?q=`;
    if (dork === 'filetype:') {
      searchUrl += `${query} ${dork}${fileType}`;
    } else {
      searchUrl += `${dork}${query}`;
    }
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="App container mt-5">
      <header className="App-header bg-dark text-white p-5 rounded">
        <h1>Google Dork Search Tool</h1>
        <div className="mb-3">
          <label className="form-label">
            Choose a Google Dork:
            <select className="form-select" value={dork} onChange={handleDorkChange}>
              <option value="site:">site:</option>
              <option value="filetype:">filetype:</option>
              <option value="intext:">intext:</option>
              <option value="inurl:">inurl:</option>
              <option value="cache:">cache:</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Enter additional search terms:
            <input type="text" className="form-control" value={query} onChange={handleQueryChange} />
          </label>
        </div>
        {dork === 'filetype:' && (
          <div className="mb-3">
            <label className="form-label">
              Enter file type (e.g., pdf, docx):
              <input type="text" className="form-control" value={fileType} onChange={handleFileTypeChange} />
            </label>
          </div>
        )}
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </header>
    </div>
  );
}

export default App;
