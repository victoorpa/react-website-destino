import { Fragment } from "react";
import css from './nosotros.module.css';
import asesorDestino from "./resources/asesorDestino.jpg";

function BannerHeader() {
  return (
    <section className={css.banner__container}>
      <div className={css.banner__card}>
        <h4>
          Comprometidos con su satisfacción en cada viaje que planificamos.
        </h4>
      </div>
      <div className={css.banner__card}>
        <h4>
          Nos dedicamos a crear experiencias tan memorables como tú las
          imaginarías.
        </h4>
      </div>
      <div className={css.banner__image}>
        <img src={asesorDestino} alt="banner" />
      </div>
    </section>
  );
}

export default BannerHeader;
