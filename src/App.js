import React, { useState } from 'react';
import "./index.css";

// cria a constante 'dorks', dentro da função SearchForm, uma array de strings correspondente a cada dork a ser selecionado
// cria a constante 'buscas', dentro da função SearchForm, que é um objeto que contém um objeto para cada dork, com as chaves 'termo' (ou seja, o termo a ser pesquisado sob determinado dork) e 'negado' e valores iniciais vazios e falsos, respectivamente
function SearchForm() {
  const dorks = ['ext:', 'filetype:', 'intext:', 'inurl:', 'cache:'];
  const [buscas, setBuscas] = useState(dorks.reduce((acc, dork) => ({
    ...acc,
    [dork]: { termo: '', negado: false }
  }), {}));

  // constante a ser inserida no input de texto no formulário, que recebe o valor do input e atualiza o estado de 'buscas' com o valor do input
  const handleInputChange = (dork, value) => {
    setBuscas(prevBuscas => ({
      ...prevBuscas,
      [dork]: { ...prevBuscas[dork], termo: value }
    }));
  };

  // faz algo semelhante à constante acima, porém com a checkbox, ou seja, atualiza o estado de 'buscas' com o valor da checkbox; se a checkbox estiver marcada, o valor de 'negado' é true, caso contrário, é false
  const handleCheckboxChange = (dork) => {
    setBuscas(prevBuscas => ({
      ...prevBuscas,
      [dork]: { ...prevBuscas[dork], negado: !prevBuscas[dork].negado }
    }));
  };

  // constante que realiza a busca no Google, com base nos termos de busca inseridos no formulário
  // .filter(dork => buscas[dork].termo) filtra os dorks que têm termos de busca inseridos
  // .map(dork => `${buscas[dork].negado ? '-' : ''}${dork}${buscas[dork].termo}`) mapeia os dorks com termos de busca inseridos, adicionando um '-' caso a checkbox esteja marcada
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
