import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo-container"></div>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/sobre-nos">Sobre Nós</a></li>
          <li><a href="#agendamento">Agendamento</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
