import { Fragment } from "react";
import css from './nosotros.module.css';
import logo from './resources/destinoLogo.png';

function NavBar() {
  return (
    <nav>
      <div className={css.nav__bar}>
        <div className={`${css.logo} ${css.nav__logo}`}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={css.nav__menu__btn} id="menu-btn">
          <i className="ri-menu-3-line"></i>
        </div>
      </div>
      <div className={css.container__links}>
        <ul className={css.nav__links} id="nav-links">
          <li>
            <a href="https://johancotrina.github.io/page_nosotros/">Nosotros</a>
          </li>
          <li>
            <a href="https://johancotrina.github.io/pages_destinos/">Destinos</a>
          </li>
          <li>
            <a href="https://johancotrina.github.io/pages_reservaciones/">Reservaciones</a>
          </li>
          <li>
          <a href="https://johancotrina.github.io/pages_reservaciones/">Contacto</a>
          </li>
          {/* <button className="btn">Pagos</button> */}
        </ul>
      </div>
      <div className={css.icons}>
        <i className="ri-facebook-circle-fill"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-instagram-line"></i>
      </div>
    </nav>
  );
}

export default NavBar;
