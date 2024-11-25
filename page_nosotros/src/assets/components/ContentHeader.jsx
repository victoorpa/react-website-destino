import { Fragment } from "react";
import css from './nosotros.module.css';

function ContentHeader() {
  return (
    <div className={`${css.section__container} ${css.header__container}`} id="home">
      <div className={css.header__content}>
        <h1>Expertos creando viajes inolvidables</h1>
        <div className={css.header__btn}>
          {/* <button className="btn">Reservar</button> */}
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
