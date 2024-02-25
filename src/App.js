import React, { useState } from 'react';
import  "./index.css";

function SearchForm() {
  const dorks = ['ext:', 'filetype:', 'intext:', 'inurl:', 'cache:'];
  const [buscas, setBuscas] = useState(dorks.reduce((acc, dork) => ({ ...acc, [dork]: '' }), {}));

  const handleInputChange = (dork, value) => {
    setBuscas(prevBuscas => ({ ...prevBuscas, [dork]: value }));
  };

  const realizarBusca = () => {
    const termosDeBusca = dorks
      .filter(dork => buscas[dork])
      .map(dork => `${dork}${buscas[dork]}`)
      .join(' ');
    const query = `https://www.google.com/search?q=${encodeURIComponent(termosDeBusca)}`;
    window.open(query, '_blank');
  };

  return (
    <div className="search-form">
      {dorks.map(dork => (
        <div key={dork}>
          <label>{dork}</label>
          <input
            type="text"
            value={buscas[dork]}
            onChange={(e) => handleInputChange(dork, e.target.value)}
          />
        </div>
      ))}
      <button onClick={realizarBusca}>Buscar</button>
    </div>
  );
}

export default SearchForm;
