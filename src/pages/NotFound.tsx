import React from 'react';
import '../styles/notfound.css';

function NotFound() {
  return (
    <div id="error-content">
      <h1>Oops!</h1>
      <h3>ERROR 404 - página não encontrada</h3>
      <p>A página que você estava buscando<br></br>pode ter sido removida ou não existe.</p>
      <a href="/">Retornar</a>
      <div className="bar">
        <h4>teste</h4>
      </div>
    </div>
  );
}

export default NotFound;