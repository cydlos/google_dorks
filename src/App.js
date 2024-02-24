import React, { useState } from 'react';
import './App.css';

function App() {
  const [dork, setDork] = useState('site:');
  const [query, setQuery] = useState('');

  const handleDorkChange = (event) => {
    setDork(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const searchUrl = `https://www.google.com/search?q=${dork}${query}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Dork Search Tool</h1>
        <div>
          <label>
            Choose a Google Dork:
            <select value={dork} onChange={handleDorkChange}>
              <option value="site:">site:</option>
              <option value="filetype:">filetype:</option>
              <option value="intext:">intext:</option>
              <option value="inurl:">inurl:</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Enter additional search terms:
            <input type="text" value={query} onChange={handleQueryChange} />
          </label>
        </div>
        <button onClick={handleSearch}>Search</button>
      </header>
    </div>
  );
}

export default App;
