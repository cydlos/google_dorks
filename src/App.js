import React, { useState } from 'react';
import "./index.css";

function SearchForm() {
  const dorks = ['ext:', 'filetype:', 'intext:', 'inurl:', 'cache:'];
  const [buscas, setBuscas] = useState(dorks.reduce((acc, dork) => ({
    ...acc,
    [dork]: { termo: '', negado: false }
  }), {}));

  const handleInputChange = (dork, value) => {
    setBuscas(prevBuscas => ({
      ...prevBuscas,
      [dork]: { ...prevBuscas[dork], termo: value }
    }));
  };

  const handleCheckboxChange = (dork) => {
    setBuscas(prevBuscas => ({
      ...prevBuscas,
      [dork]: { ...prevBuscas[dork], negado: !prevBuscas[dork].negado }
    }));
  };

  const realizarBusca = () => {
    const termosDeBusca = dorks
      .filter(dork => buscas[dork].termo)
      .map(dork => `${buscas[dork].negado ? '-' : ''}${dork}${buscas[dork].termo}`)
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
            value={buscas[dork].termo}
            onChange={(e) => handleInputChange(dork, e.target.value)}
          />
          <input
            type="checkbox"
            checked={buscas[dork].negado}
            onChange={() => handleCheckboxChange(dork)}
          />
          <label>Negar</label>
        </div>
      ))}
      <button onClick={realizarBusca}>Buscar</button>
    </div>
  );
}

export default SearchForm;
