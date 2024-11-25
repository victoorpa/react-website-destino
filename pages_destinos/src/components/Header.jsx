import React from 'react';
import '../styles/Header.css';
import logo from '../img/1 DESTINO.png';


const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <div className="header-text">
          <h1>Reserva tu <br /> Aventura</h1>
          <p>Explora destinos únicos con nosotros y <br /> descubre lugares que nunca <br />imaginaste.</p>
          <a href="#reserdestinates" className="header-button">Reservar Ahora</a>
        </div>
      </div>
      <div className="menu container">
        <a href="#" className="logo"><img src={logo} alt="logo" className="logo"/></a>
        <input type="checkbox" id="menu"/>
        <label htmlFor="menu">
        </label>
        <nav className="navbar">
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Reservaciones</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
