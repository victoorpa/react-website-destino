import { Fragment } from "react";
import css from './nosotros.module.css';
import destinoLogo from './resources/destinoLogo.png';

function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <div className={`${css.section__container} ${css.footer__container}`}>
          <div className={css.footer__col}>
            <div className={`${css.logo} ${css.footer__logo}`}>
              <a href="#">
                <img src={destinoLogo} alt="logo" />
              </a>
            </div>
            <p className={css.section__description}>
              Con años de experiencia en la planificación de viajes,
              garantizamos experiencias inolvidables y servicios excepcionales.
            </p>
            <ul className={css.footer__socials}>
              <li>
                <a href="#">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-google-fill"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.footer__col}>
            <h4>Enlaces rápidos</h4>
            <ul className={css.footer__links}>
              <li>
                <a href="#">Alojamiento de calidad</a>
              </li>
              <li>
                <a href="#">Transporte eficiente</a>
              </li>
              <li>
                <a href="#">Actividades recreativas</a>
              </li>
              <li>
                <a href="#">Asesoría de itinerarios</a>
              </li>
              <li>
                <a href="#">Paquetes Personalizados</a>
              </li>
            </ul>
          </div>
          <div className={css.footer__col}>
            <h4>Información de contacto</h4>
            <ul className={css.footer__links}>
              <li>
                <p>
                  Descubra el mundo con nosotros y permita que su aventura
                  comience con el mejor cuidado y planificación.
                </p>
              </li>
              <li>
                <p>
                  Celular: <span>+51 986 023 334</span>
                </p>
              </li>
              <li>
                <p>
                  Email: <span>info@destino.com</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={css.footer__bar}>
        Copyright © 2024 VICTOR | Todos los derechos reservados.
      </div>
    </>
  );
}

export default Footer;
