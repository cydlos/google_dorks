import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap (se necessário)
import './App.css'; // Importando CSS personalizado

function App() {
  // Estados para o Google Dork e a query de pesquisa
  const [dork, setDork] = useState('site:');
  const [query, setQuery] = useState('');

  // Manipulador para mudança no Google Dork selecionado
  const handleDorkChange = (event) => {
    setDork(event.target.value);
  };

  // Manipulador para mudança na query de pesquisa
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // Função para realizar a pesquisa
  const handleSearch = () => {
    const searchUrl = `https://www.google.com/search?q=${dork}${query}`;
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
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Enter additional search terms:
            <input type="text" className="form-control" value={query} onChange={handleQueryChange} />
          </label>
        </div>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </header>
    </div>
  );
}

export default App;
