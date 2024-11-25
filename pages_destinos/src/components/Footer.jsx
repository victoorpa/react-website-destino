import React from 'react';
import '../styles/Footer.css';
import logo from '../img/1 DESTINO.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo footer__logo">
              <a href="#"><img src={logo}/></a>
            </div>
            <p className="section__description">
              Con años de experiencia en la planificación de viajes, garantizamos experiencias inolvidables y servicios excepcionales.
            </p>
            <ul className="footer__socials">
              <li>
                <a href="#"><i className="ri-facebook-fill"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-google-fill"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-instagram-line"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-youtube-line"></i></a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Enlaces rápidos</h4>
            <ul className="footer__links">
              <li><a href="#">Alojamiento de calidad</a></li>
              <li><a href="#">Transporte eficiente</a></li>
              <li><a href="#">Actividades recreativas</a></li>
              <li><a href="#">Asesoría de itinerarios</a></li>
              <li><a href="#">Paquetes Personalizados</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Información de contacto</h4>
            <ul className="footer__links">
              <li>
                <p>
                  Descubra el mundo con nosotros y permita que su aventura comience con el mejor cuidado y planificación.
                </p>
              </li>
              <li>
                <p>Celular: <span>+51 986 023 334</span></p>
              </li>
              <li>
                <p>Email: <span>info@destino.com</span></p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2024 JOHAN | Todos los derechos reservados.
      </div>
    </>
  );
}

export default Footer;
