import { Fragment } from "react";
import css from './nosotros.module.css';

function PriceSection() {
  return (
    <section className={`${css.section__container} ${css.price__container}`} id="price">
      <p className={css.section__subheader}>DISFRUTA DE TU VIAJE CON</p>
      <h2 className={css.section__header}>
        Precios inigualables y calidad superior
      </h2>
      <p className={css.section__description}>
        Combinamos tarifas competitivas con opciones personalizadas para
        ofrecerte el mejor valor sin comprometer la calidad.
      </p>
      <div className={css.price__grid}>
        <div className={css.price__card}>
          <h4>PAQUETE BÁSICO</h4>
          <h3>
            <sup>S/</sup>250
          </h3>
          <p>Alojamiento en hotel de 3 estrellas</p>
          <p>Transporte compartido (minivan o bus)</p>
          <p>Tours guiados en grupo</p>
          <p>Brake and Suspension</p>
          <p>Asistencia telefónica 24/7</p>
          <p>Itinerarios estándar con actividades principales</p>
          <button className={css.btn}>Reservar</button>
        </div>
        <div className={css.price__card}>
          <div className={css.price__card__ribbon}>DESTACADO</div>
          <h4>PAQUETE PREMIUM</h4>
          <h3>
            <sup>S/</sup>850
          </h3>
          <p>Alojamiento en hoteles 5 estrellas</p>
          <p>Transporte privado de lujo (SUV o coche)</p>
          <p>Tours exclusivos con guías privados</p>
          <p>Experiencias gastronómicas y culturales</p>
          <p>Asistencia personalizada 24/7</p>
          <p>Itinerarios completamente personalizables</p>
          <button className={css.btn}>Reservar</button>
        </div>
        <div className={css.price__card}>
          <h4>PAQUETE ESTANDAR</h4>
          <h3>
            <sup>S/</sup>450
          </h3>
          <p>Alojamiento en hoteles de 4 estrellas</p>
          <p>Transporte privado (auto o van)</p>
          <p>Tours guiados con personalización</p>
          <p>Asistencia personalizada y flexible</p>
          <p>Air Conditioning</p>
          <p>Itinerarios con actividades adicionales y opciones de ocio</p>
          <button className={css.btn}>Reservar</button>
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
